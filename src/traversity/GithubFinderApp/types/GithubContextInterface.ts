import { TGithubAction } from './index.ts';
import TUser from './UserType.ts';

interface GithubContextInterface {
  users: TUser[];
  user: TUser;
  isLoading: boolean;
  dispatch: (action: TGithubAction) => void;
}

export default GithubContextInterface;
