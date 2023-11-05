import { REFRESH_TOKEN, TOKEN } from "@/utils/const.utils";
import jwtDecode from "jwt-decode";

export function setToken(token) {
  localStorage.setItem(TOKEN, JSON.stringify({ value: token }));
}

export function setRefreshToken(token) {
  localStorage.setItem(REFRESH_TOKEN, token);
}

export function getToken() {
  return JSON.parse(localStorage.getItem(TOKEN))?.value ?? null;
}

export function removeToken() {
  localStorage.removeItem(TOKEN);
}

export function hasExpiredToken(token) {
  const tokenDecode = jwtDecode(token);
  const expireDate = tokenDecode.expires_in * 1000;
  const currentDate = new Date().getTime();

  if (currentDate > expireDate) {
    return true;
  }
  return false;
}
