import { useDispatch, useSelector } from 'react-redux';

import { changeSearchAction } from '../../../redux/users/slice.users';

export const SearchInput = () => {
  const dispatch = useDispatch();
  const search = useSelector(state => state.users.search);

  const handleChange = event => {
    dispatch(changeSearchAction(event.target.value));
  };

  const handleResetSearch = () => {
    dispatch(changeSearchAction(''));
  };

  return (
    <div className="input-group input-group-lg mb-5">
      <input
        type="text"
        className="form-control"
        placeholder="Type to search ..."
        value={search}
        onChange={handleChange}
      />
      <button className="btn btn-outline-secondary" type="button" onClick={handleResetSearch}>
        Reset
      </button>
    </div>
  );
};
