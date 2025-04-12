import z from "zod";

export const AddDiscountSchema = z
  .object({
    name: z.string().min(1, "Name is required"),
    code: z.string().min(1, "Code is required"),
    discount: z.number().min(0, "Discount must be greater than or equal to 0"),
    startDate: z.coerce.date({ message: "Start date is required and must be a valid date" }),
    endDate: z.coerce.date({ message: "End date is required and must be a valid date" }),
  })
  .refine((data) => data.startDate < data.endDate, {
    message: "Start date must be before end date",
    path: ["endDate"],
  });

export type AddDiscountSchemaType = z.infer<typeof AddDiscountSchema>;
