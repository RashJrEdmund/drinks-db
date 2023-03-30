import httpClient from './axios';

const register = async (user) => {
  return httpClient.post(`users`, user);
};

const loginWithEmailPassword = async (email, password) => {
  return httpClient.post('login', { email, password });
};

const updateUserProfile = async (user) => {
  return httpClient.patch(`users/${user?.id}`, user);
};

const deleteUser = async (user) => {
  return httpClient.delete(`users/${user?.id}`);
};

const another = async (param) => {
  console.log(param);
};

export {
  register,
  loginWithEmailPassword,
  updateUserProfile,
  deleteUser,
  another,
};
