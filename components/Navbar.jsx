"use client";
import React, { useState } from "react";
import { assets } from "@/assets/assets";
import Link from "next/link";
import { useAppContext } from "@/context/AppContext";
import Image from "next/image";
import { useClerk, useUser } from "@clerk/nextjs";

const Navbar = () => {
  const { isSeller, router } = useAppContext();
  const { signOut, openSignIn } = useClerk();
  const { isSignedIn, user } = useUser();
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
            <img
              onClick={() => setMenuOpen(!menuOpen)}
              src={user?.imageUrl}
              alt="profile"
              className="w-10 h-10 rounded-full cursor-pointer"
            />

            {menuOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-white border rounded shadow-md z-50 text-sm">
                <div className="px-4 py-2 border-b">
                  <p className="font-semibold">👤 {user?.fullName}</p>
                  <p className="text-gray-500 text-xs">📧 {user?.primaryEmailAddress?.emailAddress}</p>
                </div>

                <div className="flex flex-col px-4 py-2">
                  <button
                    onClick={() => {
                      setMenuOpen(false);
                      router.push("/");
                    }}
                    className="py-1 text-left hover:bg-gray-100"
                  >
                    🏠 Home
                  </button>

                  <button
                    onClick={() => {
                      setMenuOpen(false);
                      router.push("/all-products");
                    }}
                    className="py-1 text-left hover:bg-gray-100"
                  >
                    🛍️ Products
                  </button>

                  <button
                    onClick={() => {
                      setMenuOpen(false);
                      router.push("/cart");
                    }}
                    className="py-1 text-left hover:bg-gray-100"
                  >
                    🛒 Cart
                  </button>

                  <button
                    onClick={() => {
                      setMenuOpen(false);
                      router.push("/my-orders");
                    }}
                    className="py-1 text-left hover:bg-gray-100"
                  >
                    📦 My Orders
                  </button>

                  {isSeller && (
                    <button
                      onClick={() => {
                        setMenuOpen(false);
                        router.push("/seller");
                      }}
                      className="py-1 text-left hover:bg-gray-100"
                    >
                      🧑‍💼 Seller Dashboard
                    </button>
                  )}

                  <button
                    onClick={() => {
                      setMenuOpen(false);
                      signOut();
                    }}
                    className="py-1 text-left text-red-600 hover:bg-gray-100"
                  >
                    🚪 Sign Out
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
