import React from 'react';
import ViewNote from './ViewNote';

const ViewNotes = ({
  notes,
  handleChange,
  handleEditNote,
  handleDeleteNote,
  handleToggleNote,
}) => {
  if (notes.length === 0) return <p className='my-3'>Please add some Notes.</p>;
  return (
    <>
      {notes.map((item, index) => (
        <ViewNote
          key={index}
          item={item}
          handleChange={handleChange}
          handleEditNote={handleEditNote}
          handleDeleteNote={handleDeleteNote}
          handleToggleNote={handleToggleNote}
        />
      ))}
    </>
  );
};

export default ViewNotes;
