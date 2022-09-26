import { createAction } from '@reduxjs/toolkit';

export const getPostsLoadingAction = createAction('posts/getPostsLoading');
export const getPostsSuccessAction = createAction('posts/getPostsSuccess');
export const getPostsErrorAction = createAction('posts/getPostsError');

export const deletePostLoadingAction = createAction('posts/deletePostLoading');
export const deletePostSuccessAction = createAction('posts/deletePostSuccess');
export const deletePostErrorAction = createAction('posts/deletePostError');
