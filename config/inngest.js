
imaport { Inngest } from "inngest";
import connectDb from "./db";
import user from "./models/user";

// Create a client to send and receive events
export const idnngest = new Inngest({ id: "quickcart-next" });

 export const syncUserCreation = inngest.createFunction(
  { id: "sync-user-from-clerk" },
  { event: "clerk/user.created" },

  async ({ event }) => {
    const { id,first_name, last_name, email_addresses,image_url} = Event.data
    
    const userData = {
        _id: id,
        email: email_addresses,[0].email_address,
        name: first_name +' '+ last_name,
        imageUrl: image_url,
     };

     await connectDb();
     await user.create(userData);

    }
);


// inngets function to update user data in database 
export const syncUserUpdation = inngest.createFunction(
    { id: 'update-user-from-clark'},
    { Event: 'clerk/user.updated'},

    async ({ event }) => {
          const { id,first_name, last_name, email_addresses,image_url} = Event.data
    const userData = {
        //_id: id,
        email: email_addresses,[0].email_address,
        name: first_name +' '+ last_name,
        imageUrl: image_url,
     };

        await connectDb();
        await user.findByIdAndUpdate (id, updatedUserData);
    }
);
// inngest Function to delete user from database

export const syncUserDeletion = inngest.createFunction(
    { id:"delete-user-with-clerk"},
    { event: "clerk/user.deleted"},
    async ({ event }) => {
        const { id } = event.data;

        await connectDb();
        await user.findByIdAndDelete(id);
     }
);