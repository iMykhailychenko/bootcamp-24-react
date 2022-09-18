import { useState } from 'react';

import { Button } from '../../Button';

export const PostsSearch = ({ defaultValue = '', onSubmit }) => {
  const [value, setValue] = useState(defaultValue);
  const handleChange = event => setValue(event.target.value);

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(value);
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
