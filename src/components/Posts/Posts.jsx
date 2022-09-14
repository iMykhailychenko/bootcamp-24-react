import { Component } from 'react';

import { Status } from '../../constants/fetch-status';
import { getPostsService } from '../../services/posts.service';
import { Button } from '../Button';

import { PostsError } from './PostsErorr';
import { PostsItem } from './PostsItem';
import { PostsLoader } from './PostsLoader';
import { SearchPosts } from './SearchPosts';

const HEADER_OFFSET = 450;

export class Posts extends Component {
  state = {
    posts: null,
    status: Status.Idle,
    isLoadMore: Status.Idle,
    search: '',
  };

  async componentDidMount() {
    this.setState({ status: Status.Loading });
    this.fetchData();
  }

  getSnapshotBeforeUpdate() {
    return document.body.scrollHeight - HEADER_OFFSET;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.posts && prevState.posts?.data?.length !== this.state.posts?.data?.length) {
      window.scrollTo({ top: snapshot, behavior: 'smooth' });
    }
  }

  fetchData = async params => {
    try {
      const posts = await getPostsService(params);
      this.setState({ posts, status: Status.Success });
    } catch {
      this.setState({ status: Status.Error });
    }
  };

  handleLoadMore = async () => {
    const { posts, search } = this.state;

    if (posts.page < posts.total_pages) {
      try {
        this.setState({ isLoadMore: Status.Loading });
        const resPosts = await getPostsService({ search, page: posts.page + 1 });

        this.setState(prevState => ({
          isLoadMore: Status.Success,
          posts: { ...resPosts, data: [...prevState.posts.data, ...resPosts.data] },
        }));
      } catch {
        this.setState({ isLoadMore: Status.Error });
      }
    }
  };

  handleSearchPosts = event => {
    event.preventDefault();

    this.fetchData({ search: this.state.search });
  };

  handleSearchChange = event => {
    this.setState({ search: event.target.value });
  };

  render() {
    const { posts, status, isLoadMore, search } = this.state;

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
        <SearchPosts value={search} onChange={this.handleSearchChange} onSubmit={this.handleSearchPosts} />

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
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    this.fetchData({ search, page: index + 1 });
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
