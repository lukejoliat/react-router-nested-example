import { Form, Link, useLoaderData } from 'react-router-dom';

export const NotesList = () => {
  const notes = useLoaderData();
  return (
    <p>
      <ul>
        {notes.map((n) => (
          <li>
            <Link to={`/note/${n.id}`}>{n.title}</Link>{' '}
            <Form action="/notes/delete" method="post">
              <input type="hidden" name="id" value={n.id} />
              <button type="submit">Delete</button>
            </Form>
          </li>
        ))}
      </ul>
    </p>
  );
};
