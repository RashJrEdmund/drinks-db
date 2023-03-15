import httpClient from './axios';

const register = (user) => {
  return httpClient.post(`users`, user);
};

const login = (username, password) => {
  return httpClient.post('login', { username, password });
};

export { register, login };
