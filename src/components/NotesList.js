import React, { useState } from 'react';
import AddNote from './AddNote';
import ViewNotes from './ViewNotes';

const NotesList = ({ id, notes, isCollapse, data, setData }) => {
  const [newNote, setNewNote] = useState('');
  let labels;
  if (JSON.parse(localStorage.getItem('labels')) === null) {
    labels = [];
  } else {
    labels = JSON.parse(localStorage.getItem('labels'));
  }
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
    const newNotes = [...notes];
    newNotes.push({
      id: newNotes.length,
      name: e.target.elements[0].value.toLowerCase(),
      isComplete: false,
    });
    const currentLabelIndex = labels.findIndex((i) => i.id === id);
    labels[currentLabelIndex].notes = newNotes;
    localStorage.setItem('labels', JSON.stringify(labels));
    setNewNote('');
    setData({ ...data, labels });
  };
  const handleEditNote = (e, noteId) => {
    const newName = prompt('Enter revised label name');
    if (newName === null) return;
    else {
      const newNotes = [...notes];
      const currentLabelIndex = labels.findIndex((i) => i.id === id);

      const currentItemIndex = newNotes.findIndex((i) => i.id === noteId);
      newNotes[currentItemIndex].name = newName;

      labels[currentLabelIndex].notes = newNotes;
      localStorage.setItem('labels', JSON.stringify(labels));
      setData({ ...data, labels });
    }
  };
  const handleDeleteNote = (e, noteId) => {
    const newNotes = [...notes];
    const currentLabelIndex = labels.findIndex((i) => i.id === id);

    const currentItemIndex = newNotes.findIndex((i) => i.id === noteId);
    newNotes.splice(currentItemIndex, 1);

    labels[currentLabelIndex].notes = newNotes;
    localStorage.setItem('labels', JSON.stringify(labels));
    setData({ ...data, labels });
  };
  const handleToggleNote = (e, noteId) => {
    const newNotes = [...notes];
    const currentLabelIndex = labels.findIndex((i) => i.id === id);

    const currentItemIndex = newNotes.findIndex((i) => i.id === noteId);
    newNotes[currentItemIndex].isComplete = !newNotes[currentItemIndex]
      .isComplete;

    labels[currentLabelIndex].notes = newNotes;
    localStorage.setItem('labels', JSON.stringify(labels));
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
