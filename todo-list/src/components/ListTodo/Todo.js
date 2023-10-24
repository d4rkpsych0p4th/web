import React from 'react';

function Todo({ text, completed, completeTask, deleteTask }) {
  return (
    <div className="todo-item">
      <span
        style={{
          textDecoration: completed ? 'line-through' : 'none',
        }}
      >
        {text}
      </span>
      <button onClick={completeTask}>Completar</button>
      <button onClick={deleteTask}>X</button>
    </div>
  );
}

export default Todo;
