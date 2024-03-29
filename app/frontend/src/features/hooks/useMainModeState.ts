import { create } from "zustand";

const initialState = {
  modelOpen: false,
};
type Actions = {
  openModel: () => void;
  closeModel: () => void;
};
type State = typeof initialState;
const useMainModeState = create<State & Actions>((set) => ({
  ...initialState,
  openModel: () => set({ modelOpen: true }),
  closeModel: () => set({ modelOpen: false }),
}));
export default useMainModeState;
