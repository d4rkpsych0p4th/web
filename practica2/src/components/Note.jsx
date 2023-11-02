import React from 'react';

function Note({ note, deleteNote }) {
  return (
    <li>
      <div>
        <h2>{note.title}</h2>
        <p>{note.content}</p>
        <button
          className="btn btn-danger" // Agrega la clase "btn btn-danger" para el color rojo
          onClick={() => deleteNote(note.id)}
        >
          Eliminar
        </button>
      </div>
    </li>
  );
}

export default Note;
