import axios from 'axios';

export const publicApi = axios.create({
  baseURL:
    process.env.NODE_ENV === 'production'
      ? 'https://taupe-croissant-c4162a.netlify.app/api'
      : 'http://70.34.201.18:4444',
});

export const privateApi = axios.create({
  baseURL:
    process.env.NODE_ENV === 'production'
      ? 'https://taupe-croissant-c4162a.netlify.app/api'
      : 'http://70.34.201.18:4444',
});

export const token = {
  set: value => {
    privateApi.defaults.headers.Authorization = value;
  },
  unset: () => {
    privateApi.defaults.headers.Authorization = null;
  },
};
