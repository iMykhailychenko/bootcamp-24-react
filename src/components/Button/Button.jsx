import classNames from 'classnames';

export const Button = ({ type = 'button', className = 'btn-primary', isLoading, children, ...props }) => {
  return (
    <button type={type} className={classNames('btn', className)} {...props} disabled={isLoading}>
      {isLoading ? (
        <>
          <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true" />
          <span class="visually-hidden">Loading...</span>
        </>
      ) : (
        children
      )}
    </button>
  );
};
