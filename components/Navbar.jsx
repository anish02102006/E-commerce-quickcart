"use client"
import React from "react";
import { assets, BagIcon, CartIcon } from "@/assets/assets";
import Link from "next/link"
import { useAppContext } from "@/context/AppContext";
import Image from "next/image";
import { useClerk, UserButton } from "@clerk/nextjs";
import { Store } from "lucide-react";

const Navbar = () => {

  const { isSeller, router, user } = useAppContext();
  const { openSignIn } = useClerk()
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
      </div>

      <ul className="hidden md:flex items-center gap-4 ">
        <Image className="w-4 h-4" src={assets.search_icon} alt="search icon" />
        {user ? (
          <UserButton>
            <UserButton.MenuItems>
              {/* Always show the Cart option */}
              <UserButton.Action
                label="Cart"
                labelIcon={<CartIcon />}
                onClick={() => router.push("/cart")}
              />
              <UserButton.Action
                label="My Orders"
                labelIcon={<BagIcon />}
                onClick={() => router.push("/my-orders")}
              />
              {/* Show the Seller Board option only if the user is a seller */}
              {isSeller && (
                <UserButton.Action
                  label="Seller Board"
                  labelIcon={<Store size={20} />}
                  onClick={() => router.push("/seller")}
                />
              )}
            </UserButton.MenuItems>
          </UserButton>
        ) : (
          <button
            onClick={openSignIn}
            className="flex items-center gap-2 hover:text-gray-900 transition"
          >
            <Image src={assets.user_icon} alt="user icon" />
          </button>
        )}
      </ul>

      <div className="flex items-center md:hidden gap-3">
        {user ? (
          <UserButton>
            <UserButton.MenuItems>
              {/* Always show the Cart option */}
              <UserButton.Action
                label="Cart"
                labelIcon={<CartIcon />}
                onClick={() => router.push("/cart")}
              />
              <UserButton.Action
                label="My Orders"
                labelIcon={<BagIcon />}
                onClick={() => router.push("/my-orders")}
              />
              {/* Show the Seller Board option only if the user is a seller */}
              {isSeller && (
                <UserButton.Action
                  label="Seller Board"
                  labelIcon={<Store size={20} />}
                  onClick={() => router.push("/seller")}
                />
              )}
            </UserButton.MenuItems>
          </UserButton>
        ) : (
          <button
            onClick={openSignIn}
            className="flex items-center gap-2 hover:text-gray-900 transition"
          >
            <Image src={assets.user_icon} alt="user icon" />
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;