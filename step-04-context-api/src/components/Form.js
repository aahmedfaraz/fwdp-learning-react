import React, { useState, useContext } from 'react';
import todoContext from '../context/todo/todoContext';

const Form = () => {
  const { addTask } = useContext(todoContext); 

  const [task, setTask] = useState({
    text: "",
  });

  const onChange = e => setTask({ text: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if(task.text === "") {
      alert("Please add description")
    } else {
      addTask(task.text);
      setTask({text: ""})
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={task.text} onChange={onChange} placeholder="Enter your task description" />
      <input type="submit" value="ADD TASK" />
    </form>
  )
}

export default Form