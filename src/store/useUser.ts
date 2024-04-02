import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type UserProps = {
  isLogged?: boolean;
  setIsLogged: (isLogged: boolean) => void;
};

export const useUser = create<UserProps>()(
  persist(
    (set) => ({
      isLogged: false,
      setIsLogged: (isLogged: boolean) => set({ isLogged }),
    }),
    {
      name: 'user',
    }
  )
);
