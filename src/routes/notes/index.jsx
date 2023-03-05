import { Link, Outlet } from 'react-router-dom';
import { Tabs } from '../../components/Tabs';

const tabs = [
  () => <Link to="">List </Link>,
  () => <Link to="description">Description </Link>,
  () => <Link to="new">New</Link>,
];

export const Notes = () => {
  return (
    <>
      <h1>Notes</h1>
      <Tabs tabs={tabs} />
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Notes;
