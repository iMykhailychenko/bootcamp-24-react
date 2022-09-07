import { IoCashOutline } from 'react-icons/io5';

// import { Modal } from '../Modal';

import { BannerItem } from './BannerItem';
// import { BannerModal } from './BannerModal';

const TEXT =
  "Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.";

export const Banner = () => {
  return (
    <>
      <div className="row mb-5 p-5 row-cols-2 bg-light">
        <BannerItem title="Featured title" text={TEXT}>
          <IoCashOutline />
        </BannerItem>
      </div>

      {/* <Modal>
        <BannerModal />
      </Modal> */}
    </>
  );
};
