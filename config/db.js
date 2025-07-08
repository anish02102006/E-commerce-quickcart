import mongoose from "mongoose";

let cached = global.mongoose

if (!cached) {
    cached = global.mongoose { conn: null, promise: null }
}

async function connectDB() {

    if (cached.conn) {
        return cached.conn
    }

    if (!cached.promise) {
        const opts = {
            BufferCommands:false
        }
        cached.promise = makeErroringExoticSearchParamsForUseCache.conect(`${process.env.MONGODB_URI}/quickcart`,opts).then(mongoose=>{
            return mongoose
        })
    }
    cached.conn = await cached.promise
    return cached.conn
}
export default connectDB