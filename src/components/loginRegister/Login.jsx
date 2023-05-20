/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEyeSlash, FaEye } from 'react-icons/fa';
import { MyContext } from '../../context/MyContext';
import StyledRegisterLoginForm from './StyledrRegisterLoginform';

import { loginWithEmailPassword } from '../../api/authentication';
import { saveToken } from '../../services/utils';
import useLoader from '../../hooks/useLoader';

function Login() {
  const { customAlert } = React.useContext(MyContext);
  const navigate = useNavigate();
  const [inputType, setInputType] = React.useState('password');

  const { LoadingComponent, setLoadingAnime, loadingAnime } = useLoader();

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

    setLoadingAnime({ message: 'getting user...', show: true });

    try {
      await loginWithEmailPassword(user.email, user.password)
        .then(({ data: { token } }) => saveToken(token))
        .then(() => navigate('/', { replace: true }));
    } catch (e) {
      const { response, message } = e;
      customAlert(response?.data || message);
      if (response.status === 401) {
        customAlert('Invalid username or password');
      }
    } finally {
      setLoadingAnime({ message: '', show: false });
    }
  };

  return (
    <StyledRegisterLoginForm>
      {loadingAnime.show && <LoadingComponent />}

      <form className="login_form" onSubmit={handleSubmit}>
        <h1>Login to your account</h1>
        <input
          type="email"
          placeholder="Login With Email"
          name="email"
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
            {inputType === 'password' ? <FaEye /> : <FaEyeSlash />}
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
