import React from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import { FaPlus } from 'react-icons/fa';

const AddNote = ({ newNote, handleChange, handleAddNote }) => {
  return (
    <form onSubmit={handleAddNote}>
      <InputGroup>
        <FormControl
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

export default AddNote;
