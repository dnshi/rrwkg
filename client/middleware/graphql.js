import { isObject, has } from 'lodash'

const endpoint = '/graphql'
const opts = {
  method: 'post',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
}

export const graphql = ({ type, _query: query, ...props }) => async dispatch => {
  dispatch({ type, ...props })
  const res = await fetch(endpoint, { ...opts, body: JSON.stringify({ query }) })
  const { data, errors } = await res.json()

  dispatch(
    res.ok
      ? { type: `${type}_SUCCESS`, data }
      : { type: `${type}_FAILED`, errors, msg: res.statusText }
  )
}

export default function graphqlMiddleware() {
  return next => action => next(
    isObject(action) && has(action, '_query')
      ? graphql(action)
      : action
  )
}
