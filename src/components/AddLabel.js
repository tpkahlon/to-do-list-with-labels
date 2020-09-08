import React, { useContext } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import { FaPlus } from 'react-icons/fa';
import LabelContext from './LabelContext';

const AddLabel = () => {
  const { data, labelRef, handleAddLabel, handleChange } = useContext(
    LabelContext
  );
  const { addLabel } = data;
  return (
    <form onSubmit={handleAddLabel}>
      <InputGroup className='mb-3'>
        <FormControl
          ref={labelRef}
          placeholder='Add Label'
          aria-label='Add Label'
          aria-describedby='add-label'
          name='addLabel'
          value={addLabel}
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

export default AddLabel;
