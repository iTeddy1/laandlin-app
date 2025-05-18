import z from "zod";

export const RegistrationSchema = z
  .object({
    fullName: z.string().trim().min(3, "Full name must contain at least 3 characters!"),
    email: z.string().trim().email({ message: "Email is not valid." }),
    password: z.string().trim().min(8, "Password must contain at least 8 characters!"),
    passwordConfirm: z.string().trim(),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: "Password does not match confirmation",
    path: ["passwordConfirm"],
  });

export type RegistrationSchemaType = z.infer<typeof RegistrationSchema>;
