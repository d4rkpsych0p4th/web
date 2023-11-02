import React, { useState, useRef } from 'react';

function NoteEditor({ addNote }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const titleInputRef = useRef(null);

  const handleAddNote = () => {
    if (title && content) {
      const newNote = {
        id: Date.now(),
        title,
        content,
      };
      addNote(newNote);
      setTitle('');
      setContent('');
      titleInputRef.current.focus();
    }
  };

  return (
    <div className="note-editor">
        <h2 className="text-center">Agregar Nota</h2>
      <div className="input-group mb-2 mr-sm-2">
        <div className="input-group-prepend">
          <label className="input-group-text" htmlFor="title">Titulo</label>
        </div>
        <input
          type="text"
          id="title"
          className="form-control"
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          ref={titleInputRef}
        />
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <textarea
              id="content"
              className="form-control w-100"
              placeholder="Contenido"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <button
              className="btn btn-primary"
              onClick={handleAddNote}
            >
              Guardar Nota
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NoteEditor;
