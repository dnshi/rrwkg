import test from 'ava'
import { isFunction } from 'lodash'
import graphqlMiddleware from './graphql'

const nextHandler = graphqlMiddleware()
const actionHandler = nextHandler()

test('GraphQL middleware must return a function to handle next', t => {
  t.true(isFunction(nextHandler))
  t.is(nextHandler.length, 1)
})

test('GraphQL middleware must return a function to handle dispatch', t => {
  t.true(isFunction(actionHandler))
  t.is(actionHandler.length, 1)
})

test.todo('GraphQL must fetch data and handle dispatch')

//
// TODO: Add fetch mock
//
// test('GraphQL must return a function to handle dispatch', t => {
//   const action = { type: 'GRAPHQL_TEST', _query: '{}' }
//   const dispatchHandler = graphql(action)
//   const dispatch = (result) => t.is(result.type, 'GRAPHQL_TEST')
//   dispatchHandler(dispatch)
//   t.true(isFunction(dispatchHandler))
//   t.is(dispatchHandler.length, 1)
// })
