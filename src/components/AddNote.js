import React, { useEffect, useRef } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import { FaPlus } from 'react-icons/fa';

const AddNote = ({ isCollapse, newNote, handleChange, handleAddNote }) => {
  const inputRef = useRef(null);
  useEffect(() => {
    if (isCollapse) {
      inputRef.current.focus();
    }
  }, [isCollapse]);
  return (
    <form onSubmit={handleAddNote}>
      <InputGroup>
        <FormControl
          ref={inputRef}
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
