import dotenv from "dotenv";
import connectDB from "./db.js";

dotenv.config(); // Load .env BEFORE using MONGODB_URI

console.log("Loaded URI:", process.env.MONGODB_URI); // Debug

async function testConnection() {
  try {
    await connectDB();
    console.log("✅ Database connection successful!");
  } catch (error) {
    console.error("❌ Database connection failed:", error);
  }
}

testConnection();
