import * as types from 'constants/ActionTypes'

export const addTodo = text => ({
  type: types.ADD_TODO, text,
})

export const deleteTodo = id => ({
  type: types.DELETE_TODO, id,
})

export const editTodo = (id, text) => ({
  type: types.EDIT_TODO, id, text,
  _query: `mutation {
    editTodo(id: ${id}, text: ${JSON.stringify(text)}) {
      id
      text
    }
  }`,
})

export const completeTodo = id => ({
  type: types.COMPLETE_TODO,
  id,
  _query: `mutation {
    completeTodo(id: ${id}) {
      id
      completed
    }
  }`,
})

export const completeAll = () => ({
  type: types.COMPLETE_ALL,
})

export const clearCompleted = () => ({
  type: types.CLEAR_COMPLETED,
})

export const retrieveTodos = _query => ({
  type: types.GET_TODOS, _query,
})
