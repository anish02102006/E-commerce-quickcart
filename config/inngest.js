import { Inngest } from "inngest";
import connectDB from "./db";
import { User } from "@/models/User";

export const inngest = new Inngest({ id: "quickcart-next" });

// Sync user creation from Clerk
export const syncUserCreation = inngest.createFunction(
  {
    id: "sync-user-from-clerk",
  },
  { event: "clerk/user.created" },
  async ({ event }) => {
    try {
      const { id, first_name, last_name, email_addresses, image_url } = event.data;
      const userData = {
        _id: id,
        email: email_addresses[0].email_address,
        name: first_name + " " + last_name,
        imageUrl: image_url,
      };
      await connectDB();
      await User.create(userData);
    } catch (error) {
      console.error("Failed to sync user creation:", error);
    }
  }
);

// Sync user update from Clerk
export const syncUserUpdate = inngest.createFunction(
  {
    id: "sync-user-update-from-clerk",
  },
  { event: "clerk/user.updated" },
  async ({ event }) => {
    try {
      const { id, first_name, last_name, email_addresses, image_url } = event.data;
      await connectDB();
      await User.findByIdAndUpdate(
        id,
        {
          name: first_name + " " + last_name,
          email: email_addresses[0].email_address,
          imageUrl: image_url,
        },
        { new: true, upsert: true }
      );
    } catch (error) {
      console.error("Failed to sync user update:", error);
    }
  }
);

// inngest funtion  to delete  user from database

export const syncUserDeletion = inngest.createFunction(
  {
    id: "sync-user-deletion-from-clerk",
  },
  { event: "clerk/user.deleted" },
  async ({ event }) => {
    try {
      const { id } = event.data;

      await connectDB();
      await User.findByIdAndDelete(id);

      console.log(`User with ID ${id} deleted successfully.`);
    } catch (error) {
      console.error("Failed to delete user:", error);
    }
  }
);