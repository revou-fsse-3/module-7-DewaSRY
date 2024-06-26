/* eslint-disable react-hooks/rules-of-hooks */
import { create } from "zustand";
import { employeePayloadWithId as employee } from "@/features/entity";
const initialState = {
  employees: [] as employee[],
  currentEmployeeId: "",
  currentEmployee: {} as employee,
};
type Actions = {
  setEmployee: (values: employee[]) => void;
  setCurrentEmployee: (values: string) => void;
  resetCurrentEmployee: () => void;
};
type State = typeof initialState;
const useEmployees = create<State & Actions>((set) => ({
  ...initialState,
  setEmployee: (values) => set({ employees: values }),
  resetCurrentEmployee: () => set({ currentEmployeeId: "" }),
  setCurrentEmployee: (values) => {
    const employee = useEmployees.getState().employees;
    const matchEmployee = employee.filter((a) => a.employeeId === values).at(0);
    set({
      currentEmployeeId: values,
      currentEmployee: matchEmployee,
    });
  },
}));
export default useEmployees;
