// components/AuthSection.jsx
"use client";
import React from "react";
import { useClerk, UserButton, useUser } from "@clerk/nextjs";
import { assets } from "@/assets/assets";
import Image from "next/image";

const AuthSection = () => {
  const { openSignIn } = useClerk();
  const { isSignedIn, user, isLoaded } = useUser();

  // Show placeholder during loading
  if (!isLoaded) {
    return (
      <div className="flex items-center gap-2 opacity-50">
        <Image 
          src={assets.user_icon} 
          alt="user icon" 
          width={16} 
          height={16} 
        />
        <span>Loading...</span>
      </div>
    );
  }

  // Signed in user
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

  // Not signed in user
  return (
    <button 
      onClick={openSignIn} 
      className="flex items-center gap-2 hover:text-gray-900 transition"
      type="button"
      aria-label="Sign in to your account"
    >
      <Image 
        src={assets.user_icon} 
        alt="user icon" 
        width={16} 
        height={16} 
      />
      <span>Account</span>
    </button>
  );
};

export default AuthSection;