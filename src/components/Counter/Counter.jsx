import { Component } from 'react';

export class Counter extends Component {
  // constructor() {
  //   super();

  //   this.handleMinus = this.handleMinus.bind(this);
  //   this.handlePlus = this.handlePlus.bind(this);
  // }

  state = {
    minus: 0,
    plus: 0,
  };

  // handleMinus = () => {
  //   this.setState(prevState => {
  //     return { counter: prevState.counter - 1 };
  //   });
  // };

  // handlePlus = () => {
  //   this.setState(prevState => {
  //     return { counter: prevState.counter + 1 };
  //   });
  // };

  // handleUpdate = event => {
  //   this.setState(prevState => {
  //     switch (event.target.name) {
  //       case 'plus':
  //         return { counter: prevState.counter + 1, plus: prevState.plus + 1 };

  //       case 'minus':
  //         return { counter: prevState.counter - 1 };

  //       default:
  //         throw new Error('Somthing went wromg!');
  //     }
  //   });
  // };

  handleUpdate = event => {
    const { name } = event.target;
    this.setState(prevState => ({ [name]: prevState[name] + 1 }));
  };

  render() {
    const { minus, plus } = this.state;

    return (
      <div className="mb-5 p-5 text-white bg-dark rounded-3">
        <h2 className="text-center">Counter</h2>
        <p className="text-center my-5" style={{ fontSize: 80 }}>
          {plus}
        </p>
        <p className="text-center my-5" style={{ fontSize: 80 }}>
          {minus}
        </p>

        <div className="d-flex align-items-center justify-content-center w-100">
          <button
            type="button"
            name="minus"
            className="btn p-3 btn-outline-light w-25 mx-2"
            onClick={this.handleUpdate}
          >
            Minus
          </button>
          <button type="button" name="plus" className="btn p-3 btn-outline-light w-25 mx-2" onClick={this.handleUpdate}>
            Plus
          </button>
        </div>
      </div>
    );
  }
}

Counter.defaultProps = {
  defaultValue: 0,
};

// export const Counter = () => {
//   return (
//     <div className="mb-5 p-5 text-white bg-dark rounded-3">
//       <h2 className="text-center">Counter</h2>
//       <p className="text-center my-5" style={{ fontSize: 80 }}>
//         0
//       </p>

//       <div className="d-flex align-items-center justify-content-center w-100">
//         <button className="btn p-3 btn-outline-light w-25 mx-2" type="button">
//           Plus
//         </button>

//         <button className="btn p-3 btn-outline-light w-25 mx-2" type="button">
//           Minus
//         </button>
//       </div>
//     </div>
//   );
// };
