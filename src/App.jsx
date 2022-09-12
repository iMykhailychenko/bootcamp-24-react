import { ConfettiContainer } from './components/Confetti';
import { Header, Layout } from './components/Layout';
import { Rerender } from './components/Rerender';
import { TimerComponent } from './components/Timer';
import { Users } from './components/Users';

export const App = () => {
  return (
    <Layout>
      <Header title="Hello world!" />
      <TimerComponent />

      <Rerender />
      <Users />

      <ConfettiContainer />
    </Layout>
  );
};
