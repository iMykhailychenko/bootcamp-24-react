import { createAction } from '@reduxjs/toolkit';

// export const minusAction = (payload = 1) => ({ type: MINUS, payload });
// export const plusAction = (payload = 1) => ({ type: PLUS, payload });

export const minusAction = createAction('counter/minus'); /* (payload = 1) => ({ type: MINUS, payload }) */
export const plusAction = createAction('counter/plus'); /* (payload = 1) => ({ type: PLUS, payload }) */
