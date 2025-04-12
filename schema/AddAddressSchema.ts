import z from "zod";

export const AddAddressSchema = z.object({
  _id: z.string().optional(),
  fullName: z.string().min(1, "Name is required"),
  phoneNumber: z.string().min(1, "Phone number is required"),
  country: z.string().min(1, "Country is required"),
  state: z.string().min(1, "State is required"),
  city: z.string().min(1, "City is required"),
  county: z.string().min(1, "County is required"),
  address: z.string().min(1, "Street address is required"),
  isDefault: z.boolean(),
});

export type AddAddressSchemaType = z.infer<typeof AddAddressSchema>;
