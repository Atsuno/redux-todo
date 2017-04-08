import React, { PropTypes } from 'react'

const ShowTodo = ({ showItem }) => (
  <div>
    <button onClick={() => showItem(true, true)}>show all</button>
    <button onClick={() => showItem(false, true)}>show finish</button>
    <button onClick={() => showItem(true, false)}>show unfinish</button>
  </div>
  )
ShowTodo.propTypes = {
  showItem: PropTypes.func.isRequired
}
export default ShowTodo