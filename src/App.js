/* eslint-disable no-alert */

import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AddLabel from './components/AddLabel';
import Footer from './components/Footer';
import ViewLabels from './components/ViewLabels';
import LabelContext from './components/LabelContext';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  let labels;
  if (JSON.parse(localStorage.getItem('labels')) === null) {
    labels = [];
  } else {
    labels = JSON.parse(localStorage.getItem('labels'));
  }

  const initialState = {
    addLabel: '',
    labels,
  };
  const [data, setData] = useState(initialState);

  const labelRef = useRef(null);
  useEffect(() => {
    labelRef.current.focus();
  }, []);

  const handleAddLabel = (e) => {
    e.preventDefault();
    const value = e.target.elements[0].value.toLowerCase();
    if (value.trim() === '') {
      alert('Please enter a label.');
      setData({ ...data, addLabel: '' });
      return;
    }
    if (
      labels.length !== 0 &&
      labels.map((i) => i.name.toLowerCase()).includes(value.toLowerCase())
    ) {
      alert('This label already exists.');
      setData({ ...data, addLabel: '' });
      return;
    }
    const newLabel = labels.concat({
      id: labels.length,
      name: e.target.elements[0].value.toLowerCase(),
      isCollapse: false,
      notes: [],
    });
    localStorage.setItem('labels', JSON.stringify(newLabel));
    setData({
      ...data,
      labels: newLabel,
      addLabel: '',
    });
  };
  const handleEditLabel = (e, id) => {
    const newName = prompt('Enter revised label name');
    if (newName === null || newName.trim() === '') {
      alert('Please enter a label.');
      return;
    }
    const newLabels = [...labels];
    const currentItemIndex = newLabels.findIndex((i) => i.id === id);
    newLabels[currentItemIndex].name = newName;
    localStorage.setItem('labels', JSON.stringify(newLabels));
    setData({ ...data, labels: newLabels });
    labelRef.current.focus();
  };
  const handleDeleteLabel = (e, id) => {
    const newLabels = [...labels];
    const currentItemIndex = newLabels.findIndex((i) => i.id === id);
    newLabels.splice(currentItemIndex, 1);
    localStorage.setItem('labels', JSON.stringify(newLabels));
    setData({ ...data, labels: newLabels });
    labelRef.current.focus();
  };
  const handleCollapseLabel = (e, id) => {
    const newLabels = [...labels];
    const currentItemIndex = newLabels.findIndex((i) => i.id === id);
    newLabels[currentItemIndex].isCollapse = !newLabels[currentItemIndex]
      .isCollapse;
    localStorage.setItem('labels', JSON.stringify(newLabels));
    setData({ ...data, labels: newLabels });

    if (!newLabels[currentItemIndex].isCollapse) labelRef.current.focus();
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  return (
    <LabelContext.Provider
      value={{
        data,
        labelRef,
        setData,
        handleAddLabel,
        handleEditLabel,
        handleDeleteLabel,
        handleCollapseLabel,
        handleChange,
      }}
    >
      <Container className='mt-3'>
        <Row>
          <Col xs={12}>
            <AddLabel />
            <ViewLabels />
            <Footer />
          </Col>
        </Row>
      </Container>
    </LabelContext.Provider>
  );
};

export default App;
