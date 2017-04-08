import { combineReducers } from 'redux'
import todos from './reducers/todos'
import showTodo from './reducers/showTodo'
import searchTodo from './reducers/searchTodo'

export const initialStore = {
  todos: [],
  showTodo: {
    finish: true,
    unfinish: true
  },
  searchTodo: {
    text: ''
  }
}

const rootReducer = combineReducers({
  todos,
  showTodo,
  searchTodo
})

export default rootReducer