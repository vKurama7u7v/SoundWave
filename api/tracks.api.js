import { authFetch } from "@/auth/fetch.auth";

export async function getRecentlyPlayedTracks(logout) {
  try {
    const url = "https://api.spotify.com/v1/me/player/recently-played?limit=50";
    const result = await authFetch(url, null, logout);
    return result ? result.items : null;
  } catch (error) {
    console.log("getRecentlyPlayedTracks:", error);
    return null;
  }
}

export async function getRecentlyAudioFeatures(logout, data) {
  try {
    if (data) {
      let id_list = [];

      for (let index = 0; index < data.length; index++) {
        const element = data[index].track.id;
        id_list.push(element);
      }

      if (id_list.length > 0) {
        const ids = id_list.toString();
        const url = `https://api.spotify.com/v1/audio-features?ids=${ids}`;

        const result = await authFetch(url, null, logout);
        return result ? result : null;
      }
    }

    return null;
  } catch (error) {
    console.log("getRecentlyAudioFeatures:", error);
    return null;
  }
}

export async function getTrackByID(logout, id) {
  try {
    if (!id) return null;

    const url = `https://api.spotify.com/v1/tracks/${id}`;
    const result = await authFetch(url, null, logout);

    return result ? result : null;
  } catch (error) {
    console.log("getTrackByID:", error);
    return null;
  }
}

export async function getTrackAudioFeaturesByID(logout, id) {
  try {
    if (!id) return null;
    const url = `https://api.spotify.com/v1/audio-features/${id}`;
    const result = await authFetch(url, null, logout);

    return result ? result : null;
  } catch (error) {
    console.log("getTrackAudioFeaturesByID:", error);
    return null;
  }
}
