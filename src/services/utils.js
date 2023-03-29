const TOKEN_LOCATION = 'token';

export function saveToken(token) {
  localStorage.setItem(TOKEN_LOCATION, token);
}

export function readToken() {
  return localStorage.getItem(TOKEN_LOCATION);
}

export const getUserReady = async (data) => {
  let user = data;

  const { createdAt } = user;
  const day = createdAt.split('-').pop().split('T').shift();
  const month = createdAt.split('-')[1];
  const year = createdAt.split('-')[0];

  const joinedSince = `${day}-${month}-${year}`;

  user = { ...user, joinedSince };

  delete user.createdAt;

  localStorage.setItem('currentUser', JSON.stringify(user));
};
