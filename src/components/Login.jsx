/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/main');
  };

  return (
    <div className="login_container">
      <form className="login_form" onSubmit={handleSubmit}>
        <h1>Please login to your account</h1>
        <input
          type="email"
          placeholder="Login With Email"
          name="emailAddress"
          required
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          required
        />
        <button type="submit">Login</button>

        <p className="switch_paragraph">
          don&apos;t yet have an account?{' '}
          <span
            className="switch_fomr_btn"
            onClick={() => navigate('/register')}
          >
            register
          </span>
        </p>
      </form>
    </div>
  );
}

export default Login;
