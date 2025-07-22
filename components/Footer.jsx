import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col md:flex-row items-start justify-center px-6 md:px-16 lg:px-32 gap-10 py-14 border-b border-gray-500/30 text-gray-500">
        
        {/* Brand Info */}
        <div className="w-4/5">
          <span className="text-2xl font-bold text-blue-900">MeroCart</span>
          <p className="mt-6 text-sm">
            MeroCart is your trusted destination for high-quality products at the best prices.
            From gadgets to daily essentials, we aim to deliver convenience, reliability,
            and satisfaction with every order.
          </p>
        </div>

        {/* Company Links */}
        <div className="w-1/2 flex items-center justify-start md:justify-center">
          <div>
            <h2 className="font-medium text-gray-900 mb-5">Company</h2>
            <ul className="text-sm space-y-2">
              <li>
                <a className="hover:underline transition" href="#">Home</a>
              </li>
              <li>
                <a className="hover:underline transition" href="#">About Us</a>
              </li>
              <li>
                <a className="hover:underline transition" href="#">Contact Us</a>
              </li>
              <li>
                <a className="hover:underline transition" href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="w-1/2 flex items-start justify-start md:justify-center">
          <div>
            <h2 className="font-medium text-gray-900 mb-5">Get in Touch</h2>
            <div className="text-sm space-y-2">
              <p>📞 +977 9807669785</p>
              <p>📧 razeshjha0@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <p className="py-4 text-center text-xs md:text-sm">
        © {new Date().getFullYear()} MeroCart. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
