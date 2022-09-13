import { Component } from 'react';

import axios from 'axios';

import { Button } from '../Button';

export class CancelRequest extends Component {
  state = {};

  handleClick = async () => {
    try {
      const { data } = await axios.get('http://localhost:4000');
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <div className="my-4">
        <Button onClick={this.handleClick}>Request</Button>
        <Button className="btn-secondary mx-4">Reject</Button>
      </div>
    );
  }
}
