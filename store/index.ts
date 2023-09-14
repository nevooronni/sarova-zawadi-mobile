import {create} from 'zustand';

export interface AppStore {
  userFullName: string;
  isLoading: boolean;
  actions: {
    setIsLoading: (val: boolean) => void;
    setFullName: (val: string) => void;
  };
}

export const useAppStore = create<AppStore>((set, get) => ({
  userFullName: '',
  isLoading: false,
  actions: { 
    setIsLoading: loading => set({ isLoading: loading }),
    setFullName: fullName => set({ userFullName: fullName }),
  },
}));

export const useAppActions = () => useAppStore(state => state.actions);

export const useAppState = () => useAppStore(state => state);