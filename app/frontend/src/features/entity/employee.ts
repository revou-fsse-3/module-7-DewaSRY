import { z } from "zod";
export const employeeSchemas = z.object({
  role: z.enum(["Animal keeper", "Manager", "Cleaner"], {
    required_error: "please put the role on the employee",
  }),
  schedule: z.enum(["Morning", "Middle day", "Afternoon"], {
    required_error: "please put the right schedule",
  }),
  name: z.string({
    required_error: "please enter employee name",
  }),
  email: z.string(),
  phone: z.string(),
});
export type employeePayload = z.infer<typeof employeeSchemas>;
export interface employeePayloadWithId extends employeePayload {
  employeeId: string;
}
