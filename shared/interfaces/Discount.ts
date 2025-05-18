export interface Discount {
  _id?: string;
  name: string;
  code: string;
  discount: number;
  startDate: string;
  endDate: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface AddDiscountRequest {
  name: string;
  code: string;
  discount: number;
  startDate: string;
  endDate: string;
}

export interface UpdateDiscountRequest {
  discountCode: string;
  newDiscount: Discount;
}
