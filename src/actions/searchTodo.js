import TYPE from './types'

export const searchItem = text => ({
  type: TYPE.SEARCH.TODO,
  payload: { text }
})