import React from "react";
import { useNavigate } from "react-router-dom";
import products from "../../data/product"; // ✅ default import, exact filename

const ConsumerElectronics = () => {
  const navigate = useNavigate();

  const electronicsProducts = products.slice(0, 8); // ✅ first 8 products

  return (
    <div className="bg-gray-100 px-4 py-6">
      <div className="bg-white border rounded-lg overflow-hidden grid grid-cols-12">
        {/* LEFT BANNER */}
        <div
          className="col-span-3 p-10 flex flex-col justify-center bg-cover bg-center"
          style={{
            backgroundImage: "url('/C_E-9.png')", // ✅ ensure file exists in public/
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
        <div className="col-span-9 grid grid-cols-4 gap-4">
          {electronicsProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => navigate(`/Product/${product.id}`)}
              className="border p-6 flex justify-between cursor-pointer"
            >
              <div>
                <h3 className="text-4xl font-semibold">{product.title}</h3>
                <p className="text-gray-500 text-3xl">{product.price}</p>
              </div>

              <img
                src={product.images[0]} // ✅ first image
                alt={product.title}
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