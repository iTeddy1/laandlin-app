import { z } from "zod";

export const AddReviewSchema = z.object({
  title: z.string().min(5, "Headline must be at least 5 characters long"),
  rating: z.number().min(1, "Rating is required"),
  comment: z.string().min(5, "Comment must be at least 5 characters long"),
});

export const EditReviewSchema = z.object({
  title: z.string().min(5, "Headline must be at least 5 characters long"),
  rating: z.number().min(1, "Rating is required"),
  comment: z.string().min(5, "Comment must be at least 5 characters long"),
  verified: z.boolean(),
});

export type AddReviewSchemaType = z.infer<typeof AddReviewSchema>;
export type EditReviewSchemaType = z.infer<typeof EditReviewSchema>;
