import { createSlice, createAction } from '@reduxjs/toolkit';

import { usersInitialState } from './initial-state.users';

// export const usersReducer = (state = usersInitialState, action) => {
//   switch (action.type) {
//     case TOGGLE_NEW_USER_MODAL:
//       return { ...state, isModalOpen: !state.isModalOpen };

//     case DELETE_USER:
//       return { ...state, data: state.data.filter(user => user.id !== action.payload) };

//     case CREATE_NEW_USER:
//       return { ...state, data: [action.payload, ...state.data] };

//     default:
//       return state;
//   }
// };

// const isModalOpenReducer = (state = usersInitialState.isModalOpen, action) => {
//   switch (action.type) {
//     case TOGGLE_NEW_USER_MODAL:
//       return !state;

//     default:
//       return state;
//   }
// };

// const userDataReducer = (state = usersInitialState.data, action) => {
//   switch (action.type) {
//     case DELETE_USER:
//       return state.filter(user => user.id !== action.payload);

//     case CREATE_NEW_USER:
//       return [action.payload, ...state.data];

//     default:
//       return state;
//   }
// };

// const filtersReducer = (state = usersInitialState.filters) => state;

// export const usersReducer = combineReducers({
//   isModalOpen: isModalOpenReducer,
//   data: userDataReducer,
//   filters: filtersReducer,
// });

export const createNewUserAction = createAction('users/createNewUser', user => ({
  payload: { ...user, id: Date.now() },
}));

const usersSlice = createSlice({
  name: 'users',
  initialState: usersInitialState,
  reducers: {
    deleteUserAction: (state, action /* user id */) => {
      state.data = state.data.filter(user => user.id !== action.payload);
    },
    toggleModalAction: state => {
      state.isModalOpen = !state.isModalOpen;
    },
  },
  extraReducers: {
    [createNewUserAction]: (state, action) => {
      console.log(action.payload);

      state.isModalOpen = false;
      state.data.unshift(action.payload);
    },
  },
});

// state -> createNewUser(state) -> newState
// state -> newState -> createNewUser(newState) -> newState
export const { deleteUserAction, toggleModalAction } = usersSlice.actions;

export const usersReducer = usersSlice.reducer;
