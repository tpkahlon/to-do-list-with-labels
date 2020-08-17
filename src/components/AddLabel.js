import React from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import { FaPlus } from "react-icons/fa";

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
          <Button type="submit" variant='outline-success'>
            <div className="d-flex align-items-center">
              <FaPlus />
            </div>
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </form>
  );
};

export default AddLabel;
