import { Component } from 'react';

import { Button } from '../Button';

export class SearchPosts extends Component {
  render() {
    return (
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Type to search..." />
        <Button>Search</Button>
      </div>
    );
  }
}
