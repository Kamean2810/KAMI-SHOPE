import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full shadow-md bg-white">
      <div className="w-full px-6 py-4 flex items-center">

        {/* LEFT SECTION */}
        <div className="flex-1">
          <div className="flex flex-col items-start">
            <h1 className="text-4xl md:text-5xl font-extrabold text-blue-600">
              Kami-Shope
            </h1>
            <div className="w-20 md:w-80 h-1 bg-blue-600 mt-1"></div>
          </div>
        </div>

        {/* CENTER SECTION */}
        <div className="w-2/4 flex justify-center">
          <div className="flex w-full border-2 border-gray-300 rounded-lg overflow-hidden h-12 md:h-14">
            <input
              type="text"
              placeholder="Search for products..."
              className="flex-1 px-4 md:px-6 text-lg md:text-2xl outline-none"
            />
            <select className="bg-gray-100 px-4 md:px-8 outline-none border-l text-lg md:text-2xl">
              <option>All Categories</option>
              <option>Electronics</option>
              <option>Fashion</option>
              <option>Home</option>
            </select>
            <button className="bg-red-500 text-white px-4 md:px-10 text-lg md:text-2xl">
              Search
            </button>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="flex-1 flex justify-end gap-4 md:gap-10">

          <div className="flex flex-col items-center cursor-pointer">
            <span className="text-3xl md:text-6xl">👤</span>
            <span className="text-sm md:text-3xl">Profile</span>
          </div>

          <div className="flex flex-col items-center cursor-pointer">
            <span className="text-3xl md:text-6xl">💬</span>
            <span className="text-sm md:text-3xl">Message</span>
          </div>

          <div className="flex flex-col items-center cursor-pointer">
            <span className="text-3xl md:text-6xl">📦</span>
            <span className="text-sm md:text-3xl">Orders</span>
          </div>

          {/* Cart Section with navigation */}
          <div
            className="flex flex-col items-center cursor-pointer relative"
            onClick={() => navigate("/cart")}
          >
            <span className="text-3xl md:text-6xl">🛒</span>
            <span className="text-sm md:text-3xl">Cart</span>

            <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs md:text-sm px-2 py-0.5 rounded-full">
              2
            </span>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Navbar;