import { createSlice } from '@reduxjs/toolkit';

import { Status } from '../../constants/fetch-status';
import { getProfileThunk } from '../profile/thunk.profile';

import { authInitialState } from './initial-state.auth';
import { loginThunk } from './thunk.auth';

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  reducers: {
    logoutAction: () => authInitialState,
  },
  extraReducers: {
    [loginThunk.pending]: state => {
      state.status = Status.Loading;
    },
    [loginThunk.fulfilled]: (state, { payload }) => {
      state.status = Status.Success;
      state.access_token = payload.access_token;
      state.token_type = payload.token_type;
    },
    [loginThunk.rejected]: state => {
      state.status = Status.Error;
    },

    [getProfileThunk.rejected]: state => {
      state.status = Status.Error;
      state.access_token = '';
      state.token_type = '';
    },
  },
});

export const { logoutAction } = authSlice.actions;

export const authReducer = authSlice.reducer;
