/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MyContext from '../context/MyContext';
import StyledRegisterLoginForm from '../styles/StyledrRegisterLoginform';

import { loginWithEmailPassword } from '../api/authentication';
import { saveToken, getUserReady } from '../services/utils';

function Login() {
  const { customAlert, setLoadingAime } = React.useContext(MyContext);
  const navigate = useNavigate();
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  const [inputType, setInputType] = React.useState('password');

  const inputRef = React.useRef();

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

    try {
      await loginWithEmailPassword(user.email, user.password)
        .then(({ data }) => {
          saveToken(data.token);
          getUserReady(data.user);
        })
        .then(() => {
          navigate('/', { replace: true });
          customAlert('logged in');
        });
    } catch (e) {
      console.log('catch entered', e);
      const { response, message } = e;
      customAlert(response?.data || message);
      if (response.status === 401) {
        customAlert('Invalid username or password');
      }
    } finally {
      setLoadingAime({ message: '', show: false });
    }
  };

  return (
    <StyledRegisterLoginForm>
      <form className="login_form" onSubmit={handleSubmit}>
        <h1>Login to your account</h1>
        <input
          type="email"
          placeholder="Login With Email"
          name="email"
          defaultValue={currentUser?.email}
          required
        />
        <span className="password-span">
          <input
            ref={inputRef}
            type={inputType}
            placeholder="Password"
            name="password"
            required
          />
          <button
            type="button"
            onClick={() => {
              setInputType((prev) =>
                prev === 'password' ? 'text' : 'password'
              );

              inputRef.current.focus();
            }}
          >
            {inputType === 'password' ? 'show' : 'hide'}
          </button>
        </span>

        <button type="submit">Login</button>

        <p className="switch_paragraph">
          don&apos;t yet have an account?{' '}
          <span
            className="switch_fomr_btn"
            onClick={() => navigate('/register', { replace: true })}
          >
            register
          </span>
        </p>

        <p className="forgot_password" onClick={handleForgotPassword}>
          forgot Password ?
        </p>
      </form>
    </StyledRegisterLoginForm>
  );
}

export default Login;
