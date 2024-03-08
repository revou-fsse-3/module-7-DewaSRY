import { create } from "zustand";
import { getCookies, setCookies } from "@utils/cookie";
const initialState = {
  isAuthentications: getCookies()?.length !== 0,
};
type Actions = {
  setIsAuthentications: (value: boolean) => void;
};
type State = typeof initialState;
const useAuthenticationState = create<State & Actions>((set) => ({
  ...initialState,
  setIsAuthentications: (value) => {
    if (!value) {
      setCookies(""); // use to remove aut jwt on cookie
    }
    set({ isAuthentications: value });
  },
}));
export default useAuthenticationState;
