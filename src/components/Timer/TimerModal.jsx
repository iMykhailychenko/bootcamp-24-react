import { Component } from 'react';

const ONE_SECOND = 1000;

export class TimerModal extends Component {
  intervalId = null;

  state = {
    time: new Date(),
  };

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({ time: new Date() });
    }, ONE_SECOND);
  }

  componentWillUnmount() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  formatTime() {
    const { time } = this.state;

    const hours = String(time.getHours()).padStart(2, '0'); // -> '1' padStart -> '01' -> '10' -> '10'
    const minutes = String(time.getMinutes()).padStart(2, '0');
    const seconds = String(time.getSeconds()).padStart(2, '0');

    return `${hours}:${minutes}:${seconds}`;
  }

  render() {
    return (
      <div className="d-flex flex-column justify-content-center align-items-center p-5 text-bg-dark rounded-3 mb-5">
        <h2 className="h1 m-5">{this.formatTime()}</h2>
      </div>
    );
  }
}
