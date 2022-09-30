import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { selectAuth } from '../../redux/auth/selector.auth';

export const PublicRoute = () => {
  const location = useLocation();
  const { access_token } = useSelector(selectAuth);

  return access_token ? <Navigate to={location.state?.login ?? '/'} /> : <Outlet />;
};
