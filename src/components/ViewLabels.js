/* eslint-disable react/no-array-index-key */

import React, { useContext } from 'react';
import ViewLabel from './ViewLabel';
import LabelContext from './LabelContext';

const ViewLabels = () => {
  const { data } = useContext(LabelContext);
  const { labels } = data;
  if (labels.length === 0) return <div>Please add some labels.</div>;
  return (
    <>
      {labels.map((item, index) => (
        <ViewLabel key={index} item={item} />
      ))}
    </>
  );
};

export default ViewLabels;
