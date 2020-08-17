import React from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

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
          <Button type='submit' variant='outline-secondary'>
            Add Note
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </form>
  );
};

export default AddNote;
