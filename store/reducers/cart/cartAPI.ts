import { API } from "@/services/axios";
import { CartItemAddRequest, CartItemRemoveRequest, CartItemUpdateRequest } from "@/shared/interfaces/Cart";

export const getCart = async () => {
  const res = await API.get("/carts");
  return res.data;
};

export const addItemToCart = async (product: CartItemAddRequest) => {
  const res = await API.post("/carts", product);
  return res.data;
};

export const updateItemInCart = async (cartItem: CartItemUpdateRequest) => {
  const res = await API.patch("/carts", cartItem);
  return res.data;
};

export const removeItemFromCart = async (cartItem: CartItemRemoveRequest) => {
  const res = await API.delete("/carts", { data: cartItem });
  return res.data;
};

export const clearCart = async () => {
  const res = await API.delete("/carts/clear");
  return res.data;
};

export const checkout = async () => {
  const res = await API.post("/carts/checkout");
  return res.data;
};
