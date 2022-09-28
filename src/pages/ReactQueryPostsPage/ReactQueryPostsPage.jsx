import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';

import { Button } from '../../components/Button';
import { PostsError, PostsItem, PostsLoader, PostsNotFound, PostsSearch } from '../../components/Posts';
import { deletePostService, getPostsService } from '../../services/posts.service';

export const ReactQueryPostsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get('page');
  const search = searchParams.get('search') ?? '';

  const queryClient = useQueryClient();

  const { data, isLoading, isError, isSuccess } = useQuery(['posts', page, search], () =>
    getPostsService({ page, search }),
  );

  const { mutate } = useMutation(deletePostService, {
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries(['posts', page, search]);
    },
  });

  if (isLoading) {
    return <PostsLoader />;
  }

  if (isError) {
    return <PostsError />;
  }

  if (isSuccess && data.data.length <= 0) {
    return <PostsNotFound />;
  }

  return (
    <>
      <PostsSearch />

      <div className="container-fluid g-0 pb-5 mb-5">
        <div className="row">
          {data.data.map(post => (
            <PostsItem key={post.id} post={post} onDelete={mutate} />
          ))}
        </div>
      </div>

      <div className="pagination">
        <div className="btn-group mx-auto py-3">
          {[...Array(data.total_pages)].map((_, index) => (
            <Button
              key={index}
              disabled={index + 1 === data.page}
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
