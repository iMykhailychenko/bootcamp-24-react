import { useState, useMemo } from 'react';

import { useSearchParams } from 'react-router-dom';

import { Button } from '../../Button';

export const PostsSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const queryParams = useMemo(() => {
    return [...searchParams].reduce((acc, [key, value]) => {
      acc[key] = value;
      return acc;
    }, {});
  }, [searchParams]);

  const [value, setValue] = useState(queryParams.search ?? '');
  const handleChange = event => setValue(event.target.value);

  const handleSubmit = event => {
    event.preventDefault();
    // onSubmit(value);
    setSearchParams(prev => {
      return { ...queryParams, search: value, page: 1 };
    }); // -> ?search=sasd
  };

  return (
    <form className="input-group mb-3" onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-control"
        placeholder="Type to search..."
        value={value}
        onChange={handleChange}
      />
      <Button type="submit">Search</Button>
    </form>
  );
};
