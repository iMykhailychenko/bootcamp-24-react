import { Component } from 'react';

import axios from 'axios';

const FactsList = ({ value, isLoading }) => {
  if (isLoading) return <p>Loading...</p>;

  return (
    <ul>
      {value.map(({ fact }) => (
        <li key={fact}>{fact}</li>
      ))}
    </ul>
  );
};

const withFetch = url => Element => {
  return class InnerComponent extends Component {
    state = {
      value: [],
      isLoading: false,
    };

    componentDidMount() {
      this.setState({ isLoading: true });

      axios
        .get(url)
        .then(({ data }) => {
          this.setState({ value: data.data });
        })
        .finally(() => {
          this.setState({ isLoading: false });
        });
    }

    render() {
      const { value, isLoading } = this.state;
      return <Element value={value} isLoading={isLoading} />;
    }
  };
};

const Facts = withFetch('https://catfact.ninja/facts?limit=10')(FactsList);

export const HOC = () => {
  return (
    <>
      <Facts />
    </>
  );
};

// const loggDecorator = func => {
//   return (a, b) => {
//     const result = func(a, b);
//     console.log(`${a} + ${b} = ${result}`);

//     return result;
//   };
// };

// const sum = (a, b) => a + b;

// loggDecorator(sum)(4, 5);
// sum(10, 5); // -> 15
