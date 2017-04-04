import React, { PropTypes } from 'react'

const ShowTodo = ({ filterTodo }) => (
  <div>
    <button onClick={() => filterTodo(true, true)}>show all</button>
    <button onClick={() => filterTodo(false, true)}>show finish</button>
    <button onClick={() => filterTodo(true, false)}>show unfinish</button>
  </div>
  )
ShowTodo.propTypes = {
  filterTodo: PropTypes.func.isRequired
}
export default ShowTodo