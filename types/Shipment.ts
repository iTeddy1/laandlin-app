export interface Shipment {
  _id: string;
  dimensions: {
    width: number;
    height: number;
    length: number;
  };
  order: {
    _id: string;
    orderDate: string;
    status: string;
    totalAmount: number;
  };
  carrier: string;
  trackingNumber: string;
  status: string;
  shippingMethod: string;
  shippingCost: number;
  weight: number;
  notes: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface CreateShipmentRequest {
  orderId: string;
  shippingMethod: string;
  weight: number;
  dimensions: {
    width: number;
    height: number;
    length: number;
  };
  notes: string;
}
