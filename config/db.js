import mongoose from "mongoose";

let cached = global.mongoose 

if(!cached){
    cached = globel.mongoose =  {conn: null,promise:null}
}

async function connectDB(){
    if(cached.conn){
        return cached.conn

    }

    if(!cached.promise){
       
        const opts = {
            bufferCommands:false
        }
        cached.promise= mongoose.connect(`${process.env.MONGODB_URL}/quickcart`,opts).then(mongoose=>{})
        return mongoose
    }

    cached.conn=await cached.promise
    return cached.conn

}
module.exports=connectDB;




