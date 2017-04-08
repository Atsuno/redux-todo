import { combineReducers } from 'redux'
import todos from './reducers/todos'
import showTodo from './reducers/showTodo'
import searchTodo from './reducers/searchTodo'

export const initialStore = {
  todos: [
    {
      id: 1,
      text: 'text 1',
      finish: false
    },
    {
      id: 2,
      text: 'adsfg',
      finish: true
    }
  ],
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