import { Component } from 'react';

import { FiPlus } from 'react-icons/fi';

import usersJson from '../../assets/users.json';
import { ConfettiContainer } from '../Confetti';
import { Modal } from '../Modal';

import { AvailabilityFilters } from './components/AvailabilityFilters';
import { NewUserForm } from './components/NewUserForm';
import { SearchInput } from './components/SearchInput';
import { SkillsFilters } from './components/SkillsFilters';
import { UsersList } from './components/UsersList';

const ALL_SKILLS_VALUE = 'all';
const USERS_LOCALSTORAGE_KEY = 'users-key';

export class Users extends Component {
  state = {
    users: [],
    isModalOpen: false,
    isAvailable: false,
    skills: ALL_SKILLS_VALUE,
    search: '',
  };

  componentDidMount() {
    const localData = localStorage.getItem(USERS_LOCALSTORAGE_KEY);

    this.setState({ users: localData ? JSON.parse(localData) : usersJson });
  }

  componentDidUpdate(_, prevState, snapshot) {
    if (snapshot) {
      // window.scrollTo({ top: snapshot, beneath: 'smooth' });
    }

    if (prevState.users.length !== this.state.users.length) {
      localStorage.setItem(USERS_LOCALSTORAGE_KEY, JSON.stringify(this.state.users));
    }
  }

  getSnapshotBeforeUpdate() {
    const snapshot = 100;

    return snapshot;
  }

  handleChangeSkills = event => {
    const { value } = event.target;
    this.setState({ skills: value });
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

  applyFilters = () => {
    const { users, search, skills, isAvailable } = this.state;

    let newUsers = users;

    if (search) {
      newUsers = newUsers.filter(user => user.name.toLowerCase().includes(search.toLowerCase()));
    }

    if (isAvailable) {
      newUsers = newUsers.filter(user => user.isOpenToWork);
    }

    if (skills !== ALL_SKILLS_VALUE) {
      newUsers = newUsers.filter(user => user.skills.includes(skills));
    }

    return newUsers;
  };

  render() {
    const { isAvailable, skills, search, isModalOpen } = this.state;

    return (
      <>
        <div className="d-flex align-items-center mb-5">
          <AvailabilityFilters value={isAvailable} onChangeAvailability={this.handleChangeAvailability} />
          <SkillsFilters value={skills} onChangeSkils={this.handleChangeSkills} />

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

        <UsersList users={this.applyFilters()} onUserDelete={this.handleDeleteUser} />

        <ConfettiContainer />
      </>
    );
  }
}
