import TYPE from './types'

export const addInput = text => ({
  type: TYPE.TODOS.INCREASE,
  payload: { text }
})

export const clickDelete = id => ({
  type: TYPE.TODOS.REMOVE,
  payload: { id }
})

export const toggleTodoItem = id => ({
  type: TYPE.TODOS.TOGGLE,
  payload: { id }
})