import { connect } from 'react-redux'
import { searchItem } from '../../actions/searchTodo'
import SearchTodo from './component'

const mapDispatchToProps = { searchItem }

export default connect(null, mapDispatchToProps)(SearchTodo)