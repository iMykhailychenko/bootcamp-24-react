import { useState } from 'react';

import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';

import { useAuth } from '../../../../context/auth.context';
import { Button } from '../../../Button';

export const Login = () => {
  const { login } = useAuth();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [isPassword, setIsPassword] = useState(true);
  const toggle = () => setIsPassword(prev => !prev);

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'username':
        setUsername(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        throw new Error();
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    login(username, password);
  };

  return (
    <form active="#" onSubmit={handleSubmit}>
      <h2>Hello</h2>

      <div className="input-group mb-3">
        <input
          value={username}
          onChange={handleChange}
          type="text"
          name="username"
          className="form-control"
          placeholder="Username"
        />
      </div>

      <div className="input-group mb-3">
        <input
          value={password}
          onChange={handleChange}
          name="password"
          type={isPassword ? 'password' : 'text'}
          className="form-control"
          placeholder="Password ..."
        />

        <Button className="btn-outline-secondary" onClick={toggle}>
          {isPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
        </Button>
      </div>

      <Button type="submit">Log In</Button>
    </form>
  );
};
