import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { counterReducer } from './counter/reducer.counter';
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
};
