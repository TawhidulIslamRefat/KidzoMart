import React from "react";
<<<<<<< HEAD
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
=======
import { FaStar } from "react-icons/fa";
>>>>>>> 1a72bcf6a49c0ccd50f2dcda33870645799cc98f

const MostWantedToy = () => {
  const products = [
    {
      id: 1,
      title: "Galore: Rev Up the Playtime Excitement!",
      price: 149.99,
      oldPrice: 199.0,
      img: "https://www.radiustheme.com/demo/wordpress/themes/toyup/wp-content/uploads/2023/12/product_16.png",
      rating: 5,
    },
    {
      id: 2,
      title: "Snake: Rev Up the Playtime Excitement!",
      price: 149.99,
      oldPrice: 199.0,
      img: "https://www.radiustheme.com/demo/wordpress/themes/toyup/wp-content/uploads/2023/12/product_07.png",
      rating: 5,
    },
    {
      id: 3,
      title: "EchWiz Marvels: Electronic Playtime Experience!",
      price: 35.89,
      oldPrice: 85.89,
      img: "https://www.radiustheme.com/demo/wordpress/themes/toyup/wp-content/uploads/2023/12/product_08.png",
      rating: 5,
    },
<<<<<<< HEAD
    {
      id: 4,
      title: "EchWiz Marvels: Electronic Playtime Experience!",
      price: 35.89,
      oldPrice: 85.89,
      img: "https://www.radiustheme.com/demo/wordpress/themes/toyup/wp-content/uploads/2023/12/product_08.png",
      rating: 5,
    },
=======
>>>>>>> 1a72bcf6a49c0ccd50f2dcda33870645799cc98f
  ];

  return (
    <div className="w-full bg-[#E9F5FF] py-16 px-4 md:px-10 rounded-2xl">
      <h2 className="text-center text-xl md:text-4xl font-extrabold text-[#0B0B2A] mt-1">
        Most Wanted Products
      </h2>

<<<<<<< HEAD
      <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
        {/* Left Banner */}
=======
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-10">
        {/* Left Banner */}
        <div className="bg-[#FFE6C9] rounded-3xl p-6 flex flex-col items-center text-center shadow-sm">
          <h3 className="text-3xl font-extrabold text-[#FF8A00]">
            48% Off Now!
          </h3>
          <p className="text-xl font-bold text-[#FF8A00] mt-1">
            Sweet Kids Deal
          </p>
          <button className="mt-4 bg-[#FF5F5F] text-white px-6 py-2 rounded-full font-semibold">
            Show Now
          </button>

          <div className="mt-6">
            <img
              src="https://www.radiustheme.com/demo/wordpress/themes/toyup/wp-content/uploads/2023/12/h2banner_1.png"
              alt="Kid"
              className="h-50 w-60"
            />
          </div>
        </div>
>>>>>>> 1a72bcf6a49c0ccd50f2dcda33870645799cc98f

        {/* Product Cards */}
        {products.map((p) => (
          <div
            key={p.id}
<<<<<<< HEAD
            className="bg-white rounded-3xl p-3 md:p-5 shadow-md hover:shadow-lg transition cursor-pointer flex flex-col"
=======
            className="bg-white rounded-3xl p-5 shadow-md hover:shadow-lg transition cursor-pointer"
>>>>>>> 1a72bcf6a49c0ccd50f2dcda33870645799cc98f
          >
            <span className="bg-[#B4F2AE] text-[#2D7C2F] px-3 py-1 rounded-md text-sm font-semibold">
              SALE
            </span>

            <div className="flex justify-center mt-4">
<<<<<<< HEAD
              <img src={p.img} alt={p.title} className="w-30 h-30 md:w-48 md:h-48 object-contain" />
            </div>

            <p className="mt-4 text-[#0B0B2A] font-semibold text-sm md:text-lg">{p.title}</p>

            <div className="flex md:flex-row flex-col items-center justify-between mt-3 space-x-4">
=======
              <img src={p.img} alt={p.title} />
            </div>

            <p className="mt-4 text-[#0B0B2A] font-semibold text-lg">
              {p.title}
            </p>

            <div className="flex items-center justify-between mt-3 space-x-4">
>>>>>>> 1a72bcf6a49c0ccd50f2dcda33870645799cc98f
              <p className="text-[#FF5F5F] text-xl font-bold">${p.price}</p>
              <div className="flex items-center gap-1 px-2 py-1 rounded-lg">
                {Array(Math.floor(p.rating))
                  .fill()
                  .map((_, i) => (
                    <FaStar key={i} className="text-orange-500" />
                  ))}
<<<<<<< HEAD
                {p.rating % 1 >= 0.5 && <FaStarHalfAlt className="text-orange-500" />}
=======

                {p.rating % 1 >= 0.5 && (
                  <FaStarHalfAlt className="text-orange-500" />
                )}
>>>>>>> 1a72bcf6a49c0ccd50f2dcda33870645799cc98f
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MostWantedToy;
