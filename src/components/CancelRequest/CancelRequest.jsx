import { Component } from 'react';

import axios from 'axios';

import { Button } from '../Button';

const SIGNAL_ERROR_CODE = 'ERR_CANCELED';

export class CancelRequest extends Component {
  state = {
    isLoading: false,
  };

  controller = new AbortController();

  handleClick = async () => {
    this.setState({ isLoading: true });
    try {
      const { data } = await axios.get('http://localhost:4000', { signal: this.controller.signal });
      console.log(data);
    } catch (err) {
      if (err.code === SIGNAL_ERROR_CODE) {
        alert('Request canceled');
        return;
      }

      console.log(err);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  handleReject = () => {
    if (this.state.isLoading) {
      this.controller.abort();
    }
  };

  render() {
    const { isLoading } = this.state;
    return (
      <div className="my-4">
        <Button onClick={this.handleClick} isLoading={isLoading}>
          Request
        </Button>

        <Button className="btn-secondary mx-4" onClick={this.handleReject}>
          Reject
        </Button>
      </div>
    );
  }
}
