import React from 'react';
import { useContext } from 'react';
import todoContext from '../context/todo/todoContext';

const TodoList = () => {
  const { todos } = useContext(todoContext);

  return (
    <ul>
      {
        todos.map((task, index) => <li key={index}>{task}</li>)
      }
    </ul>
  )
}

export default TodoList