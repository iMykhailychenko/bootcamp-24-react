import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { omitBy } from 'lodash-es';

export const postsApi = createApi({
  reducerPath: 'rtk-posts',
  baseQuery: fetchBaseQuery({
    baseUrl:
      process.env.NODE_ENV === 'production'
        ? 'https://taupe-croissant-c4162a.netlify.app/api'
        : 'http://70.34.201.18:8080',
  }),
  tagTypes: ['Posts'],

  endpoints: builder => ({
    getPosts: builder.query({
      query: params => {
        return {
          url: 'posts',
          params: omitBy({ ...params, limit: 6 }, item => !item),
        };
      },
      providesTags: result => {
        return result?.data
          ? [...result.data.map(({ id }) => ({ type: 'Posts', id })), { type: 'Posts', id: 'LIST' }]
          : [{ type: 'Posts', id: 'LIST' }];
      },
    }),

    deletePost: builder.mutation({
      query: postId => ({
        url: `posts/${postId}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const { useGetPostsQuery, useLazyGetPostsQuery, useDeletePostMutation } = postsApi;
