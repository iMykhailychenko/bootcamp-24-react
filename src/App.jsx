import { lazy } from 'react';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { Layout } from './components/Layout';
import { CancelRequest } from './pages/ExercisesPage/CancelRequest/CancelRequest';
import { RerenderPage } from './pages/ExercisesPage/RerenderPage/RerenderPage';
import { TimerPage } from './pages/ExercisesPage/TimerPage/TimerPage';
import { NewPostPage } from './pages/NewPostPage/NewPostPage';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
import { CommentsPage } from './pages/SinglePostPage/CommentsPage/CommentsPage';
import { SinglePostPage } from './pages/SinglePostPage/SinglePostPage';

const HomePage = lazy(() => import('./pages/HomePage'));
const PostsListPage = lazy(() => import('./pages/PostsListPage'));
const ExercisesPage = lazy(() => import('./pages/ExercisesPage'));
const CounterPage = lazy(() => import('./pages/ExercisesPage/CounterPage'));

// const Suspense = ({children, fallback}) => {
//  const isLoading = true
//  return  isLoading ? fallback : children
// }

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

            <Route path="cancel-request" element={<CancelRequest />} />
            <Route path="counter" element={<CounterPage />} />
            <Route path="re-render" element={<RerenderPage />} />
            <Route path="timer" element={<TimerPage />} />

            <Route path="*" element={<TimerPage />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
