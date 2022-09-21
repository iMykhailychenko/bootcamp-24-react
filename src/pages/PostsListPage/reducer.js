import { Status } from '../../constants/fetch-status';

export const defaultValue = {
  posts: null,
  status: Status.Idle,
};

export const SET_POSTS = 'set-posts';
export const SET_STATUS = 'set-status';

export const reducer = (state, action) => {
  switch (action.type) {
    case SET_POSTS:
      return { ...state, status: Status.Success, posts: action.payload };

    case SET_STATUS:
      return { ...state, status: action.payload };

    default:
      return state;
  }
};
