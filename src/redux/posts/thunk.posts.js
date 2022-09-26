import { createAsyncThunk } from '@reduxjs/toolkit';

import { deletePostService, getPostsService } from '../../services/posts.service';

// export const getPostsThunk = params => async dispatch => {
//   dispatch(getPostsLoadingAction());

//   try {
//     const posts = await getPostsService(params);
//     dispatch(getPostsSuccessAction(posts));
//   } catch (err) {
//     dispatch(getPostsErrorAction());
//   }
// };

export const getPostsThunk = createAsyncThunk('posts/getPosts', getPostsService);

// export const deletePostThunk = (postsId, params) => async dispatch => {
//   dispatch(deletePostLoadingAction());

//   try {
//     await deletePostService(postsId);
//     dispatch(deletePostSuccessAction(postsId));
//     dispatch(getPostsThunk(params));
//   } catch (err) {
//     dispatch(deletePostErrorAction());
//   }
// };

export const deletePostThunk = createAsyncThunk('posts/deletePost', async ({ postId, params }, { dispatch }) => {
  await deletePostService(postId);
  dispatch(getPostsThunk(params));
});

// dispatch(deletePostThunk() -> f(dispatch))
// middleware -> typeof action === 'function' -> action(dispatch)
