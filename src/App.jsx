import { ConfettiContainer } from './components/Confetti';
import { Counter } from './components/Counter';
import { Header, Layout } from './components/Layout';
// import { Memo } from './components/Memo/Memo';s
import { Posts } from './components/Posts';
import { AuthProvider } from './context/auth.context';

export const App = () => {
  return (
    <AuthProvider>
      <Layout>
        <Header title="Hello world!" />

        {/* <Memo /> */}

        {/* <Rerender /> */}

        <Counter />
        {/* <TimerComponent /> */}
        {/* <RequestInModal /> */}
        {/* <CancelRequest /> */}
        <Posts />
        <ConfettiContainer />
      </Layout>
    </AuthProvider>
  );
};
