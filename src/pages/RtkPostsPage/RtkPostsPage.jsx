import { useSearchParams } from 'react-router-dom';

import { Button } from '../../components/Button';
import { PostsError, PostsItem, PostsLoader, PostsNotFound } from '../../components/Posts';
import { SearchInput } from '../../components/SearchInput';
import { useGetPostsQuery, useDeletePostMutation } from '../../redux/rtk-posts/api.rtk-posts';

export const RtkPostsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get('page');
  const search = searchParams.get('search') ?? '';

  const { data, isSuccess, isLoading, isError } = useGetPostsQuery({ page, search });
  // const [getPosts, { data, status, isLoading, isError, isSuccess }] = useLazyGetPostsQuery();
  const [deletePost] = useDeletePostMutation();
  // console.log(state);

  // if (status === 'uninitialized') {
  //   return (
  //     <button type="button" onClick={() => getPosts({ page, search })}>
  //       Get posts
  //     </button>
  //   );
  // }

  // const obj = {
  //   name: null,
  //   surname: undefined,
  //   balance: 0,
  //   test: '',
  // };
  // console.log(omit(obj, 'test', 'balance'));

  if (isLoading) {
    return <PostsLoader />;
  }

  if (isError) {
    return <PostsError />;
  }

  if (isSuccess && !data?.data?.length) {
    return <PostsNotFound />;
  }

  return (
    <>
      <SearchInput />

      <div className="container-fluid g-0 pb-5 mb-5">
        <div className="row">
          {data.data.map(post => (
            <PostsItem key={post.id} post={post} onDelete={deletePost} />
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
