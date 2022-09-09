import { useState } from 'react';

import classNames from 'classnames';

import css from './EasterEgg.module.css';
import image from './image.png';

const EASTER_EGG_KEY = 'IS-EASTER-EGG-ACTIVE';

export const EasterEgg = () => {
  const [isOpen, setIsOpen] = useState(() => !localStorage.getItem(EASTER_EGG_KEY));

  const handleOpen = () => {
    localStorage.setItem(EASTER_EGG_KEY, 'false');
    setIsOpen(false);
  };

  return (
    <button type="button" className={classNames(css.wrp, isOpen ? css.open : css.close)} onClick={handleOpen}>
      <img className={css.img} src={image} alt="" />
    </button>
  );
};
