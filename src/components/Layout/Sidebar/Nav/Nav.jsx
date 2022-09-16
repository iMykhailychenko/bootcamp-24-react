import { useState } from 'react';

import { useAuth } from '../../../../context/auth.context';
import { Button } from '../../../Button';
import { CancelRequest } from '../../../CancelRequest';
import { Modal } from '../../../Modal';
import { Timer } from '../../../Timer';

export const Nav = () => {
  const { logout } = useAuth();

  const [isTimerOpen, setIsTimerOpen] = useState(false);
  const toggleTimer = () => setIsTimerOpen(prev => !prev);

  const [isRequestModalOpen, setIsRequestModalOpen] = useState(false);
  const toggleRequestModal = () => setIsRequestModalOpen(prev => !prev);

  return (
    <div className="d-flex flex-column justify-content-between h-100">
      <div className="d-flex flex-column justify-content-between">
        <h2 className="h3 mb-4">Welcome back!</h2>
        <Button style={{ textAlign: 'left', marginLeft: '-10px' }} className="btn-light" disabled>
          Home page
        </Button>
        <Button style={{ textAlign: 'left', marginLeft: '-10px' }} className="btn-light" disabled>
          Create new post
        </Button>
        <Button style={{ textAlign: 'left', marginLeft: '-10px' }} className="btn-light" onClick={toggleTimer}>
          Open timer
        </Button>
        <Button style={{ textAlign: 'left', marginLeft: '-10px' }} className="btn-light" onClick={toggleRequestModal}>
          CancelRequest
        </Button>
      </div>

      {isTimerOpen && (
        <Modal onModalClose={toggleTimer}>
          <Timer />
        </Modal>
      )}

      {isRequestModalOpen && (
        <Modal onModalClose={toggleRequestModal}>
          <CancelRequest />
        </Modal>
      )}

      <Button className="btn-danger mt-auto" onClick={logout}>
        Log Out
      </Button>
    </div>
  );
};
