import React from 'react'
import './App.css';

// import components
import Form from './components/Form';
import TodoList from './components/TodoList';

// import state
import TodoState from './context/todo/TodoState';

const App = () => {
  return (
    <TodoState>
      <h1>Todo App</h1>
      <Form />
      <TodoList />
    </TodoState>
  )
}

export default App