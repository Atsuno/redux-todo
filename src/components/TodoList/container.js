import { connect } from 'react-redux'
import TodoList from './component'

const mapStateToProps = state => ({
  todos: state.todos,
  showTodo: state.showTodo,
  searchTodo: state.searchTodo
})

export default connect(mapStateToProps)(TodoList)
