import { Component } from 'react';

import { Button } from '../Button';

export class SearchPosts extends Component {
  state = {
    search: this.props.search,
  };

  handleChange = event => {
    this.setState({ search: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { onSubmit } = this.props;
    onSubmit(this.state.search);
  };

  render() {
    return (
      <form className="input-group mb-3" onSubmit={this.handleSubmit}>
        <input
          type="text"
          className="form-control"
          placeholder="Type to search..."
          value={this.state.search}
          onChange={this.handleChange}
        />
        <Button type="submit">Search</Button>
      </form>
    );
  }
}
