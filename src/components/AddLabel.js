import React from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

const AddLabel = ({ data, handleChange, handleAddLabel }) => {
  const { addLabel } = data;
  return (
    <form onSubmit={handleAddLabel}>
      <InputGroup className='mb-3'>
        <FormControl
          placeholder='Add Label'
          aria-label='Add Label'
          aria-describedby='add-label'
          name='addLabel'
          value={addLabel}
          onChange={handleChange}
        />
        <InputGroup.Append>
          <Button type="submit" variant='outline-secondary'>Add Label</Button>
        </InputGroup.Append>
      </InputGroup>
    </form>
  );
};

export default AddLabel;
