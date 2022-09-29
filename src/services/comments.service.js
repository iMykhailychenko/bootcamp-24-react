import { privateApi, publicApi } from '../http/http';

const defaultParams = {
  limit: 4,
};

export const createNewCommentService = async (postId, body) => {
  const { data } = await privateApi.post(`/posts/${postId}/comments`, body);
  return data;
};

export const getCommentsListService = async (postId, params = {}) => {
  const { data } = await publicApi.get(`/posts/${postId}/comments`, {
    params: { ...defaultParams, ...params },
  });
  return data;
};

export const deleteCommentService = async commentId => {
  return privateApi.delete(`/comments/${commentId}`);
};
