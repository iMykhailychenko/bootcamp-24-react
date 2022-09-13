import { Component } from 'react';

import { getPostsService } from '../../services/posts.service';
import { Button } from '../Button';

import { PostsItem } from './PostsItem';
import { PostsLoader } from './PostsLoader';
import { SearchPosts } from './SearchPosts';

const arr = [...Array(9)];

export class Posts extends Component {
  state = {
    posts: null,
    isLoading: false,
  };

  async componentDidMount() {
    this.setState({ isLoading: true });

    try {
      const posts = await getPostsService();
      this.setState({ posts });
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  }

  render() {
    const { posts, isLoading } = this.state;
    console.log(posts);

    if (isLoading) {
      return <PostsLoader />;
    }

    if (!posts) {
      return <></>;
    }

    return (
      <>
        <SearchPosts />

        <div className="container-fluid g-0 pb-5 mb-5">
          <div className="row">
            {posts.data.map(post => (
              <PostsItem key={post.id} post={post} />
            ))}
          </div>
        </div>

        <div className="pagination">
          <div className="btn-group my-2 mx-auto btn-group-lg">
            {arr.map((_, index) => (
              <Button key={index}>{index + 1}</Button>
            ))}
          </div>
        </div>
      </>
    );
  }
}
