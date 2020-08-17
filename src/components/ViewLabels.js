import React from 'react';
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

export default ViewLabels;
