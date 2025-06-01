import { getAuth } from "@clerk/nextjs/server";
import Address from "@/models/Address";
import connectDB from "@/config/db";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const { userId } = getAuth(request);
    await connectDB();
    const addresses = await Address.find({ userId });
    return NextResponse.json({
      success: true,
      message: "Addresses fetched successfully",
      addresses,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: error.message,
    });
  }
}
