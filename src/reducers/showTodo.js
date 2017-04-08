import { initialStore } from '../store'
import TYPE from '../actions/types'

export default (showTodo = initialStore.showTodo, action) => {
  switch (action.type) {
    case TYPE.SHOW.TODO : {
      return {
        finish: action.payload.finish,
        unfinish: action.payload.unfinish
      }
    }
    default: {
      return showTodo
    }
  }
}