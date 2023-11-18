import React, { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";

import sign from "jwt-encode";

import useAuth from "@/hooks/useAuth";
import { SPOTIFY_AUTH_URL } from "@/utils/const.utils";
import { spotifyAuthCall } from "@/auth/authentication.auth";
import TeamSection from "@/sections/Home/TeamSection";
import WaterDropSection from "@/sections/Animations/WaterDropSection";

function HomeScreen() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();

  const authenticateUser = async (code) => {
    setLoading(true);
    const response = await spotifyAuthCall({
      code: code,
      grant_type: "authorization_code",
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
      login(access_token, response.refresh_token);
      router.push("/app");
    }
    setLoading(false);
  };

  useEffect(() => {
    const spotifyCode = router.query.code;

    if (spotifyCode) {
      authenticateUser(spotifyCode);
    }
  }, [router.query]);

  const handleLoginClick = () => {
    window.location.replace(SPOTIFY_AUTH_URL);
  };

  return (
    <>
      <WaterDropSection handleLoginClick={handleLoginClick} />

      <TeamSection />
    </>
  );
}

export default HomeScreen;
