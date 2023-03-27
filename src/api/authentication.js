import httpClient from './axios';

const register = async (user) => {
  return httpClient.post(`users`, user);
};

const loginWithEmailPassword = async (email, password) => {
  return httpClient.post('login', { email, password });
};

const deleteUser = async (user) => {
  return httpClient.delete(`users/${user?.id}`);
};

export { register, loginWithEmailPassword, deleteUser };
