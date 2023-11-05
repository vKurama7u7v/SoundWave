import { REFRESH_TOKEN, TOKEN } from "@/utils/const.utils";
import jwt from "jsonwebtoken";

export function setToken(token) {
  localStorage.setItem(TOKEN, JSON.stringify({ value: token }));
}
export function getToken() {
  return JSON.parse(localStorage.getItem(TOKEN))?.value ?? null;
}

export function setRefreshToken(token) {
  localStorage.setItem(REFRESH_TOKEN, token);
}

export function getRefreshToken() {
  return localStorage.getItem(REFRESH_TOKEN);
}

export function removeToken() {
  localStorage.removeItem(TOKEN);
}

export function removeRefreshToken() {
  localStorage.removeItem(REFRESH_TOKEN);
}

export function hasExpiredToken(token) {
  if (token) {
    const tokenDecode = jwt.decode(token);

    const expireDate = tokenDecode.exp * 1000;
    const currentDate = new Date().getTime();

    // Si token expiro...
    if (currentDate > expireDate) {
      console.log("expiro");
      removeToken();
      return true;
    }

    return false;
  }
  return false;
}
