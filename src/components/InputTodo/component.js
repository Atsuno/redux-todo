import React, { Component, PropTypes } from 'react'
import './assets/style.css'

class InputTodo extends Component {
  state = {
    inputText: ''
  }

  inpuChange = event => {
    this.setState({
      inputText: event.target.value
    })
  }

  eventEnter = event => {
    if (event.key === 'Enter' && event.target.value.length) {
      this.props.addInput(event.target.value)
      this.setState({
        inputText: ''
      })
    }
  }

  render() {
    return (
      <input type="text" placeholder="What would you to do?" onKeyPress={this.eventEnter} value={this.state.inputText} onChange={this.inpuChange} />
    )
  }
}
InputTodo.propTypes = {
  addInput: PropTypes.func.isRequired
}

export default InputTodo