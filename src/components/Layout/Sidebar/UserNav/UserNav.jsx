import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { token } from '../../../../http/http';
import { logoutAction } from '../../../../redux/auth/slice.auth';
import { Button } from '../../../Button';
import { UserCard } from '../../../UserCard/UserCard';

export const UserNav = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutAction());
    token.unset();
  };

  return (
    <div className="d-flex flex-column justify-content-between h-100">
      <div className="d-flex flex-column justify-content-between">
        <h2 className="h3 mb-4">Welcome back!</h2>

        <UserCard />

        <NavLink
          to="/"
          end
          style={{ textAlign: 'left', marginLeft: '-10px' }}
          className={({ isActive }) => (isActive ? 'btn btn-primary mb-2' : 'btn btn-light mb-2')}
        >
          Home page
        </NavLink>

        <NavLink
          to="/posts"
          style={{ textAlign: 'left', marginLeft: '-10px' }}
          className={({ isActive }) => (isActive ? 'btn btn-primary mb-2' : 'btn btn-light mb-2')}
        >
          Posts list
        </NavLink>

        <NavLink
          to="/new-post"
          style={{ textAlign: 'left', marginLeft: '-10px' }}
          className={({ isActive }) => (isActive ? 'btn btn-primary mb-2' : 'btn btn-light mb-2')}
        >
          Create new post
        </NavLink>

        <NavLink
          to="/exercises"
          style={{ textAlign: 'left', marginLeft: '-10px' }}
          className={({ isActive }) => (isActive ? 'btn btn-primary mb-2' : 'btn btn-light mb-2')}
        >
          React exercises
        </NavLink>
      </div>

      <Button onClick={handleLogout} className="btn-danger mt-auto">
        Log Out
      </Button>
    </div>
  );
};
