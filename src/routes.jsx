import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './';
import {
  action as noteAction,
  loader as noteLoader,
} from './routes/notes/note';
import { notesRoutes } from './routes/notes/routes';
import { lazy, Suspense } from 'react';

const About = lazy(() => import('./routes/about'));
const Home = lazy(() => import('./routes/home'));
const Notes = lazy(() => import('./routes/notes'));
const Note = lazy(() => import('./routes/notes/note'));

let router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '',
        element: (
          <Suspense fallback="Loading...">
            <Home />
          </Suspense>
        ),
      },
      {
        path: 'about',
        element: (
          <Suspense fallback="Loading...">
            <About />
          </Suspense>
        ),
      },
      {
        path: 'notes',
        element: (
          <Suspense fallback="Loading...">
            <Notes />
          </Suspense>
        ),
        children: notesRoutes,
      },
      {
        path: 'note/:id',
        element: (
          <Suspense fallback="Loading...">
            <Note />
          </Suspense>
        ),
        loader: noteLoader,
        action: noteAction,
      },
    ],
  },
]);

if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose());
}

export default function Routes() {
  return <RouterProvider router={router} />;
}
