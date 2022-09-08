import { Component } from 'react';

import { IoCashOutline } from 'react-icons/io5';

import { Modal } from '../Modal';

import { BannerItem } from './BannerItem';
import { BannerModal } from './BannerModal';

const TEXT =
  "Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.";

export class Banner extends Component {
  state = {
    isModalOpen: false,
  };

  // handleModalOpen = () => {
  //   this.setState({ isModalOpen: true });
  // };

  // handleModalClose = () => {
  //   this.setState({ isModalOpen: false });
  // };

  handleToggle = () => {
    this.setState(prevState => ({ isModalOpen: !prevState.isModalOpen }));
  };

  render() {
    const { isModalOpen } = this.state;

    return (
      <>
        <div className="row mb-5 p-5 row-cols-2 bg-light">
          <BannerItem title="Featured title" text={TEXT} onModalOpen={this.handleToggle}>
            <IoCashOutline />
          </BannerItem>
        </div>

        {isModalOpen && (
          <Modal onModalClose={this.handleToggle}>
            <BannerModal />
          </Modal>
        )}
      </>
    );
  }
}
