import { authInitialState } from './auth/initial-state.auth';
import { counterInitialState } from './counter/initial-state.counter';
import { postsInitialState } from './posts/initial-state.pots';
import { profileInitialState } from './profile/initial-state.profile';
import { usersInitialState } from './users/initial-state.users';

export const initialState = {
  counter: counterInitialState,
  users: usersInitialState,
  posts: postsInitialState,
  auth: authInitialState,
  profile: profileInitialState,
};
