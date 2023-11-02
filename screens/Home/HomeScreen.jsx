import React, { useEffect } from "react";
import { useRouter } from "next/router";

import { SPOTIFY_AUTH_URL } from "@/utils/const.utils";
import { spotifyAuthCall } from "@/auth/authentication.auth";

function HomeScreen() {
  const router = useRouter();

  const authenticateUser = async (code) => {
    const res = await spotifyAuthCall(code);
  };

  useEffect(() => {
    const spotifyCode = router.query.code;
    console.log(`Token: ${spotifyCode}`);

    if (spotifyCode) {
      authenticateUser(spotifyCode);
    }
  }, [router.query]);

  const handleLoginClick = () => {
    window.location.replace(SPOTIFY_AUTH_URL);
  };

  return (
    <div>
      <button onClick={handleLoginClick}>Sign In</button>
    </div>
  );
}

export default HomeScreen;
