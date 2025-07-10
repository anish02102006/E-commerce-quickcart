// import Cart from "@/app/cart/page";
// import types from "@eslint/eslintrc/lib/shared/types";
import mongoose from "mongoos";
// import { unique } from "next/dist/build/utils";

const userSchema = new mongoose.userschema({
    _id: { types: string,required:true},
    name: {types: string,Required:true},
    email: {types: string,Required:true, unique:true},
    imageUrl: {types: string,Required:true},
    CartItems: { types: Object, default: {}},
  },  {minimize: false})

const user =  mongoose.models.user || mongoose.model ('user',userSchema)

export default user
// import mongoose from 'mongoose';

// const userSchema = new mongoose.Schema({
//   _id: String,
//   email: String,
//   name: String,
//   imageUrl: String,
// });

// export default mongoose.models.User || mongoose.model("User", userSchema);
