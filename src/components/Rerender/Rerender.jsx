import { useState, useCallback, memo } from 'react';

// { name } === { name } // false
// name === name // true

// class Button extends PureComponent {
//   render() {
//     const { label, onClick } = this.props;
//     console.log('Button');

//     return (
//       <button className="btn btn-outline-light" type="button" onClick={onClick}>
//         {label}
//       </button>
//     );
//   }
// }

// const memo2 = callback => {
//   const cache = {};

//   return props => {
//     const result = callback(props);
//   };
// };

// const Button2 = memo2(props => {}); // ()

// Button2(props);

const Button = memo(({ label, onClick }) => {
  console.log('Button');
  return (
    <button className="btn btn-outline-light" type="button" onClick={onClick}>
      {label}
    </button>
  );
});

Button.displayName = 'Button';

export const Rerender = () => {
  // const ref = useRef();
  const [counter, setCounter] = useState(0);

  const handleCount = useCallback(() => {
    setCounter(prev => prev + 1);
  }, []);

  // const handleCount = () => {
  //   setCounter(prev => prev + 1);
  // };

  console.log('Rerender');

  return (
    <div className="d-flex flex-column justify-content-center align-items-center p-5 text-bg-dark rounded-3 mb-5">
      <h2>{counter}</h2>

      <Button label="Click me!" onClick={handleCount} />
    </div>
  );
};

// export class Rerender extends Component {
//   state = {
//     counter: 0,
//   };

//   handleCount = () => {
//     this.setState(prevState => ({ counter: prevState.counter + 1 }));
//   };

//   render() {
//     const { counter } = this.state;
//     console.log('Rerender');

//     return (
//       <div className="d-flex flex-column justify-content-center align-items-center p-5 text-bg-dark rounded-3 mb-5">
//         <h2>{counter}</h2>

//         <Button label="Click me!" onClick={this.handleCount} />
//       </div>
//     );
//   }
// }
