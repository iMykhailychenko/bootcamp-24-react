import axios from 'axios';

const postsApi = axios.create({
  baseURL: 'http://70.34.201.18:8080',
});

export const getPostsService = async () => {
  const { data } = await postsApi.get('/posts');
  return data;
};
