import { create } from "zustand";
import { getCookies } from "@utils/cookie";
const initialState = {
  isAuthentications: getCookies() != null,
  // isAuthentications: false,
};
type Actions = {
  setIsAuthentications: (value: boolean) => void;
};
type State = typeof initialState;
const useAuthenticationState = create<State & Actions>((set) => ({
  ...initialState,
  setIsAuthentications: (value) => set({ isAuthentications: value }),
}));
export default useAuthenticationState;
