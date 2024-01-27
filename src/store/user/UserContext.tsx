import { createContext, useContext, useState } from 'react';
import { PropsWithChildren } from '../../shared/types/ChildrenComponent';

type User = {
  id: number;
  email: string;
};

type UserContext = {
  user: User | null;
  setUser: (newUser: User) => void;
  clearUser: () => void;
};

const UserContext = createContext({} as UserContext);

const useUser = () => useContext(UserContext);

const UserProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<User | null>(null);

  const addUser = (newUser: User) => {
    setUser(newUser);
  };

  const clearUser = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, setUser: addUser, clearUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { useUser, UserProvider };
