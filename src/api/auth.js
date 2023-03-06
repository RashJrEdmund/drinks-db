import { httpClient } from './axios';

export function register(user) {
  return httpClient.post(`users`, user);
}

export function login(username, password) {
  return httpClient.post('login', { username, password });
}

export function getCurrentUser() {
  return httpClient.get('current-user').then(({ data }) => data);
}
