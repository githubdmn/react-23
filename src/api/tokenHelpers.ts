import Cookies from 'js-cookie';

export const ACCESS_TOKEN_KEY = 'access_token';
export const REFRESH_TOKEN_KEY = 'refresh_token';

export const getAccessToken = () => Cookies.get(ACCESS_TOKEN_KEY) || undefined;

export const setAccessToken = (accessToken: string) =>
  Cookies.set(ACCESS_TOKEN_KEY, accessToken);

export const removeAccessToken = () => Cookies.remove(ACCESS_TOKEN_KEY);

export const getRefreshToken = () =>
  Cookies.get(REFRESH_TOKEN_KEY) || undefined;

export const setRefreshToken = (refreshToken: string) =>
  Cookies.set(REFRESH_TOKEN_KEY, refreshToken);

export const removeRefreshToken = () => Cookies.remove(REFRESH_TOKEN_KEY);
