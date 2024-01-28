import axios from 'axios';
import { environmentVariables } from '../env/environmentVariables';
import { getAccessToken } from './tokenHelpers';

const apiClient = axios.create({
  baseURL: environmentVariables.baseApiUrl,
});

apiClient.interceptors.request.use(
  async (reqConfig) => {
    const accessToken = getAccessToken();

    if (accessToken) reqConfig.headers.access_token = accessToken;

    return reqConfig;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { apiClient };
