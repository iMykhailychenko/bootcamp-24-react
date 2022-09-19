import { NavLink } from 'react-router-dom';

import { useAuth } from '../../../../context/auth.context';
import { Button } from '../../../Button';

export const Nav = () => {
  const { logout } = useAuth();

  // to = "/" href = "/" -> href.includes(to) -> true

  // to = "/" href = "/posts" -> href.includes(to) -> true
  // to = "/posts" href = "/posts" -> href.includes(to) -> true

  return (
    <div className="d-flex flex-column justify-content-between h-100">
      <div className="d-flex flex-column justify-content-between">
        <h2 className="h3 mb-4">Welcome back!</h2>

        <NavLink
          to="/"
          end
          style={{ textAlign: 'left', marginLeft: '-10px' }}
          className={({ isActive }) => (isActive ? 'btn btn-primary' : 'btn btn-light')}
        >
          Home page
        </NavLink>
        <NavLink
          to="/posts"
          style={{ textAlign: 'left', marginLeft: '-10px' }}
          className={({ isActive }) => (isActive ? 'btn btn-primary' : 'btn btn-light')}
        >
          Posts list
        </NavLink>
        <NavLink
          to="/new-post"
          style={{ textAlign: 'left', marginLeft: '-10px' }}
          className={({ isActive }) => (isActive ? 'btn btn-primary' : 'btn btn-light')}
        >
          Create new post
        </NavLink>
        <NavLink
          to="/exercises"
          style={{ textAlign: 'left', marginLeft: '-10px' }}
          className={({ isActive }) => (isActive ? 'btn btn-primary' : 'btn btn-light')}
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
