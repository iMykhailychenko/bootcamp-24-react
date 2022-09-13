import { Component } from 'react';

import { Status } from '../../constants/fetch-status';
import { getPostsService } from '../../services/posts.service';
import { Button } from '../Button';

import { PostsError } from './PostsErorr';
import { PostsItem } from './PostsItem';
import { PostsLoader } from './PostsLoader';
import { SearchPosts } from './SearchPosts';

export class Posts extends Component {
  state = {
    posts: null,
    status: Status.Idle,
    isLoadMore: Status.Idle,
  };

  async componentDidMount() {
    this.fetchData();
  }

  fetchData = async params => {
    this.setState({ status: Status.Loading });
    try {
      const posts = await getPostsService(params);
      this.setState({ posts, status: Status.Success });
    } catch {
      this.setState({ status: Status.Error });
    }
  };

  handleLoadMore = async () => {
    const { posts } = this.state;

    if (posts.page < posts.total_pages) {
      try {
        this.setState({ isLoadMore: Status.Loading });
        const resPosts = await getPostsService(posts.page + 1);

        this.setState(prevState => ({
          isLoadMore: Status.Success,
          posts: { ...resPosts, data: [...prevState.posts.data, ...resPosts.data] },
        }));
      } catch {
        this.setState({ isLoadMore: Status.Error });
      }
    }
  };

  handleSearchPosts = search => {
    this.fetchData({ search });
  };

  render() {
    const { posts, status, isLoadMore } = this.state;

    if (status === Status.Loading || status === Status.Idle) {
      return <PostsLoader />;
    }

    if (status === Status.Error) {
      return <PostsError />;
    }

    if (status === Status.Success && !posts) {
      return <></>;
    }

    return (
      <>
        <SearchPosts onSubmit={this.handleSearchPosts} />

        <div className="container-fluid g-0 pb-5 mb-5">
          <div className="row">
            {posts.data.map(post => (
              <PostsItem key={post.id} post={post} />
            ))}
          </div>
        </div>

        <div className="pagination">
          <div className="my-2 mx-auto">
            <div className="btn-group">
              {[...Array(posts.total_pages)].map((_, index) => (
                <Button
                  key={index}
                  disabled={index + 1 === posts.page}
                  onClick={() => {
                    this.fetchData({ page: index + 1 });
                  }}
                >
                  {index + 1}
                </Button>
              ))}
            </div>

            <Button
              className="ms-4 btn-primary"
              onClick={this.handleLoadMore}
              isLoading={isLoadMore === Status.Loading}
            >
              Load more
            </Button>
          </div>
        </div>
      </>
    );
  }
}
