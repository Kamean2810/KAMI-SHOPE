import React from "react";
import products from "../../data/product"; // ✅ FIXED

const SavedItems = () => {

  // 👉 Example: first 4 products show kar raha hoon
  const items = products.slice(0, 4);

  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg mt-8">

      {/* TITLE */}
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6">
        Saved for later
      </h2>

      {/* GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">

        {items.map((item) => (
          <div key={item.id} className="border p-3 rounded-lg">

            {/* IMAGE */}
            <img
              src={item.images[0]}   // ✅ first image from array
              alt={item.title}
              className="w-full h-32 sm:h-40 md:h-48 object-contain rounded"
            />

            {/* PRICE */}
            <p className="font-semibold text-sm sm:text-base mt-2">
              {item.price}
            </p>

            {/* NAME */}
            <p className="text-xs sm:text-sm md:text-base text-gray-500 line-clamp-2">
              {item.title}
            </p>

            {/* BUTTON */}
            <button className="text-blue-500 border mt-2 px-3 py-1 rounded text-xs sm:text-sm">
              Move to cart
            </button>

          </div>
        ))}

      </div>

    </div>
  );
};

export default SavedItems;