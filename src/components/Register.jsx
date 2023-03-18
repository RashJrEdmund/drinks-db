/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MyContext from '../context/MyContext';
import { register } from '../api/authentication';

function Register() {
  // const URL = `http://localhost:3000/users?apikey=${apikey}`;
  const { customAlert, setUserDetails } = React.useContext(MyContext);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = React.useState(false);

  const getUserReady = (data) => {
    localStorage.setItem('currentUser', JSON.stringify(data));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { target } = e;
    console.clear();

    if (target.password.value !== target.passwordConfirmation.value) {
      customAlert("user passwords don't match");
      return;
    }

    const data = {
      first_name: target.firstName.value,
      last_name: target.lastName.value,
      password: target.password.value,
      email: target.email.value,
      phone: target.phone.value,
      is_admin: false,
    };

    setIsLoading(true);

    await register(data)
      .then(() => getUserReady(data))
      .then(() => setIsLoading(false))
      .then(() => setUserDetails(data))
      .then(() => navigate('/login'));
  };

  return (
    <div className="register_container">
      <form className="regiter_form" onSubmit={handleSubmit}>
        <h1>Create An account</h1>
        <p>{isLoading ? 'Loading...' : ''}</p>
        <input type="text" placeholder="First Name" name="firstName" required />
        <input type="text" placeholder="Last Name" name="lastName" required />
        <input type="email" placeholder="Email Address" name="email" required />
        <input type="tel" placeholder="Phone Number" name="phone" />
        <input
          type="password"
          placeholder="Password"
          name="password"
          required
        />
        <input
          type="password"
          placeholder="Password Confirmation"
          name="passwordConfirmation"
          required
        />
        <button type="submit">Create Account</button>

        <p className="switch_paragraph">
          already have an account?{' '}
          <span className="switch_fomr_btn" onClick={() => navigate('/login')}>
            logIn
          </span>
        </p>
      </form>
    </div>
  );
}

export default Register;
