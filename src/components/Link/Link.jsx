import classNames from 'classnames';

import styles from './Link.module.scss';

export const Link = ({ href = '/home', title, children, primary, secondary }) => {
  // return (
  //   <a
  //     className={classNames(styles.base, primary && styles.primary, secondary && styles.secondary)}
  //     href={href}
  //     title={title}
  //   >
  //     {children}
  //   </a>
  // );

  return (
    <a
      className={classNames(styles.base, {
        [styles.primary]: primary && !secondary,
        [styles.secondary]: secondary && !primary,
      })}
      href={href}
      title={title}
    >
      {children}
    </a>
  );
};
