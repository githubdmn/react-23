import Cookies from 'js-cookie';

const accessTokenKey = 'accessToken';
const refreshTokenKey = 'refreshToken';

export const getAccessToken = () => Cookies.get(accessTokenKey);

export const setAccessToken = (accessToken: string) =>
  Cookies.set(accessTokenKey, accessToken, {
    secure: true,
  });

export const removeAccessToken = () => Cookies.remove(accessTokenKey);

export const getRefreshToken = () => Cookies.get(refreshTokenKey);

export const setRefreshToken = (accessToken: string) =>
  Cookies.set(refreshTokenKey, accessToken, {
    secure: true,
  });

export const removeRefreshToken = () => Cookies.remove(refreshTokenKey);
