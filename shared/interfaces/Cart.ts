import { Color, Sizes } from "./Product";

export interface Cart {
  subTotal: number;
  cart: ICartItem[];
}

export interface ICartItem {
  _id: string;
  name: string;
  productId: string;
  price: number;
  salePrice: number;
  color: Color;
  size?: Sizes;
  slug: string;
  quantity: number;
}

export interface CartItemAddRequest {
  productId: string;
  quantity: number;
  size: string;
  color: string;
}

export interface CartItemUpdateRequest {
  itemId: string;
  quantity: number;
}
export interface CartItemRemoveRequest {
  itemId: string;
}
