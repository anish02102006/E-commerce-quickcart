import mongoose from "mongoose";

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectDB() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    const mongoUrl = process.env.MONGODB_URI;
    if (!mongoUrl) {
      throw new Error('MONGODB_URI environment variable is not defined');
    }

    // Ensure the URL starts with the correct protocol
    const connectionString = mongoUrl.startsWith('mongodb://') || mongoUrl.startsWith('mongodb+srv://') 
      ? mongoUrl 
      : `mongodb://${mongoUrl}`;

    cached.promise = mongoose
      .connect(`${connectionString}/quickcart`, opts)
      .then((mongoose) => mongoose);
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export default connectDB;
