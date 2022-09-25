import { useDispatch } from 'react-redux';

import { Button } from '../../../components/Button/Button';

export const Middleware = () => {
  const dispatch = useDispatch();

  return <Button onClick={console.log(dispatch)}>Get posts</Button>;
};
