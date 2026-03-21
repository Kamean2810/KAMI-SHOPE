import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/products"; // ✅ SAME DATA SOURCE

const relatedProducts = products.slice(0, 6);

const ProductDetails = () => {

  const { id } = useParams();

  // ✅ FIND PRODUCT FROM MAIN DATA
  const product = products.find(
    (item) => item.id === Number(id)
  );

  // ✅ IF NOT FOUND
  if (!product) {
    return (
      <h1 className="text-center mt-20 text-3xl font-bold">
        Product not found ❌
      </h1>
    );
  }

  // ✅ IMAGE PATH FIX
  const images = product.images.map((img) => `/${img}`);

  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-680  mx-auto bg-white p-6 rounded-lg shadow">

        {/* TOP SECTION */}
        <div className="grid grid-cols-1 h-160 md:grid-cols-3 gap-6">

          {/* LEFT - IMAGES */}
          <div>
            <img
              src={selectedImage}
              alt="product"
              className="w-full h-125 object-contain border rounded"
            />

            <div className="flex gap-2 mt-3">
              {images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt=""
                  onClick={() => setSelectedImage(img)}
                  className={`w-30 h-30 border rounded cursor-pointer ${
                    selectedImage === img ? "border-blue-500" : ""
                  }`}
                />
              ))}
            </div>
          </div>

          {/* CENTER - DETAILS */}
          <div>
            <p className="text-green-600 font-bold text-4xl mb-2">✔ In stock</p>

            <h1 className="text-3xl font-semibold">
              {product.title}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-3 mt-2 text-3xl text-gray-600">
              <span className="text-yellow-500">★★★★★</span>
              <span>9.3</span>
              <span>32 reviews</span>
              <span>154 sold</span>
            </div>

            {/* Pricing */}
            <div className="flex gap-4 mt-4 text-3xl">
              <div className="bg-red-100 p-3 text-3xl rounded text-center">
                <p className="text-red-600 text-3xl font-bold">
                  {product.price}
                </p>
                <p className="text-2xl">50-100 pcs</p>
              </div>
              <div className="bg-gray-100 p-3 text-3xl rounded text-center">
                <p className="font-bold ">$90.00</p>
                <p className="text-3xl">100-700 pcs</p>
              </div>
              <div className="bg-gray-100 p-3 rounded text-center">
                <p className="font-bold">$78.00</p>
                <p className="text-3xl">700+ pcs</p>
              </div>
            </div>

            {/* Info */}
            <div className="mt-4 text-3xl text-gray-600 space-y-2">
              <p><b>Price:</b> {product.price}</p>
              <p><b>Type:</b> {product.title}</p>
              <p><b>Material:</b> Premium</p>
              <p><b>Design:</b> Modern</p>
              <p><b>Description:</b> {product.description}</p>
              <p><b>Warranty:</b> 2 years</p>
            </div>
          </div>

          {/* RIGHT - SUPPLIER */}
          <div className="border p-8 rounded">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-green-100 w-10 h-10 text-4xl flex items-center justify-center rounded">
                R
              </div>
              <div>
                <p className="font-bold text-4xl">Guangji Trading LLC</p>
                <p className="text-3xl text-gray-500">Germany, Berlin</p>
              </div>
            </div>

            <button className="w-full bg-blue-600 text-white py-2  text-3xl rounded mb-2">
              Send inquiry
            </button>

            <button className="w-full border text-3xl py-2 rounded">
              Seller's profile
            </button>

            <p className="text-4xl mt-3 text-gray-500">✔ Verified Seller</p>
            <p className="text-4xl text-gray-500">🌍 Worldwide shipping</p>
          </div>
        </div>

        {/* TABS */}
        <div className="mt-8">
          <div className="flex gap-6 text-4xl border-b">
            {["description", "reviews", "shipping", "seller"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-2 capitalize ${
                  activeTab === tab
                    ? "border-b-2 border-blue-600 text-blue-600"
                    : "text-gray-500"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="mt-4 text-gray-600 text-sm">
            {activeTab === "description" && (
              <p>{product.description}</p>
            )}
            {activeTab === "reviews" && <p>No reviews yet.</p>}
            {activeTab === "shipping" && <p>Shipping info here.</p>}
            {activeTab === "seller" && <p>Seller details here.</p>}
          </div>
        </div>

        {/* RELATED PRODUCTS */}
        <div className="mt-10">
          <h2 className="font-semibold text-5xl mb-4">Related products</h2>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {relatedProducts.map((item) => (
              <div
                key={item.id}
                className="border p-2 rounded text-center"
              >
                <img
                  src={`/${item.images[0]}`}
                  alt=""
                  className="h-70 mx-auto object-contain"
                />
                <p className="text-3xl mt-2">{item.title}</p>
                <p className="text-gray-500 text-3xl">{item.price}</p>
              </div>
            ))}
          </div>
        </div>

        {/* BANNER */}
        <div className="mt-10 bg-blue-600 text-white p-6 h-40 rounded flex justify-between items-center">
          <div>
            <h3 className="text-5xl font-semibold">
              Super discount on more than 100 USD
            </h3>
            <p className="text-3xl">
              Have you ever finally just write dummy info
            </p>
          </div>
          <button className="bg-orange-400 px-4 py-2 text-4xl rounded">
            Shop now
          </button>
        </div>

      </div>
    </div>
  );
};

export default ProductDetails;