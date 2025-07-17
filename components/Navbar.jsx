"use client";
import React from "react";
import { assets } from "@/assets/assets";
import Link from "next/link";
import { useAppContext } from "@/context/AppContext";
import Image from "next/image";
import dynamic from "next/dynamic";

// Import authentication component without SSR
const AuthSection = dynamic(() => import('./AuthSection'), {
  ssr: false,
  loading: () => (
    <button className="flex items-center gap-2 hover:text-gray-900 transition" type="button">
      <Image src={assets.user_icon} alt="user icon" width={16} height={16} />
      <span>Account</span>
    </button>
  )
});

const Navbar = () => {
  const context = useAppContext();
  
  // Provide fallback values if context is not ready
  const isSeller = context?.isSeller || false;
  const router = context?.router;
  const getCartCount = context?.getCartCount || (() => 0);

  // Early return if context is not available
  if (!context) {
    return (
      <nav className="flex items-center justify-between px-6 md:px-16 lg:px-32 py-3 border-b border-gray-300 text-gray-700">
        <div>Loading...</div>
      </nav>
    );
  }

  const handleLogoClick = () => {
    if (router) {
      router.push('/');
    }
  };

  const handleSellerDashboardClick = () => {
    if (router) {
      router.push('/seller');
    }
  };

  const handleCartClick = () => {
    if (router) {
      router.push('/cart');
    }
  };

  const handleSearchClick = () => {
    // Add search functionality here
    console.log('Search clicked');
  };

  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-32 py-3 border-b border-gray-300 text-gray-700">
      <div
        className="cursor-pointer"
        onClick={handleLogoClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            handleLogoClick();
          }
        }}
      >
        <Image
          className="w-28 md:w-32"
          src={assets.logo}
          alt="logo"
          width={128}
          height={40}
          priority
        />
      </div>
      
      <div className="flex items-center gap-4 lg:gap-8 max-md:hidden">
        <Link href="/" className="hover:text-gray-900 transition">
          Home
        </Link>
        <Link href="/all-products" className="hover:text-gray-900 transition">
          Shop
        </Link>
        <Link href="/" className="hover:text-gray-900 transition">
          About Us
        </Link>
        <Link href="/" className="hover:text-gray-900 transition">
          Contact
        </Link>

        {isSeller && (
          <button 
            onClick={handleSellerDashboardClick}
            className="text-xs border px-4 py-1.5 rounded-full hover:bg-gray-50 transition"
            type="button"
          >
            Seller Dashboard
          </button>
        )}
      </div>

      <div className="hidden md:flex items-center gap-4">
        <button
          onClick={handleCartClick}
          className="relative flex items-center gap-2 hover:text-gray-900 transition"
          type="button"
          aria-label="Shopping cart"
        >
          <Image 
            className="w-4 h-4" 
            src={assets.cart_icon} 
            alt="cart icon" 
            width={16} 
            height={16} 
          />
          {getCartCount() > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {getCartCount()}
            </span>
          )}
        </button>
        <button
          onClick={handleSearchClick}
          className="flex items-center justify-center hover:text-gray-900 transition"
          type="button"
          aria-label="Search"
        >
          <Image 
            className="w-4 h-4" 
            src={assets.search_icon} 
            alt="search icon" 
            width={16} 
            height={16} 
          />
        </button>
        <AuthSection />
      </div>

      <div className="flex items-center md:hidden gap-3">
        <button
          onClick={handleCartClick}
          className="relative flex items-center gap-2 hover:text-gray-900 transition"
          type="button"
          aria-label="Shopping cart"
        >
          <Image 
            className="w-4 h-4" 
            src={assets.cart_icon} 
            alt="cart icon" 
            width={16} 
            height={16} 
          />
          {getCartCount() > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {getCartCount()}
            </span>
          )}
        </button>
        {isSeller && (
          <button 
            onClick={handleSellerDashboardClick}
            className="text-xs border px-4 py-1.5 rounded-full hover:bg-gray-50 transition"
            type="button"
          >
            Seller Dashboard
          </button>
        )}
        <AuthSection />
      </div>
    </nav>
  );
};

export default Navbar;