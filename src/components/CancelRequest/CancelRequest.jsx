import { Component } from 'react';

import axios from 'axios';

import { Button } from '../Button';

export class CancelRequest extends Component {
  state = {
    isLoading: false,
  };

  handleClick = async () => {
    this.setState({ isLoading: true });
    try {
      const { data } = await axios.get('http://localhost:4000');
      console.log(data);
    } catch (err) {
      console.log(err);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  render() {
    const { isLoading } = this.state;
    return (
      <div className="my-4">
        <Button onClick={this.handleClick} isLoading={isLoading}>
          Request
        </Button>
        <Button className="btn-secondary mx-4">Reject</Button>
      </div>
    );
  }
}
