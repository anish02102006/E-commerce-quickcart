import { Inngest } from "inngest";
import connectDB from "./db";
import User from "@/modals/User";

// Create a client to send and receive events
export const inngest = new Inngest({ id: "outfit-next-akash" });

// Inngest Function create
export const syncUserCreation = inngest.createFunction(
    {
        id: 'sync-user-from-clerk'
    },
    {
        event: 'clerk/user.created'
    },
    async ({ event }) => {
        const { id, first_name, last_name, email_addresses, image_url } = event.data
        const userData = {
            _id: id,
            email: email_addresses[0].email_address,
            name: first_name + ' ' + last_name,
            imageUrl: image_url,
        }
        await connectDB()
        await User.create(userData)
    }
)

// Inngest Function update

export const syncUserUpdation = inngest.createFunction(
    {
        id: 'update-user-from-clerk'
    },
    { event: 'clerk/user.created' }
    ,
    async ({ event }) => {
        const { id, first_name, last_name, email_addresses, image_url } = event.data
        const userData = {
            _id: id,
            email: email_addresses[0].email_address,
            name: first_name + ' ' + last_name,
            imageUrl: image_url,
        }
        await connectDB()
        await User.findByIdAndUpdate(id, userData)
    }
)

// inngest functional to Deleted

export const syncUserDeletion = inngest.createFunction(
    {
        id: 'delete-user-from-clerk'
    },
    { event: 'clerk/user.delete' }
    ,
    async ({ event }) => {
        const { id } = event.data
        await connectDB()
        await User.findByIdAndDeletion(id, userData)
    }
)