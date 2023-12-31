import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import TodoItem from "../interface/TodoItem"
export default combineReducers({
  todos,
  visibilityFilter
})
