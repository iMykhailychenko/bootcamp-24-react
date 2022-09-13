import { Component } from 'react';

import { Button } from '../Button';

export class SearchPosts extends Component {
  state = {
    search: '',
  };

  handleChange = event => {
    this.setState({ search: event.target.value });
  };

  handleSubmit = () => {
    const { onSubmit } = this.props;
    onSubmit(this.state.search);
  };

  render() {
    return (
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Type to search..."
          value={this.state.search}
          onChange={this.handleChange}
        />
        <Button onClick={this.handleSubmit}>Search</Button>
      </div>
    );
  }
}
