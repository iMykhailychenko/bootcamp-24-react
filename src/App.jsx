import { Component } from 'react';

import usersJson from './assets/users.json';
import { Header, Layout } from './components/Layout';
// import { LoginForm } from './components/LoginForm';
import { UserFilters } from './components/UserFilters';
import { UsersList } from './components/Users';

export class App extends Component {
  state = {
    users: usersJson,
    filters: {
      isAvailable: true,
      skils: '',
      search: '',
    },
  };

  handleChangeSkils = event => {
    const { value } = event.target;
    this.setState(prevState => ({ filters: { ...prevState.filters, skils: value } }));
  };

  handleChangeAvailability = () => {
    this.setState(prevState => ({ filters: { ...prevState.filters, isAvailable: !prevState.filters.isAvailable } }));
  };

  handleChangeSearch = event => {
    this.setState(prevState => ({ filters: { ...prevState.filters, search: event.target.value } }));
  };

  handleResetSearch = () => {
    this.setState(prevState => ({ filters: { ...prevState.filters, search: '' } }));
  };

  handleDeleteUser = userId => {
    this.setState(prevState => {
      return { users: prevState.users.filter(user => user.id !== userId) };
    });
  };

  apllyFilters = () => {
    const { users, filters } = this.state;
    const { search } = filters;

    // asdff -> includes('df') -> true
    // asdff -> includes('') -> true
    // [{}, {}] -> []
    return users.filter(user => user.name.toLowerCase().includes(search.toLowerCase()));
  };

  render() {
    const { filters } = this.state;

    return (
      <Layout>
        <Header title="Hello world!" />

        <UserFilters
          filters={filters}
          onChangeSearch={this.handleChangeSearch}
          onResetSearch={this.handleResetSearch}
          onChangeAvailability={this.handleChangeAvailability}
          onChangeSkils={this.handleChangeSkils}
        />
        <UsersList users={this.apllyFilters() /* -> [...] */} onUserDelete={this.handleDeleteUser} />

        {/* <LoginForm /> */}
      </Layout>
    );
  }
}
