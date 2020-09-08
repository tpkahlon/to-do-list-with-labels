import { createContext } from 'react';

const LabelContext = createContext({
  data: [],
  labelRef: null,
  setData: () => {},
  handleAddLabel: () => {},
  handleEditLabel: () => {},
  handleDeleteLabel: () => {},
  handleCollapseLabel: () => {},
  handleChange: () => {},
});

export default LabelContext;
