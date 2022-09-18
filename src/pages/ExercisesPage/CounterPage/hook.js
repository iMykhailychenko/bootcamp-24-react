import { useCallback, useEffect, useState } from '@types/react';

const COUNTER_KEY = 'counter-key';

const getLocalData = () => JSON.parse(localStorage.getItem(COUNTER_KEY));

export const useCounter = () => {
  const [android, setAndroid] = useState(() => getLocalData()?.android ?? 0);
  const [iphone, setIphone] = useState(() => getLocalData()?.iphone ?? 0);

  useEffect(() => {
    localStorage.setItem(COUNTER_KEY, JSON.stringify({ android, iphone }));
  }, [android, iphone]);

  const handleUpdate = useCallback(event => {
    const { name } = event.target;

    switch (name) {
      case 'android':
        setAndroid(prev => {
          if (Math.random() > 0.5) {
            return prev + 1;
          }

          return prev - 1;
        });
        break;

      case 'iphone':
        setIphone(prev => {
          if (Math.random() > 0.5) {
            return prev + 1;
          }

          return prev - 1;
        });
        break;

      default:
        throw new Error();
    }
  }, []);

  return { android, iphone, handleUpdate };
};
