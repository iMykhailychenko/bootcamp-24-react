import { createSlice } from '@reduxjs/toolkit';

import { Status } from '../../constants/fetch-status';

import { profileInitialState } from './initial-state.profile';
import { getProfileThunk } from './thunk.profile';

const profileSlice = createSlice({
  name: 'profile',
  initialState: profileInitialState,
  extraReducers: {
    [getProfileThunk.pending]: state => {
      state.status = Status.Loading;
    },
    [getProfileThunk.fulfilled]: (state, { payload }) => {
      state.status = Status.Success;
      state.data = payload;
    },
    [getProfileThunk.rejected]: state => {
      state.status = Status.Error;
    },
  },
});

export const profileReducer = profileSlice.reducer;
