import { lazy } from 'react';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { Layout } from './components/Layout';

const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

const HomePage = lazy(() => import('./pages/HomePage'));
const NewPostPage = lazy(() => import('./pages/NewPostPage'));
const PostsListPage = lazy(() => import('./pages/PostsListPage'));

const SinglePostPage = lazy(() => import('./pages/SinglePostPage'));
const CommentsPage = lazy(() => import('./pages/SinglePostPage/CommentsPage'));

const ExercisesPage = lazy(() => import('./pages/ExercisesPage'));
const CounterPage = lazy(() => import('./pages/ExercisesPage/CounterPage'));
const TimerPage = lazy(() => import('./pages/ExercisesPage/TimerPage'));
const RerenderPage = lazy(() => import('./pages/ExercisesPage/RerenderPage'));
const CancelRequestPage = lazy(() => import('./pages/ExercisesPage/CancelRequest'));
const UseReducerPage = lazy(() => import('./pages/ExercisesPage/UseReducerPage'));
const UsersPage = lazy(() => import('./pages/ExercisesPage/UsersPage'));
const Middleware = lazy(() => import('./pages/ExercisesPage/Middleware'));

export const App = () => {
  return (
    <BrowserRouter basename="/bootcamp-24-react/">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />

          <Route path="/posts" element={<PostsListPage />} />

          <Route path="/posts/:postId" element={<SinglePostPage />}>
            <Route path="comments" element={<CommentsPage />} />
          </Route>

          <Route path="/new-post" element={<NewPostPage />} />

          <Route path="/exercises" element={<ExercisesPage />}>
            <Route index element={<Navigate to="timer" />} />
            <Route path="reducer" element={<UseReducerPage />} />
            <Route path="cancel-request" element={<CancelRequestPage />} />
            <Route path="counter" element={<CounterPage />} />
            <Route path="re-render" element={<RerenderPage />} />
            <Route path="timer" element={<TimerPage />} />
            <Route path="users" element={<UsersPage />} />
            <Route path="middleware" element={<Middleware />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
