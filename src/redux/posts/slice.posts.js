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
