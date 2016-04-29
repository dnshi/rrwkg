// export const ADD_TODO = 'ADD_TODO'
// export const DELETE_TODO = 'DELETE_TODO'
// export const EDIT_TODO = 'EDIT_TODO'
// export const COMPLETE_TODO = 'COMPLETE_TODO'
// export const COMPLETE_TODO_SUCCESS = 'COMPLETE_TODO_SUCCESS'
// export const COMPLETE_ALL = 'COMPLETE_ALL'
// export const CLEAR_COMPLETED = 'CLEAR_COMPLETED'
//
// export const GET_TODOS = 'GET_TODOS'
// export const GET_TODOS_SUCCESS = 'GET_TODOS_SUCCESS'

import { each } from 'lodash'

const actionTypes = {}
each([
  'GET_TODOS',
  'ADD_TODO',
  'DELETE_TODO',
  'EDIT_TODO',
  'COMPLETE_TODO',
  'COMPLETE_ALL',
  'CLEAR_COMPLETED',
], type => Object.assign(actionTypes, {
  [type]: type,
  [`${type}_SUCCESS`]: `${type}_SUCCESS`,
  [`${type}_FAILED`]: `${type}_FAILED`,
}))

module.exports = actionTypes
