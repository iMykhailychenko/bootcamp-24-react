import { useSelector } from 'react-redux';

import { Status } from '../../../constants/fetch-status';
import { selectAuth } from '../../../redux/auth/selector.auth';

import { NotAuth } from './NotAuth';
import { UserNav } from './UserNav';

export const Sidebar = () => {
  const { status } = useSelector(selectAuth);

  return (
    <aside className="nav nav-pills p-5 bg-light col-3" style={{ height: 'auto' }}>
      <div className="d-flex flex-column" style={{ position: 'sticky', top: 30, left: 0, height: '88vh' }}>
        {status === Status.Success ? <UserNav /> : <NotAuth />}
      </div>
    </aside>
  );
};
