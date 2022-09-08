import { Component } from 'react';

import usersJson from '../../assets/users.json';

import { UsersItem } from './UsersItem';

export class UsersList extends Component {
  state = {
    users: usersJson,
  };

  handleDeleteUser = userId => {
    this.setState(prevState => {
      return { users: prevState.users.filter(user => user.id !== userId) };
    });
  };

  render() {
    const { users } = this.state;

    return (
      <div className="mb-5">
        {users.map(user => (
          <UsersItem key={user.id} user={user} onUserDelete={this.handleDeleteUser} />
        ))}
      </div>
    );
  }
}
