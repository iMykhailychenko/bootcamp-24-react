import styles from './Link.module.scss';

export const Link = ({ href = '/home', title, children }) => {
  const isUserOnline = true;

  return (
    <a className={styles.link} href={href} title={title}>
      {isUserOnline && <span>Online </span>}

      {isUserOnline ? <span>Online </span> : <span>Offline </span>}

      {children}
    </a>
  );
};
