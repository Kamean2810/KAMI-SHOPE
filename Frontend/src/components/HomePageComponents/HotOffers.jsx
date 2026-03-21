import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { products } from "../../data/Products"; // ✅ IMPORTANT

const HotOffers = () => {

  const navigate = useNavigate();

  const [timeLeft, setTimeLeft] = useState({
    days: 4,
    hours: 13,
    minutes: 34,
    seconds: 56,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;

        if (seconds > 0) seconds--;
        else {
          seconds = 59;
          if (minutes > 0) minutes--;
          else {
            minutes = 59;
            if (hours > 0) hours--;
            else {
              hours = 23;
              if (days > 0) days--;
            }
          }
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // ✅ sirf first 5 products show karo
  const hotProducts = products.slice(0, 5);

  return (
    <div className="bg-gray-100 py-4 px-6">

      <div className="bg-white h-125 grid grid-cols-6 border border-black">

        {/* LEFT TIMER */}
        <div className="p-6 border-r border-black">
          <h2 className="text-5xl font-bold">Deals and offers</h2>
          <p className="text-gray-600 text-5xl mb-6">Hygiene equipments</p>

          <div className="flex gap-2 text-5xl">
            {[
              { label: "Days", value: timeLeft.days },
              { label: "Hour", value: timeLeft.hours },
              { label: "Min", value: timeLeft.minutes },
              { label: "Sec", value: timeLeft.seconds },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-600 text-white px-3 py-2 rounded text-center"
              >
                <div className="font-bold">
                  {String(item.value).padStart(2, "0")}
                </div>
                <div className="text-3xl">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* PRODUCTS */}
        {hotProducts.map((product) => (
          <div
            key={product.id}
            onClick={() => navigate(`/product/${product.id}`)}
            className="text-center text-4xl p-6 border-r border-black last:border-r-0 cursor-pointer"
          >
            <img
              src={product.images[0]}   // ✅ FIXED
              alt={product.title}
              className="h-80 mx-auto object-contain mb-4"
            />

            <h4 className="mb-3">{product.title}</h4>

            <div className="inline-block bg-red-100 text-red-600 px-4 py-1 rounded-full text-3xl font-semibold">
              -25%
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default HotOffers;