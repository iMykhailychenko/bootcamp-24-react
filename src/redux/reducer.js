import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { authReducer } from './auth/slice.auth';
import { counterReducer } from './counter/reducer.counter';
import { postsReducer } from './posts/slice.posts';
import { profileReducer } from './profile/slice.profile';
import { usersReducer } from './users/slice.users';

const usersPersistConfig = {
  key: 'users',
  storage,
  whitelist: ['data'],
};
const persistedUsersReducer = persistReducer(usersPersistConfig, usersReducer);

const authPersistConfig = {
  key: 'auth',
  storage,
};
const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);

export const rootReducer = {
  counter: counterReducer,
  users: persistedUsersReducer,
  posts: postsReducer,
  auth: persistedAuthReducer,
  profile: profileReducer,
};
