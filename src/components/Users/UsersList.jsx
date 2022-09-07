import PropTypes from 'prop-types';

import { UsersItem } from './UsersItem';

export const UsersList = ({ users }) => {
  return users.reduce((acc, user) => {
    if (user.name.includes('a')) {
      acc.push(
        <div key={user.id}>
          <UsersItem name={user.name} email={user.email} phone={user.phone} />
        </div>,
      );
    }

    return acc;
  }, []);
};

UsersList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    }),
  ),
  children: PropTypes.node,
};
