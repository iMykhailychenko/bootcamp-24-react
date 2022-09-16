import { useState } from 'react';

import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';

import { Button } from '../../../Button';

export const Login = () => {
  const [isPassword, setIsPassword] = useState(true);
  const toggle = () => setIsPassword(prev => !prev);

  return (
    <>
      <h2>Hello</h2>

      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Username" />
      </div>

      <div className="input-group mb-3">
        <input type={isPassword ? 'password' : 'text'} className="form-control" placeholder="Password ..." />
        <Button className="btn-outline-secondary" onClick={toggle}>
          {isPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
        </Button>
      </div>

      <Button>Log In</Button>
    </>
  );
};
