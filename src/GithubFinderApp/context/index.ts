import AlertContext, { AlertProvider } from './AlertContext';
import GithubContext, { GithubProvider } from './GithubContext';
import { fetchUsers, getUser, searchUser } from './GithubActions';
import GithubReducer from './GithubReducer';
import AlertReducer from './AlertReducer';

export {
  GithubContext,
  GithubProvider,
  GithubReducer,
  AlertContext,
  AlertProvider,
  AlertReducer,
  fetchUsers,
  getUser,
  searchUser,
};
