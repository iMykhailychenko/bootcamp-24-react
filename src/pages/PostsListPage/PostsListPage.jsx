import { useEffect, useCallback, useReducer } from 'react';

import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { Button } from '../../components/Button';
import { PostsError, PostsItem, PostsLoader, PostsNotFound, PostsSearch } from '../../components/Posts';
import { Status } from '../../constants/fetch-status';
import { deletePostService, getPostsService } from '../../services/posts.service';

import { reducer, defaultValue, SET_STATUS, SET_POSTS } from './reducer';

export const PostsListPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get('page');
  const search = searchParams.get('search') ?? '';

  const [state, dispatch] = useReducer(reducer, defaultValue);

  const fetchPosts = useCallback(params => {
    dispatch({ type: SET_STATUS, payload: Status.Loading });
    getPostsService(params)
      .then(data => {
        dispatch({ type: SET_POSTS, payload: data });
      })
      .catch(() => dispatch({ type: SET_STATUS, payload: Status.Error }));
  }, []);

  useEffect(() => {
    fetchPosts({ search, page });
  }, [search, page, fetchPosts]);

  const handleDeletePost = useCallback(
    id => {
      deletePostService(id)
        .then(() => toast.success('You have successfully deleted the post'))
        .then(() => fetchPosts({ search, page }));
    },
    [fetchPosts, page, search],
  );

  if (state.status === Status.Loading || state.status === Status.Idle) {
    return <PostsLoader />;
  }

  if (state.status === Status.Error) {
    return <PostsError />;
  }

  if (state.status === Status.Success && !state.posts) {
    return <PostsNotFound />;
  }

  return (
    <>
      <PostsSearch />

      <div className="container-fluid g-0 pb-5 mb-5">
        <div className="row">
          {state.posts.data.map(post => (
            <PostsItem key={post.id} post={post} onDelete={handleDeletePost} />
          ))}
        </div>
      </div>

      <div className="pagination">
        <div className="btn-group mx-auto py-3">
          {[...Array(state.posts.total_pages)].map((_, index) => (
            <Button
              key={index}
              disabled={index + 1 === state.posts.page}
              onClick={() => setSearchParams({ page: index + 1, search })} // ?page=4 ---search
            >
              {index + 1}
            </Button>
          ))}
        </div>
      </div>
    </>
  );
};
