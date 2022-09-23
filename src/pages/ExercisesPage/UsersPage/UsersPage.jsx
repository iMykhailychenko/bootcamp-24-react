import { useMemo, useState } from 'react';

import { FiPlus } from 'react-icons/fi';
import { useSelector, useDispatch } from 'react-redux';

import { ConfettiContainer } from '../../../components/Confetti';
import { Modal } from '../../../components/Modal';
import { AvailabilityFilters } from '../../../components/Users/AvailabilityFilters';
import { NewUserForm } from '../../../components/Users/NewUserForm';
import { SearchInput } from '../../../components/Users/SearchInput';
import { SkillsFilters } from '../../../components/Users/SkillsFilters';
import { UsersList } from '../../../components/Users/UsersList';
import { deleteUserAction, createNewUserAction, toggleModalAction } from '../../../redux/users/slice.users';

const ALL_SKILLS_VALUE = 'all';

export const UsersPage = () => {
  const dispatch = useDispatch();

  const { isModalOpen, data: users } = useSelector(state => state.users);

  const toggleModal = () => dispatch(toggleModalAction());

  const handleDeleteUser = userId => dispatch(deleteUserAction(userId) /* { type: DELTE_USER, payload: userId } */);
  const handleCreateNewUser = user => dispatch(createNewUserAction(user));

  const [isAvailable, setIsAvailable] = useState(false);
  const handleChangeAvailability = () => setIsAvailable(prev => !prev);

  const [skills, setSkills] = useState(ALL_SKILLS_VALUE);
  const handleChangeSkills = event => setSkills(event.target.value);

  const [search, setSearch] = useState('');
  const handleResetSearch = () => setSearch('');
  const handleChangeSearch = event => setSearch(event.target.value);

  const filteredUsers = useMemo(() => {
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
  }, [isAvailable, search, skills, users]);

  return (
    <>
      <div className="d-flex align-items-center mb-5">
        <AvailabilityFilters value={isAvailable} onChangeAvailability={handleChangeAvailability} />
        <SkillsFilters value={skills} onChangeSkills={handleChangeSkills} />

        <button type="button" className="btn btn-primary btn-lg ms-auto" onClick={toggleModal}>
          <FiPlus />
        </button>
      </div>

      <SearchInput value={search} onResetSearch={handleResetSearch} onChangeSearch={handleChangeSearch} />

      {isModalOpen && (
        <Modal onModalClose={toggleModal}>
          <NewUserForm onSubmit={handleCreateNewUser} onModalClose={toggleModal} />
        </Modal>
      )}

      <UsersList users={filteredUsers} onUserDelete={handleDeleteUser} />

      <ConfettiContainer />
    </>
  );
};
