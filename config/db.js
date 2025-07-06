import mongoose from "mongoose";     

let cached = global.mongoose

if(!cached){
    cached = global.mongoose= {conn:null,promise:null}
}

async function connectDB() {
    if(cached.com){
        return cached.com
    }
    if(!cached.promise){
        const opts={
        bufferCommands:false
        }
        cached.promise=(await mongoose.connect('${process.env.MONGODB_URI}/quickcard',opts)).then(mongoose =>{
        return mongoose 
        } )
    }
    cached.conn = await cached.promise
    return cached.conn
    }
export default connectDB


