import { UsersItem } from '../UsersItem';
import { UsersNotFound } from '../UsersNotFound';

export const UsersList = ({ onUserDelete, users }) => {
  if (!users.length) {
    return <UsersNotFound />;
  }

  return (
    <div className="mb-5">
      {users.map(user => (
        <UsersItem key={user.id} user={user} onUserDelete={onUserDelete} />
      ))}
    </div>
  );
};
