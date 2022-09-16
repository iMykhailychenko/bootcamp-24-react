import { Component } from 'react';

import axios from 'axios';

export class CancelRequest extends Component {
  state = {
    isLoading: false,
  };

  controller = null;

  async componentDidMount() {
    this.setState({ isLoading: true });
    this.controller = new AbortController();
    try {
      const { data } = await axios.get('http://localhost:4000', { signal: this.controller.signal });
      console.log(data);
    } catch (err) {
      console.log(err);
    } finally {
      this.controller = null;
      this.setState({ isLoading: false });
    }
  }

  componentWillUnmount() {
    if (this.controller) {
      console.log('controller.abort()');
      this.controller.abort();
    }
  }

  render() {
    const { isLoading } = this.state;

    return (
      <>
        <p>{isLoading ? 'Loading ...' : 'Done'}</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptas vero temporibus natus. Illum culpa ea
          excepturi cumque sapiente itaque aut nam ipsa, veritatis, aliquam consequuntur, provident exercitationem.
          Amet, cupiditate?
        </p>
      </>
    );
  }
}
