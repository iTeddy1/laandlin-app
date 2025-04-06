export interface Review {
  _id?: string;
  product: ProductReview;
  user: UserReview;
  title: string;
  rating: number;
  comment: string;
  verified: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface UserReview {
  _id: string;
  email: string;
  username: string;
  phone: string;
}

export interface ProductReview {
  _id: string;
  name: string;
  slug: string;
}

export interface AddReviewRequest {
  userId: string;
  productId: string;
  title: string;
  rating: number;
  comment: string;
}

export interface UpdateReviewRequest {
  _id: string;
  title: string;
  rating: number;
  comment: string;
  verified: boolean;
}

export interface VerifyManyReviewsRequest {
  ids: string[];
}
