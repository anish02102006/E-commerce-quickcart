"use client";
import React, { useState } from "react";
import { assets, BagIcon, CartIcon } from "@/assets/assets";
import Link from "next/link";
import { useAppContext } from "@/context/AppContext";
import Image from "next/image";
import { useClerk, useUser, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  const { isSeller, router } = useAppContext();
  const { openSignIn } = useClerk();
  const { isSignedIn } = useUser();

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-32 py-3 border-b border-gray-300 text-gray-700 relative">
      {/* Logo */}
      <Image
        className="cursor-pointer w-28 md:w-32"
        onClick={() => router.push("/")}
        src={assets.logo}
        alt="logo"
      />

      {/* Center Links */}
      <div className="hidden md:flex items-center gap-6">
        <Link href="/" className="hover:text-gray-900">Home</Link>
        <Link href="/all-products" className="hover:text-gray-900">Shop</Link>
        <Link href="/about" className="hover:text-gray-900">About Us</Link>
        <Link href="/contact" className="hover:text-gray-900">Contact</Link>
        {isSeller && (
          <button
            onClick={() => router.push("/seller")}
            className="text-xs border px-4 py-1.5 rounded-full"
          >
            Seller Dashboard
          </button>
        )}
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4 relative">
        <Image className="w-4 h-4 hidden md:block" src={assets.search_icon} alt="search" />

        {!isSignedIn ? (
          <button
            onClick={openSignIn}
            className="flex items-center gap-2 hover:text-gray-900 transition"
          >
            <Image src={assets.user_icon} alt="user icon" />
            <span className="hidden md:inline">Account</span>
          </button>
        ) : (
          <div className="relative">
            <div onClick={() => setMenuOpen(!menuOpen)} className="cursor-pointer">
              <UserButton
                appearance={{
                  elements: {
                    userButtonAvatarBox: "w-10 h-10",
                  },
                }}
              />
            </div>
            {menuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-md z-50">
                <button
                  onClick={() => {
                    setMenuOpen(false);
                    router.push("/cart");
                  }}
                  className="flex items-center gap-2 w-full px-4 py-2 text-left hover:bg-gray-100"
                >
                  <CartIcon className="w-4 h-4" />
                  Cart
                </button>
                <button
                  onClick={() => {
                    setMenuOpen(false);
                    router.push("/my-orders");
                  }}
                  className="flex items-center gap-2 w-full px-4 py-2 text-left hover:bg-gray-100"
                >
                  <BagIcon className="w-4 h-4" />
                  My Orders
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
