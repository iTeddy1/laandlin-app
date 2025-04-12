import z from "zod";

export const AddLocationSchema = z.object({
  address: z.string().min(1, "Address is required"),
  position: z.tuple([z.number(), z.number()]),
  url: z.string(),
  // .url('Invalid URL format'),
});

export type AddLocationSchemaType = z.infer<typeof AddLocationSchema>;
