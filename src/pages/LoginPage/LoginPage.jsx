import { useState } from 'react';

import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import { loginThunk } from '../../redux/auth/thunk.auth';

const year = new Date().getFullYear();

export const LoginPage = () => {
  const dispatch = useDispatch();

  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const handleChange = event => {
    const { value, name } = event.target;
    setValues(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      await dispatch(loginThunk(values)).unwrap();
      toast.success('Login successful');
    } catch {
      toast.error('Error');
    }
  };

  return (
    <form action="#" className="mt-5 mx-auto p-0" style={{ width: '450px' }} onSubmit={handleSubmit}>
      <h1 className="h3 mb-3 fw-normal">Please Log In</h1>

      <div className="form-floating my-4">
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="username"
          value={values.email}
          onChange={handleChange}
          className="form-control"
        />
        <label htmlFor="email">Email address</label>
      </div>

      <div className="form-floating my-4">
        <input
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          value={values.password}
          onChange={handleChange}
          className="form-control"
        />
        <label htmlFor="password">Password</label>
      </div>

      <Link to="/join" className="d-block my-4">
        Dont have account?
      </Link>

      <button className="w-100 mt-2 btn btn-lg btn-primary" type="submit">
        Log In
      </button>
      <p className="mt-5 mb-3 text-muted">© {year}</p>
    </form>
  );
};
