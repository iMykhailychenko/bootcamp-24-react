import { useEffect, useState } from 'react';

import { Button } from '../../components/Button';
import { PostsError, PostsItem, PostsLoader, PostsNotFound, PostsSearch } from '../../components/Posts';
import { Status } from '../../constants/fetch-status';
import { getPostsService } from '../../services/posts.service';

export const PostsListPage = () => {
  const [posts, setPosts] = useState(null);

  const [page, setPage] = useState(1);
  const [status, setStatus] = useState(Status.Idle);
  const [search, setSearch] = useState('');

  useEffect(() => {
    setStatus(Status.Loading);
    getPostsService({ search, page })
      .then(data => {
        setStatus(Status.Success);
        setPosts(data);
      })
      .catch(() => setStatus(Status.Error));
  }, [search, page]);

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
      <PostsSearch defaultValue={search} onSubmit={setSearch} />

      <div className="container-fluid g-0 pb-5 mb-5">
        <div className="row">
          {posts.data.map(post => (
            <PostsItem key={post.id} post={post} />
          ))}
        </div>
      </div>

      <div className="pagination">
        <div className="btn-group mx-auto py-3">
          {[...Array(posts.total_pages)].map((_, index) => (
            <Button key={index} disabled={index + 1 === posts.page} onClick={() => setPage(index + 1)}>
              {index + 1}
            </Button>
          ))}
        </div>
      </div>
    </>
  );
};
