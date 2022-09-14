import { CancelRequest } from './components/CancelRequest/CancelRequest';
import { Checkbox } from './components/Checkbox/Checkbox';
import { ConfettiContainer } from './components/Confetti';
import { Header, Layout } from './components/Layout';
import { Posts } from './components/Posts';
import { RequestInModal } from './components/RequestInModal';

export const App = () => {
  return (
    <Layout>
      <Header title="Hello world!" />

      <Posts />

      <Checkbox label="Click me!" />
      <Checkbox label="Click me 2!" />

      <RequestInModal />
      <CancelRequest />

      <ConfettiContainer />
    </Layout>
  );
};
