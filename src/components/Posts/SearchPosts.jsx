import { Component } from 'react';

import { Button } from '../Button';

export class SearchPosts extends Component {
  render() {
    const { value, onChange, onSubmit } = this.props;

    return (
      <form className="input-group mb-3" onSubmit={onSubmit}>
        <input type="text" className="form-control" placeholder="Type to search..." value={value} onChange={onChange} />
        <Button type="submit">Search</Button>
      </form>
    );
  }
}
