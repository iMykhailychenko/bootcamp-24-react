import { Banner } from './components/Banner';
import { Counter } from './components/Counter';
import { Header, Layout } from './components/Layout';
import { UsersList } from './components/Users';

export const App = () => {
  return (
    <Layout>
      <Banner />
      <Counter defaultValue={10} />
      <Header title="Hello world!" />
      <UsersList />
    </Layout>
  );
};
