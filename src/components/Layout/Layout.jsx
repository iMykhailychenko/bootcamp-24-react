import { PropTypes } from 'prop-types';

import { Sidebar } from './Sidebar/Sidebar';

export const Layout = ({ children }) => {
  return (
    <div className="d-flex h-100">
      <Sidebar />

      <main className="tab-content p-5 h-100 col-10" style={{ minHeight: '100vh' }}>
        <div className="tab-pane fade show active">{children}</div>
      </main>
    </div>
  );
};

Layout.propType = {
  children: PropTypes.node.isRequired,
};
