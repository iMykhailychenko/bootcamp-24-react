import { createReducer } from '@reduxjs/toolkit';

import { minusAction, plusAction } from './action.counter';

export const counterReducer = createReducer(0, {
  [minusAction]: (state, action) => state - action.payload,
  [plusAction]: (state, action) => state + action.payload,
});
