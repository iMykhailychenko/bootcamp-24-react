import { useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'minus':
      return { ...state, counter: state.counter - action.payload };

    case 'plus':
      return { ...state, counter: state.counter + action.payload };

    default:
      return state;
  }
};

export const UseReducerPage = () => {
  const [state, dispatch] = useReducer(reducer, { counter: 0 });

  // const [counter, setCounter] = useState(0);
  // const handleMinus = () => {
  //   setCounter(prev => prev - 1);
  // };

  // setCounter(1);

  return (
    <div className="mb-5 p-5 text-white bg-dark rounded-3">
      <p className="text-center my-5" style={{ fontSize: 80 }}>
        {state.counter}
      </p>

      <div className="d-flex align-items-center justify-content-center w-100">
        <button
          type="button"
          name="android"
          className="btn p-3 btn-outline-light w-25 mx-2"
          onClick={() => dispatch({ type: 'minus', payload: 1 })}
        >
          -1
        </button>
        <button
          type="button"
          name="iphone"
          className="btn p-3 btn-outline-light w-25 mx-2"
          onClick={() => dispatch({ type: 'plus', payload: 1 })}
        >
          +1
        </button>
      </div>
    </div>
  );
};
