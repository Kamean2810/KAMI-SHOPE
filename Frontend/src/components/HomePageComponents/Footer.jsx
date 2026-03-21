import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube, FaShoppingBag } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 mt-16">

      {/* Top Footer */}
      <div className="max-w-650 mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-6 gap-8">

        {/* Brand Section */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-4">

            <h2 className="text-7xl font-bold text-blue-500">Kami-Shop</h2>
          </div>

          <p className="text-gray-600 text-4xl mb-5">
            Best information about the company goes here but now lorem ipsum is
          </p>

          <div className="flex gap-5 text-5xl text-gray-500">
            <div className="bg-gray-200 p-2 rounded-full"><FaFacebookF /></div>
            <div className="bg-gray-200 p-2 rounded-full"><FaTwitter /></div>
            <div className="bg-gray-200 p-2 rounded-full"><FaLinkedinIn /></div>
            <div className="bg-gray-200 p-2 rounded-full"><FaInstagram /></div>
            <div className="bg-gray-200 p-2 rounded-full"><FaYoutube /></div>
          </div>
        </div>

        {/* About */}
        <div>
          <h3 className="font-bold text-4xl mb-3">About</h3>
          <ul className="text-gray-600 space-y-2 text-3xl">
            <li>About Us</li>
            <li>Find store</li>
            <li>Categories</li>
            <li>Blogs</li>
          </ul>
        </div>

        {/* Partnership */}
        <div>
          <h3 className="font-bold text-4xl mb-3">Partnership</h3>
          <ul className="text-gray-600 space-y-2 text-3xl">
            <li>About Us</li>
            <li>Find store</li>
            <li>Categories</li>
            <li>Blogs</li>
          </ul>
        </div>

        {/* Information */}
        <div>
          <h3 className="font-bold text-4xl mb-3">Information</h3>
          <ul className="text-gray-600 space-y-2 text-3xl">
            <li>Help Center</li>
            <li>Money Refund</li>
            <li>Shipping</li>
            <li>Contact us</li>
          </ul>
        </div>

        {/* For users */}
        <div>
          <h3 className="font-bold text-4xl mb-3">For users</h3>
          <ul className="text-gray-600 space-y-2 text-3xl">
            <li>Login</li>
            <li>Register</li>
            <li>Settings</li>
            <li>My Orders</li>
          </ul>

          {/* App buttons */}
          <div className="mt-5 space-y-3">
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="appstore"
              className="w-50"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="googleplay"
              className="w-50"
            />
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center text-sm text-gray-500">
          <p>© 2023 Ecommerce.</p>

          <div className="flex items-center gap-2">
            <span>🇺🇸</span>
            <span>English</span>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;