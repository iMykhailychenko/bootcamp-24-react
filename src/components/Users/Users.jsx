import { Component } from 'react';

import { FiPlus } from 'react-icons/fi';

import usersJson from '../../assets/users.json';
import { ConfettiContainer } from '../Confetti/Confetti';
import { Modal } from '../Modal/Modal';

import { AvailabilityFilters } from './components/AvailabilityFilters';
import { NewUserForm } from './components/NewUserForm';
import { SearchInput } from './components/SearchInput';
import { SkilsFilters } from './components/SkilsFilters';
import { UsersList } from './components/UsersList';

const ALL_SKILS_VALUE = 'all';

export class Users extends Component {
  state = {
    users: usersJson,
    isModalOpen: false,
    isAvailable: false,
    skils: ALL_SKILS_VALUE,
    search: '',
  };

  handleChangeSkils = event => {
    const { value } = event.target;
    this.setState({ skils: value });
  };

  handleChangeAvailability = () => {
    this.setState(prevState => ({ isAvailable: !prevState.isAvailable }));
  };

  handleChangeSearch = event => {
    this.setState({ search: event.target.value });
  };

  handleResetSearch = () => {
    this.setState({ search: '' });
  };

  handleDeleteUser = userId => {
    this.setState(prevState => {
      return { users: prevState.users.filter(user => user.id !== userId) };
    });
  };

  handleCreateNewUser = user => {
    this.setState(prevState => ({ users: [{ ...user, id: Date.now() }, ...prevState.users], isModalOpen: false }));
  };

  toggleModal = () => {
    this.setState(prevState => ({ isModalOpen: !prevState.isModalOpen }));
  };

  apllyFilters = () => {
    const { users, search, skils, isAvailable } = this.state;

    let newUsers = users;

    if (search) {
      newUsers = newUsers.filter(user => user.name.toLowerCase().includes(search.toLowerCase()));
    }

    if (isAvailable) {
      newUsers = newUsers.filter(user => user.isOpenToWork);
    }

    if (skils !== ALL_SKILS_VALUE) {
      newUsers = newUsers.filter(user => user.skils.includes(skils));
    }

    return newUsers;
  };

  render() {
    const { isAvailable, skils, search, isModalOpen } = this.state;

    return (
      <>
        <div className="d-flex align-items-center mb-5">
          <AvailabilityFilters value={isAvailable} onChangeAvailability={this.handleChangeAvailability} />

          <SkilsFilters value={skils} onChangeSkils={this.handleChangeSkils} />

          <button type="button" className="btn btn-primary btn-lg ms-auto" onClick={this.toggleModal}>
            <FiPlus />
          </button>
        </div>

        <SearchInput value={search} onResetSearch={this.handleResetSearch} onChangeSearch={this.handleChangeSearch} />

        {isModalOpen && (
          <Modal onModalClose={this.toggleModal}>
            <NewUserForm onSubmit={this.handleCreateNewUser} onModalClose={this.toggleModal} />
          </Modal>
        )}

        <UsersList users={this.apllyFilters()} onUserDelete={this.handleDeleteUser} />

        <ConfettiContainer />
      </>
    );
  }
}
