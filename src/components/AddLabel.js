import React, { useContext } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import { FaPlus } from 'react-icons/fa';
import LabelContext from './LabelContext';
import { isEqual } from 'lodash';

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

const areEqual = (prevProps, nextProps) => {
  if (!isEqual(prevProps, nextProps)) return true;
  else return false;
};

export default React.memo(AddLabel, areEqual);
