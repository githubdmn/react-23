import axios, { AxiosInstance, AxiosResponse } from 'axios';

import { environmentVariables } from '../env/environmentVariables';
import {
  getAccessToken,
  getRefreshToken,
  removeAccessToken,
  removeRefreshToken,
} from './tokenHelpers';

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: environmentVariables.baseUrl,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = getAccessToken();
    const refreshToken = getRefreshToken();

    if (accessToken && refreshToken) {
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
  (response: AxiosResponse) => response,
  (error) => {
    const status = error.response.status;

    if (status === 401) {
      removeAccessToken();
      removeRefreshToken();
    }

    return Promise.reject(error);
  }
);
