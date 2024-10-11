import { createContext, ReactNode, useEffect, useReducer } from 'react';
import UserType from '../types/UserType';
import GithubReducer from './GithubReducer';

const GithubContext = createContext<{
  users: UserType[];
  isLoading: boolean;
  fetchUsers: () => Promise<void>;
}>({
  users: [],
  isLoading: true,
  fetchUsers: async () => {},
});

export const GithubContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const initialState = {
    users: [],
    isLoading: true,
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  const fetchUsers = async () => {
    setLoading();
    const response = await fetch(
      `${import.meta.env.VITE_GITHUB_API_URL}/users`,
      {
        method: 'GET',
        headers: {
          // Authorization: `token ${import.meta.env.VITE_GITHUB_BEARER_TOKEN}`,
        },
      },
    );
    const data = await response.json();
    dispatch({
      type: 'GET_USERS',
      payload: data,
    });
  };

  const setLoading = () => dispatch({ type: 'SET_LOADING' });

  return (
    <GithubContext.Provider
      value={{ users: state.users, isLoading: state.isLoading, fetchUsers }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
