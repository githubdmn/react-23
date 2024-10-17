import { TGithubAction } from '.';
import TUser from './UserType';

interface GithubContextInterface {
  users: TUser[];
  user: TUser;
  isLoading: boolean;
  dispatch: (action: TGithubAction) => void;
}

export default GithubContextInterface;
