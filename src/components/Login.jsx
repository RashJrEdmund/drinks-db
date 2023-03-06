import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../api/auth';
import { saveToken } from '../utils';

function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { target } = e;
    const user = {
      emailAddress: target.emailAddress.value,
      password: target.password.value,
    };

    setIsLoading(true);
    setError('');
    try {
      const { data } = await login(user.emailAddress, user.password);
      saveToken(data.token);
      navigate('/dashboard');
    } catch (er) {
      console.log(er);
      if (er.response.status === 401) {
        setError('Invalid username or password');
      }
    } finally {
      setIsLoading(false);
    }
    // navigate("/dashboard");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Please login to your account</h1>
      {isLoading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      <input
        type="email"
        placeholder="Email Address"
        name="emailAddress"
        required
      />
      <input type="password" placeholder="Password" name="password" required />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
