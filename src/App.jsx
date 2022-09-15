import { CancelRequest } from './components/CancelRequest/CancelRequest';
import { ConfettiContainer } from './components/Confetti';
import { Counter } from './components/Counter';
import { Header, Layout } from './components/Layout';
import { Posts } from './components/Posts';
import { RequestInModal } from './components/RequestInModal';
import { TimerComponent } from './components/Timer';

export const App = () => {
  return (
    <Layout>
      <Header title="Hello world!" />

      <Counter />

      <TimerComponent />

      <RequestInModal />

      <CancelRequest />

      <Posts />

      <ConfettiContainer />
    </Layout>
  );
};
