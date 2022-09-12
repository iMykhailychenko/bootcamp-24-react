import { ConfettiContainer } from './components/Confetti';
import { Header, Layout } from './components/Layout';
import { Rerender } from './components/Rerender';
import { Timer } from './components/Timer/Timer';
import { Users } from './components/Users';

export const App = () => {
  return (
    <Layout>
      <Header title="Hello world!" />
      <Timer />

      <Rerender />
      <Users />

      <ConfettiContainer />
    </Layout>
  );
};
