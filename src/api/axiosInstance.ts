import axios, { AxiosInstance, AxiosResponse } from 'axios';

import { environmentVariables } from '../env/environmentVariables';
import {
  getAccessToken,
  getRefreshToken,
  removeAccessToken,
} from './tokenHelpers';

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: environmentVariables.baseUrl,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = getAccessToken();
    const refreshToken = getRefreshToken();

    if (accessToken) {
      config.headers.access = accessToken;
      config.headers.refresh = refreshToken;
    }
    return config;
  },

  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },

  (error) => {
    if (error.response.status === 401) {
      const refreshToken = getRefreshToken();

      if (refreshToken) {
        //TODO - get new access token with the refresh token
      } else {
        removeAccessToken();
      }
    }

    return Promise.reject(error);
  }
);
