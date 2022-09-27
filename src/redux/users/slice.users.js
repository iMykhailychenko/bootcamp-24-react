import { createSlice, createAction } from '@reduxjs/toolkit';

import { usersInitialState } from './initial-state.users';

export const createNewUserAction = createAction('users/createNewUser', user => ({
  payload: { ...user, id: Date.now() },
}));

const usersSlice = createSlice({
  name: 'users',
  initialState: usersInitialState,
  reducers: {
    deleteUserAction: (state, action) => {
      state.data = state.data.filter(user => user.id !== action.payload);
    },
    toggleModalAction: state => {
      state.isModalOpen = !state.isModalOpen;
    },
    changeSearchAction: (state, action) => {
      state.search = action.payload;
    },
  },
  extraReducers: {
    [createNewUserAction]: (state, action) => {
      state.isModalOpen = false;
      state.data.unshift(action.payload);
    },
  },
});

export const { deleteUserAction, toggleModalAction, changeSearchAction } = usersSlice.actions;

export const usersReducer = usersSlice.reducer;
