/* eslint-disable react-hooks/rules-of-hooks */
import { create } from "zustand";
import { animalPayloadWithId as animals } from "@/features/entity";
const initialState = {
  animals: [] as animals[],
  currentAnimalId: "",
  currentAnimal: {} as animals,
};
type Actions = {
  setAnimals: (values: animals[]) => void;
  setCurrentAnimal: (values: string) => void;
  resetCurrentAnimal: () => void;
};
type State = typeof initialState;
const useAnimals = create<State & Actions>((set) => ({
  ...initialState,
  setAnimals: (values) => set({ animals: values }),
  resetCurrentAnimal: () => set({ currentAnimalId: "" }),
  setCurrentAnimal: (values) => {
    const animals = useAnimals.getState().animals;
    const matchAnimal = animals.filter((a) => a.animalId === values).at(0);
    console.log(matchAnimal);
    set({
      currentAnimalId: values,
      currentAnimal: matchAnimal,
    });
  },
}));
export default useAnimals;
