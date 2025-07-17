"use client"
import React, { useState, useEffect } from "react";
import { assets } from "@/assets/assets";
import Link from "next/link"
import { useAppContext } from "@/context/AppContext";
import Image from "next/image";

// Import conditionnel des hooks Clerk
let useClerk, UserButton, useUser;
try {
  const clerkModules = require("@clerk/nextjs");
  useClerk = clerkModules.useClerk;
  UserButton = clerkModules.UserButton;
  useUser = clerkModules.useUser;
} catch (error) {
  // Clerk n'est pas encore disponible
}

const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const { isSeller, router } = useAppContext();
  
  // Hooks Clerk avec vérifications
  const clerkHook = useClerk ? useClerk() : { openSignIn: () => {} };
  const userHook = useUser ? useUser() : { isSignedIn: false, user: null, isLoaded: false };
  
  const { openSignIn } = clerkHook;
  const { isSignedIn, user, isLoaded } = userHook;

  useEffect(() => {
    setMounted(true);
  }, []);

  // Composant d'authentification
  const AuthButton = () => {
    // Avant hydratation ou si Clerk n'est pas disponible
    if (!mounted || !isLoaded || !UserButton) {
      return (
        <button className="flex items-center gap-2 hover:text-gray-900 transition">
          <Image src={assets.user_icon} alt="user icon" />
          Account
        </button>
      );
    }

    // Utilisateur connecté
    if (isSignedIn) {
      return (
        <div className="flex items-center gap-2">
          <UserButton 
            appearance={{
              elements: {
                avatarBox: "w-8 h-8",
                userButtonPopover: "z-50"
              }
            }}
          />
          <span className="text-sm hidden lg:block">
            Hi, {user?.firstName || 'User'}
          </span>
        </div>
      );
    }

    // Utilisateur non connecté
    return (
      <button 
        onClick={openSignIn} 
        className="flex items-center gap-2 hover:text-gray-900 transition"
      >
        <Image src={assets.user_icon} alt="user icon" />
        Account
      </button>
    );
  };

  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-32 py-3 border-b border-gray-300 text-gray-700">
      <Image
        className="cursor-pointer w-28 md:w-32"
        onClick={() => router.push('/')}
        src={assets.logo}
        alt="logo"
      />
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
            onClick={() => router.push('/seller')} 
            className="text-xs border px-4 py-1.5 rounded-full"
          >
            Seller Dashboard
          </button>
        )}
      </div>

      <ul className="hidden md:flex items-center gap-4">
        <Image className="w-4 h-4" src={assets.search_icon} alt="search icon" />
        <AuthButton />
      </ul>

      <div className="flex items-center md:hidden gap-3">
        {isSeller && (
          <button 
            onClick={() => router.push('/seller')} 
            className="text-xs border px-4 py-1.5 rounded-full"
          >
            Seller Dashboard
          </button>
        )}
        <AuthButton />
      </div>
    </nav>
  );
};

export default Navbar;