import React from 'react'
import logo from './assets/logo.svg'
import './assets/style.css'
import InputTodo from '../InputTodo'
import TodoList from '../TodoList'
import ShowTodo from '../ShowTodo'
import SearchTodo from '../SearchTodo'

const App = () => (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to Redux ToDO</h2>
    </div>
    <div className="App-intro">
      vCode Dev-Tools<br /><br />
      <InputTodo />
      <SearchTodo />
      <ShowTodo />
      <TodoList />
    </div>
  </div>
)

export default App
