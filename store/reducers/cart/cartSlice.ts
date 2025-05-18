import { createAsyncThunk } from "@reduxjs/toolkit";
import { FAILURE_STATUS, IDLE_STATUS, LOADING_STATUS, SUCCESS_STATUS } from "@/shared/constants/status";
import { addItemToCart, clearCart, getCart, removeItemFromCart, updateItemInCart } from "./cartAPI";
import { RootState } from "@/store/store";
import { CartItemAddRequest, CartItemRemoveRequest, CartItemUpdateRequest, ICartItem } from "@/shared/interfaces/Cart";
import { TStatus } from "@/shared/enum/status";
import { createAppSlice } from "@/store/createAppSlice";

interface CartSliceState {
  status: TStatus;
  cartItemAddedStatus: TStatus;
  cartItemRemoveStatus: TStatus;
  cartItemUpdateStatus: TStatus;
  errors: string | null;
  cart: ICartItem[] | null;
  subTotal: number;
  isCartOpen: boolean;
}

const initialState: CartSliceState = {
  status: IDLE_STATUS,
  cartItemAddedStatus: IDLE_STATUS,
  cartItemUpdateStatus: IDLE_STATUS,
  cartItemRemoveStatus: IDLE_STATUS,
  errors: null,
  cart: null,
  subTotal: 0,
  isCartOpen: false,
};

export const getCartAsync = createAsyncThunk("cart/getCartAsync", async (_, { rejectWithValue }) => {
  try {
    const res = await getCart();
    return res;
  } catch (error: any) {
    return rejectWithValue(error.response.data.message || "Failed to fetch cart");
  }
});

export const addItemToCartAsync = createAsyncThunk(
  "cart/addItemToCartAsync",
  async (cartItem: CartItemAddRequest, { rejectWithValue }) => {
    try {
      const res = await addItemToCart(cartItem);
      return res;
    } catch (error: any) {
      return rejectWithValue(error.response.data.message || "Failed to add item to cart");
    }
  },
);

export const updateItemInCartAsync = createAsyncThunk(
  "cart/updateCartAsync",
  async (cartItem: CartItemUpdateRequest, { rejectWithValue }) => {
    try {
      const res = await updateItemInCart(cartItem);
      return res;
    } catch (error: any) {
      return rejectWithValue(error.response.data.message || "Failed to update item in cart");
    }
  },
);

export const removeItemFromCartAsync = createAsyncThunk(
  "cart/removeItemFromCartAsync",
  async (cartItem: CartItemRemoveRequest, { rejectWithValue }) => {
    try {
      const res = await removeItemFromCart(cartItem);
      return res;
    } catch (error: any) {
      return rejectWithValue(error.response.data.message || "Failed to remove item from cart");
    }
  },
);

export const clearCartAsync = createAsyncThunk("cart/clearCartAsync", async (_, { rejectWithValue }) => {
  try {
    const res = await clearCart();
    return res;
  } catch (error: any) {
    return rejectWithValue(error.response.data.message || "Failed to clear cart");
  }
});

export const cartSlice = createAppSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleCart(state) {
      state.isCartOpen = !state.isCartOpen;
    },
    openCart(state) {
      state.isCartOpen = true;
    },
    closeCart(state) {
      state.isCartOpen = false;
    },
    resetCartItemAddedStatus(state) {
      state.cartItemAddedStatus = IDLE_STATUS;
    },
    resetCartItemRemoveStatus(state) {
      state.cartItemRemoveStatus = IDLE_STATUS;
    },
    resetCartItemUpdateStatus(state) {
      state.cartItemUpdateStatus = IDLE_STATUS;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addItemToCartAsync.pending, (state) => {
        state.cartItemAddedStatus = LOADING_STATUS;
      })
      .addCase(addItemToCartAsync.fulfilled, (state, action) => {
        state.cartItemAddedStatus = SUCCESS_STATUS;
        state.cart = action.payload.cart;
        state.subTotal = action.payload.subTotal;
        state.isCartOpen = true;
      })
      .addCase(addItemToCartAsync.rejected, (state, action) => {
        state.cartItemAddedStatus = FAILURE_STATUS;
        state.errors = action.payload as string;
      })
      .addCase(getCartAsync.pending, (state) => {
        state.status = LOADING_STATUS;
      })
      .addCase(getCartAsync.fulfilled, (state, action) => {
        state.status = SUCCESS_STATUS;
        state.cart = action.payload.cart;
        state.subTotal = action.payload.subTotal;
      })
      .addCase(getCartAsync.rejected, (state, action) => {
        state.status = FAILURE_STATUS;
        state.errors = action.payload as string;
      })
      .addCase(updateItemInCartAsync.pending, (state) => {
        state.status = LOADING_STATUS;
        state.cartItemUpdateStatus = LOADING_STATUS;
      })
      .addCase(updateItemInCartAsync.fulfilled, (state, action) => {
        state.status = SUCCESS_STATUS;
        state.cartItemUpdateStatus = SUCCESS_STATUS;
        state.cart = action.payload.cart;
        state.subTotal = action.payload.subTotal;
      })
      .addCase(updateItemInCartAsync.rejected, (state, action) => {
        state.status = FAILURE_STATUS;
        state.cartItemUpdateStatus = FAILURE_STATUS;
        state.errors = action.payload as string;
      })
      .addCase(removeItemFromCartAsync.pending, (state) => {
        state.cartItemRemoveStatus = LOADING_STATUS;
      })
      .addCase(removeItemFromCartAsync.fulfilled, (state, action) => {
        state.cartItemRemoveStatus = SUCCESS_STATUS;
        state.cart = action.payload.cart;
        state.subTotal = action.payload.subTotal;
      })
      .addCase(removeItemFromCartAsync.rejected, (state, action) => {
        state.cartItemRemoveStatus = FAILURE_STATUS;
        state.errors = action.payload as string;
      })
      .addCase(clearCartAsync.pending, (state) => {
        state.status = LOADING_STATUS;
      })
      .addCase(clearCartAsync.fulfilled, (state, action) => {
        state.status = SUCCESS_STATUS;
        state.cart = action.payload;
      })
      .addCase(clearCartAsync.rejected, (state, action) => {
        state.status = FAILURE_STATUS;
        state.errors = action.payload as string;
      });
  },
  selectors: {
    selectCartStatus: (state: CartSliceState) => state.status,
    selectCartItemAddedStatus: (state: CartSliceState) => state.cartItemAddedStatus,
    selectCartItemRemoveStatus: (state: CartSliceState) => state.cartItemRemoveStatus,
    selectCartItemUpdateStatus: (state: CartSliceState) => state.cartItemUpdateStatus,
    selectSubTotal: (state: CartSliceState) => state.subTotal,
    selectCartItems: (state: CartSliceState) => state.cart,
    selectIsCartOpen: (state: CartSliceState) => state.isCartOpen,
  },
});

export const { toggleCart, openCart, closeCart, resetCartItemAddedStatus, resetCartItemRemoveStatus } =
  cartSlice.actions;

export const {
  selectCartStatus,
  selectCartItemAddedStatus,
  selectCartItemRemoveStatus,
  selectCartItemUpdateStatus,
  selectSubTotal,
  selectCartItems,
  selectIsCartOpen,
} = cartSlice.selectors;

export default cartSlice.reducer;
