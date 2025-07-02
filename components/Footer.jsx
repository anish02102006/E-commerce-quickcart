"use client";
import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";
import { FaFacebookF, FaGithub, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-gray-700">
      <div className="flex flex-col md:flex-row items-start justify-between px-6 md:px-16 lg:px-32 gap-10 py-14 border-b border-gray-300">
        {/* Logo and About */}
        <div className="md:w-1/3">
          <Image className="w-28 md:w-32" src={assets.logo} alt="logo" />
          <p className="mt-6 text-sm text-gray-500">
            Razesh Store is your one-stop shop for high-quality fashion, gadgets,
            and accessories. We deliver fast, secure, and with a satisfaction guarantee.
          </p>
        </div>

        {/* Quick Links */}
        <div className="md:w-1/4">
          <h2 className="font-semibold text-gray-900 mb-5">Quick Links</h2>
          <ul className="text-sm space-y-2 text-gray-500">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/all-products" className="hover:underline">Shop</a></li>
            <li><a href="/contact" className="hover:underline">Contact Us</a></li>
            <li><a href="/privacy-policy" className="hover:underline">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Contact and Social */}
        <div className="md:w-1/3">
          <h2 className="font-semibold text-gray-900 mb-5">Contact Us</h2>
          <div className="text-sm space-y-2 text-gray-500">
            <a
              href="mailto:razeshjha0@gmail.com"
              className="flex items-center gap-2 hover:text-blue-600 transition"
            >
              <FaEnvelope /> razeshjha0@gmail.com
            </a>
            <a
              href="tel:+9779807669785"
              className="flex items-center gap-2 hover:text-blue-600 transition"
            >
              📞 +977 9807669785
            </a>

            <div className="flex items-center gap-4 mt-3 text-lg">
              <a
                href="https://github.com/razeshZha"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub className="hover:text-black transition" />
              </a>
              <a
                href="https://wa.me/9779807669785"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="hover:text-green-600 transition" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebookF className="hover:text-blue-600 transition" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <p className="py-4 text-center text-xs md:text-sm text-gray-500">
        © {currentYear} Razesh Store. Powered by passion ✨ | All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
