import React, { PropTypes } from 'react'

const SearchTodo = ({ searchItem }) => (
  <input type="text" placeholder="Search to do?" onChange={event => searchItem(event.target.value)} />
  )
SearchTodo.propTypes = {
  searchItem: PropTypes.func.isRequired
}
export default SearchTodo
