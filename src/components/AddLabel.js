import React from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import { FaPlus } from 'react-icons/fa';
import PropTypes from 'prop-types';

const AddLabel = ({ labelRef, data, handleChange, handleAddLabel }) => {
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

AddLabel.defaultProps = {
  data: {
    addLabel: '',
    labels: [],
  },
  labelRef: {},
  handleChange: () => {},
  handleAddLabel: () => {},
};

AddLabel.propTypes = {
  data: PropTypes.instanceOf(Object),
  labelRef: PropTypes.instanceOf(Object),
  handleChange: PropTypes.func,
  handleAddLabel: PropTypes.func,
};

export default AddLabel;
