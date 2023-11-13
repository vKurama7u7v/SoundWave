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

export async function getMyTop(logout, top, filters) {
  try {
    const url = `https://api.spotify.com/v1/me/top/${top}${
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

export async function getMyFullTop(logout, top, params1, params2) {
  try {
    const part1 = await getMyTop(logout, top, params1);
    const part2 = await getMyTop(logout, top, params2);

    const { items: p1 } = part1;
    const { items: p2 } = part2;

    // Combinando los 2 arrays
    const result = p1.concat(p2.splice(1));
    return result ? result : null;
  } catch (error) {
    console.log("getMyFullTop:", error);
    return null;
  }
}

export async function getTracksAudioFeatures(logout, data) {
  try {
    if (data) {
      let id_list = [];

      for (let index = 0; index < data.length; index++) {
        const element = data[index].id;
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
    console.log("getTracksAudioFeatures:", error);
    return null;
  }
}

// https://api.spotify.com/v1/recommendations?limit=10&seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_genres=classical%2Ccountry&seed_tracks=0c6xIDDpzE81m2q797ordA

export async function getRecommendations(
  logout,
  limit,
  seed_artists,
  seed_tracks
) {
  try {
    const url = `https://api.spotify.com/v1/recommendations?limit=${
      limit ? limit : 10
    }&seed_artists=${seed_artists}&seed_tracks=${seed_tracks}&market=SE`;

    const result = await authFetch(url, null, logout);
    return result ? result : null;
  } catch (error) {
    console.log("getRecommendations:", error);
    return null;
  }
}
