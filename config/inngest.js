import { Inngest } from "inngest";
import connectDB from "./db";
import User from "@/models/user";

// Create a client to send and receive events
export const inngest = new Inngest({ id: "quickcart-next" });

// INNGEST FUNCTION TO SAVE USER DATA TO DATABASE
export const syncUserCreation = inngest.createFunction(
    {
        id:'sync-user-from-clerk'
    },
    {event: 'clerk/user.created'},
     async ({event})=>{
     const { id, first_name, last_name, email_addresses, image_url } = event.data
     const userData = {
        _id:id,
        email: email_addresses[0].email_address,
        name: first_name + ' ' + last_name,
        image_Url: image_url 
     }
     await connectDB()
     await User.create(userData)
     }
)

//INNGEST FUNCTION TO UPDATE USER DATA IN DATABASE
export const syncUserUpdation =inngest.createFunction(
    {
        id: 'update-user-from-clerk'
    },
        {event: 'clerk/user.updated'},
        async ({event}) => {
            const { id, first_name, last_name, email_addresses, image_url } = event.data
            const userData = {
               _id:id,
               email: email_addresses[0].email_address,
               name: first_name + ' ' + last_name,
               image_Url: image_url 
            }
            await connectDB()
            await User.findByIdAndUpdate(id,userData)
        }
)

//INNGEST FUNCTION TO DELETE USER FROM DATA BASE
export const syncUserDeletion = inngest.createFunction(
    {
        id: 'delete-user-with-clerk'
    },
    { event: 'clerk/user.deleted'},
    async ({event})=>{
        
        const {id} = event.data

        await connectDB()
        await User.findByIdAndDelete(id)
    }
)