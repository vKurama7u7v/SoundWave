import React, { useCallback, useEffect } from "react";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";

import { SPOTIFY_AUTH_URL } from "@/utils/const.utils";
import { spotifyAuthCall } from "@/auth/authentication.auth";

import {
  isAuthenticated,
  spotifyResponseToken,
  spotifyRefreshToken,
} from "@/auth/atoms.auth";

function HomeScreen() {
  const router = useRouter();

  const [isAuth, setIsAuth] = useRecoilState(isAuthenticated);
  const [refreshToken, setRefreshToken] = useRecoilState(spotifyRefreshToken);
  const [responseToken, setResponseToken] =
    useRecoilState(spotifyResponseToken);

  const authenticateUser = useCallback(
    async (code) => {
      // isAutehticated, responseToken, refreshToken
      try {
        let res;
        // Si refresToken existe,
        // entonces realiza una llamada a refresh token,
        // de lo contrario solicita un token nuevo

        if (refreshToken) {
          // TODO: Haz la llamada
          res = await spotifyAuthCall({ refresh_token: refreshToken });
        } else {
          // Solicita un token nuevo
          res = await spotifyAuthCall({ code: code });
        }

        if (res.access_token) {
          console.log(res);
          setRefreshToken(res?.refresh_token);
          setResponseToken(res);
          setIsAuth(true);

          // TODO: Redirigir a dashboard
          router.push("/auth");
        } else {
          console.log("El usuario no fue logeado");
          router.push("/auth");
        }
      } catch (error) {
        console.log("autheticateUser:", error);
      }
    },
    [setRefreshToken, setResponseToken, setIsAuth, refreshToken]
  );

  useEffect(() => {
    const spotifyCode = router.query.code;

    if (spotifyCode) {
      authenticateUser(spotifyCode);
    }
  }, [router.query]);

  const handleLoginClick = () => {
    // if (isAuth) {
    //   router.replace("/auth");
    // } else {
    // }
    window.location.replace(SPOTIFY_AUTH_URL);
  };

  return (
    <div>
      <button onClick={handleLoginClick}>Sign In</button>
    </div>
  );
}

export default HomeScreen;
