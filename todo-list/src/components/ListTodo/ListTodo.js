import React from 'react';
import Todo from './Todo';

function ListTodo({ tasks, completeTask, deleteTask }) {
  return (
    <div className="list-todo">
     
      {tasks.map((task, index) => (
        <Todo
          key={index}
          text={task.text}
          completed={task.completed}
          completeTask={() => completeTask(index)}
          deleteTask={() => deleteTask(index)}
        />
      ))}
    </div>
  );
}

export default ListTodo;

