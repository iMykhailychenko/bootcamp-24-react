import { useAuth } from '../../../../context/auth.context';
import { Button } from '../../../Button';

export const Nav = () => {
  const { logout } = useAuth();

  return (
    <div className="d-flex flex-column justify-content-between h-100">
      <div className="d-flex flex-column justify-content-between">
        <h2 className="h3 mb-4">Welcome back!</h2>

        <a href="/" style={{ textAlign: 'left', marginLeft: '-10px' }} className="btn btn-light">
          Home page
        </a>
        <a href="/posts" style={{ textAlign: 'left', marginLeft: '-10px' }} className="btn btn-light">
          Posts list
        </a>
        <a href="/new-post" style={{ textAlign: 'left', marginLeft: '-10px' }} className="btn btn-light">
          Create new post
        </a>
        <a href="/exercises" style={{ textAlign: 'left', marginLeft: '-10px' }} className="btn btn-light">
          React exercises
        </a>
      </div>

      <Button className="btn-danger mt-auto" onClick={logout}>
        Log Out
      </Button>
    </div>
  );
};
