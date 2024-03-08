import { create } from "zustand";

const initialState = {
  title: "",
  massage: "",
  isOpen: false,
};
type Actions = {
  setProblemFound: (title: string, massage: string) => void;
  setClose: () => void;
};
type State = typeof initialState;
const useAlertState = create<State & Actions>((set) => ({
  ...initialState,
  setProblemFound: (title, massage) =>
    set({ title: title, massage: massage, isOpen: true }),

  setClose: () => set({ title: "", massage: "", isOpen: false }),
}));
export default useAlertState;
