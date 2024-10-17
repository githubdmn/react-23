import { createContext, ReactNode, useReducer } from 'react';
import GithubReducer from './GithubReducer';
import { IGithubContext, TGithubAction, TGithubState, TUser } from '../types';

const GithubContext = createContext<IGithubContext>({
  users: [],
  user: {} as TUser,
  isLoading: true,
  dispatch: () => {},
});

export const GithubProvider = ({ children }: { children: ReactNode }) => {
  const initialState: TGithubState = {
    users: [],
    user: {} as TUser,
    isLoading: false,
  };

  const [state, dispatch] = useReducer<
    React.Reducer<TGithubState, TGithubAction>
  >(GithubReducer, initialState);

  // const setLoading = () => dispatch({ type: 'SET_LOADING' });
  // const clearUsers = () => dispatch({ type: 'CLEAR_USERS' });

  return (
    <GithubContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};
export default GithubContext;
