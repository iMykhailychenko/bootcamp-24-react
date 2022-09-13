import axios from 'axios';

const postsApi = axios.create({
  baseURL: 'http://70.34.201.18:8080',
});

export const getPostsService = async params => {
  const { data } = await postsApi.get('/posts', { params });
  return data;
};

// {
//     params: {
//         page: 1
//     }
// }
