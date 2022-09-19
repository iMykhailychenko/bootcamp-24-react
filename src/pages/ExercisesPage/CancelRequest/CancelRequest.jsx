import { useState, useEffect, useRef } from 'react';

import axios from 'axios';
import { toast } from 'react-toastify';

const ABORT_CODE = 'ERR_CANCELED';

export const CancelRequest = () => {
  const controllerRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    controllerRef.current = new AbortController();

    axios
      .get('http://localhost:4000', { signal: controllerRef.current.signal })
      .then(console.log)
      .catch(error => {
        if (error.code === ABORT_CODE) {
          toast.success('Request successfully canceled');
          return;
        }

        console.log(error);
        toast.error('Something went wrong');
      })
      .finally(() => {
        controllerRef.current = null;
        setIsLoading(false);
      });

    return () => {
      if (controllerRef.current) {
        controllerRef.current.abort();
      }
    };
  }, []);

  return (
    <>
      <p>{isLoading ? 'Loading ...' : 'Request is Done'}</p>
    </>
  );
};
