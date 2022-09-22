import { counterInitialState } from './initial-state.counter';
import { MINUS, PLUS } from './types.counter';

export const counterReducer = (state = counterInitialState, action) => {
  switch (action.type) {
    case MINUS:
      return state - action.payload;

    case PLUS:
      return state + action.payload;

    default:
      return state;
  }
};
