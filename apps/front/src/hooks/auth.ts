import { postAuthLogin, postAuthRefresh, postAuthRegister } from "../api/endpoints/beast-endpoints";
import { LoginBody, RegisterBody } from "../api/model";

export function getAuthTokens() {
  return {
    access_token: window.localStorage.getItem("access_token"),
    refresh_token: window.localStorage.getItem("refresh_token"),
  }
}

export function isLoggedIn() {
  const access_token = window.localStorage.getItem("access_token");
  if (!access_token) return false;
  return true;
}

export async function logIn(values: LoginBody) {
  const res = await postAuthLogin(values);
  window.localStorage.setItem('access_token', res.access_token);
  window.localStorage.setItem('refresh_token', res.refresh_token);
  return res;
}
export async function register(values: RegisterBody) {
  await postAuthRegister(values)
}

export async function refreshAccessToken() {
  const refresh_token = window.localStorage.getItem("refresh_token");
  if (!refresh_token) return false;
  const res = await postAuthRefresh({ refresh_token })
  window.localStorage.setItem('access_token', res.access_token)
  window.localStorage.setItem('refresh_token', res.refresh_token)
}

export async function logout() {
  window.localStorage.removeItem('access_token')
  window.localStorage.removeItem('refresh_token')
}