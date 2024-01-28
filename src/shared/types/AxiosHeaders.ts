import { HeadersDefaults } from 'axios';
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from '../../api/tokenHelpers';

export interface AxiosHeadersProperties extends HeadersDefaults {
  [ACCESS_TOKEN_KEY]: string;
  [REFRESH_TOKEN_KEY]: string;
}
