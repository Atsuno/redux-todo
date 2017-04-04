import { combineReducers } from 'redux'
import todos from './reducers/todos'
import filter from './reducers/filter'

export const initialStore = {
  todos: [],
  filter: {
    finish: true,
    unfinish: true
  }
}

const rootReducer = combineReducers({
  todos,
  filter
})

export default rootReducer