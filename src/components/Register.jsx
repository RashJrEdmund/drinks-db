import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../api/auth';

function Register() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { target } = e;
    const data = {
      firstName: target.firstName.value,
      lastName: target.lastName.value,
      emailAddress: target.emailAddress.value,
      phone: target.phone.value,
      password: target.password.value,
      passwordConfirmation: target.passwordConfirmation.value,
    };

    setIsLoading(true);
    await register(data);
    setIsLoading(false);
    navigate('/login');
  };
  return (
    <form className="regiter_form" onSubmit={handleSubmit}>
      <h1>Please create your account</h1>
      <p>{isLoading ? 'Loading...' : ''}</p>
      <input type="text" placeholder="First Name" name="firstName" required />
      <input type="text" placeholder="Last Name" name="lastName" required />
      <input
        type="email"
        placeholder="Email Address"
        name="emailAddress"
        required
      />
      <input type="phone" placeholder="Phone Number" name="phone" />
      <input type="password" placeholder="Password" name="password" required />
      <input
        type="password"
        placeholder="Password Confirmation"
        name="passwordConfirmation"
        required
      />
      <button type="submit">Create Account</button>
    </form>
  );
}

export default Register;
