import { createNote, getNote, getNotes } from './data/notes';
import Note, { loader, action as noteAction } from './note';
import { deleteAction } from './routes/delete';
import { Description } from './routes/description';
import { NotesList } from './routes/list';
import NewNote, { action } from './routes/new';

export const notesRoutes = [
  {
    path: '',
    loader: getNotes,
    element: <NotesList />,
  },
  {
    path: 'new',
    action: action,
    element: <NewNote />,
  },
  {
    path: 'delete',
    action: deleteAction,
  },
  {
    path: 'description',
    element: <Description />,
  },
  // {
  //   path: ':id',
  //   loader: loader,
  //   action: noteAction,
  //   element: <Note />,
  // },
];
