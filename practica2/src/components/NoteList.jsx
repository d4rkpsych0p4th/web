import React from 'react';
import Note from './Note';

function NoteList({ notes, deleteNote, searchTerm, setSearchTerm }) {
  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <ul>
        {filteredNotes.map((note) => (
          <Note key={note.id} note={note} deleteNote={deleteNote} />
        ))}
      </ul>
    </div>
  );
}

export default NoteList;
