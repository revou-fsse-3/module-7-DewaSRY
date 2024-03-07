import { z, string } from "zod";
export const loginSchemas = z.object({
  username: string({
    required_error: "please enter your user name ",
  }),
  password: string({
    required_error: "please enter your password",
  }),
});

export const registerSchema = z
  .object({
    password: z.string().min(4),
    confirmPassword: z.string().min(4),
    username: string({
      required_error: "please enter your user name ",
    }),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: "custom",
        message: "The passwords did not match",
      });
    }
  });
export type registerPayload = z.infer<typeof registerSchema>;
export type loginPayload = z.infer<typeof loginSchemas>;
export interface registerResponse {
  access_token: string;
}
