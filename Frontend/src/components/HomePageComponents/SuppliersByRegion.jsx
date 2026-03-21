import React from "react";

const SuppliersByRegion = () => {
  const suppliers = [
    {
      country: "Arabic Emirates",
      site: "shopname.ae",
      flag: "/flags/Arab_emirates.png",
    },
    {
      country: "Australia",
      site: "shopname.au",
      flag: "/flags/Austerlia.png",
    },
    {
      country: "United States",
      site: "shopname.us",
      flag: "/flags/Unitedstatss.png",
    },
    {
      country: "Russia",
      site: "shopname.ru",
      flag: "/flags/Russia.png",
    },
    {
      country: "Italy",
      site: "shopname.it",
      flag: "/flags/Italy.png",
    },
    {
      country: "Denmark",
      site: "denmark.com.dk",
      flag: "/flags/DenMark.png",
    },
    {
      country: "France",
      site: "shopname.com.fr",
      flag: "/flags/france.png",
    },
    {
      country: "Arabic Emirates",
      site: "shopname.ae",
      flag: "/flags/Arabic_Emerates.png",
    },
    {
      country: "China",
      site: "shopname.cn",
      flag: "/flags/China.png",
    },
    {
      country: "Great Britain",
      site: "shopname.co.uk",
      flag: "/flags/Great_bretin.png",
    },
  ];

  return (
    <div className="bg-gray-100 px-4 py-10">

      <div className="max-w-650 mx-auto">

        {/* Title */}
        <h2 className="text-5xl font-bold mb-8">
          Suppliers by region
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12">

          {suppliers.map((item, index) => (
            <div key={index} className="flex items-center gap-5">

              {/* Flag */}
              <img
                src={item.flag}
                alt={item.country}
                className="w-15 h-13 object-cover rounded-sm"
              />

              {/* Text */}
              <div>
                <p className=" text-3xl font-semibold text-gray-800">
                  {item.country}
                </p>

                <p className="text-2xl text-gray-500">
                  {item.site}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
};

export default SuppliersByRegion;