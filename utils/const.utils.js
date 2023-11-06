// SPOTIFY AUTH
export const SPOTIFY_CALLBACK_HOST =
  "http://localhost:3000/" || "https://soundwaveio.vercel.app/";
export const SPOTIFY_AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${process.env.CLIENT_ID}&response_type=code&redirect_uri=${SPOTIFY_CALLBACK_HOST}&scope=user-read-private`;

// AUTH LOCALSTORAGE
export const TOKEN = "access_token";
export const REFRESH_TOKEN = "refresh_token";
