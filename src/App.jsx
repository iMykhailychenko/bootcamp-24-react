import { Layout } from './components/Layout';
import { AuthProvider } from './context/auth.context';
import Posts from './pages/PostsListPage';

export const App = () => {
  return (
    <AuthProvider>
      <Layout>
        <Posts />
      </Layout>
    </AuthProvider>
  );
};
