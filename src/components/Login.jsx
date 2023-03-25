/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MyContext from '../context/MyContext';

import { loginWithEmailPassword } from '../api/authentication';
import { saveToken } from '../utils';

function Login() {
  const { customAlert, setLoadingAime } = React.useContext(MyContext);
  const navigate = useNavigate();
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));

  const handleForgotPassword = () => {
    customAlert('this feature is not yet available');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { target } = e;
    const user = {
      email: target.email.value,
      password: target.password.value,
    };

    await setLoadingAime({ message: 'processing...', show: true });

    if (
      user.password !== currentUser.password ||
      user.email !== currentUser.email
    ) {
      await setLoadingAime({ message: '', show: false });
      customAlert('Incorrect logins');

      target.password.value = '';
      return;
    }

    try {
      const { data } = await loginWithEmailPassword(user.email, user.password);
      saveToken(data.token);
      navigate('/');
    } catch (e) {
      const { response, message } = e;
      customAlert(response || message);
      if (e.response.status === 401) {
        customAlert('Invalid username or password');
      }
    } finally {
      setLoadingAime({ message: '', show: false });
    }

    customAlert('logged in');
    navigate('/');
  };

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
