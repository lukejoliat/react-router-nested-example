import { redirect } from 'react-router-dom';
import { deleteNote } from '../../data/notes';

export async function deleteAction({ request }) {
  const formData = await request.formData();
  await deleteNote(formData.get('id'));
  return redirect('/notes');
}
