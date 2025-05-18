import z from "zod";

export const CheckoutSchema = z.object({
  address: z.object({}).optional(),
  discount: z.string().optional(),
  note: z.string().optional(),
});

export type CheckoutSchemaType = z.infer<typeof CheckoutSchema>;
