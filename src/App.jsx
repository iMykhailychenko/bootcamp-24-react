import { lazy } from 'react';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { Layout } from './components/Layout';

const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

const HomePage = lazy(() => import('./pages/HomePage'));
const RtkPostsPage = lazy(() => import('./pages/RtkPostsPage'));
const NewPostPage = lazy(() => import('./pages/NewPostPage'));
const PostsListPage = lazy(() => import('./pages/PostsListPage'));
const ReactQueryPostsPage = lazy(() => import('./pages/ReactQueryPostsPage'));

const SinglePostPage = lazy(() => import('./pages/SinglePostPage'));
const CommentsPage = lazy(() => import('./pages/SinglePostPage/CommentsPage'));

const ExercisesPage = lazy(() => import('./pages/ExercisesPage'));
const CounterPage = lazy(() => import('./pages/ExercisesPage/CounterPage'));
const UsersPage = lazy(() => import('./pages/ExercisesPage/UsersPage'));

export const App = () => {
  return (
    <BrowserRouter basename="/bootcamp-24-react/">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />

          <Route path="/posts" element={<PostsListPage />} />
          <Route path="/rtk-posts" element={<RtkPostsPage />} />
          <Route path="/react-query-posts" element={<ReactQueryPostsPage />} />

          <Route path="/posts/:postId" element={<SinglePostPage />}>
            <Route path="comments" element={<CommentsPage />} />
          </Route>

          <Route path="/new-post" element={<NewPostPage />} />

          <Route path="/exercises" element={<ExercisesPage />}>
            <Route index element={<Navigate to="users" />} />
            <Route path="counter" element={<CounterPage />} />
            <Route path="users" element={<UsersPage />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
