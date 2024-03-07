import { create } from "zustand";

type tabs = "animal" | "employee";
const initialState = {
  currentTab: "animal" as tabs,
};
type Actions = {
  setCurrentTab: (value: tabs) => void;
};
type State = typeof initialState;
const useMainTabState = create<State & Actions>((set) => ({
  ...initialState,
  setCurrentTab: (value) => set({ currentTab: value }),
}));
export default useMainTabState;
