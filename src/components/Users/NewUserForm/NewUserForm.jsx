import { useReducer } from 'react';

import { useDispatch } from 'react-redux';

import { createNewUserAction, toggleModalAction } from '../../../redux/users/slice.users';
import { MagicButton, Button } from '../../Button';

import { BIO_TYPE, defaultValue, EMAIL_TYPE, NAME_TYPE, OPEN_TO_WORK_TYPE, utils, skillsList } from './utils';

export const NewUserForm = ({ onModalClose }) => {
  const dispatch = useDispatch();
  const [state, userDispatch] = useReducer(utils, defaultValue);

  const handleChange = event => {
    const { name, value } = event.target;
    userDispatch({ type: name, payload: value });
  };

  const handleSubmit = event => {
    event.preventDefault();

    dispatch(createNewUserAction(state));
    dispatch(toggleModalAction());
  };

  const { name, email, bio, skills, isOpenToWork } = state;

  return (
    <form action="#" autoComplete="off" className="w-100" onSubmit={handleSubmit}>
      <div className="mb-3 w-100">
        <label className="d-block w-100 form-label">
          <span>Name</span>
          <input autoFocus type="text" name={NAME_TYPE} className="form-control" value={name} onChange={handleChange} />
        </label>
      </div>

      <div className="mb-3 w-100">
        <label className="d-block w-100 form-label">
          <span>Email</span>
          <input type="email" name={EMAIL_TYPE} className="form-control" value={email} onChange={handleChange} />
        </label>
      </div>

      <div className="mb-3 w-100">
        <label className="d-block w-100 form-label">
          <span>BIO</span>
          <textarea name={BIO_TYPE} className="form-control" value={bio} onChange={handleChange} />
        </label>
      </div>

      <fieldset className="mt-3">
        <legend className="h6">Availability:</legend>

        <div className="form-check">
          <label className="form-check-label">
            <span>Is open to work</span>
            <input
              className="form-check-input"
              type="checkbox"
              name={OPEN_TO_WORK_TYPE}
              checked={isOpenToWork}
              onChange={handleChange}
            />
          </label>
        </div>
      </fieldset>

      <fieldset className="mt-3">
        <legend className="h6">Skills:</legend>

        <div className="d-flex">
          {skillsList.map(skill => (
            <div key={skill.value} className="form-check me-5">
              <label className="form-check-label">
                <span>{skill.label}</span>
                <input
                  name={skill.value}
                  type="checkbox"
                  className="form-check-input"
                  checked={skills.includes(skill.value)}
                  onChange={handleChange}
                />
              </label>
            </div>
          ))}
        </div>
      </fieldset>

      <div className="d-flex flex-column mt-5">
        <Button className="py-2 btn-light w-100 mb-2" onClick={onModalClose}>
          Cancel
        </Button>

        <MagicButton type="submit" className="py-2 btn-primary w-100">
          Create user
        </MagicButton>
      </div>
    </form>
  );
};
