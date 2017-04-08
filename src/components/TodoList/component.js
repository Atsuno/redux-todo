import React, { PropTypes } from 'react'
import TodoItem from '../TodoItem'
import './assets/style.css'

const TodoList = ({ todos, showTodo, searchTodo }) => (
  <ul className="ul-list">
    {
      todos.filter(todo => todo.text.includes(searchTodo.text))
        .filter(todo => (todo.finish && showTodo.finish) || (!todo.finish && showTodo.unfinish))
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
  showTodo: PropTypes.shape({
    finish: PropTypes.bool,
    unfinish: PropTypes.bool
  }),
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
  showTodo: PropTypes.shape({
    finish: false,
    unfinish: true
  }),
  searchTodo: PropTypes.shape({
    text: ''
  })
}
export default TodoList