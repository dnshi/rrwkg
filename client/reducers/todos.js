import { types } from 'actions'

const {
  GET_TODOS_SUCCESS,
  ADD_TODO_SUCCESS,
  DELETE_TODO_SUCCESS,
  EDIT_TODO_SUCCESS,
  COMPLETE_TODO_SUCCESS,
  COMPLETE_ALL_SUCCESS,
  CLEAR_COMPLETED_SUCCESS,
} = types

export default function todos(state = [], { type, data }) {
  switch (type) {
    case GET_TODOS_SUCCESS:
      return data.getTodos

    case ADD_TODO_SUCCESS:
      return data.addTodo

    case DELETE_TODO_SUCCESS:
      return data.deleteTodo

    case EDIT_TODO_SUCCESS:
      return data.editTodo

    case COMPLETE_TODO_SUCCESS:
      return data.completeTodo

    case COMPLETE_ALL_SUCCESS:
      return data.completeAll

    case CLEAR_COMPLETED_SUCCESS:
      return data.clearCompleted

    default:
      return state
  }
}
