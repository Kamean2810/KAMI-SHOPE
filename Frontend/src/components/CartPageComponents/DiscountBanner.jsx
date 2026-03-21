import React from "react";

const DiscountBanner = () => {
  return (
    <div className="bg-blue-600 text-white p-6 rounded-lg mt-8 h-80 flex justify-between items-center">

      <div>
        <h3 className="text-5xl font-semibold">
          Super discount on more than 100 USD
        </h3>
        <p className="text-4xl opacity-80">
          Have you ever finally just write dummy info
        </p>
      </div>

      <button className="bg-orange-400 text-3xl px-11 py-8 rounded">
        Shop now
      </button>

    </div>
  );
};

export default DiscountBanner;