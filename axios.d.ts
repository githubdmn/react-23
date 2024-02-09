import 'axios';

interface Authorization {
  access_token: string;
  refresh_token: string;
}
declare module 'axios' {
  export interface HeadersDefaults extends Authorization {}
}
