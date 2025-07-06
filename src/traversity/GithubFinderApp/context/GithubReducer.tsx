import { TGithubAction, TGithubState } from "../types";

const GithubReducer = (
  state: TGithubState,
  action: TGithubAction,
): TGithubState => {
  switch (action.type) {
    case 'GET_USERS':
      return {
        ...state,
        users: action.payload,
        isLoading: false,
      };
    case 'SET_LOADING':
      return {
        ...state,
        isLoading: true,
      };
    case 'GET_USER':
      return {
        ...state,
        user: action.payload,
        isLoading: false,
      };
    case 'CLEAR_USERS':
      return {
        ...state,
        users: [],
      };
    default:
      return state;
  }
};

export default GithubReducer;
