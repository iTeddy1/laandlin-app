import z from "zod";

// const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png"];

const ColorSchema = z.object({
  id: z.string(),
  color: z.string().min(1, "Color is required"),
  images: z.array(z.string()).min(1, "Image is required"),
  imageUrl: z.string().min(1, "Image URL is required"),
});

const SizeSchema = z.object({
  _id: z.string(),
  size: z.string().min(1, "Size is required"),
  price: z.number().positive().min(0, "Price must be greater than or equal to 0"),
  salePrice: z.number().positive().min(0, "Sale price must be greater than or equal to 0"),
  stockQuantity: z.number().positive().min(0, "Stock must be greater than or equal to 0"),
});

export const AddProductSchema = z
  .object({
    name: z.string().min(1, "Name is required"),
    description: z.string().min(1, "Description is required"),
    price: z.number().positive().min(0, "Price must be greater than or equal to 0"),
    salePrice: z.number(),
    stockQuantity: z.number().positive().min(0, "Stock must be greater than or equal to 0"),
    colors: z.array(ColorSchema).min(1, "Color is required"),
    category: z.string().min(1, "Category is required"),
    tags: z.array(z.string()).min(1, "Tags is required"),
    collection: z.string().nullable(),
    sizes: z.array(SizeSchema),
    sku: z.string().min(1, "SKU is required"),
    material: z.array(z.string()).min(1, "Material is required"),
    ages: z.string().min(1, "Ages is required"),
    gender: z.enum(["Boy", "Girl", "Unisex"]),
    status: z.enum(["Sale", "New", "Hot"]),
    availability: z.enum(["In Stock", "Out Of Stock", "Pre Order"]),
    weight: z.number().positive().min(0, "Weight must be greater than or equal to 0"),
  })
  .superRefine((data, ctx) => {
    if (data.salePrice && data.salePrice > data.price) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Sale price must be less than or equal to the price",
        path: ["salePrice"],
      });
    }
  })
  .superRefine((data, ctx) => {
    data.sizes.forEach((size) => {
      if (size.salePrice && size.salePrice > size.price) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "All sale price must be less than or equal to the price",
          path: ["sizes"],
        });
      }
    });
  });
export type AddProductSchemaType = z.infer<typeof AddProductSchema>;
