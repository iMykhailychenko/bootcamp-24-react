import { useState } from 'react';

import { useSearchParams } from 'react-router-dom';

import { Button } from '../../Button';

export const PostsSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search') ?? '';
  const page = searchParams.get('page') ?? 1;

  const [value, setValue] = useState(search);
  const handleChange = event => setValue(event.target.value);

  const handleSubmit = event => {
    event.preventDefault();
    setSearchParams(value.trim() ? { search: value, page: 1 } : { page: 1 });
  };

  const handleReset = () => {
    setSearchParams({ page });
  };

  return (
    <form className="input-group input-group-lg mb-5" onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-control"
        placeholder="Type to search..."
        value={value}
        onChange={handleChange}
      />
      <Button onClick={handleReset} className="btn-outline-secondary">
        Reset
      </Button>
      <Button type="submit">Search</Button>
    </form>
  );
};
