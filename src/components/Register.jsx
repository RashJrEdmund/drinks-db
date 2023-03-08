/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/login');
  };

  return (
    <div className="register_container">
      <form className="regiter_form" onSubmit={handleSubmit}>
        <h1>Please create your account</h1>
        <input type="text" placeholder="First Name" name="firstName" required />
        <input type="text" placeholder="Last Name" name="lastName" required />
        <input
          type="email"
          placeholder="Email Address"
          name="emailAddress"
          required
        />
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
