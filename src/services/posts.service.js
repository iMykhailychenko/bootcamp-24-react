import axios from 'axios';

const postsApi = axios.create({
  baseURL:
    process.env.NODE_ENV === 'production'
      ? 'https://taupe-croissant-c4162a.netlify.app/api'
      : 'http://70.34.201.18:8080',
});

export const getPostsService = async params => {
  const { data } = await postsApi.get('/posts', { params: { ...params, limit: 6 } });
  return data;
};
