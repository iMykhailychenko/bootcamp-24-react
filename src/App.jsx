import { ConfettiContainer } from './components/Confetti/Confetti';
import { Header, Layout } from './components/Layout';
import { Timer } from './components/Timer';
import { Users } from './components/Users';

export const App = () => {
  return (
    <Layout>
      <Header title="Hello world!" />
      <Timer />
      <Users />

      <ConfettiContainer />
    </Layout>
  );
};
