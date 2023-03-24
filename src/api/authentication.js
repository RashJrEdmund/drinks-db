import httpClient from './axios';

const register = (user) => {
  return httpClient.post(`users`, user);
};

const loginWithEmailPassword = (username, password) => {
  return httpClient.post('login', { username, password });
};

export { register, loginWithEmailPassword };
