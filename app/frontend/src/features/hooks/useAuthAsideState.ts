import { create } from "zustand";

const initialState = {
  authAsideOpen: false,
};
type Actions = {
  openAuthAside: () => void;
  closeAuthAside: () => void;
};
type State = typeof initialState;

const useMainModeState = create<State & Actions>((set) => ({
  ...initialState,
  openAuthAside: () => set({ authAsideOpen: true }),
  closeAuthAside: () => set({ authAsideOpen: false }),
}));
export default useMainModeState;
