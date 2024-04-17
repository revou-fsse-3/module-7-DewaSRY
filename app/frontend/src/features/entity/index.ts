export * from "./animal";
export * from "./user";
export * from "./employee";

export const species = [
  "Reptiles",
  "Mammals",
  "Invertebrates",
  "Amphibians",
  "Insect",
  "Fish",
  "Bird",
];

export const roles = ["Animal keeper", "Manager", "Cleaner"];
export const schedules = ["Morning", "Middle day", "Afternoon"];
export const genders = ["Male", "Female"];
export interface updatePayload<T> {
  payload: Partial<T>;
  id: string;
}
