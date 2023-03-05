import { useLoaderData, Link, Outlet } from 'react-router-dom';
import { getNotes } from './routes/notes/data/notes';

export async function loader() {
  return getNotes();
}

export default function Root() {
  const notes = useLoaderData();

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ padding: '0 2rem', borderRight: 'solid 1px #ccc' }}>
        <h1>Notes App!</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/notes">Notes</Link>
          </li>
        </ul>
      </div>

      <div style={{ flex: 1, padding: '0 2rem' }}>
        <Outlet />
      </div>
    </div>
  );
}
