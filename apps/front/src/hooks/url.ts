export function getApiUrl() {
    const url = new URL(window.origin);
    const baseUrl = __API_PORT__ ? `${url.protocol}//${url.hostname}:${__API_PORT__}/api` : `${url.protocol}//${url.host}/api`;
    return baseUrl;
}


export function getWsApiUrl() {
    const url = new URL(window.origin);
    const baseUrl = __API_PORT__ ? `ws//${url.hostname}:${__API_PORT__}/api` : `ws//${url.host}/api`;
    return baseUrl;
}