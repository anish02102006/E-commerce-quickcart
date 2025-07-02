"use client";
import React, { useState } from "react";
import { assets, BagIcon, CartIcon } from "@/assets/assets";
import Link from "next/link";
import { useAppContext } from "@/context/AppContext";
import Image from "next/image";
import { useClerk, useUser, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  const { isSeller, router } = useAppContext();
  const { signOut, openSignIn } = useClerk();
  const { isSignedIn, user } = useUser(); // fetch user info
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

      {/* Center nav links */}
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

      {/* Right-side user/account section */}
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
                appearance={{ elements: { userButtonAvatarBox: "w-10 h-10" } }}
                showUserProfile={false}
                showSignOutButton={false}
              />
            </div>

            {menuOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-white border rounded shadow-md z-50 p-4 text-sm">
                {/* ✅ User info section */}
                <div className="mb-2 border-b pb-2">
                  <p className="font-semibold">{user?.fullName || "User Name"}</p>
                  <p className="text-gray-500 text-xs">{user?.primaryEmailAddress?.emailAddress}</p>
                </div>

                {/* ✅ Menu items */}
                {isSeller && (
                  <button
                    onClick={() => {
                      setMenuOpen(false);
                      router.push("/seller");
                    }}
                    className="block w-full text-left px-2 py-1 hover:bg-gray-100"
                  >
                    Manage Account
                  </button>
                )}
                <button
                  onClick={() => {
                    setMenuOpen(false);
                    router.push("/");
                  }}
                  className="block w-full text-left px-2 py-1 hover:bg-gray-100"
                >
                  Home
                </button>
                <button
                  onClick={() => {
                    setMenuOpen(false);
                    router.push("/all-products");
                  }}
                  className="block w-full text-left px-2 py-1 hover:bg-gray-100"
                >
                  Products
                </button>
                <button
                  onClick={() => {
                    setMenuOpen(false);
                    router.push("/cart");
                  }}
                  className="block w-full text-left px-2 py-1 hover:bg-gray-100"
                >
                  <CartIcon className="inline w-4 h-4 mr-1" />
                  Cart
                </button>
                <button
                  onClick={() => {
                    setMenuOpen(false);
                    router.push("/my-orders");
                  }}
                  className="block w-full text-left px-2 py-1 hover:bg-gray-100"
                >
                  <BagIcon className="inline w-4 h-4 mr-1" />
                  My Orders
                </button>
                <button
                  onClick={() => {
                    setMenuOpen(false);
                    signOut();
                  }}
                  className="block w-full text-left px-2 py-1 mt-1 text-red-600 hover:bg-gray-100"
                >
                  Sign Out
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
