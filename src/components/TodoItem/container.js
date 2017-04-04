import { connect } from 'react-redux'
import TodoList from './component'
import { clickDelete, toggleTodoItem } from '../../actions/todos'

const mapStateToProps = state => ({ ...state })
const mapDispatchToProps = { clickDelete, toggleTodoItem }

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)