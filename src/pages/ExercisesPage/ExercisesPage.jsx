import { Suspense } from 'react';

import { NavLink, Outlet } from 'react-router-dom';

const subPages = [
  { href: 'users', title: 'Users list' },
  { href: 'counter', title: 'Counter' },
  { href: 'render-prop', title: 'Render Prop' },
  { href: 'hoc', title: 'HOC' },
  { href: 'animations', title: 'Animations' },
];

export const ExercisesPage = () => {
  return (
    <>
      <ul className="nav nav-tabs mb-5">
        {subPages.map(item => (
          <li key={item.href} className="nav-item">
            <NavLink className="nav-link" to={item.href}>
              {item.title}
            </NavLink>
          </li>
        ))}
      </ul>

      <Suspense fallback={<p>Loading in exercises</p>}>
        <Outlet />
      </Suspense>
    </>
  );
};
