import TUser from './UserType.ts';

type GithubActionType =
  | { type: 'GET_USERS'; payload: TUser[] }
  | { type: 'GET_USER'; payload: TUser }
  | { type: 'SET_LOADING' }
  | { type: 'CLEAR_USERS' };

export default GithubActionType;
