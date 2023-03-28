const TOKEN_LOCATION = 'token';

export function saveToken(token) {
  localStorage.setItem(TOKEN_LOCATION, token);
}

export function readToken() {
  return localStorage.getItem(TOKEN_LOCATION);
}
