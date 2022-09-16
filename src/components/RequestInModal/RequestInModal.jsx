import { Component } from 'react';

import { Button } from '../Button';
import { Modal } from '../Modal/Modal';

import { TestModal } from './TestModal';

export class RequestInModal extends Component {
  state = {
    isModalOpen: false,
  };

  toggle = () => {
    this.setState(prevState => ({ isModalOpen: !prevState.isModalOpen }));
  };

  render() {
    const { isModalOpen } = this.state;

    return (
      <>
        <Button onClick={this.toggle}>Open modal</Button>

        {isModalOpen && (
          <Modal onModalClose={this.toggle}>
            <TestModal />
          </Modal>
        )}
      </>
    );
  }
}
