import React from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import { FaPlus } from 'react-icons/fa';
import PropTypes from 'prop-types';

const AddNote = ({
  noteRef,
  isCollapse,
  newNote,
  handleChange,
  handleAddNote,
}) => {
  return (
    <form onSubmit={handleAddNote}>
      <InputGroup>
        <FormControl
          ref={noteRef}
          placeholder='Add Note'
          aria-label='Add Note'
          aria-describedby='add-note'
          value={newNote}
          onChange={handleChange}
        />
        <InputGroup.Append>
          <Button type='submit' variant='outline-success'>
            <div className='d-flex align-items-center'>
              <FaPlus />
            </div>
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </form>
  );
};

AddNote.defaultProps = {
  noteRef: {},
  isCollapse: false,
  newNote: '',
  handleChange: () => {},
  handleAddNote: () => {},
};

AddNote.propTypes = {
  noteRef: PropTypes.instanceOf(Object),
  isCollapse: PropTypes.bool,
  newNote: PropTypes.string,
  handleChange: PropTypes.func,
  handleAddNote: PropTypes.func,
};

export default AddNote;
