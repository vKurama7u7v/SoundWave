import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import sign from "jwt-encode";

import useAuth from "@/hooks/useAuth";

import { getRefreshToken } from "@/auth/tokens.auth";
import { spotifyAuthCall } from "@/auth/authentication.auth";

function AuthLayout({ children }) {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const { auth, logout, login } = useAuth();

  useEffect(() => {
    (async () => {
      const refresh_token = getRefreshToken();

      if (!auth) {
        if (refresh_token) {
          onRefreshToken(refresh_token);
        } else {
          router.push("/");
        }
      }
    })();
  }, [auth]);

  const onRefreshToken = async (token) => {
    setLoading(true);
    const response = await spotifyAuthCall({
      refresh_token: token,
      grant_type: "refresh_token",
    });

    // Si no hay repuesta
    if (!response) setLoading(false);

    // Confirmando token
    if (response.access_token) {
      // Codificando token
      const access_token = sign(
        {
          access_token: response.access_token,
          exp: Math.floor(Date.now() / 1000) + 60 * 60,
          token_type: response.token_type,
        },
        "secret"
      );

      // Enviando tokens
      login(access_token, token);
    }

    setLoading(false);
  };

  return <>{children}</>;
}

export default AuthLayout;
