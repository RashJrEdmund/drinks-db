import httpClient from './axios';

const register = async (user) => {
  return httpClient.post(`users`, user);
};

const loginWithEmailPassword = async (username, password) => {
  return httpClient.post('login', { username, password });
};

export { register, loginWithEmailPassword };
