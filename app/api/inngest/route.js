import { serve } from "inngest/next";
import { inngest, syncUsercreation, syncuserDeletion, syncUserupdation } from "@/config/inngest";

// Create an API that serves zero functions
export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
   syncUsercreation,
   syncUserupdation,
   syncuserDeletion
  ],
});
