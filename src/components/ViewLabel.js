import React from 'react';
import { Button, ButtonGroup, Badge, ListGroup } from 'react-bootstrap';
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
      <ListGroup.Item>
        <div className='d-flex align-items-center justify-content-between'>
          <Badge variant='secondary' className='text-uppercase'>{name}</Badge>
          <ButtonGroup aria-label='Label buttons'>
            <Button variant='info' onClick={(e) => handleEditLabel(e, id)}>
              Edit
            </Button>
            <Button variant='danger' onClick={(e) => handleDeleteLabel(e, id)}>
              Delete
            </Button>
            <Button
              variant='primary'
              onClick={(e) => handleCollapseLabel(e, id, isCollapse)}
            >
              Collapse
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

export default ViewLabel;
