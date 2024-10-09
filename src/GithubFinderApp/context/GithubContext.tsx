import { createContext, ReactNode, useEffect, useState } from 'react';
import UserType from '../types/UserType';

const GithubContext = createContext<{
  users: UserType[];
  isLoading: boolean;
  fetchUsers: () => Promise<void>;
}>({
  users: [],
  isLoading: true,
  fetchUsers: async () => {},
});

export const GithubContextProvider = ({ children }: { children: ReactNode }) => {
  const [users, setUsers] = useState<UserType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
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
    setUsers(data);
    setIsLoading(false);
  };

  return (
    <GithubContext.Provider value={{ users, isLoading, fetchUsers }}>
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;