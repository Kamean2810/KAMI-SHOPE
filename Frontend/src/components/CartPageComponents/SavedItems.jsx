import React from "react";

const SavedItems = () => {
  const items = [
    { id: 1, image: "C_E-6.png", price: "$99.50", name: "GoPro HERO6 4K Action Camera - Black" },
    { id: 2, image: "C_E-3.png", price: "$120.00", name: "Canon EOS Camera" },
    { id: 3, image: "C_E-2.png", price: "$89.00", name: "Sony Head Phones" },
    { id: 4, image: "C_E-4.png", price: "$150.00", name: "Nikon LapTop" }
  ];

  return (
    <div className="bg-white h-140 p-6 rounded-lg mt-8">

      <h2 className="text-5xl font-bold mb-6">
        Saved for later
      </h2>

      <div className="grid grid-cols-4 gap-6">

        {items.map((item) => (
          <div key={item.id}>

            <img
              src={item.image}
              alt={item.name}
              className="w-400 h-70 object-contain rounded bg-white "
            />

            <p className="font-semibold text-2xl mt-2">{item.price}</p>

            <p className="text-4xl text-gray-500">
              {item.name}
            </p>

            <button className="text-blue-500 border mt-2 px-3 py-1 rounded text-3xl">
              Move to cart
            </button>

          </div>
        ))}

      </div>

    </div>
  );
};

export default SavedItems;