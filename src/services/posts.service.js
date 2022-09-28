import axios from 'axios';
import { omitBy } from 'lodash-es';

import { PAGE_LIMIT } from '../constants/pagination';

const postsApi = axios.create({
  baseURL:
    process.env.NODE_ENV === 'production'
      ? 'https://taupe-croissant-c4162a.netlify.app/api'
      : 'http://70.34.201.18:8080',
});

export const getPostsService = async params => {
  const { data } = await postsApi.get('/posts', { params: { ...omitBy(params, item => !item), limit: PAGE_LIMIT } });
  return data;
};

export const createNewPostService = async body => {
  const { data } = await postsApi.post('/posts', body);
  return data;
};

export const getSinglePostService = async (id, params) => {
  const { data } = await postsApi.get(`/posts/${id}`, { params });
  return data;
};

export const deletePostService = id => {
  return postsApi.delete(`/posts/${id}`);
};

// sum(1, 2) -> 3
// sum(1, 2) -> 3
// sum(1, 2) -> 3

// Date.now() -> 123
// Date.now() -> 124
// Date.now() -> 125

// Math.random() -> 0.23454
// Math.random() -> 0.45432
// Math.random() -> 0.76543
