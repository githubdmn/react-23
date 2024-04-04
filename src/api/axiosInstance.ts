import axios, { AxiosInstance, AxiosResponse } from 'axios';

import { environmentVariables } from '../env/environmentVariables';
import {
  getAccessToken,
  getRefreshToken,
  removeAccessToken,
  removeRefreshToken,
} from './tokenHelpers';
import { useUserStore } from '../store/userStore';

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
  (response: AxiosResponse) => response.data,
  (error) => {
    const status = error.response.status;

    if (status === 401) {
      useUserStore.getState().removeEmail();
      removeAccessToken();
      removeRefreshToken();
    }

    return Promise.reject(error);
  }
);
