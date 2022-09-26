import { useDispatch } from 'react-redux';

import { Button } from '../../../components/Button/Button';
import { getPostsThunk } from '../../../redux/store';

export const Middleware = () => {
  const dispatch = useDispatch();

  return <Button onClick={() => dispatch(getPostsThunk())}>Get posts</Button>;
};
