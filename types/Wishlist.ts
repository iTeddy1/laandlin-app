import { Color, Sizes } from "./Product";

export interface IWishlistItem {
  _id: string;
  name: string;
  price: number;
  salePrice: number;
  slug: string;
  sizes: Sizes[];
  colors: Color[];
}

export interface WishlistItemAddRequest {
  productId: string;
}

export interface WishlistItemRemoveRequest {
  productId: string;
}
