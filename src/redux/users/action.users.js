import { TOGGLE_NEW_USER_MODAL, DELETE_USER, CREATE_NEW_USER } from './types.users';

export const toggleNewUserModalAction = () => ({ type: TOGGLE_NEW_USER_MODAL });
export const deleteUserAction = userId => ({ type: DELETE_USER, payload: userId });
export const createUserAction = user => ({ type: CREATE_NEW_USER, payload: { ...user, id: Date.now() } });
