import { TUser } from ".";

type GithubStateType = {
  users: TUser[];
  user: TUser;
  isLoading: boolean;
}

export default GithubStateType;