import React from "react";
import Navbar from "../components/HomePageComponents/Navbar";
import CartItem from "../components/CartPageComponents/CartItem";
import CartSummary from "../components/CartPageComponents/CartSummary";
import Features from "../components/CartPageComponents/Features";
import SavedItems from "../components/CartPageComponents/SavedItems";
import DiscountBanner from "../components/CartPageComponents/DiscountBanner";
import Footer from "../components/HomePageComponents/Footer";

const Cart = () => {
  // Dynamic cart items
  const cartItems = [
    {
      image: "R_I-1.png",
      title: "T-shirts with multiple colors",
      description: "Size: medium, Color: blue, Material: Cotton",
      seller: "Artel Market",
      price: "$78.99",
    },
    {
      image: "R_I-2.png",
      title: "Men's Denim Jacket",
      description: "Size: large, Color: black, Material: Denim",
      seller: "Denim World",
      price: "$120.00",
    },
    {
      image: "R_I-3.png",
      title: "Women's Sneakers",
      description: "Size: 7, Color: white, Material: Leather",
      seller: "Sneaker Hub",
      price: "$99.50",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />

      <div className="max-w-650 mx-auto p-6">

        <h1 className="text-4xl md:text-5xl font-semibold mb-6">
          My cart ({cartItems.length})
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Cart Items */}
          <div className="md:col-span-2 h-230 bg-white p-10 rounded-lg shadow">
            {cartItems.map((item, index) => (
              <CartItem
                key={index}
                image={item.image}
                title={item.title}
                description={item.description}
                seller={item.seller}
                price={item.price}
              />
            ))}

            <div className="flex justify-between mt-6">
              <button className="bg-blue-500 text-2xl text-white px-6 py-4 rounded">
                ← Back to shop
              </button>

              <button className="border px-6 text-2xl py-4 rounded text-gray-600">
                Remove all
              </button>
            </div>
          </div>

          {/* Summary */}
          <CartSummary />

        </div>

        <Features />
        <SavedItems />
        <DiscountBanner />

      </div>

      <Footer />
    </div>
  );
};

export default Cart;