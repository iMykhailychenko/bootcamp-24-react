import { MINUS, PLUS } from './types.counter';

export const minusAction = (payload = 1) => ({ type: MINUS, payload });
export const plusAction = (payload = 1) => ({ type: PLUS, payload });
