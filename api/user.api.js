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
