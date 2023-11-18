import { geniusFetch } from "@/auth/fetch.auth";
const BASE_URL = "https://genius-song-lyrics1.p.rapidapi.com";

// "https://genius-song-lyrics1.p.rapidapi.com/song/lyrics/?id=2378782";
// 'https://genius-song-lyrics1.p.rapidapi.com/search/?q=Everglow%20Coldplay&per_page=10&page=1';
// 'https://genius-song-lyrics1.p.rapidapi.com/song/details/?id=2396871'

export async function searchTrackGenius(logout, search) {
  try {
    if (search) {
      const encode = encodeURIComponent(search);
      const url = `${BASE_URL}/search/?q=${encode}&per_page=10&page=1`;
      const result = await geniusFetch(url, logout);
      return result ? result : null;
    }
    return null;
  } catch (error) {
    console.log("searchTrackGenius", error);
    return null;
  }
}

export async function getSongLyricsGenius(logout, id) {
  try {
    if (id) {
      const url = `${BASE_URL}/song/lyrics/?id=${id}`;
      const result = await geniusFetch(url, logout);
      return result ? result : null;
    }
    return null;
  } catch (error) {
    console.log("getSongLyricsGenius", error);
    return null;
  }
}

export async function getSongDetailsGenius(logout, id) {
  try {
    if (id) {
      const url = `${BASE_URL}/song/details/?id=${id}`;
      const result = await geniusFetch(url, logout);
      return result ? result : null;
    }
    return null;
  } catch (error) {
    console.log("getSongDetailsGenius", error);
    return null;
  }
}
