import { useState, useEffect, useRef } from 'react';

const COUNTER_KEY = 'counter-key';

// 0 || 1 -> 1
// false || 1 -> 1
// 0 ?? 1 -> 0
// false ?? 1 -> false

// null ?? 1 -> 1
// undefined ?? 1 -> 1

// const = [10, 12]

const getLocalData = () => JSON.parse(localStorage.getItem(COUNTER_KEY));

// funcA(funcB())
// funcA() {}

// funcA(funcB)
// funcA() { funcB() }

// if (typeof inititaState === 'function') {
//    inititaState()
// }

export const Counter = () => {
  const containerRef = useRef(null);
  const valueRef = useRef(10);

  const [android, setAndroid] = useState(() => getLocalData()?.android ?? 0);
  const [iphone, setIphone] = useState(() => getLocalData()?.iphone ?? 0);

  console.log(valueRef);
  useEffect(() => {
    valueRef.current += 100;
    console.log('useEffect', valueRef.current);
  }, []);

  useEffect(() => {
    localStorage.setItem(COUNTER_KEY, JSON.stringify({ android, iphone }));
  }, [android, iphone]);

  // const stateMap = {
  //   android: setAndroid,
  //   iphone: setIphone,
  // };

  const handleUpdate = event => {
    const { name } = event.target;
    // stateMap[name](prev => prev + 1);

    switch (name) {
      case 'android':
        setAndroid(prev => prev + 1);
        break;

      case 'iphone':
        setIphone(prev => prev + 1);
        break;

      default:
        throw new Error();
    }

    // if (name === 'android') {
    //   setAndroid(prev => prev + 1);
    // } else if (name === 'iphone') {
    //   setIphone(prev => prev + 1);
    // }
  };

  return (
    <div ref={containerRef} className="mb-5 p-5 text-white bg-dark rounded-3">
      <p className="text-center my-5" style={{ fontSize: 80 }}>
        Android: {android}
      </p>
      <p className="text-center my-5" style={{ fontSize: 80 }}>
        iPhone: {iphone}
      </p>

      <div className="d-flex align-items-center justify-content-center w-100">
        <button type="button" name="android" className="btn p-3 btn-outline-light w-25 mx-2" onClick={handleUpdate}>
          Android
        </button>
        <button type="button" name="iphone" className="btn p-3 btn-outline-light w-25 mx-2" onClick={handleUpdate}>
          iPhone
        </button>
      </div>
    </div>
  );
};

// import { Component } from 'react';

// export class Counter extends Component {
//   state = {
//     android: 0,
//     iphone: 0,
//   };

//   handleUpdate = event => {
//     const { name } = event.target;
//     this.setState(prevState => ({ [name]: prevState[name] + 1 }));
//   };

//   render() {
//     const { android, iphone } = this.state;

//     return (
//       <div className="mb-5 p-5 text-white bg-dark rounded-3">
//         <p className="text-center my-5" style={{ fontSize: 80 }}>
//           Android: {android}
//         </p>
//         <p className="text-center my-5" style={{ fontSize: 80 }}>
//           iPhone: {iphone}
//         </p>

//         <div className="d-flex align-items-center justify-content-center w-100">
//           <button
//             type="button"
//             name="android"
//             className="btn p-3 btn-outline-light w-25 mx-2"
//             onClick={this.handleUpdate}
//           >
//             Android
//           </button>
//           <button
//             type="button"
//             name="iphone"
//             className="btn p-3 btn-outline-light w-25 mx-2"
//             onClick={this.handleUpdate}
//           >
//             iPhone
//           </button>
//         </div>
//       </div>
//     );
//   }
// }
