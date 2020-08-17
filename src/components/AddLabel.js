import React, { useEffect, useRef } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import { FaPlus } from 'react-icons/fa';
import PropTypes from 'prop-types';

const AddLabel = ({ data, handleChange, handleAddLabel }) => {
  const { addLabel } = data;
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <form onSubmit={handleAddLabel}>
      <InputGroup className='mb-3'>
        <FormControl
          ref={inputRef}
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

AddLabel.defaultProps = {
  data: {
    addLabel: '',
    labels: [],
  },
  handleChange: () => {},
  handleAddLabel: () => {},
};

AddLabel.propTypes = {
  data: PropTypes.instanceOf(Object),
  handleChange: PropTypes.func,
  handleAddLabel: PropTypes.func,
};

export default AddLabel;
