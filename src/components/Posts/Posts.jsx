import { Component } from 'react';

import { Button } from '../Button';

import { PostsItem } from './PostsItem';
import { PostsLoader } from './PostsLoader';

const posts = [...Array(9)];

export class Posts extends Component {
  state = {
    isLoading: false,
  };

  render() {
    const { isLoading } = this.state;

    if (isLoading) {
      return <PostsLoader />;
    }

    return (
      <>
        

        <div className="container-fluid g-0 pb-5 mb-5">
          <div className="row">
            {posts.map((_, i) => (
              <PostsItem key={i} />
            ))}
          </div>
        </div>

        <div className="pagination">
          <div className="btn-group my-2 mx-auto btn-group-lg">
            {posts.map((_, index) => (
              <Button key={index}>{index + 1}</Button>
            ))}
          </div>
        </div>
      </>
    );
  }
}
