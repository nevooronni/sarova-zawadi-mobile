import {create} from 'zustand';

export interface AppStore {
  userFullName: string;
  email: string;
  isLoading: boolean;
  bookingSuccessMessage: string;
  bookingTotalAmount: number;
  routeStateId: string | number | null;
  actions: {
    setIsLoading: (val: boolean) => void;
    setFullName: (val: string) => void;
    setEmail: (val: string) => void;
    setBookingSuccessMessage: (val: string) => void;
    setBookingTotalAmount: (val: number) => void;
    setRouteStateId: (id: string | number)=> void;
  };
}

export const useAppStore = create<AppStore>((set, get) => ({
  userFullName: '',
  email: '',
  isLoading: false,
  bookingSuccessMessage: '',
  bookingTotalAmount: 0,
  routeStateId: null,
  actions: { 
    setIsLoading: loading => set({ isLoading: loading }),
    setFullName: fullName => set({ userFullName: fullName }),
    setEmail: email => set({ email: email }),
    setBookingSuccessMessage: message => set({ bookingSuccessMessage: message }),
    setBookingTotalAmount: amount => set({ bookingTotalAmount: amount }),
    setRouteStateId: id => set({ routeStateId: id }),
  },
}));

export const useAppActions = () => useAppStore(state => state.actions);

export const useAppState = () => useAppStore(state => state);