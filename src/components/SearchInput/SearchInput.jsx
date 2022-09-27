import { useState } from 'react';

import { omitBy } from 'lodash-es';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { useSearchParams } from 'react-router-dom';

import { Button } from '../Button';

import { alphabet } from './alphabet';

const getDefaultValues = value => {
  const result = value.replace(/[^a-z]/gi, ' ').split('');
  if (result.length) return result.map(item => item.replace(/[^a-z]/gi, 'Space'));

  return ['None'];
};

const getStringFromCharList = list => list.join('').replace(/None/gi, '').replace(/Space/gi, ' ');

const Select = ({ value, onChange, index }) => {
  const handleChange = event => {
    onChange(prev => prev.map((char, i) => (index === i ? event.target.value : char)));
  };

  return (
    <select
      value={value}
      onChange={handleChange}
      className="form-select me-1 mb-2"
      aria-label="Default select example"
      style={{ width: '90px' }}
    >
      {alphabet.map(char => (
        <option key={char} value={char}>
          {char}
        </option>
      ))}
    </select>
  );
};

export const SearchInput = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get('page');
  const search = searchParams.get('search');

  const [charList, setCharList] = useState(() => getDefaultValues(search ?? ''));

  const pushChar = () => setCharList(prev => [...prev, '']);
  const popChar = () =>
    setCharList(prev => (prev.length > 1 ? prev.filter((_, index) => index + 1 !== prev.length) : ['None']));

  const reset = () => {
    setSearchParams(page ? { page } : {});
    setCharList(['None']);
  };

  const handleSubmit = event => {
    event.preventDefault();
    setSearchParams(omitBy({ page, search: getStringFromCharList(charList) }, v => !v));
  };

  return (
    <>
      <form action="#" className="d-flex flex-wrap" onSubmit={handleSubmit}>
        {charList.map((char, index) => (
          <Select key={index} index={index} value={char} onChange={setCharList} />
        ))}

        <Button className="btn-secondary me-1 mb-2" onClick={popChar}>
          <FiMinus />
        </Button>
        <Button className="btn-secondary me-1 mb-2" onClick={pushChar}>
          <FiPlus />
        </Button>

        <Button className="btn-secondary me-1 mb-2" onClick={reset}>
          Reset
        </Button>

        <Button type="submit" className="btn-primary mb-2">
          Submit
        </Button>
      </form>

      <p className="mt-2 mb-4">
        Your search query: <b>{getStringFromCharList(charList) || '...'}</b>
      </p>
    </>
  );
};
