import { NotAuth } from './NotAuth';
import { UserNav } from './UserNav';

export const Sidebar = () => {
  return (
    <aside className="nav nav-pills p-5 bg-light col-3" style={{ height: 'auto' }}>
      <div className="d-flex flex-column" style={{ position: 'sticky', top: 30, left: 0, height: '88vh' }}>
        <UserNav />
        {/* <NotAuth /> */}
      </div>
    </aside>
  );
};
