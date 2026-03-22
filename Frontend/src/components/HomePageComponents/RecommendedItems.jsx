import React from "react";
import { useNavigate } from "react-router-dom";
import { Products } from "../../data/Products";

const RecommendedItems = () => {

  const navigate = useNavigate();

  return (
    <div className="bg-gray-100 px-4 py-6 w-full">

      <div className="max-w-650 mx-auto">

        <h2 className="text-6xl font-bold mb-8">
          Recommended items
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

          {Products.map((Product) => (
            <div
              key={product.id}
              onClick={() => navigate(`/Product/${Product.id}`)}
              className="bg-white h-150 rounded-xl p-4 shadow-sm hover:shadow-lg transition cursor-pointer"
            >

              <img
                src={Product.images[0]}   // ✅ first image
                alt={Product.title}
                className="w-full h-110 object-contain mb-4"
              />

              <h3 className="font-semibold text-4xl">
                {Product.price}
              </h3>

              <p className="text-gray-500 text-3xl">
                {Product.title}
              </p>

            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default RecommendedItems;