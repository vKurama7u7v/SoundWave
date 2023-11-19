import { geniusFetch } from "@/auth/fetch.auth";

const BASE_URL = "https://api.genius.com";

const onSearchHit = (data, search) => {
  const { title, artist } = search;
  const { response } = data;

  if (!response) return null;
  if (!response.hits || !(response.hits.length > 0)) return null;

  const { hits } = response;

  let item;
  for (let index = 0; index < hits.length; index++) {
    const element = hits[index];
    if (element.result.title.toLowerCase().includes(title.toLowerCase())) {
      item = element;
      break;
    }
  }

  return item ? item.result : null;
};

export async function searchTrackGenius(logout, params) {
  try {
    const { title, artist } = params;
    if (!title || !artist) return null;

    const query = encodeURIComponent(`${title} ${artist}`);
    const url = `${BASE_URL}/search?q=${query}&page=1&per_page=5`;

    const result = await geniusFetch(url, logout);
    const filter = onSearchHit(result, params);

    return filter ? filter : null;
  } catch (error) {
    console.log("searchTrackGenius", error);
    return null;
  }
}

export async function getSongLyricsGenius(logout, id) {
  try {
    if (!id) return null;

    const url = `${BASE_URL}/songs/${id}?text_format=plain`;
    const result = await geniusFetch(url, logout);

    return result ? result : null;
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
