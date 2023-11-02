import React, { useState } from 'react';

function Note({ note, deleteNote, handleEditNote }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(note.content);

  const handleSaveEdit = () => {
    if (editedContent.trim() !== '') {
      const editedNote = { ...note, content: editedContent };
      handleEditNote(editedNote);
      setIsEditing(false);
    }
  };
  return (
    <div>
     <div className="card p-3">
      <h2>{note.title}</h2>
      {isEditing ? (
        <textarea
          value={editedContent}
          onChange={(e) => setEditedContent(e.target.value)}
        />
      ) : (
        <p onClick={() => setIsEditing(true)}>{note.content}</p>
      )}
      {isEditing && (
        <div>
        <button
          className="btn btn-primary btn-sm"
          onClick={handleSaveEdit}
        >
          Guardar
        </button></div>
      )}
      <div>
      <button
        className="btn btn-danger btn-sm"
        onClick={() => deleteNote(note.id)}
      >
        Eliminar
      </button></div>
    </div>
  </div>
);
}
export default Note;
