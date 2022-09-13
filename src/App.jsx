import { CancelRequest } from './components/CancelRequest/CancelRequest';
import { ConfettiContainer } from './components/Confetti';
import { Header, Layout } from './components/Layout';
import { Posts } from './components/Posts';

export const App = () => {
  return (
    <Layout>
      <Header title="Hello world!" />

      <CancelRequest />
      <Posts />

      <ConfettiContainer />
    </Layout>
  );
};
