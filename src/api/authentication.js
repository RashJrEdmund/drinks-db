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

const getCurrentUser = async () => {
  return httpClient.get('current-user').then(({ data }) => {
    let user = data;

    const { createdAt } = user;
    const day = createdAt.split('-').pop().split('T').shift();
    const month = createdAt.split('-')[1];
    const year = createdAt.split('-')[0];

    const joinedSince = `${day}-${month}-${year}`;

    user = { ...user, joinedSince };

    delete user.createdAt;

    return user;
  });
};

const deleteUser = async (user) => {
  return httpClient.delete(`users/${user?.id}`);
};

/* Drink routes */

const postDrink = async (drink) => {
  return httpClient.post('drinks', drink);
};

const patchDrink = async (drink) => {
  return httpClient.patch(`drinks/${drink.id}`, drink);
};

const deleteDrink = async (id) => {
  return httpClient.delete(`drinks/${id}`);
};

/* Category routes */

const deleteCategory = (id) => {
  return httpClient.delete(`categories/${id}`);
};

export {
  register,
  loginWithEmailPassword,
  updateUserProfile,
  getCurrentUser,
  deleteUser,
  deleteDrink,
  postDrink,
  patchDrink,
  deleteCategory,
};
