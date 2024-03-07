/* eslint-disable react-hooks/rules-of-hooks */
import { create } from "zustand";
import { animalPayloadWithId as animals } from "@utils/type";
const initialState = {
  animals: [] as animals[],
  currentAnimalId: "",
  currentAnimal: {} as animals,
};
type Actions = {
  setAnimals: (values: animals[]) => void;
  setCurrentAnimal: (values: string) => void;
};
type State = typeof initialState;
const useAnimals = create<State & Actions>((set) => ({
  ...initialState,
  setAnimals: (values) => set({ animals: values }),
  setCurrentAnimal: (values) => {
    const animals = useAnimals.getState().animals;
    const matchAnimal = animals.filter((a) => (a.animalId = values)).at(0);
    set({
      currentAnimalId: values,
      currentAnimal: matchAnimal,
    });
  },
}));
export default useAnimals;
