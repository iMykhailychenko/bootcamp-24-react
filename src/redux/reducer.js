import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { counterReducer } from './counter/reducer.counter';
import { postsReducer } from './posts/slice.posts';
import { postsApi } from './rtk-posts/api.rtk-posts';
import { usersReducer } from './users/slice.users';

const persistConfig = {
  key: 'app',
  storage,
  whitelist: ['data'],
};

const persistedUsersReducer = persistReducer(persistConfig, usersReducer);

export const rootReducer = {
  counter: counterReducer,
  users: persistedUsersReducer,
  posts: postsReducer,

  [postsApi.reducerPath]: postsApi.reducer,
};
