import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { getPostsService } from '../services/posts.service';

import { initialState } from './initial-state';
import { rootReducer } from './reducer';

// const middleware = store => {
//   return next => {
//     return action => {
//       // ...
//       // ...
//     };
//   };
// };

// { type: '', payload: {} }

const thunk = store => next => action => {
  if (typeof action === 'function') {
    return next(action(store.dispatch));
  }

  return next(action);
};

export const getPostsThunk = () => async dispatch => {
  dispatch({ type: 'GET_POSTS_START' });

  // getPostsService()
  //   .then(posts => {
  //     dispatch({ type: 'GET_POSTS_SUCCESS', payload: posts });
  //   })
  //   .catch(e => {
  //     dispatch({ type: 'GET_POSTS_ERROR', payload: e });
  //   });

  try {
    const posts = await getPostsService();
    dispatch({ type: 'GET_POSTS_SUCCESS', payload: posts });
  } catch (e) {
    dispatch({ type: 'GET_POSTS_ERROR', payload: e });
  }
};

export const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunk)));

// const sum1 = (a, b) => a + b;
// sum1(1, 2);

// const sumTwoToNumber1 = a => 2 + a;
// const sumFiveToNumber1 = a => 5 + a;

// const sum2 = a => b => {
//   return a + b;
// };
// sum2(1)(2);

// const sumTwoToNumber2 = sum2(2);

// sumTwoToNumber2(5);
// sumTwoToNumber2(15);

// const sumFiveToNumber2 = sum2(5);
// sumFiveToNumber2(1);
// sumFiveToNumber2(2);
