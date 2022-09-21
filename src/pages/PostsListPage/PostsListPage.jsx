import { useEffect, useState, useCallback } from 'react';

import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { Button } from '../../components/Button';
import { PostsError, PostsItem, PostsLoader, PostsNotFound, PostsSearch } from '../../components/Posts';
import { Status } from '../../constants/fetch-status';
import { deletePostService, getPostsService } from '../../services/posts.service';

export const PostsListPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get('page');
  const search = searchParams.get('search') ?? '';

  const [posts, setPosts] = useState(null);
  const [status, setStatus] = useState(Status.Idle);

  const fetchPosts = useCallback(params => {
    setStatus(Status.Loading);
    getPostsService(params)
      .then(data => {
        setStatus(Status.Success);
        setPosts(data);
      })
      .catch(() => setStatus(Status.Error));
  }, []);

  useEffect(() => {
    fetchPosts({ search, page });
  }, [search, page, fetchPosts]);

  const handleDeletePost = useCallback(id => {
    deletePostService(id)
      .then(() => toast.success('You have successfully deleted the post'))
      .then(() => fetchPosts({ search, page }));
  }, [fetchPosts, page, search]);

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
            <PostsItem key={post.id} post={post} onDelete={handleDeletePost} />
          ))}
        </div>
      </div>

      <div className="pagination">
        <div className="btn-group mx-auto py-3">
          {[...Array(posts.total_pages)].map((_, index) => (
            <Button
              key={index}
              disabled={index + 1 === posts.page}
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
