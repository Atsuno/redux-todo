import { connect } from 'react-redux'
import { filterTodo } from '../../actions/filter'
import ShowTodo from './component'

const mapDispatchToProps = { filterTodo }

export default connect(null, mapDispatchToProps)(ShowTodo)