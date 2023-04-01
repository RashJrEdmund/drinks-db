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

const postDrink = async (drink) => {
  return httpClient.post('drinks', drink);
};

const deleteDrink = async (id) => {
  return httpClient.delete(`drinks/${id}`);
};

export {
  register,
  loginWithEmailPassword,
  updateUserProfile,
  deleteUser,
  deleteDrink,
  postDrink,
};
