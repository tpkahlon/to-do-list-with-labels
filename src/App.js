import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AddLabel from './components/AddLabel';
import Footer from './components/Footer';
import ViewLabels from './components/ViewLabels';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const initialState = {
    addLabel: '',
    labels: [],
  };
  const [data, setData] = useState(initialState);
  const { labels } = data;
  const handleAddLabel = (e) => {
    e.preventDefault();
    const value = e.target.elements[0].value.toLowerCase();
    if (value.trim() === '') {
      alert(`Please enter a label.`);
      setData({ ...data, addLabel: '' });
      return;
    }
    if (
      labels.length !== 0 &&
      labels.map((i) => i.name.toLowerCase()).includes(value.toLowerCase())
    ) {
      alert(`This label already exists.`);
      setData({ ...data, addLabel: '' });
      return;
    }
    setData({
      ...data,
      labels: labels.concat({
        id: labels.length,
        name: e.target.elements[0].value.toLowerCase(),
        isCollapse: false,
        notes: [],
      }),
      addLabel: '',
    });
  };
  const handleEditLabel = (e, id) => {
    const newName = prompt('Enter revised label name');
    if (newName === null) return;
    else {
      const newLabels = [...labels];
      const currentItemIndex = newLabels.findIndex((i) => i.id === id);
      newLabels[currentItemIndex].name = newName;
      setData({ ...data, labels: newLabels });
    }
  };
  const handleDeleteLabel = (e, id) => {
    const newLabels = [...labels];
    const currentItemIndex = newLabels.findIndex((i) => i.id === id);
    newLabels.splice(currentItemIndex, 1);
    setData({ ...data, labels: newLabels });
  };
  const handleCollapseLabel = (e, id, isCollapse) => {
    const newLabels = [...labels];
    const currentItemIndex = newLabels.findIndex((i) => i.id === id);
    newLabels[currentItemIndex].isCollapse = !newLabels[currentItemIndex]
      .isCollapse;
    setData({ ...data, labels: newLabels });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  return (
    <Container className='mt-3'>
      <Row>
        <Col xs={12}>
          <AddLabel
            data={data}
            handleChange={handleChange}
            handleAddLabel={handleAddLabel}
          />
          <ViewLabels
            data={data}
            setData={setData}
            handleChange={handleChange}
            handleEditLabel={handleEditLabel}
            handleDeleteLabel={handleDeleteLabel}
            handleCollapseLabel={handleCollapseLabel}
          />
          <Footer />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
