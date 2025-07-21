import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    _id: { type: String, required: ture},
    name: { type: String, required: ture},
    email: { type: String, required: ture, unique: true},
    imageUrl: { type: String, required: ture},
    cartItems: { type: Object, default: true},
},{ minimize: false})

const User = mongoose.model.user || mongoose.model('user',userSchema)

export default User