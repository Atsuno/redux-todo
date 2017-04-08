import TYPE from './types'

export const showItem = (finish, unfinish) => ({
  type: TYPE.SHOW.TODO,
  payload: { finish, unfinish }
})