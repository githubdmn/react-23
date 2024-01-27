import axios from 'axios';
import { environmentVariables } from '../env/environmentVariables';
import { getAccessToken } from './tokenHelpers';

const apiProtectedClient = axios.create({
  baseURL: environmentVariables.baseApiUrl,
});

apiProtectedClient.interceptors.request.use(
  (reqConfig) => {
    const accessToken = getAccessToken();

    if (accessToken) {
      reqConfig.headers.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXItNDQ1QG1haWwuY29tIiwic3ViIjoiMTM4NjEiLCJpYXQiOjE3MDYzODg5NDMsImV4cCI6MTcwNjM5MjU0M30.OmFBKvL59jQOcH-xu6IAXqTYr0b_0T2SCkNV8NNo-s4`;
    }

    return reqConfig;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const apiPublicClient = axios.create({
  baseURL: environmentVariables.baseApiUrl,
});

export { apiProtectedClient, apiPublicClient };
