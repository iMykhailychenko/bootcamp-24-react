import { createSlice } from '@reduxjs/toolkit';

import { Status } from '../../constants/fetch-status';

import { postsInitialState } from './initial-state.pots';
import { deletePostThunk, getPostsThunk } from './thunk.posts';

const postsSlice = createSlice({
  name: 'posts',
  initialState: postsInitialState,
  extraReducers: {
    [getPostsThunk.pending]: state => {
      state.status = Status.Loading;
    },
    [getPostsThunk.fulfilled]: (state, action) => {
      state.status = Status.Success;
      state.posts = action.payload;
    },
    [getPostsThunk.rejected]: state => {
      state.status = Status.Error;
    },

    [deletePostThunk.pending]: state => {
      state.status = Status.Loading;
    },
    [deletePostThunk.fulfilled]: state => {
      state.status = Status.Success;
    },
    [deletePostThunk.rejected]: state => {
      state.status = Status.Error;
    },
  },
});

export const postsReducer = postsSlice.reducer;

// state -> reducer -> newState
// state -> newState -> reducer -> newState

// let a = 1
// let b = 2

// let sum = a + b // 3

// a = 4
// sum -> 6

// const obj = Proxy({ a: 2, b: 3 })

// obj.a = 3 -> () => {}
// delete obj.a -> () => {}
