import React from 'react';
import { Button, ButtonGroup, Badge, ListGroup } from 'react-bootstrap';
import { FaPencilAlt, FaTrash, FaBars } from 'react-icons/fa';
import PropTypes from 'prop-types';
import NotesList from './NotesList';

const ViewLabel = ({
  item,
  data,
  setData,
  handleChange,
  handleEditLabel,
  handleDeleteLabel,
  handleCollapseLabel,
}) => {
  const { id, name, notes, isCollapse } = item;
  return (
    <ListGroup className='mb-3 shadow-lg'>
      <ListGroup.Item className='p-3'>
        <div className='d-flex align-items-center justify-content-between'>
          <Badge
            variant='secondary'
            className='text-uppercase text-truncate mr-3 display-1'
          >
            {name}
          </Badge>
          <ButtonGroup aria-label='Label buttons'>
            <Button variant='info' onClick={(e) => handleEditLabel(e, id)}>
              <div className='d-flex align-items-center'>
                <FaPencilAlt />
              </div>
            </Button>
            <Button variant='danger' onClick={(e) => handleDeleteLabel(e, id)}>
              <div className='d-flex align-items-center'>
                <FaTrash />
              </div>
            </Button>
            <Button
              variant='primary'
              onClick={(e) => handleCollapseLabel(e, id, isCollapse)}
            >
              <div className='d-flex align-items-center'>
                <FaBars />
              </div>
            </Button>
          </ButtonGroup>
        </div>
        <NotesList
          notes={notes}
          data={data}
          id={id}
          setData={setData}
          isCollapse={isCollapse}
          handleChange={handleChange}
        />
      </ListGroup.Item>
    </ListGroup>
  );
};

ViewLabel.defaultProps = {
  item: {
    id: 0,
    name: '',
    isCollapse: false,
    notes: [],
  },
  data: {
    addLabel: '',
    labels: [],
  },
  setData: () => {},
  handleChange: () => {},
  handleEditLabel: () => {},
  handleDeleteLabel: () => {},
  handleCollapseLabel: () => {},
};

ViewLabel.propTypes = {
  item: PropTypes.instanceOf(Object),
  data: PropTypes.instanceOf(Object),
  setData: PropTypes.func,
  handleChange: PropTypes.func,
  handleEditLabel: PropTypes.func,
  handleDeleteLabel: PropTypes.func,
  handleCollapseLabel: PropTypes.func,
};

export default ViewLabel;
