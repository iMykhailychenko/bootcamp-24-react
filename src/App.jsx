import usersJson from './assets/users.json';
import { Link, UsersList } from './components';

export const App = () => {
  return (
    <>
      <Link primary title="To home page">
        My link
      </Link>
      <br />
      <Link secondary href="/product" title="To home page">
        My link
      </Link>

      <UsersList users={usersJson} />
      {/* <UsersList users={usersJson}>
        <Link title="To home page">My link</Link>
      </UsersList> */}
    </>
  );
};
