import { createContext, ReactNode, useReducer } from 'react';
import UserType from '../types/UserType';
import GithubReducer from './GithubReducer';

const GithubContext = createContext<{
  users: UserType[];
  isLoading: boolean;
  fetchUsers: () => Promise<void>;
  searchUser: (text: string) => Promise<void>;
  clearUsers: () => void;
}>({
  users: [],
  isLoading: true,
  fetchUsers: async () => {},
  searchUser: async () => {},
  clearUsers: () => {},
});

export const GithubContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const initialState = {
    users: [],
    isLoading: false,
  };

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

  const searchUser = async (text: string) => {
    setLoading();
    const params = new URLSearchParams({
      q: text,
    });
    const response = await fetch(
      `${import.meta.env.VITE_GITHUB_API_URL}/search/users?${params}`,
      {
        method: 'GET',
        headers: {
          // Authorization: `token ${import.meta.env.VITE_GITHUB_BEARER_TOKEN}`,
        },
      },
    );
    const { items } = await response.json();
    dispatch({
      type: 'GET_USERS',
      payload: items,
    });
  };

  const clearUsers = () => dispatch({ type: 'CLEAR_USERS' });

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        isLoading: state.isLoading,
        fetchUsers,
        searchUser,
        clearUsers,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
