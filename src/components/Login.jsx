/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MyContext from '../context/MyContext';

function Login() {
  const { customAlert } = React.useContext(MyContext);
  const navigate = useNavigate();
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));

  const handleForgotPassword = () => {
    customAlert('this feature is not yet available');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { target } = e;
    const data = {
      email: target.email.value,
      password: target.password.value,
    };

    if (
      data.password !== currentUser.password ||
      data.email !== currentUser.email
    ) {
      customAlert('Incorrect logins');
      return;
    }

    customAlert('logged in');
    navigate('/');
  };

  console.log('this currentUser', currentUser);

  return (
    <div className="login_container">
      <form className="login_form" onSubmit={handleSubmit}>
        <h1>Login to your account</h1>
        <input
          type="email"
          placeholder="Login With Email"
          name="email"
          defaultValue={currentUser?.email}
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

        <p className="forgot_password" onClick={handleForgotPassword}>
          forgot Password ?
        </p>
      </form>
    </div>
  );
}

export default Login;
