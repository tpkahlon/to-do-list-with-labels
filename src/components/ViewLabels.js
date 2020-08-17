/* eslint-disable react/no-array-index-key */

import React from 'react';
import PropTypes from 'prop-types';
import ViewLabel from './ViewLabel';

const ViewLabels = ({
  data,
  setData,
  handleChange,
  handleEditLabel,
  handleDeleteLabel,
  handleCollapseLabel,
}) => {
  const { labels } = data;
  if (labels.length === 0) return <div>Please add some labels.</div>;
  return (
    <>
      {labels.map((item, index) => (
        <ViewLabel
          key={index}
          item={item}
          data={data}
          setData={setData}
          handleChange={handleChange}
          handleEditLabel={handleEditLabel}
          handleDeleteLabel={handleDeleteLabel}
          handleCollapseLabel={handleCollapseLabel}
        />
      ))}
    </>
  );
};

ViewLabels.defaultProps = {
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

ViewLabels.propTypes = {
  data: PropTypes.instanceOf(Object),
  setData: PropTypes.func,
  handleChange: PropTypes.func,
  handleEditLabel: PropTypes.func,
  handleDeleteLabel: PropTypes.func,
  handleCollapseLabel: PropTypes.func,
};

export default ViewLabels;
