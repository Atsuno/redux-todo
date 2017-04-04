import React, { PropTypes } from 'react'
import TodoItem from '../TodoItem'
import './assets/style.css'

const TodoList = ({ todos, filter }) => (
  <ul className="ul-list">
    {
        todos.filter(todo => (todo.finish && filter.finish) || (!todo.finish && filter.unfinish))
          .map(todo => <TodoItem key={todo.id} {...todo} />)
      }
  </ul>
  )
TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      finish: PropTypes.bool.isRequired
    })
  ) }.isRequired
export default TodoList