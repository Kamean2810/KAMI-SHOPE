import React from "react";

const RequestQuote = () => {
  return (
    <div className="bg-gray-100 px-4 py-6">

      {/* MAIN BANNER */}
      <div
        className=" h-200 relative rounded-xl overflow-hidden"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >

        {/* BLUE OVERLAY */}
        <div className="absolute inset-0 bg-linear-to-r from-blue-600 to-blue-400 opacity-80"></div>

        <div className="relative  grid grid-cols-12 gap-10 p-25">

          {/* LEFT TEXT */}
          <div className="col-span-7  text-white">

            <h2 className="text-8xl font-bold mb-6 leading-tight">
              An easy way to send
              <br />
              requests to all suppliers
            </h2>

            <p className="text-5xl text-blue-100 max-w-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>

          </div>

          {/* RIGHT FORM */}
          <div className="col-span-5 w-5xl">

            <div className="bg-white h-160 rounded-xl shadow-lg p-8">

              <h3 className="text-4xl font-semibold mb-6">
                Send quote to suppliers
              </h3>

              {/* ITEM INPUT */}
              <input
                type="text"
                placeholder="What item you need?"
                className="w-full h-20 text-3xl font-bold border rounded-md p-3 mb-4"
              />

              {/* DETAILS */}
              <textarea
                placeholder="Type more details"
                className="w-full text-3xl font-bold border rounded-md p-3 mb-4 h-50"
              ></textarea>

              {/* QUANTITY ROW */}
              <div className="flex gap-4 mb-6">

                <input
                  type="number"
                  placeholder="Quantity"
                  className="flex-1 text-3xl h-20 font-bold border rounded-md p-3"
                />

                <select className="border text-2xl rounded-md p-3 w-28">
                  <option>Pcs</option>
                  <option>Kg</option>
                  <option>Box</option>
                </select>

              </div>

              {/* BUTTON */}
              <button className="bg-blue-600 text-3xl text-white px-9 py-6 rounded-md font-semibold hover:bg-blue-700 transition">
                Send inquiry
              </button>

            </div>

          </div>

        </div>
      </div>

    </div>
  );
};

export default RequestQuote;