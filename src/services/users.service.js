import axios from 'axios';

const usersApi = axios.create({
  baseURL: 'http://70.34.201.18:4444',
});

export const createUserService = body => {
  return usersApi.post('/users/create', body);
};

export const loginUserService = async body => {
  const { data } = await usersApi.post('/users/login', body);
  return data;
};

export const getUsersService = async () => {
  const { data } = await usersApi.get('/users/profile');
  return data;
};

export const updateUser = async body => {
  const { data } = await usersApi.put('/users/profile', body);
  return data;
};
