import { useEffect, useState } from 'react';

import { IoStopOutline, IoPlayOutline } from 'react-icons/io5';

import { Button } from '../Button';

const concat = (...args) => {
  return args.join(':');
};

const formatTime = time => {
  const milliseconds = time % 1000;

  const ss = time / 1000;
  const seconds = Math.floor(ss) % 60;
  const minutes = Math.floor(ss / 60) % 60;

  return concat(
    String(minutes).padStart(2, '0'),
    String(seconds).padStart(2, '0'),
    String(milliseconds).padStart(3, '0'),
  );
};

export const Timer = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setTime(prev => prev + 1);
    }, 0);

    return () => {
      clearTimeout(id);
    };
  }, []);

  return (
    <>
      <p className="h1 mb-4 text-center">{formatTime(time)}</p>

      <div className="d-flex justify-content-center">
        <Button className="btn-primary btn-lg mx-2">
          <IoPlayOutline />
        </Button>

        <Button className="btn-danger btn-lg mx-2">
          <IoStopOutline />
        </Button>
      </div>
    </>
  );
};
