export default function apiCall({ url, params, method, body, headers }) {
  return fetch(url, {
    params: params,
    method: method,
    headers: headers,
    body: body,
  });
}
