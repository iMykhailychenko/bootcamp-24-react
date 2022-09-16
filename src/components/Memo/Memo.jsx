import { Button } from '../Button';

const cache = {};

const sum = (a, b) => {
  const key = JSON.stringify({ a, b });
  if (cache[key]) {
    console.log('from cache ', cache[key]);
    return;
  }

  const result = a + b;

  cache[key] = result;
  console.log('calculated ', result);
};

// JSON.stringify({ a, b }) -> "{a: 2, b: 2}"

export const Memo = () => {
  return (
    <>
      <Button onClick={() => sum(2, 2)}>2+2</Button>
      <Button onClick={() => sum(2, 3)}>2+3</Button>
      <Button onClick={() => sum(2, 4)}>2+4</Button>
    </>
  );
};
