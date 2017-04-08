import React, { PropTypes } from 'react'
import TodoItem from '../TodoItem'
import './assets/style.css'

const TodoList = ({ todos, filter, searchTodo }) => (
  <ul className="ul-list">
    {
      todos.filter(todo => todo.text.includes(searchTodo.text))
        .filter(todo => (todo.finish && filter.finish) || (!todo.finish && filter.unfinish))
        .map(todo => <TodoItem key={todo.id} {...todo} />)
    }
  </ul>
)
TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string,
      finish: PropTypes.bool
    })
  ),
  filter: PropTypes.objectOf(
    PropTypes.bool.isRequired
  ).isRequired,
  searchTodo: PropTypes.shape({
    text: PropTypes.string
  })
}
TodoList.defaultProps = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: 1,
      text: 'text 1',
      finish: false
    })
  ),
  searchTodo: PropTypes.shape({
    text: ''
  })
}
export default TodoList