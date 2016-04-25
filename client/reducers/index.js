import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import todos from './todos'
import users from './users'

const rootReducer = combineReducers({ todos, users, routing })

export default rootReducer
