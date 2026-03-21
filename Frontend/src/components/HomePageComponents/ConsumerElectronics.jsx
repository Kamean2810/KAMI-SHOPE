import React from "react";
import { useNavigate } from "react-router-dom";
import { products } from "../../data/products"; // ✅ IMPORTANT

const ConsumerElectronics = () => {

  const navigate = useNavigate();

  // ✅ yahan tum apni marzi se products select kar sakte ho
  const electronicsProducts = products.slice(0, 8);

  return (
    <div className="bg-gray-100 px-4 py-6">

      {/* MAIN CONTAINER */}
      <div className="bg-white h-150 border rounded-lg overflow-hidden grid grid-cols-12">

        {/* LEFT BANNER */}
        <div
          className="col-span-3 p-10 flex flex-col justify-center bg-cover bg-center"
          style={{
            backgroundImage: "url('/C_E-9.png')",
          }}
        >
          <h2 className="text-5xl font-bold mb-6">
            Consumer <br />
            electronics and <br />
            gadgets
          </h2>

          <button className="bg-white text-4xl px-6 py-2 rounded-md shadow w-40">
            Source now
          </button>
        </div>

        {/* PRODUCTS GRID */}
        <div className="col-span-9 grid grid-cols-4">

          {electronicsProducts.map((item) => (
            <div
              key={item.id}
              onClick={() => navigate(`/product/${item.id}`)}
              className="border p-6 flex justify-between cursor-pointer"
            >

              <div>
                <h3 className="text-4xl font-semibold">{item.title}</h3>
                <p className="text-gray-500 text-3xl">{item.price}</p>
              </div>

              <img
                src={item.images[0]}   // ✅ FIXED
                alt={item.title}
                className="h-40 object-contain"
              />

            </div>
          ))}

        </div>

      </div>

    </div>
  );
};

export default ConsumerElectronics;