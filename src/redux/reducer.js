import { combineReducers } from 'redux';

import { counterReducer } from './counter/reducer.counter';
import { usersReducer } from './users/reducer.users';

export const rootReducer = combineReducers({
  counter: counterReducer,
  users: usersReducer,
});
