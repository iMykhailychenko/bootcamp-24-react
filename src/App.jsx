import { Header, Layout } from './components/Layout';
import { LoginForm } from './components/LoginForm';
// import { UserFilters } from './components/UserFilters';
// import { UsersList } from './components/Users';

export const App = () => {
  return (
    <Layout>
      <Header title="Hello world!" />
      {/* <UserFilters /> */}
      {/* <UsersList /> */}

      <LoginForm />
    </Layout>
  );
};
