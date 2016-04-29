import {
  GET_TODOS,
  GET_TODOS_SUCCESS,
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  EDIT_TODO_SUCCESS,
  COMPLETE_TODO,
  COMPLETE_TODO_SUCCESS,
  COMPLETE_ALL,
  CLEAR_COMPLETED,
} from 'constants/ActionTypes'
import { omit, map, filter, every } from 'lodash'

export default function todos(state = [], action) {
  switch (action.type) {
    case GET_TODOS:
      return state

    case GET_TODOS_SUCCESS:
      return action.data.todos

    case ADD_TODO:
      return [
        {
          id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
          completed: false,
          text: action.text,
          _loading: false,
        },
        ...state,
      ]

    case DELETE_TODO:
      return filter(state, todo => todo.id !== action.id)

    case EDIT_TODO:
      return state

    case EDIT_TODO_SUCCESS: {
      const { id, text } = action.data.editTodo
      return map(state, todo => (
        todo.id === id
        ? { ...todo, text }
        : todo
      ))
    }

    case COMPLETE_TODO:
      return map(state, todo => (
        todo.id === action.id
        ? { ...todo, _loading: true }
        : todo
      ))

    case COMPLETE_TODO_SUCCESS: {
      const { id, completed } = action.data.completeTodo
      return map(state, todo => (
        todo.id === id
        ? { ...omit(todo, '_loading'), completed }
        : todo
      ))
    }

    case COMPLETE_ALL: {
      const areAllMarked = every(state, todo => todo.completed)
      return map(state, todo => ({
        ...todo,
        completed: !areAllMarked,
      }))
    }

    case CLEAR_COMPLETED:
      return filter(state, todo => todo.completed === false)

    default:
      return state
  }
}
