import usersJson from '../../assets/users.json';
import { UsersFilters } from '../UserFilters';

import { UsersItem } from './UsersItem';

export const UsersList = () => {
  return (
    <div className="mb-5">
      <UsersFilters />

      {usersJson.map(user => (
        <UsersItem key={user.id} user={user} />
      ))}
    </div>
  );
};
