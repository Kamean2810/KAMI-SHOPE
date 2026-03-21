import React from "react";
import { useNavigate } from "react-router-dom";
import { products } from "../../data/Products"; // ✅ IMPORTANT

const HomeOutdoor = () => {

  const navigate = useNavigate();

  // ✅ sirf next 8 products use karo (custom selection)
  const outdoorProducts = products.slice(1, 9);

  return (
    <div className="bg-gray-100 px-4 py-6">

      {/* MAIN CONTAINER */}
      <div className="bg-white h-160 grid grid-cols-12 border rounded-lg overflow-hidden">

        {/* LEFT BIG BANNER */}
        <div
          className="col-span-4 p-20 flex flex-col justify-center bg-cover bg-center"
          style={{
            backgroundImage: "url(H_outdoor-0.png)",
          }}
        >
          <h2 className="text-5xl font-bold mb-6">
            Home and <br /> outdoor
          </h2>

          <button className="bg-white text-5xl px-2 py-6 rounded-md shadow w-80">
            Source now
          </button>
        </div>

        {/* RIGHT PRODUCTS GRID */}
        <div className="col-span-8 grid grid-cols-4">

          {outdoorProducts.map((item) => (
            <div
              key={item.id}
              onClick={() => navigate(`/product/${item.id}`)}
              className="border p-6 flex flex-col justify-between cursor-pointer"
            >
              <div>
                <h3 className="font-semibold text-3xl">{item.title}</h3>
                <p className="text-gray-500 text-3xl">{item.price}</p>
              </div>

              <img
                src={item.images[0]}  // ✅ FIXED
                alt={item.title}
                className="h-40 object-contain self-end mt-4"
              />
            </div>
          ))}

        </div>

      </div>

    </div>
  );
};

export default HomeOutdoor;