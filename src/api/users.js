import { get, post } from './fetchr';

function encode(str) {
  return encodeURIComponent(str).replace(/%20/g, '+');
}

export function register(username, password, email, displayName) {
  return (config) => post(`/users`, { username, password, email, displayName });
}

export function logout(token) {
  return (config) => post(`/logout`, {}, config);
}

export function login(username, password) {
  return (config) => get(`/login?username=${ username }&password=${ password }`, config);
}
