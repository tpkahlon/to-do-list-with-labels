/* eslint-disable react/no-array-index-key */

import React from 'react';
import PropTypes from 'prop-types';
import ViewNote from './ViewNote';

const ViewNotes = ({
  notes,
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
          handleEditNote={handleEditNote}
          handleDeleteNote={handleDeleteNote}
          handleToggleNote={handleToggleNote}
        />
      ))}
    </>
  );
};

ViewNotes.defaultProps = {
  notes: [],
  handleEditNote: () => {},
  handleDeleteNote: () => {},
  handleToggleNote: () => {},
};

ViewNotes.propTypes = {
  notes: PropTypes.instanceOf(Array),
  handleEditNote: PropTypes.func,
  handleDeleteNote: PropTypes.func,
  handleToggleNote: PropTypes.func,
};

export default ViewNotes;
