import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
  userId: { type: String, required: true, ref: "user" },
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  offerPrice: { type: Number, default: 0 },
  category: { type: String, required: true },
  image: { type: Array, required: true },
  date: { type: Date, required: true },
});
const Product =
  mongoose.models.Product || mongoose.model("product", productSchema);
export default Product;
