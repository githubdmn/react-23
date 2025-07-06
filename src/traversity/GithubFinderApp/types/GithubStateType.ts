import { TUser } from './index.ts';

type GithubStateType = {
  users: TUser[];
  user: TUser;
  isLoading: boolean;
};

export default GithubStateType;
