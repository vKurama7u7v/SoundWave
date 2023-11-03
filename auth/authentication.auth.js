import apiCall from "@/api/recoil.api";
import { SPOTIFY_CALLBACK_HOST } from "@/utils/const.utils";

const commonParams = {
  redirect_uri: SPOTIFY_CALLBACK_HOST,
  client_id: process.env.CLIENT_ID,
  client_secret: process.env.CLIENT_SECRET,
};

export const spotifyAuthCall = async (requiredParams) => {
  try {
    const params = {
      ...requiredParams,
      grant_type: "authorization_code",
      ...commonParams,
    };

    const searchParams = Object.keys(params)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(params[key])
      )
      .join("&");

    const spotifyCall = await apiCall({
      method: "POST",
      url: "https://accounts.spotify.com/api/token",
      body: searchParams,
      headers: { "Content-type": "application/x-www-form-urlencoded" },
    });

    console.log(await spotifyCall);
    return await spotifyCall.json();
  } catch (error) {
    console.log("spotifyAuthCall:", error);
  }
};
