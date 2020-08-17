import React from 'react';
import { Card, Button, ButtonGroup } from 'react-bootstrap';

const ViewNote = ({
  item,
  handleChange,
  handleEditNote,
  handleDeleteNote,
  handleToggleNote,
}) => {
  const { id, name, isComplete } = item;
  return (
    <Card className='my-3 shadow' bg={isComplete ? 'dark' : 'light'} text={isComplete ? 'light' : 'dark'}>
      <Card.Body>
        <div className='d-flex align-items-center justify-content-between'>
          <Card.Title className='m-0'>{isComplete ? <strike>{name}</strike> : name}</Card.Title>
          <ButtonGroup aria-label='Label buttons'>
            <Button variant='info' onClick={(e) => handleEditNote(e, id)}>
              Edit
            </Button>
            <Button variant='danger' onClick={(e) => handleDeleteNote(e, id)}>
              Delete
            </Button>
            <Button variant='secondary' onClick={(e) => handleToggleNote(e, id)}>
              {isComplete ? 'Mark Incomplete' : 'Mark Complete'}
            </Button>
          </ButtonGroup>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ViewNote;
