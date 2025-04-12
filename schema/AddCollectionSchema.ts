import z from "zod";

export const AddCollectionSchema = z.object({
  name: z.string(),
  bannerUrl: z.string(),
  avatarUrl: z.string(),
  shortDescription: z.string(),
  headline: z.string(),
  description: z.string(),
  mainImageUrl: z.string(),
  galleryImageUrls: z.array(z.string()),
});

export type AddCollectionSchemaType = z.infer<typeof AddCollectionSchema>;
