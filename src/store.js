import { combineReducers } from 'redux'
import todos from './reducers/todos'
import filter from './reducers/filter'
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
  filter: {
    finish: true,
    unfinish: true
  },
  searchTodo: {
    text: ''
  }
}

const rootReducer = combineReducers({
  todos,
  filter,
  searchTodo
})

export default rootReducer