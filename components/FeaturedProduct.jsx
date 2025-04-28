"use client";
import React, { useState } from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const allProducts = [
  {
    id: 1,
    image: assets.girl_with_headphone_image,
    title: "Unparalleled Sound",
    description: "Experience crystal-clear audio with premium headphones.",
    category: "Electronics and HeadSet",
  },
  {
    id: 2,
    image: assets.girl_with_earphone_image,
    title: "Stay Connected",
    description: "Compact and stylish earphones for every occasion.",
    category: "Electronics and HeadSet",
  },
  {
    id: 3,
    image: assets.boy_with_laptop_image,
    title: "Power in Every Pixel",
    description: "Shop the latest laptops for work, gaming, and more.",
    category: "Laptops",
  },
  {
    id: 3,
    image: assets.boy_with_laptop_image,
    title: "Power in Every Pixel",
    description: "Shop the latest laptops for work, gaming, and more.",
    category: "Laptops",
  },
];

const FeaturedProduct = () => {
  const [activeTab, setActiveTab] = useState("all");

  const electronicsAndHeadsets = allProducts.filter(
    (product) => product.category === "Electronics and HeadSet"
  );

  return (
    <div className="mt-14">
      <div className="flex flex-col items-center">
        <p className="text-3xl font-medium">Featured Products</p>
        <div className="w-28 h-0.5 bg-orange-600 mt-2"></div>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-6">
        <TabsList className="flex justify-center space-x-4">
          <TabsTrigger
            value="electronics"
            className="px-4 py-2 rounded text-gray-800 bg-gray-200 hover:bg-gray-300 data-[state=active]:bg-orange-600 data-[state=active]:text-white"
          >
            Electronics & Headsets
          </TabsTrigger>
          <TabsTrigger
            value="all"
            className="px-4 py-2 rounded text-gray-800 bg-gray-200 hover:bg-gray-300 data-[state=active]:bg-orange-600 data-[state=active]:text-white"
          >
            All Products
          </TabsTrigger>
        </TabsList>

        <TabsContent value="electronics">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-14 mt-12 md:px-14 px-4">
            {electronicsAndHeadsets.map(({ id, image, title, description }) => (
              <div key={id} className="relative group">
                <Image
                  src={image}
                  alt={title}
                  className="group-hover:brightness-75 transition duration-300 w-full h-auto object-cover"
                />
                <div className="group-hover:-translate-y-4 transition duration-300 absolute bottom-8 left-8 text-white space-y-2">
                  <p className="font-medium text-xl lg:text-2xl">{title}</p>
                  <p className="text-sm lg:text-base leading-5 max-w-60">
                    {description}
                  </p>
                  <button className="flex items-center gap-1.5 bg-orange-600 px-4 py-2 rounded">
                    Buy now{" "}
                    <Image
                      className="h-3 w-3"
                      src={assets.redirect_icon}
                      alt="Redirect Icon"
                    />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="all">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-14 mt-12 md:px-14 px-4">
            {allProducts.map(({ id, image, title, description }) => (
              <div key={id} className="relative group">
                <Image
                  src={image}
                  alt={title}
                  className="group-hover:brightness-75 transition duration-300 w-full h-auto object-cover"
                />
                <div className="group-hover:-translate-y-4 transition duration-300 absolute bottom-8 left-8 text-white space-y-2">
                  <p className="font-medium text-xl lg:text-2xl">{title}</p>
                  <p className="text-sm lg:text-base leading-5 max-w-60">
                    {description}
                  </p>
                  <button className="flex items-center gap-1.5 bg-orange-600 px-4 py-2 rounded">
                    Buy now{" "}
                    <Image
                      className="h-3 w-3"
                      src={assets.redirect_icon}
                      alt="Redirect Icon"
                    />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default FeaturedProduct;