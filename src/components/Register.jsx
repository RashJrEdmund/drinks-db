/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import MyContext from '../context/MyContext';
// import API_BASE_URL from '../constants';

function Register() {
  // const URL = `http://localhost:3000/users?apikey=${apikey}`;
  const { toggleAlert } = React.useContext(MyContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.clear();

    if (e.target.password.value !== e.target.passwordConfirmation.value) {
      toggleAlert("passwords don't match");
      return;
    }
    const { target } = e;

    const data = {
      first_name: target.firstName.value,
      last_name: target.lastName.value,
      password: target.password.value,
      email: target.email.value,
      phone: target.phone.value,
      is_admin: false,
    };

    const options = {
      method: 'POST',
      url: `http://localhost:3000/users`,
      body: data,
    };

    console.log('this data', data);

    axios.post(options).then((res) => console.log('this, res', res));

    // navigate('/login');
  };

  return (
    <div className="register_container">
      <form className="regiter_form" onSubmit={handleSubmit}>
        <h1>Please create your account</h1>
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
