import { Component } from 'react';

import axios from 'axios';

export class TestModal extends Component {
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
      //   if (err.code === SIGNAL_ERROR_CODE) {
      //     alert('Request canceled');
      //     return;
      //   }

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
        {isLoading && 'Loading ...'}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptas vero temporibus natus. Illum culpa ea
        excepturi cumque sapiente itaque aut nam ipsa, veritatis, aliquam consequuntur, provident exercitationem. Amet,
        cupiditate?
      </>
    );
  }
}
