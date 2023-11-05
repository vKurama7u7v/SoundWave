import React, { useMemo, useState, useEffect } from "react";
import { useRouter } from "next/router";

import jwtDecode from "jwt-decode";

import AuthContext from "@/context/AuthContext.context";
import {
  setToken,
  getToken,
  removeToken,
  hasExpiredToken,
  setRefreshToken,
} from "@/auth/tokens.auth";

import "@/styles/globals.css";
import { getMeApi } from "@/api/user.api";

export default function App({ Component, pageProps }) {
  const [auth, setAuth] = useState(undefined);
  const [reloadUser, setReloadUser] = useState(false);

  const [user, setUser] = useState(undefined);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const token = getToken();
    if (token) {
      setAuth({
        token,
      });
    } else {
      setAuth(null);
    }

    setReloadUser(false);
  }, [reloadUser]);

  useEffect(() => {
    (async () => {
      if (auth) {
        const response = await getMeApi(logout);
        setUser(response);
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    })();
  }, [auth]);

  const login = (access_token, refresh_token) => {
    setToken(access_token);
    setRefreshToken(refresh_token);
    setAuth({
      access_token,
    });
  };

  const logout = () => {
    if (auth) {
      removeToken();
      setAuth(null);
      router.push("/");
    }
  };

  const authData = useMemo(
    () => ({
      auth: auth,
      login: login,
      logout: logout,
      setReloadUser: setReloadUser,
    }),
    [auth]
  );

  if (auth === undefined) {
    return null;
  }
  return (
    <AuthContext.Provider value={authData}>
      {/* <DebugObserver /> */}
      <Component
        {...pageProps}
        isAuthenticated={isAuthenticated}
        user_data={user}
      />
    </AuthContext.Provider>
  );
}
