import React, { useMemo, useState, useEffect } from "react";
import * as Unicons from "@iconscout/react-unicons";
import { useRouter } from "next/router";

import AuthContext from "@/context/AuthContext.context";
import {
  setToken,
  getToken,
  removeToken,
  hasExpiredToken,
  setRefreshToken,
  getTokenDecode,
} from "@/auth/tokens.auth";

import "@/styles/globals.css";
import "@/styles/const.css";
import "@/styles/import.css";
import { getMeApi } from "@/api/user.api";

export default function App({ Component, pageProps }) {
  const [auth, setAuth] = useState(null);
  const [reloadUser, setReloadUser] = useState(false);
  const [reloadDataUser, setReloadDataUser] = useState(false);

  const [user, setUser] = useState(null);
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
      if (!user) {
        const response = await getMeApi(logout);
        console.log("USER:", response);
        setUser(response);
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
      data_user: user,
      login: login,
      logout: logout,
      setReloadUser: setReloadUser,
    }),
    [auth, user]
  );

  if (auth === undefined) {
    return null;
  }
  return (
    <AuthContext.Provider value={authData}>
      <Unicons.UilReact />
      <Component {...pageProps} />
    </AuthContext.Provider>
  );
}
