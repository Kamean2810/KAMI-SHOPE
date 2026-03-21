import React from "react";

const CartSummary = () => {
  return (
    <div className="bg-white p-10 rounded-lg shadow h-180">

      <div className="mb-4">
        <p className="text-5xl mb-2">Have a coupon?</p>

        <div className="flex text-4xl font-semibold">
          <input
            type="text"
            placeholder="Add coupon"
            className="border p-2 flex-1 rounded-l"
          />
          <button className="bg-blue-500 text-white px-8 rounded-r">
            Apply
          </button>
        </div>
      </div>

      <div className="border-t pt-4 space-y-8 text-4xl">

        <div className="flex justify-between">
          <span>Subtotal:</span>
          <span>$1403.97</span>
        </div>

        <div className="flex justify-between text-red-500">
          <span>Discount:</span>
          <span>- $60.00</span>
        </div>

        <div className="flex justify-between text-green-600">
          <span>Tax:</span>
          <span>+ $14.00</span>
        </div>

      </div>

      <div className="border-t mt-4 pt-4 flex justify-between font-bold text-5xl">
        <span>Total:</span>
        <span>$1357.97</span>
      </div>

      <button className="bg-green-500 text-white w-full py-6 text-5xl mt-4 rounded">
        Checkout
      </button>

    </div>
  );
};

export default CartSummary;