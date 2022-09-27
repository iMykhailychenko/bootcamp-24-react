import { FiPlus } from 'react-icons/fi';
import { useSelector, useDispatch } from 'react-redux';

import { Button } from '../../../components/Button';
import { ConfettiContainer } from '../../../components/Confetti';
import { Modal } from '../../../components/Modal';
import { NewUserForm } from '../../../components/Users/NewUserForm';
import { SearchInput } from '../../../components/Users/SearchInput';
import { UsersList } from '../../../components/Users/UsersList';
import {
  selectFilteredUsers,
  selectOpenToWorkTotal,
  selectUsersIsModalOpen,
} from '../../../redux/users/selector.users';
import { toggleModalAction } from '../../../redux/users/slice.users';

export const UsersPage = () => {
  const dispatch = useDispatch();
  const toggleModal = () => dispatch(toggleModalAction());

  const filteredUsers = useSelector(selectFilteredUsers);
  const openToWorkTotal = useSelector(selectOpenToWorkTotal);
  const isModalOpen = useSelector(selectUsersIsModalOpen);

  return (
    <>
      <Button className="btn-primary d-flex align-items-center btn-lg mb-5" onClick={toggleModal}>
        <span className="me-2">Add new user</span>
        <FiPlus />
      </Button>

      <p>Open to work total: {openToWorkTotal}</p>
      <SearchInput />

      {isModalOpen && (
        <Modal onModalClose={toggleModal}>
          <NewUserForm onModalClose={toggleModal} />
        </Modal>
      )}

      <UsersList users={filteredUsers} />

      <ConfettiContainer />
    </>
  );
};
