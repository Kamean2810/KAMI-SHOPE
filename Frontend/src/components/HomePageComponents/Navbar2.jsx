import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const Navbar2 = () => {
  const [showHelp, setShowHelp] = useState(false);
  const [showLanguage, setShowLanguage] = useState(false);
  const [showCountry, setShowCountry] = useState(false);

  const countries = [
    { name: "USA", flag: "🇺🇸" },
    { name: "UK", flag: "🇬🇧" },
    { name: "Pakistan", flag: "🇵🇰" },
    { name: "Canada", flag: "🇨🇦" },
    { name: "Germany", flag: "🇩🇪" },
    { name: "UAE", flag: "🇦🇪" },
    { name: "India", flag: "🇮🇳" },
    { name: "China", flag: "🇨🇳" },
  ];

  const languages = ["English (US)", "English (UK)", "Urdu", "Deutsch"];

  const [selectedLanguage, setSelectedLanguage] = useState("English (US)");
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);

  return (
    <div className="flex justify-between items-center px-18 py-8 bg-gray-50 border-t shadow-md text-4xl">
      
      {/* ===== LEFT SIDE ===== */}
      <div className="flex items-center gap-18 font-medium">
        
        {/* Hamburger + All Categories */}
        <div className="flex items-center gap-3 cursor-pointer hover:text-red-500 transition">
          <div className="flex flex-col gap-1">
            <span className="w-6 h-0.5 bg-black"></span>
            <span className="w-6 h-0.5 bg-black"></span>
            <span className="w-6 h-0.5 bg-black"></span>
          </div>
          <span>All Categories</span>
        </div>

        <span className="hover:text-red-500 cursor-pointer transition">
          Hot Offers
        </span>
        <span className="hover:text-red-500 cursor-pointer transition">
          Gift Boxes
        </span>
        <span className="hover:text-red-500 cursor-pointer transition">
          Projects
        </span>
        <span className="hover:text-red-500 cursor-pointer transition">
          Menu
        </span>

        {/* Help Dropdown */}
        <div className="relative">
          <div
            onClick={() => setShowHelp(!showHelp)}
            className="flex items-center gap-2 cursor-pointer hover:text-red-500 transition"
          >
            Help <ChevronDown size={18} />
          </div>

          {showHelp && (
            <div className="absolute top-10 left-0 bg-white shadow-lg rounded-md p-3 w-44 z-50 text-base">
              <p className="hover:bg-gray-100 p-2 cursor-pointer">FAQ</p>
              <p className="hover:bg-gray-100 p-2 cursor-pointer">Contact</p>
              <p className="hover:bg-gray-100 p-2 cursor-pointer">Support</p>
            </div>
          )}
        </div>
      </div>

      {/* ===== RIGHT SIDE ===== */}
      <div className="flex items-center gap-10 font-medium">
        
        {/* Language Dropdown */}
        <div className="relative">
          <div
            onClick={() => setShowLanguage(!showLanguage)}
            className="flex items-center gap-2 cursor-pointer"
          >
            <span>{selectedLanguage}</span>
            <ChevronDown size={18} />
          </div>

          {showLanguage && (
            <div className="absolute top-10 right-0 bg-white shadow-lg rounded-md p-3 w-44 z-50 text-base">
              {languages.map((lang, index) => (
                <p
                  key={index}
                  onClick={() => {
                    setSelectedLanguage(lang);
                    setShowLanguage(false);
                  }}
                  className="hover:bg-gray-100 p-2 cursor-pointer"
                >
                  {lang}
                </p>
              ))}
            </div>
          )}
        </div>

        {/* Ship To Dropdown */}
        <div className="relative">
          <div
            onClick={() => setShowCountry(!showCountry)}
            className="flex items-center gap-2 cursor-pointer"
          >
            <span>
              {selectedCountry.flag} {selectedCountry.name}
            </span>
            <ChevronDown size={18} />
          </div>

          {showCountry && (
            <div className="absolute top-10 right-0 bg-white shadow-lg rounded-md p-3 w-44 z-50 text-base">
              {countries.map((country, index) => (
                <p
                  key={index}
                  onClick={() => {
                    setSelectedCountry(country);
                    setShowCountry(false);
                  }}
                  className="hover:bg-gray-100 p-2 cursor-pointer"
                >
                  {country.flag} {country.name}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar2;