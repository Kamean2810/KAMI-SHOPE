import React from "react";

const CartItem = ({ image, title, description, seller, price }) => {
  
  return (
    <div className="flex justify-between items-center border-b py-5">
       
      <div className="flex gap-4">

        <img
          src={image}
          alt=""
          className="w-50 h-50 object-cover rounded"
        />

        <div>
          <h3 className="font-bold text-3xl">{title}</h3>

          <p className="text-2xl text-gray-500">{description}</p>

          <p className="text-2xl text-gray-500">Seller: {seller}</p>

          <div className="flex py-6 px-3 gap-3 mt-2">
            <button className="text-red-500 text-2xl border px-2 py-1 rounded">
              Remove
            </button>

            <button className="text-blue-800 text-2xl border px-2 py-1 rounded">
              Save for later
            </button>
          </div>
        </div>

      </div>

      <div className="text-right">

        <p className="font-bold text-2xl">{price}</p>

        <select className="border p-3 text-2xl mt-2 rounded">
          <option>Qty: 1</option>
          <option>Qty: 2</option>
          <option>Qty: 3</option>
        </select>

      </div>

      </div>
  );
};

export default CartItem;