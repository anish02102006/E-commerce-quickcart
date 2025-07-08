import { inngest } from "./inngest";

// innest function to save user data to a database 

export const syncUserCreation = inngest.createFunction(

    { id: "sync-user-from-clerk" },
    { event: "clerk/user.created" },
    async({ event }));
