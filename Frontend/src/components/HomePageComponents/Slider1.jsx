import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Slider1 = () => {

  const navigate = useNavigate();

  const categories = [
    "Automobile",
    "Cloth and Wear",
    "Home Interior",
    "Computer and Tech",
    "Tools & Equipment",
    "Sports & Outdoor",
    "Animal & Pets",
    "Machinery Tools",
    "More Categories",
  ];

  const categoryImages = {
    Automobile: "S-image1.png",
    "Cloth and Wear":
      "https://images.unsplash.com/photo-1521334884684-d80222895322",
    "Home Interior":
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
    "Computer and Tech":
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
    "Tools & Equipment":
      "https://images.unsplash.com/photo-1581091870627-3b5de2a8e8f5",
    "Sports & Outdoor":
      "https://images.unsplash.com/photo-1517649763962-0c623066013b",
    "Animal & Pets":
      "https://images.unsplash.com/photo-1518717758536-85ae29035b6d",
    "Machinery Tools":
      "https://images.unsplash.com/photo-1581093458791-9f3c3900f8f0",
    "More Categories":
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
  };

  const [selectedCategory, setSelectedCategory] = useState("Automobile");

  const handleCategoryClick = (cat) => {
    setSelectedCategory(cat);
    navigate(`/category/${cat}`);
  };

  // NEW FUNCTIONS
  const handleLogin = () => {
    navigate("/login");
  };

  const handleRegister = () => {
    navigate("/register");
  };

  return (
    <div className="bg-gray-100 py-10">

      {/* MAIN CONTAINER */}
      <div className="max-w-650 h-200 mx-auto bg-white rounded-lg shadow-md p-10">

        <div className="grid grid-cols-12 gap-6 h-full">

          {/* LEFT CATEGORY LIST */}
          <div className="col-span-2 text-4xl font-bold bg-white shadow-md rounded-lg p-6">
            <ul className="space-y-4">
              {categories.map((cat, index) => (
                <li
                  key={index}
                  onClick={() => handleCategoryClick(cat)}
                  className={`cursor-pointer p-2 rounded-md transition ${
                    selectedCategory === cat
                      ? "bg-blue-100 font-semibold"
                      : "hover:bg-gray-100"
                  }`}
                >
                  {cat}
                </li>
              ))}
            </ul>
          </div>

          {/* MIDDLE IMAGE */}
          <div className="col-span-8 bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src={categoryImages[selectedCategory]}
              alt="Category"
              className="w-full h-full object-cover"
            />
          </div>

          {/* RIGHT BOXES */}
          <div className="col-span-2 flex flex-col gap-6">

            {/* USER BOX */}
            <div className="flex-1 bg-blue-200 shadow-md rounded-lg p-4">
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                  alt="user"
                  className="w-15 h-15 rounded-full"
                />
                <div>
                  <h4 className="font-semibold text-2xl">Hi, User</h4>
                  <p className="text-2xl text-gray-500">
                    Let’s get started
                  </p>
                </div>
              </div>

              <button
                onClick={handleLogin}
                className="w-full bg-blue-600 text-white py-2 text-3xl rounded-md mb-2"
              >
                Log in
              </button>

              <button
                onClick={handleRegister}
                className="w-full bg-white border text-3xl border-blue-600 text-blue-600 py-2 rounded-md"
              >
                Register
              </button>

            </div>

            {/* OFFER BOX */}
            <div className="flex-1 bg-orange-300 shadow-md text-4xl rounded-lg p-4 flex items-center justify-center text-center font-semibold">
              Get $10 OFF with a new supplier
            </div>

            {/* QUOTE BOX */}
            <div className="flex-1 bg-green-400 shadow-md text-4xl rounded-lg p-4 flex items-center justify-center text-center font-semibold">
              Send quotes with supplier preferences
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Slider1;