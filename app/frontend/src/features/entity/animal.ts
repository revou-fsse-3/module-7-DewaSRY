import { z } from "zod";

export const animalSchemas = z.object({
  name: z.string({
    required_error: "please insert the animal name ",
  }),
  species: z.enum([
    "Reptiles",
    "Mammals",
    "Invertebrates",
    "Amphibians",
    "Insect",
    "Fish",
    "Bird",
  ]),
  gender: z.enum(["Male", "Female"]),
  age: z.number({
    required_error: "please insert the animal age",
  }),
});
export type animalPayload = z.infer<typeof animalSchemas>;

export interface animalPayloadWithId extends animalPayload {
  animalId: string;
}
