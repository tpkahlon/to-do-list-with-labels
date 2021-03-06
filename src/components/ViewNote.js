import React, { useContext } from 'react';
import { Card, Button, ButtonGroup } from 'react-bootstrap';
import { FaPencilAlt, FaTrash, FaExchangeAlt } from 'react-icons/fa';
import NoteContext from './NoteContext';
import PropTypes from 'prop-types';

const ViewNote = ({ item }) => {
  const { id, name, isComplete } = item;
  const { handleEditNote, handleDeleteNote, handleToggleNote } = useContext(
    NoteContext
  );
  return (
    <Card
      className='my-3 shadow'
      bg={isComplete ? 'dark' : 'light'}
      text={isComplete ? 'light' : 'dark'}
    >
      <Card.Body>
        <div className='d-flex align-items-center justify-content-between'>
          <Card.Title className='m-0 text-truncate mr-3'>
            {isComplete ? <strike>{name}</strike> : name}
          </Card.Title>
          <ButtonGroup aria-label='Label buttons'>
            <Button variant='info' onClick={(e) => handleEditNote(e, id)}>
              <div className='d-flex align-items-center'>
                <FaPencilAlt />
              </div>
            </Button>
            <Button variant='danger' onClick={(e) => handleDeleteNote(e, id)}>
              <div className='d-flex align-items-center'>
                <FaTrash />
              </div>
            </Button>
            <Button
              variant='secondary'
              onClick={(e) => handleToggleNote(e, id)}
            >
              <div className='d-flex align-items-center'>
                <FaExchangeAlt />
              </div>
            </Button>
          </ButtonGroup>
        </div>
      </Card.Body>
    </Card>
  );
};

ViewNote.defaultProps = {
  item: {
    id: 0,
    name: '',
    isCollapse: false,
    notes: [],
  },
};

ViewNote.propTypes = {
  item: PropTypes.instanceOf(Object),
};

export default ViewNote;
