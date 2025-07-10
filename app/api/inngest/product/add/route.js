import { v2 as cloudinary } from "cloudinary";
import { getAuth } from "@clerk/nextjs/dist/types/server";
import authSeller from "@/lib/authSeller";
import { NextResponse } from "next/server";
import { CLIENT_STATIC_FILES_PATH } from "next/dist/shared/lib/constants";
import { resolve } from "styled-jsx/css";
import connectDB from "@/config/db";
import Product from "@/models/product";


// Configure Cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET 
})


export async function POST(request) {
    try {
        
        const { userId } = getAuth(request)

        const isSeller = await authSeller(userId)

        if (!isSeller) {
            return NextResponse.json({ success: false, message: 'not authorized' })
        }

        const formData = await request.formData()

        const name = formData.get('name');
        const description = formData.get('description');
        const category = formData.get('category');
        const price = formData.get('price');
        const offerPrice = formData.get('offerPrice');

        const files =formData.getAll('images');

        if (!files || files.length === 0) {
            return NextResponse.json({ success: false, message: 'no files upoloaded' })
        }

        const result = await Promise.all(
            files.map(async (file)=> {
                const arrayBuffer = await file.arrayBuffer()
                const buffer = Buffer.from(arrayBuffer)

                return new Promise((resolve,reject)=>{
                    const stream = cloudinary.uploader.upload_stream(
                        {resource_type: 'auto'},
                        (error,result) => {
                            if (error) {
                                reject(error)
                            } else {
                                resolve(result)
                            }
                        }
                    )
                    stream.end(buffer)
                })
            })
        )

        const image = result.map(result => result.secure_url)

        await connectDB()
        const newProduct = await Product.create({
            userId,
            name,
            description,
            category,
            price:Number(price),
            offerPrice:Number(offerPrice),
            image,
            date: Date.now()
        })

        return NextResponse.json({ success: true, message: 'Upload successful', newProduct })
    } catch (error) {
        console.error("Error in product add API:", error);
        return NextResponse.json({ success: false, message: error.message })
    }
}