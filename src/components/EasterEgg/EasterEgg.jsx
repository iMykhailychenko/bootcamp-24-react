import css from './EasterEgg.module.css';
import image from './cat.webp';

export const EasterEgg = () => {
  return (
    <>
      <img className={css.img} src={image} alt="" />
    </>
  );
};
