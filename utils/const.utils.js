// SPOTIFY AUTH
// export const SPOTIFY_CALLBACK_HOST = "http://localhost:3000/";
export const SPOTIFY_CALLBACK_HOST = "https://soundwaveio.vercel.app/";

const scopes = "user-read-private user-read-email user-top-read";

/*
   playlist-read-collaborative user-library-read user-read-recently-played user-read-playback-position user-read-currently-playing user-read-playback-state streaming
*/

export const SPOTIFY_AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${process.env.CLIENT_ID}&response_type=code&redirect_uri=${SPOTIFY_CALLBACK_HOST}&scope=${scopes}`;

// AUTH LOCALSTORAGE
export const TOKEN = "access_token";
export const REFRESH_TOKEN = "refresh_token";
