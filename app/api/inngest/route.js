import { serve } from "inngest";
import { inngest, syncUserCreation, syncUserDeletion, syncuserUpdation } from "@/config/inngest";


// Create an API that serves zero functions
export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    syncUserCreation,
    syncuserUpdation,
    syncUserDeletion
  ],
});
