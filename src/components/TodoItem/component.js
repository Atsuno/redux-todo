import React, { PropTypes } from 'react'
import './assets/style.css'

const TodoItem = ({ id, text, finish, clickDelete, toggleTodoItem }) => (
  <li>
    <span className={finish ? 'finish' : 'unfinish'} onClick={() => toggleTodoItem(id)}>{text}</span>
    <button className="button-item" onClick={() => clickDelete(id)}>x</button>
  </li>
  )
TodoItem.propTypes = {
  id: PropTypes.number,
  text: PropTypes.string,
  finish: PropTypes.bool,
  clickDelete: PropTypes.func.isRequired,
  toggleTodoItem: PropTypes.func.isRequired
}
TodoItem.defaultProps = {
  id: 1,
  text: 'text 1',
  finish: true
}
export default TodoItem