import classNames from 'classnames';

export const Button = ({ type = 'button', className = 'btn-primary', isLoading, children, disabled, ...props }) => {
  return (
    <button type={type} className={classNames('btn', className)} {...props} disabled={isLoading || disabled}>
      {isLoading ? (
        <>
          <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true" />
          <span className="visually-hidden">Loading...</span>
        </>
      ) : (
        children
      )}
    </button>
  );
};
