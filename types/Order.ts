import { IAddress } from "./Auth";
import { Color } from "./Product";

export interface CreateOrderRequest {
  address: any;
  discountCode: string;
  items: OrderItem[];
  description?: string;
}

export interface Order {
  _id: string;
  user: string;
  address: IAddress;
  orderDate: string;
  paymentDueDate: string;
  status: OrderStatus;
  totalAmount: number;
  items: OrderItem[];
  discountAmount: number;
  finalAmount: number;
  paymentStatus: PaymentStatus;
  description: string;
}

export interface OrderItem {
  _id: string;
  productId: string;
  name: string;
  slug: string;
  color: Color;
  category: string;
  size: string;
  price: number;
  salePrice: number;
  quantity: number;
}

export interface GetUserOrderByIdRequest {
  id: string;
  userId: string;
}

export type OrderStatus =
  | "pending"
  | "processing"
  | "shipped"
  | "delivered"
  | "completed"
  | "canceled"
  | "refunded"
  | "failed"
  | "on-hold";

export type PaymentStatus = "paid" | "unpaid" | "failed" | "expired";

export interface IOrderStatus {
  status: OrderStatus;
  label: string;
  description: string;
}
