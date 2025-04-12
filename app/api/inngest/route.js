import {
  inngest,
  syncUserCreation,
  syncUserUpdation,
  syncUserDeletion,
} from "../../../Config/inngest"; // adjust this path if needed


import { serve } from "inngest/next";

// Create an API that serves zero functions
export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [syncUserCreation, syncUserUpdation, syncUserDeletion],
});
