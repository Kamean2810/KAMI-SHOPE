import React from "react";
import { Search, Package, Plane, ShieldCheck } from "lucide-react";

const ExtraServices = () => {
  const services = [
    {
      title: "Source from Industry Hubs",
      image: "/extra-1.png",
      icon: <Search size={28} />,
    },
    {
      title: "Customize Your Products",
      image: "/extra-2.png",
      icon: <Package size={28} />,
    },
    {
      title: "Fast, reliable shipping by ocean or air",
      image: "/extra-3.png",
      icon: <Plane size={28} />,
    },
    {
      title: "Product monitoring and inspection",
      image: "/extra-4.png",
      icon: <ShieldCheck size={28} />,
    },
  ];

  return (
    <div className="bg-gray-100 px-6 py-4">

      <div className="max-w-650 mx-auto">

        {/* Title */}
        <h2 className="text-5xl font-bold mb-8">
          Our extra services
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white h-90 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition"
            >

              {/* Image */}
              <div className="relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-70 object-cover"
                />

                {/* Icon circle */}
                <div className="absolute -bottom-10 right-10 bg-blue-200 w-20 h-20 rounded-full flex items-center justify-center shadow">
                  {service.icon}
                </div>
              </div>

              {/* Text */}
              <div className="p-6 pt-10">
                <p className="text-3xl font-medium">
                  {service.title}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
};

export default ExtraServices;