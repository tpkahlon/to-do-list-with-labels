/* eslint-disable react/no-array-index-key */

import React, { useContext } from 'react';
import ViewNote from './ViewNote';
import NoteContext from './NoteContext';

const ViewNotes = () => {
  const { notes } = useContext(NoteContext);
  if (notes.length === 0) return <p className='my-3'>Please add some Notes.</p>;
  return (
    <>
      {notes.map((item, index) => (
        <ViewNote key={index} item={item} />
      ))}
    </>
  );
};

export default ViewNotes;
