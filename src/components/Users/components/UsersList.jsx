import { Component } from 'react';

import NotFound from '../../NotFound';

import { UsersItem } from './UsersItem';

export class UsersList extends Component {
  render() {
    const { onUserDelete, users } = this.props;

    if (!users.length) {
      return <NotFound />;
    }

    return (
      <div className="mb-5">
        {users.map(user => (
          <UsersItem key={user.id} user={user} onUserDelete={onUserDelete} />
        ))}
      </div>
    );
  }
}
