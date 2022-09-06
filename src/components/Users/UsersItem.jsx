import styles from './Users.module.scss';

export const UsersItem = ({ name, email, phone }) => {
  return (
    <div>
      <hr />
      <p>{name}</p>
      <p className={styles.link}>{email}</p>
      <p>{phone}</p>
      <hr />
    </div>
  );
};
