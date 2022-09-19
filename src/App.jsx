import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Layout } from './components/Layout';
import { CancelRequest } from './pages/ExercisesPage/CancelRequest/CancelRequest';
import { CounterPage } from './pages/ExercisesPage/CounterPage/CounterPage';
import { ExercisesPage } from './pages/ExercisesPage/ExercisesPage';
import { RerenderPage } from './pages/ExercisesPage/RerenderPage/RerenderPage';
import { TimerPage } from './pages/ExercisesPage/TimerPage/TimerPage';
import { HomePage } from './pages/HomePage/HomePage';
import { NewPostPage } from './pages/NewPostPage/NewPostPage';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
import { PostsListPage } from './pages/PostsListPage/PostsListPage';
import { CommentsPage } from './pages/SinglePostPage/CommentsPage/CommentsPage';
import { SinglePostPage } from './pages/SinglePostPage/SinglePostPage';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />

          <Route path="/posts" element={<PostsListPage />} />
          <Route path="/posts/:postId" element={<SinglePostPage />}>
            <Route path="comments" element={<CommentsPage />} />
          </Route>

          <Route path="/new-post" element={<NewPostPage />} />

          <Route path="/exercises" element={<ExercisesPage />}>
            <Route index element={<TimerPage />} />

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
