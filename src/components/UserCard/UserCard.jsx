export const UserCard = () => {
  return (
    <div className="list-group-item list-group-item-action py-3 mb-4">
      <div className="d-flex w-100 align-items-center">
        <img
          alt=""
          width="80px"
          height="80px"
          src="/bootcamp-24-react/user.png"
          className="d-block"
          style={{ borderRadius: '50%', boxSizing: 'border-box' }}
        />
        <div className="ms-3 d-flex flex-column">
          <strong className="mb-1">Bill Jonson</strong>
          <small className="text-muted">email@test.com</small>
        </div>
      </div>
    </div>
  );
};
