import { createReducer } from '@reduxjs/toolkit';

import { minusAction, plusAction } from './action.counter';

export const counterReducer = createReducer(0, {
  [minusAction]: (state, action) => state - action.payload,
  [plusAction]: (state, action) => state + action.payload,
});

// const counter = {
//   [MINUS]: (state, action) => {
//     return state - action.payload;
//   },
//   [PLUS]: (state, action) => {
//     return state + action.payload;
//   },
// };
// return counter[action.type] ? counter[action.type](state, action) : state; // new satte

// export const counterReducer = (state = counterInitialState, action) => {

// switch (action.type) {
//   case MINUS:
//     return state - action.payload;

//   case PLUS:
//     return state + action.payload;

//   default:
//     return state;
// }
// };

// const m = 'minus';

// const obj = {
//   [m]: () => {
//     return -1;
//   },
// };
