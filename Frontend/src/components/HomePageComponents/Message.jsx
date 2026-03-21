import React, { useState } from "react";

const Message = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Subscribed with: ${email}`);
    setEmail("");
  };

  return (
    <div className="bg-gray-100 py-15 flex justify-center items-center">
      <div className="text-center max-w-250 w-full px-6">
        
        {/* Title */}
        <h2 className="text-4xl font-semibold text-gray-800 mb-2">
          Subscribe on our newsletter
        </h2>

        {/* Description */}
        <p className= "text-gray-500 text-3xl mb-8">
          Get daily news on upcoming offers from many suppliers all over the world
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="flex items-center justify-center gap-3 "
        >
          {/* Email Input */}
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 font-bold border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Button */}
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
          >
            Subscribe
          </button>
        </form>

      </div>
    </div>
  );
};

export default Message;