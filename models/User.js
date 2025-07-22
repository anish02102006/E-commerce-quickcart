import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    imageUri: {
      type: String,
      required: true,
    },
    cartItems: {
      type: mongoose.Schema.Types.Mixed, 
      default: {},
    },
  },
  { minimize: false }
);

const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;
