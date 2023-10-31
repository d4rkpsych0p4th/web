import React, { useState } from 'react';
import './App.css';
import Logo from './components/Logo/Logo';
import FormTodo from './components/FormTodo/FormTodo';
import ListTodo from './components/ListTodo/ListTodo';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    const newTask = { text, completed: false };
    setTasks([...tasks, newTask]);
  };

  const completeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = true;
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
    <Logo />
  <div className="list-todo">
     <h2>Mis Tareas</h2>
    <FormTodo addTask={addTask} />
    <ListTodo tasks={tasks} completeTask={completeTask} deleteTask={deleteTask} />
  </div>
</div>
  );
}

export default App;





