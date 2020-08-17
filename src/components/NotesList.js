import React, { useState } from 'react';
import AddNote from './AddNote';
import ViewNotes from './ViewNotes';

const NotesList = ({ id, notes, isCollapse, data, setData }) => {
  const [newNote, setNewNote] = useState('');
  const { labels } = data;
  const handleChange = (e) => {
    setNewNote(e.target.value);
  };
  const handleAddNote = (e) => {
    e.preventDefault();
    const value = e.target.elements[0].value.toLowerCase();
    if (value.trim() === '') {
      alert(`Please enter a note.`);
      setNewNote('');
      return;
    }
    if (
      notes.length !== 0 &&
      notes.map((i) => i.name.toLowerCase()).includes(value.toLowerCase())
    ) {
      alert(`This note already exists.`);
      setNewNote('');
      return;
    }
    notes.push({
      id: notes.length,
      name: e.target.elements[0].value.toLowerCase(),
      isComplete: false,
    });
    setNewNote('');
  };
  const handleEditNote = (e, noteId) => {
    const newName = prompt('Enter revised label name');
    if (newName === null) return;
    else {
      const currentItemIndex = notes.findIndex((i) => i.id === noteId);
      notes[currentItemIndex].name = newName;
      setData({ ...data, labels });
    }
  };
  const handleDeleteNote = (e, noteId) => {
    const currentItemIndex = notes.findIndex((i) => i.id === noteId);
    notes.splice(currentItemIndex, 1);
    setData({ ...data, labels });
  };
  const handleToggleNote = (e, noteId) => {
    const currentItemIndex = notes.findIndex((i) => i.id === noteId);
    notes[currentItemIndex].isComplete = !notes[currentItemIndex].isComplete;
    setData({ ...data, labels });
  };
  return (
    <div className={isCollapse ? 'd-block' : 'd-none'}>
      <ViewNotes
        notes={notes}
        handleChange={handleChange}
        handleEditNote={handleEditNote}
        handleDeleteNote={handleDeleteNote}
        handleToggleNote={handleToggleNote}
      />
      <AddNote
        isCollapse={isCollapse}
        newNote={newNote}
        handleChange={handleChange}
        handleAddNote={handleAddNote}
      />
    </div>
  );
};

export default NotesList;
