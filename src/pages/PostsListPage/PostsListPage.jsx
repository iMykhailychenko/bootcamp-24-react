import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import { Button } from '../../components/Button';
import { PostsError, PostsItem, PostsLoader, PostsNotFound, PostsSearch } from '../../components/Posts';
import { Status } from '../../constants/fetch-status';
import { deletePostThunk, getPostsThunk } from '../../redux/posts/thunk.posts';

export const PostsListPage = () => {
  const dispatch = useDispatch();
  const { posts, status } = useSelector(state => state.posts);

  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get('page');
  const search = searchParams.get('search') ?? '';

  const handleDelete = postId => {
    dispatch(deletePostThunk({ postId, params: { page, search } }));
  };

  useEffect(() => {
    dispatch(getPostsThunk({ search, page }));
  }, [search, page, dispatch]);

  if (status === Status.Loading || status === Status.Idle) {
    return <PostsLoader />;
  }

  if (status === Status.Error) {
    return <PostsError />;
  }

  if (status === Status.Success && !posts) {
    return <PostsNotFound />;
  }

  return (
    <>
      <PostsSearch />

      <div className="container-fluid g-0 pb-5 mb-5">
        <div className="row">
          {posts.data.map(post => (
            <PostsItem key={post.id} post={post} onDelete={handleDelete} />
          ))}
        </div>
      </div>

      <div className="pagination">
        <div className="btn-group mx-auto py-3">
          {[...Array(posts.total_pages)].map((_, index) => (
            <Button
              key={index}
              disabled={index + 1 === posts.page}
              onClick={() => setSearchParams({ page: index + 1, search })}
            >
              {index + 1}
            </Button>
          ))}
        </div>
      </div>
    </>
  );
};
