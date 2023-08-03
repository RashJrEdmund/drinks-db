/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEyeSlash, FaEye } from 'react-icons/fa';
import { loginWithEmailPassword, register } from '../../api/authentication';
import StyledRegisterLoginForm from './StyledrRegisterLoginform';
import { saveToken } from '../../services/utils';
import useLoader from '../../hooks/useLoader';
import { useAppContext } from '../../context/AppContext';

function Register() {
  const { customAlert } = useAppContext();
  const [inputType, setInputType] = React.useState({
    one: 'password',
    two: 'password',
  });

  const { LoadingComponent, setLoadingAnime, loadingAnime } = useLoader();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { target } = e;

    if (target.password.value !== target.passwordConfirmation.value) {
      customAlert("user passwords don't match");
      return;
    }

    setLoadingAnime({ message: 'registering...', show: true });

    const user = {
      first_name: target.firstName.value,
      last_name: target.lastName.value,
      password: target.password.value,
      email: target.email.value,
      phone: target.phone.value,
      is_admin: false,
    };

    await register(user)
      .then(async () => {
        await loginWithEmailPassword(user.email, user.password)
          .then(({ data: { token } }) => saveToken(token))
          .then(() => navigate('/', { replace: true }));
      })
      .catch((err) => {
        const { response, message } = err;
        customAlert(response?.data || message);
      })
      .finally(() => setLoadingAnime({ message: '', show: false }));
  };

  return (
    <StyledRegisterLoginForm>
      {loadingAnime.show && <LoadingComponent />}

      <form className="regiter_form" onSubmit={handleSubmit}>
        <h1>Create An account</h1>
        <input type="text" placeholder="First Name" name="firstName" required />
        <input type="text" placeholder="Last Name" name="lastName" required />
        <input type="email" placeholder="Email Address" name="email" required />
        <input type="tel" placeholder="Phone Number" name="phone" />

        <span className="password-span">
          <input
            type={inputType.one}
            placeholder="Password"
            name="password"
            required
          />
          <button
            type="button"
            onClick={() =>
              setInputType((prev) => ({
                ...prev,
                one: prev.one === 'password' ? 'text' : 'password',
              }))
            }
          >
            {inputType.one === 'password' ? <FaEye /> : <FaEyeSlash />}
          </button>
        </span>

        <span className="password-span">
          <input
            type={inputType.two}
            placeholder="Password Confirmation"
            name="passwordConfirmation"
            required
          />
          <button
            type="button"
            onClick={() =>
              setInputType((prev) => ({
                ...prev,
                two: prev.two === 'password' ? 'text' : 'password',
              }))
            }
          >
            {inputType.two === 'password' ? <FaEye /> : <FaEyeSlash />}
          </button>
        </span>

        <button type="submit">Create Account</button>

        <p className="switch_paragraph">
          already have an account?{' '}
          <span
            className="switch_fomr_btn"
            onClick={() => navigate('/login', { replace: true })}
          >
            logIn
          </span>
        </p>
      </form>
    </StyledRegisterLoginForm>
  );
}

export default Register;
