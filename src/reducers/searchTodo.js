import { initialStore } from '../store'
import TYPE from '../actions/types'

export default (searchTodo = initialStore.searchTodo, action) => {
  switch (action.type) {
    case TYPE.SEARCH.TODO : {
      return {
        text: action.payload.text
      }
    }
    default: {
      return searchTodo
    }
  }
}