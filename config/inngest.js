import { Inngest } from "inngest";
import connectDb from "./db";
import user from "./models/user"; // <-- Add your correct path

export const inngest = new Inngest({ id: "quickcart-next" });

// Function to save user data
export const syncUsercreation = inngest.createFunction(
  { id: "sync-user-from-clerk" },
  { event: "clerk/user.created" },
  async ({ event }) => {
    const { id, first_name, last_name, email_addresses, image_url } = event.data;
    const userData = {
      _id: id,
      email: email_addresses[0]?.email_address || "",
      name: `${first_name} ${last_name}`,
      imageUrl: image_url,
    };
    await connectDb();
    await user.create(userData);
  }
);

// Function to update user data
export const syncUserupdation = inngest.createFunction(
  { id: "update-user-from-clerk" },
  { event: "clerk/user.updated" },
  async ({ event }) => {
    const { id, first_name, last_name, email_addresses, image_url } = event.data;
    const userData = {
      _id: id,
      email: email_addresses[0]?.email_address || "",
      name: `${first_name} ${last_name}`,
      imageUrl: image_url,
    };
    await connectDb();
    await user.findByIdAndUpdate(id, userData);
  }
);

// Function to delete user
export const syncuserDeletion = inngest.createFunction(
  { id: "delete-user-with-clerk" },
  { event: "clerk/user.deleted" },
  async ({ event }) => {
    const { id } = event.data;
    await connectDb();
    await user.findByIdAndDelete(id);
  }
);
// import { Inngest } from "inngest";
// import connectDb from "./db";

// // Create a client to send and receive events
// export const inngest = new Inngest({ id: "quickcart-next" });

// // innest function to save user data to a database 
// export const syncUsercreation = inngest.createFunction(

// {
//     id:'sync-user-from-clerk'
// },
// {event: 'clark/user.created'},
// async ({Event} =>){
//     const { id,first_name, last_name, email_addresses,image_url} = Event.data
//     const userData = {
//         _id:id,
//         email: email_addresses,[0].email_address,
//         name: first_name +' '+ last_name,
//         imageUrl:image_url
//      }
//      await connectDb()
//      await user.create(userData)

//     }
// )


// // inngets function to update user data in database 
// export const syncUserupdation = inngest.createFunction(
//     {
//         id:'update-user-from- clark'
//     },
//     { Event:'clerk/user.updated'}, 
//     async ({Event}) => {
//           const { id,first_name, last_name, email_addresses,image_url} = Event.data
//     const userData = {
//         _id:id,
//         email: email_addresses,[0].email_address,
//         name: first_name +' '+ last_name,
//         imageUrl:image_url
//      }
//         await connectDb()
//         await user.findbyidIdAndUpdate(id,userData)
//     }
// )
// // inngest Function to delete user from database
// export const syncuserDeletion = inngest.createFunction(
//     {
//         id:'delete-user-with-clerk'
//     },
//     { Event: 'clerk/user.deleted'},
//     async ({Event}) => {
//         const {id } = Event.data

//         await connectDb()
//         await user.findbyidIdAndDelete(id)
//      }

// ) 