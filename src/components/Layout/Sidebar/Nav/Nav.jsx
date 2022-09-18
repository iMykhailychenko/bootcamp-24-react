import { useAuth } from '../../../../context/auth.context';
import { Button } from '../../../Button';

export const Nav = () => {
  const { logout } = useAuth();

  return (
    <div className="d-flex flex-column justify-content-between h-100">
      <div className="d-flex flex-column justify-content-between">
        <h2 className="h3 mb-4">Welcome back!</h2>
        <Button style={{ textAlign: 'left', marginLeft: '-10px' }} className="btn-light" disabled>
          Home page
        </Button>
        <Button style={{ textAlign: 'left', marginLeft: '-10px' }} className="btn-light" disabled>
          Create new post
        </Button>
      </div>

      <Button className="btn-danger mt-auto" onClick={logout}>
        Log Out
      </Button>
    </div>
  );
};
