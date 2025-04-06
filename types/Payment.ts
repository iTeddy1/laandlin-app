export interface MomoPaymentRequest {
  orderId: string;
  amount: number;
  payType: string;
}

export interface HandleMomoPaymentResponse {
  transId: string;
  signature: string;
  resultCode: number;
  payType: string;
  amount: number;
}

export interface RefundRequest {
  transactionId: string;
  amount: number;
  reason: string;
}
