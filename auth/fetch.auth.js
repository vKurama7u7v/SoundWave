import jwt from "jsonwebtoken";

import { getToken, getTokenDecode, hasExpiredToken } from "./tokens.auth";

export async function authFetch(url, params, logout) {
  let token = getToken();

  if (!token) {
    // Usuario no logueado
    logout();
  } else {
    // Token valido
    if (hasExpiredToken(token)) {
      // Token Caducado (return true)
      logout();
    } else {
      token = jwt.decode(token);
      // Token valido
      if (token.access_token) {
        const paramsTemp = {
          ...params,
          headers: {
            ...params?.headers,
            Authorization: `Bearer ${token.access_token}`,
          },
          form: {
            grant_type: "client_credentials",
          },
          json: true,
        };

        try {
          const response = await fetch(url, paramsTemp);
          const result = await response.json();
          return result;
        } catch (error) {
          console.log("authFetch", error);
          return error;
        }
      }
    }
  }
}
