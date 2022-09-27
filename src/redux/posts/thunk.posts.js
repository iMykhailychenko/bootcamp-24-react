import { createAsyncThunk } from '@reduxjs/toolkit';

import { deletePostService, getPostsService } from '../../services/posts.service';

export const getPostsThunk = createAsyncThunk('posts/getPosts', getPostsService);

export const deletePostThunk = createAsyncThunk('posts/deletePost', async ({ postId, params }, { dispatch }) => {
  await deletePostService(postId);
  dispatch(getPostsThunk(params));
});
