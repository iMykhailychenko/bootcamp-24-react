import { login } from './utils';

const year = new Date().getFullYear();

export const LoginForm = () => {
  return (
    <form className="form-signin d-flex align-items-center justify-content-center mt-5">
      <div className="d-block" style={{ width: 300, height: 'max-content' }}>
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

        <div className="form-floating">
          <input type="email" className="form-control" id="email" placeholder="name@example.com" />
          <label htmlFor="email">Email address</label>
        </div>
        <div className="form-floating mt-4">
          <input type="password" className="form-control" id="pass" placeholder="Password" />
          <label htmlFor="pass">Password</label>
        </div>

        <button className="w-100 btn btn-lg btn-primary mt-4" type="button" onClick={login.submit}>
          Sign in
        </button>

        <p className="mt-5 mb-3 text-muted">© {year}</p>
      </div>
    </form>
  );
};
