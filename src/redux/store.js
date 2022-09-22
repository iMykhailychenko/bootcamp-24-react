import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { initialState } from './initial-state';
import { rootReducer } from './reducer';

export const store = createStore(rootReducer, initialState, composeWithDevTools());
