import React, { useContext } from 'react';
import { Button, ButtonGroup, Badge, ListGroup } from 'react-bootstrap';
import { FaPencilAlt, FaTrash, FaBars } from 'react-icons/fa';
import NotesList from './NotesList';
import LabelContext from './LabelContext';
import PropTypes from 'prop-types';

const ViewLabel = ({ item }) => {
  const { id, name, notes, isCollapse } = item;
  const {
    handleEditLabel,
    handleDeleteLabel,
    handleCollapseLabel,
  } = useContext(LabelContext);
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
        <NotesList id={id} notes={notes} isCollapse={isCollapse} />
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
};

ViewLabel.propTypes = {
  item: PropTypes.instanceOf(Object),
};

export default ViewLabel;
