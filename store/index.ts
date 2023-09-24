import {create} from 'zustand';

export interface AppStore {
  userFullName: string;
  email: string;
  isLoading: boolean;
  bookingSuccessMessage: string;
  actions: {
    setIsLoading: (val: boolean) => void;
    setFullName: (val: string) => void;
    setEmail: (val: string) => void;
    setBookingSuccessMessage: (val: string) => void;
  };
}

export const useAppStore = create<AppStore>((set, get) => ({
  userFullName: '',
  email: '',
  isLoading: false,
  bookingSuccessMessage: '',
  actions: { 
    setIsLoading: loading => set({ isLoading: loading }),
    setFullName: fullName => set({ userFullName: fullName }),
    setEmail: email => set({ email: email }),
    setBookingSuccessMessage: message => set({ bookingSuccessMessage: message }),
  },
}));

export const useAppActions = () => useAppStore(state => state.actions);

export const useAppState = () => useAppStore(state => state);