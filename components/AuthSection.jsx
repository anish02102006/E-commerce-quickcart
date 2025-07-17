// components/AuthSection.jsx
"use client"
import React from "react";
import { useClerk, UserButton, useUser } from "@clerk/nextjs";
import { assets } from "@/assets/assets";
import Image from "next/image";

const AuthSection = () => {
  const { openSignIn } = useClerk();
  const { isSignedIn, user, isLoaded } = useUser();

  // Afficher un placeholder pendant le chargement
  if (!isLoaded) {
    return (
      <div className="flex items-center gap-2 opacity-50">
        <Image src={assets.user_icon} alt="user icon" />
        <span>Loading...</span>
      </div>
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

export default AuthSection;