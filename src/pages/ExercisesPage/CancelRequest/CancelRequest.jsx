import { useState, useEffect, useRef } from 'react';

import axios from 'axios';

export const CancelRequest = () => {
  const controllerRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    controllerRef.current = new AbortController();

    axios
      .get('http://localhost:4000', { signal: controllerRef.current.signal })
      .then(console.log)
      .catch(console.log)
      .finally(() => {
        controllerRef.current = null;
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <p>{isLoading && 'Loading ...'}</p>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptas vero temporibus natus. Illum culpa ea
        excepturi cumque sapiente itaque aut nam ipsa, veritatis, aliquam consequuntur, provident exercitationem. Amet,
        cupiditate?
      </p>
    </>
  );
};
