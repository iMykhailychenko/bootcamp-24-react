import axios from 'axios';

const defaultParams = {
  limit: 4,
};

const commentsApi = axios.create({
  baseURL: 'http://70.34.201.18:4444',
});

export const createNewCommentService = async (postId, body) => {
  const { data } = await commentsApi.post(`/posts/${postId}/comments`, body);
  return data;
};

export const getCommentsListService = async (postId, params = {}) => {
  const { data } = await commentsApi.get(`/posts/${postId}/comments`, {
    params: { ...defaultParams, ...params },
  });
  return data;
};

export const deleteCommentService = async commentId => {
  return commentsApi.delete(`/comments/${commentId}`);
};
