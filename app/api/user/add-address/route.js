import { getAuth } from "@clerk/nextjs/server"; // ✅ Fixed import
import connectDB from "@/config/db";
import Address from "@/models/Address";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { userId } = getAuth(request);
    const { address } = await request.json(); // ✅ Changed from addrss to address

    await connectDB();
    const newAddress = await Address.create({ ...address, userId }); // ✅ Uses correct data

    return NextResponse.json({
      success: true,
      message: "Address added successfully",
      newAddress,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: error.message,
    });
  }
}
