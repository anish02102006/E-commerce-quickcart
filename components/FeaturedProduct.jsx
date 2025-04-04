import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";


const products = [
  {
    id: 1,
    image: assets.Buying_cheap,
    title: "Buy Products for Cheap",
    description: "Good quality products at affordable prices.",
    
  },
  {
    id: 2,
    image: assets.donate_image,
    title: "Become a Seller and Donor",
    description: "Make a difference by selling and donating.",
  },
  {
    id: 3,
    image: assets.ngo_image,
    title: "Register as NGO",
    description: "Find the best products for your needs.",
  },
];

const FeaturedProduct = () => {
  return (
    <div className="mt-14">
      <div className="flex flex-col items-center">
        <p className="text-3xl font-medium">Explore</p>
        <div className="w-28 h-0.5 bg-orange-600 mt-2"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-14 mt-12 md:px-14 px-4">
        {products.map(({ id, image, title, description }) => (
          <div key={id} className="relative group">
            <Image
              src={image}
              alt={title}
              className="group-hover:brightness-75 transition duration-300 w-full h-full object-cover"
            />
            <div className="group-hover:-translate-y-4 transition duration-300 absolute bottom-8 left-8 text-white space-y-2">
              <p className="font-medium text-xl lg:text-2xl">{title}</p>
              <p className="text-sm lg:text-base leading-5 max-w-60">
                {description}
              </p>
              <a
                Link href="/ngo-register"
                className="flex items-center gap-1.5 bg-orange-600 px-4 py-2 rounded"
              >
                Learn More <Image className="h-3 w-3" src={assets.redirect_icon} alt="Redirect Icon" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProduct;
