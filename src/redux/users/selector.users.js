import { createSelector } from '@reduxjs/toolkit';

export const selectUsersList = state => state.users.data;
export const selectUsersSearch = state => state.users.search;
export const selectUsersIsModalOpen = state => state.users.isModalOpen;

// export const selectFilteredUsers = state => {
//   const users = selectUsersList(state);
//   const search = selectUsersSearch(state);

//   console.log('here');
//   return users.filter(user => user.name.toLowerCase().includes(search.toLowerCase()));
// };

export const selectFilteredUsers = createSelector([selectUsersList, selectUsersSearch], (usersList, search) => {
  return usersList.filter(user => user.name.toLowerCase().includes(search.toLowerCase()));
});

// export const selectOpenToWorkTotal = state => {
//   const users = selectUsersList(state);

//   console.log('here');
//   return users.reduce((acc, user) => {
//     if (user.isOpenToWork) {
//       acc += 1;
//     }

//     return acc;
//   }, 0);
// };

export const selectOpenToWorkTotal = createSelector(selectUsersList, usersList => {
  console.log('here');
  return usersList.reduce((acc, user) => {
    if (user.isOpenToWork) {
      acc += 1;
    }

    return acc;
  }, 0);
});
