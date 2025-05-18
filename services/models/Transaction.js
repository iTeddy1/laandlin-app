const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  order: { type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  paymentGateway: { type: String, enum: ['momo', 'vnpay'], required: true },
  transactionDate: { type: Date, default: Date.now },
  transactionAmount: { type: Number, required: true },
  transactionStatus: { type: String, enum: ['success', 'failed', 'pending'], default: 'pending' },
  gatewayTransactionId: { type: String, required: true },
  responseCode: { type: String },
  paymentUrl: { type: String }, // Redirect URL for MoMo/VNPay
  extraData: { type: mongoose.Schema.Types.Mixed }, // Stores JSON objects for additional data
});

transactionSchema.index({ order: 1 });
transactionSchema.index({ user: 1 });
transactionSchema.index({ gatewayTransactionId: 1 });

module.exports = mongoose.model('Transaction', transactionSchema);
