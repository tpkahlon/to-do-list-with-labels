import { createContext } from 'react';

const NoteContext = createContext({
  notes: [],
  newNote: '',
  noteRef: null,
  isCollapse: false,
  handleChange: () => {},
  handleAddNote: () => {},
  handleEditNote: () => {},
  handleDeleteNote: () => {},
  handleToggleNote: () => {},
});

export default NoteContext;
