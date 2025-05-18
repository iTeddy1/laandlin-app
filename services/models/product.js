const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: { type: String, unique: true, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  salePrice: { type: Number },
  stockQuantity: { type: Number, required: true },
  colors: [
    {
      id: { type: String, required: true },
      color: { type: String, required: true },
      images: { type: Array, required: true },
      imageUrl: { type: String, required: true },
    },
  ],
  weight: { type: Number, required: true },
  category: { type: Schema.Types.ObjectId, ref: "Category" },
  tags: [{ type: Schema.Types.ObjectId, ref: "Tag" }],
  collection: { type: Schema.Types.ObjectId, ref: "Collection" },
  sizes: [
    {
      size: { type: String, required: true },
      price: { type: Number, required: true },
      salePrice: { type: Number, required: true },
      stockQuantity: { type: Number, default: 0 },
    },
  ],
  sku: { type: String, required: true },
  sold: { type: Number, default: 0 },
  slug: { type: String, required: true },
  material: { type: Array, required: true },
  ages: { type: String, required: true },
  gender: { type: String, required: true },
  status: { type: String, required: true },
  availability: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

productSchema.index({ slug: 1 });
productSchema.index({ name: 1 });
productSchema.index({ price: 1 });
productSchema.index({ category: 1 });
productSchema.index({ tags: 1 });
productSchema.index({ collection: 1 });
productSchema.index({ sku: 1 });

module.exports = mongoose.model("Product", productSchema);
