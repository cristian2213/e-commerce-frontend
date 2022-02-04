import { encodeToBase64 } from '../global/index';

export const saveTokenInLocalStorage = (tokenKey, tokenValue) => {
  const keyInBase64 = encodeToBase64(tokenKey);
  localStorage.setItem(keyInBase64, JSON.stringify(tokenValue));
};

export const getTokenFromLocalStorage = (tokenKey) => {
  const keyInBase64 = encodeToBase64(tokenKey);
  const token = localStorage.getItem(keyInBase64);
  if (!token) return null;
  return JSON.parse(token);
};
