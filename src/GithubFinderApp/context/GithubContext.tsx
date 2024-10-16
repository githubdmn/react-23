import { createContext, ReactNode, useReducer } from 'react';
import UserType from '../types/UserType';
import GithubReducer from './GithubReducer';

const GithubContext = createContext<{
  users: UserType[];
  user: UserType;
  isLoading: boolean;
  fetchUsers: () => Promise<void>;
  searchUser: (text: string) => Promise<void>;
  clearUsers: () => void;
  getUser: (login: string) => Promise<void>;
}>({
  users: [],
  user: {} as UserType,
  isLoading: true,
  fetchUsers: async () => {},
  searchUser: async () => {},
  clearUsers: () => { },
  getUser: async () => {},
});

export const GithubProvider = ({ children }: { children: ReactNode }) => {
  const initialState = {
    users: [],
    user: {},
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

  const getUser = async (login: string) => {
    setLoading();
    const response = await fetch(
      `${import.meta.env.VITE_GITHUB_API_URL}/users/${login}`,
      {
        method: 'GET',
        headers: {
          // Authorization: `token ${import.meta.env.VITE_GITHUB_BEARER_TOKEN}`,
        },
      },
    );

    if (response.status === 404) {
      window.location.href = '/notfound';
    } else {
      const data = await response.json();
      // console.log(data);
      dispatch({
        type: 'GET_USER',
        payload: data,
      });
    }
  };

  const clearUsers = () => dispatch({ type: 'CLEAR_USERS' });

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        isLoading: state.isLoading,
        getUser,
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
