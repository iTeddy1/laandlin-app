import z from "zod";

export const AddProductToCartSchema = z.object({
  productId: z.string(),
  quantity: z.number().min(1, "Quantity must be at least 1").max(10, "Quantity must be at most 10"),
  color: z.string(),
  size: z.string(),
});

export type AddProductToCart = z.infer<typeof AddProductToCartSchema>;
