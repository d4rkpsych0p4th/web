import React, { useState, useEffect } from 'react';
import './App.css';
import NoteList from './components/NoteList';
import NoteEditor from './components/NoteEditor';

function App() {
  const [notes, setNotes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Cargar las notas desde el almacenamiento local al inicio
    const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    setNotes(savedNotes);
  }, []);

  const addNote = (newNote) => {
    setNotes([...notes, newNote]);
  };

  const deleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  const handleEditNote = (editedNote) => {
    const updatedNotes = notes.map((note) =>
      note.id === editedNote.id ? editedNote : note
    );
    setNotes(updatedNotes);
  };

  useEffect(() => {
    // Guardar las notas en el almacenamiento local cada vez que cambien
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  return (
    <div className="container-fluid text-left">
      <div className="row">
        <div className="col">
          <h1 className="text-center">Aplicación de Notas</h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="input-group mb-2 mr-sm-2">
            <div className="input-group-prepend">
              <div className="input-group-text">Buscador</div>
            </div>
            <input
              type="text"
              className="form-control"
              id="search"
              placeholder="Buscar notas"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <NoteEditor addNote={addNote} />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <NoteList
            notes={notes}
            deleteNote={deleteNote}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleEditNote={handleEditNote}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
