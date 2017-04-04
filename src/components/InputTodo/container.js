import { connect } from 'react-redux'
import { addInput } from '../../actions/todos'
import InputTodo from './component'

const mapDispatchToProps = { addInput }

export default connect(null, mapDispatchToProps)(InputTodo)