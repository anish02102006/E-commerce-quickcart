// import mongoose from "mongoose";
import mongoose from 'mongoose';
import { inngest } from './inngest';


let cached = global.mongoose

if (!chached){
    cached = global.mongoose = { conn: null, Promise: null}
}

async function connectDb () {

    if (cached.conn) {
        return cached.conn
    }

    if (!cached.Promise) {
        const opts ={
            buffercommands:false
        }
        cached.Promise = mongoose.connect('${process.env.MONGODB_URI}/quickcart',opts).then(mongoose =>{
            return mongoose
         } )

    }


    cached.conn = await cached.Promise
    return cached.conn
}


export default connectDb
// innest function to save user data to a database 

export const syncUserCreation = inngest.createFunction(

    { id: "sync-user-from-clerk" },
    { event: "clerk/user.created" },
    async({ event }));
