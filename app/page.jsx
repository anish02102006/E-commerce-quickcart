'use client'
import React from "react";
import HomeProducts from "@/components/HomeProducts";
import Banner from "@/components/Banner";
import NewsLetter from "@/components/NewsLetter";
import ContactUs from "@/components/ContactUs";
import FeaturedProduct from "@/components/FeaturedProduct";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NGORegister from "@/components/NgoRegister";


const Home = () => {
  return (
    <>
      <Navbar/>
      <div className="px-6 md:px-16 lg:px-32">
        <Banner />
        <HomeProducts />
        <FeaturedProduct />
        <Banner />
        <NGORegister/>
        <ContactUs />
        <NewsLetter />
      </div>
      <Footer />
    </>
  );
};

export default Home;
