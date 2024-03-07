/**
 *
 */

import { z, string } from "zod";
export const authSchemas = z.object({
  username: string({
    required_error: "please enter your user name ",
  }),
  password: string({
    required_error: "please enter your password",
  }),
});
export type authPayload = z.infer<typeof authSchemas>;

export const employeeSchemas = z.object({
  role: z.enum(["Animal keeper", "Manager", "Cleaner"], {
    required_error: "please put the role on the employee",
  }),
  schedule: z.enum(["Morning", "Middle day", "Afternoon"]),
  name: string({
    required_error: "please enter employee name",
  }),
  email: z.string(),
  phone: z.string(),
});

export type employeePayload = z.infer<typeof employeeSchemas>;
export interface registerResponse {
  access_token: string;
}
export interface employeePayloadWithId extends employeePayload {
  employeeId: string;
}
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
