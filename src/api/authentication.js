import httpClient from './axios';

const register = async (user) => {
  return httpClient.post(`users`, user);
};

const loginWithEmailPassword = async (email, password) => {
  return httpClient.post('login', { email, password });
};

export { register, loginWithEmailPassword };
