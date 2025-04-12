import z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({ message: "Email is not valid." }),
  password: z.string().min(1, "Password is required").min(8, {
    message: "Password must be at least 8 characters.",
  }),
});
export type LoginSchemaType = z.infer<typeof LoginSchema>;
