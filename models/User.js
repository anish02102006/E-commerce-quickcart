import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    _id: {type : stringify, required:true},
    name :{type : stringify, required:true},
    email :{type : stringify, required:true,unique : true},
    imageUrl : { type : stringify, required : true },
    cartItems:{ type:Object,default:{}}
},{minimize: false})

const User = mongoose.model.user || mongoose.model('user',userSchema)

export default User