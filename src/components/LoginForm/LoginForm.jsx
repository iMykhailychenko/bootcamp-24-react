import { Component } from 'react';

import { login } from './utils';

const year = new Date().getFullYear();

export class LoginForm extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    // eslint-disable-next-line no-console
    console.log(this.state);

    this.setState({ email: '', password: '' });
    // event.currentTarget.reset();

    login.submit();
  };

  render() {
    const { email, password } = this.state;

    return (
      <form className="form-signin d-flex align-items-center justify-content-center mt-5" onSubmit={this.handleSubmit}>
        <div className="d-block" style={{ width: 300, height: 'max-content' }}>
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

          <div className="form-floating">
            <input
              id="email"
              type="text"
              name="email"
              className="form-control"
              placeholder="name@example.com"
              value={email}
              onChange={this.handleChange}
            />
            <label htmlFor="email">Email address</label>
          </div>

          <div className="form-floating mt-4">
            <input
              id="pass"
              type="password"
              name="password"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={this.handleChange}
            />
            <label htmlFor="pass">Password</label>
          </div>

          <button className="w-100 btn btn-lg btn-primary mt-4" type="submit">
            Sign in
          </button>

          <p className="mt-5 mb-3 text-muted">© {year}</p>
        </div>
      </form>
    );
  }
}
