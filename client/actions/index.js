import { each } from 'lodash'

export const types = {}
each([
  'GET_TODOS',
  'ADD_TODO',
  'DELETE_TODO',
  'EDIT_TODO',
  'COMPLETE_TODO',
  'COMPLETE_ALL',
  'CLEAR_COMPLETED',
], type => Object.assign(types, {
  [type]: type,
  [`${type}_SUCCESS`]: `${type}_SUCCESS`,
  [`${type}_FAILED`]: `${type}_FAILED`,
}))

export const retrieveTodos = () => ({
  type: types.GET_TODOS,
  _query: `{
    getTodos {
      id
      completed
      text
    }
  }`,
})

export const addTodo = text => ({
  type: types.ADD_TODO,
  _query: `mutation {
    addTodo(text: ${JSON.stringify(text)}){
      id
      completed
      text
    }
  }`,
})

export const deleteTodo = id => ({
  type: types.DELETE_TODO,
  _query: `mutation {
    deleteTodo(id: ${id}) {
      id
      completed
      text
    }
  }`,
})

export const editTodo = (id, text) => ({
  type: types.EDIT_TODO, id, text,
  _query: `mutation {
    editTodo(id: ${id}, text: ${JSON.stringify(text)}) {
      id
      completed
      text
    }
  }`,
})

export const completeTodo = id => ({
  type: types.COMPLETE_TODO,
  _query: `mutation {
    completeTodo(id: ${id}) {
      id
      completed
      text
    }
  }`,
})

export const completeAll = () => ({
  type: types.COMPLETE_ALL,
  _query: `mutation {
    completeAll {
      id
      completed
      text
    }
  }`,
})

export const clearCompleted = () => ({
  type: types.CLEAR_COMPLETED,
  _query: `mutation {
    clearCompleted {
      id
      completed
      text
    }
  }`,
})
