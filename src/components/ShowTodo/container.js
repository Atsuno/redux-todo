import { connect } from 'react-redux'
import { showItem } from '../../actions/showTodo'
import ShowTodo from './component'

const mapDispatchToProps = { showItem }

export default connect(null, mapDispatchToProps)(ShowTodo)