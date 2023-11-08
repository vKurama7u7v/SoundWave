import { authFetch } from "@/auth/fetch.auth";

export async function getMeApi(logout) {
  try {
    const url = "https://api.spotify.com/v1/me";
    const result = await authFetch(url, null, logout);

    return result ? result : null;
  } catch (error) {
    console.log("getMeApi:", error);
    return null;
  }
}

export async function getMyTopTracks(logout, filters) {
  try {
    const url = `https://api.spotify.com/v1/me/top/tracks${
      filters ? filters : ""
    }`;
    // "?limit=50&offset=0&time_range=short_term"
    const result = await authFetch(url, null, logout);
    return result;
  } catch (error) {
    console.log("getMyTopTracks:", error);
    return null;
  }
}
