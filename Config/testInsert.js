import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const URI = process.env.MONGODB_URI;

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
});

const Product = mongoose.model("Product", productSchema);

async function insertSample() {
  try {
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ Connected");

    const newProduct = new Product({
      name: "Test Product",
      price: 99,
      description: "This is a test product",
    });

    await newProduct.save();
    console.log("📦 Data inserted!");

    await mongoose.disconnect();
  } catch (err) {
    console.error("❌ Error:", err.message);
  }
}

insertSample();
