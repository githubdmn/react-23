import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type UserStore = {
  email: string;
  setEmail: (email: string) => void;
  removeEmail: () => void;
};

export const useUserStore = create(
  persist<UserStore>(
    (set) => ({
      email: '',
      setEmail: (email: string) => set({ email }),
      removeEmail: () => set({ email: '' }),
    }),
    { name: 'user' }
  )
);
