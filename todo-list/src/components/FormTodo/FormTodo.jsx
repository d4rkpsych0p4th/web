import React, { useState } from 'react';

function FormTodo({ addTask }) {
  const [task, setTask] = useState('');

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const handleAddTask = () => {
    if (task.trim() !== '') {
      addTask(task);
      setTask('');
    }
  };

  return (
    <div className="form-todo">
      <input
        type="text"
        placeholder="Añadir tarea"
        value={task}
        onChange={handleInputChange}
      />
      <button onClick={handleAddTask}>Añadir</button>
    </div>
  );
}

export default FormTodo;
