import { NavLink } from 'react-router-dom';

import { useAuth } from '../../../../context/auth.context';
import { Button } from '../../../Button';

export const Nav = () => {
  const { logout } = useAuth();

  return (
    <div className="d-flex flex-column justify-content-between h-100">
      <div className="d-flex flex-column justify-content-between">
        <h2 className="h3 mb-4">Welcome back!</h2>

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
          to="/react-query-posts"
          style={{ textAlign: 'left', marginLeft: '-10px' }}
          className={({ isActive }) => (isActive ? 'btn btn-primary mb-2' : 'btn btn-light mb-2')}
        >
          React Query Posts
        </NavLink>

        <NavLink
          to="/rtk-posts"
          style={{ textAlign: 'left', marginLeft: '-10px' }}
          className={({ isActive }) => (isActive ? 'btn btn-primary mb-2' : 'btn btn-light mb-2')}
        >
          RTK Posts list
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

      <Button className="btn-danger mt-auto" onClick={logout}>
        Log Out
      </Button>
    </div>
  );
};
