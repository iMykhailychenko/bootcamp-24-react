import { configureStore } from '@reduxjs/toolkit';
import { persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';

import { rootReducer } from './reducer';
import { postsApi } from './rtk-posts/api.rtk-posts';

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === 'development',

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat([postsApi.middleware]),
});

export const persistor = persistStore(store);
