import { Component } from 'react';

import axios from 'axios';

import { Button } from '../Button';

export class CancelRequest extends Component {
  state = {};

  async componentDidMount() {
    try {
      const { data } = await axios.get('http://70.34.201.18:8080/posts?limit=100');
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <div className="my-4">
        <Button>Request</Button>
        <Button className="btn-secondary mx-4">Reject</Button>
      </div>
    );
  }
}
