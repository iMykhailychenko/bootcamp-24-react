import { useEffect, useState, useRef } from 'react';

import { IoStopOutline, IoPlayOutline } from 'react-icons/io5';

import { Button } from '../../../components/Button';

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

export const TimerPage = () => {
  const ref = useRef(null);
  const [time, setTime] = useState(0);

  const handleStartTimer = () => {
    if (!ref.current) {
      ref.current = setInterval(() => {
        setTime(prev => prev + 1);
        console.log('setInterval');
      }, 0);
    }
  };

  const handleStopTimer = () => {
    if (ref.current) {
      clearInterval(ref.current);
      ref.current = null;
    }
  };

  useEffect(() => {
    return () => {
      handleStopTimer();
    };
  }, []);

  return (
    <>
      <p className="h1 mb-4 text-center">{formatTime(time)}</p>

      <div className="d-flex justify-content-center">
        <Button className="btn-primary btn-lg mx-2" onClick={handleStartTimer}>
          <IoPlayOutline />
        </Button>

        <Button className="btn-danger btn-lg mx-2" onClick={handleStopTimer}>
          <IoStopOutline />
        </Button>
      </div>
    </>
  );
};
