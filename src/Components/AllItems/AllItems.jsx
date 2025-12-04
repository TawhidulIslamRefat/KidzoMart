import React, { useState, useEffect } from "react";
import toysData from "../../../public/Toys.json"; // your local JSON data file
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router";

const AllItems = () => {
  const [items, setItems] = useState(toysData);
  const [filteredItems, setFilteredItems] = useState(toysData);

  const [inputText, setInputText] = useState("");
  const [sort, setSort] = useState("");

  // Search + Sorting Function
  useEffect(() => {
    let data = [...items];

    // Search filter
    if (inputText) {
      data = data.filter((item) =>
        item.name.toLowerCase().includes(inputText.toLowerCase())
      );
    }

    // Sorting filter
    if (sort === "order-asc") {
      data.sort((a, b) => a.price - b.price);
    } else if (sort === "order-desc") {
      data.sort((a, b) => b.price - a.price);
    }

    setFilteredItems(data);
  }, [inputText, sort, items]);

  return (
    <div>
      {/* ------------------- Banner Section ------------------- */}
      <section>
<<<<<<< HEAD
        <div className="bg-[#F8F7F7] relative py-0 sm:py-15 md:py-20">
          <div className="w-10/12 mx-auto grid lg:grid-cols-2 items-center gap-10 py-15">
=======
        <div className="bg-[#F8F7F7] relative py-10 sm:py-15 md:py-20">
          <div className="w-10/12 mx-auto grid lg:grid-cols-2 items-center gap-10 py-15">

>>>>>>> 1a72bcf6a49c0ccd50f2dcda33870645799cc98f
            <div className="space-y-6">
              <h1
                className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold leading-tight"
                data-aos="fade-right"
              >
<<<<<<< HEAD
                Easy way to find <br /> a perfect <span>Toy</span>
=======
                Easy way to find <br /> a perfect{" "}
                <span>Toy</span>
>>>>>>> 1a72bcf6a49c0ccd50f2dcda33870645799cc98f
              </h1>

              <p
                className="text-gray-600 max-w-lg font-medium text-xs sm:text-sm md:text-lg"
                data-aos="fade-right"
              >
<<<<<<< HEAD
                Explore amazing kids toys with perfect pricing, quality and
                variety.
=======
                Explore amazing kids toys with perfect pricing, quality and variety.
>>>>>>> 1a72bcf6a49c0ccd50f2dcda33870645799cc98f
              </p>

              {/* Search & Sort Box */}
              <div
                className="shadow-lg p-5 rounded-xl bg-white space-y-3 z-100"
                data-aos="fade-left"
              >
                <div className="flex items-center gap-3 flex-col md:flex-row">
                  <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="Search toy"
                    className="input input-bordered w-full"
                  />

                  <select
                    onChange={(e) => setSort(e.target.value)}
                    className="select select-bordered w-full"
                  >
                    <option value="">Sort By</option>
                    <option value="order-asc">Order-asc</option>
                    <option value="order-desc">Order-desc</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Banner Images Section */}
            <div className="relative flex justify-center">
              <img
                src="https://www.radiustheme.com/demo/wordpress/themes/toyup/wp-content/uploads/2023/12/product_16.png"
                alt=""
<<<<<<< HEAD
                className="w-80 h-56 rounded-xl object-cover shadow-md lg:absolute "
=======
                className="w-80 h-56 rounded-xl object-cover shadow-md lg:absolute"
>>>>>>> 1a72bcf6a49c0ccd50f2dcda33870645799cc98f
                data-aos="fade-left"
              />

              <img
                src="https://www.radiustheme.com/demo/wordpress/themes/toyup/wp-content/uploads/2023/12/product_08.png"
                alt=""
<<<<<<< HEAD
                className="w-72 h-48 rounded-xl object-cover shadow-xl absolute md:-bottom-5 -bottom-25 -left-5 border-4 border-white hidden lg:flex"
=======
                className="w-72 h-48 rounded-xl object-cover shadow-xl absolute md:-bottom-5 -bottom-25 -left-5 border-4 border-white"
>>>>>>> 1a72bcf6a49c0ccd50f2dcda33870645799cc98f
                data-aos="fade-up"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ------------------- Card Section ------------------- */}
<<<<<<< HEAD
      <div>
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-center">
          All Toys
        </h1>
      </div>
      <div className=" w-full md:w-10/12 mx-auto py-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-6 p-1">
        {filteredItems.map((item) => (
          <div className=" p-0 md:p-2 w-full  flex">
            <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 overflow-hidden flex flex-col h-full w-full">
              {/* Image Section */}
              <div className="bg-[#EAF8FF] py-1 md:p-5 flex justify-center rounded-t-2xl">
                <img
                  className="w-32 h-32 lg:w-44 lg:h-44 rounded-xl object-contain"
                  src={item.image}
                  alt={item.name}
                />
              </div>

              {/* Content Section */}
              <div className="p-3 flex flex-col flex-1">
                <h2 className="text-[14px] lg:text-xl font-semibold text-gray-700 leading-tight">
                  {item.name}
                </h2>

                <div className="flex items-center justify-between mt-1">
                  <p className="text-lg font-bold text-red-500">
                    ${item.discountPrice}
                  </p>
                  <p className="text-sm line-through text-gray-400">
                    ${item.price}
                  </p>
                </div>

                <div className="flex justify-between items-center mt-1 md:mt-2">
                  <div className="flex items-center gap-1 px-2 py-0 md:py-1 rounded-lg">
                    {Array(Math.floor(item.rating))
                      .fill()
                      .map((_, i) => (
                        <FaStar key={i} className="text-orange-500" />
                      ))}
                    {item.rating % 1 >= 0.5 && (
                      <FaStarHalfAlt className="text-orange-500" />
                    )}
                  </div>

                  <p className="text-[12px] lg:text-[14px] font-medium bg-gray-200 px-2 py-1 rounded-lg hidden md:flex">
                    <span className="text-red-500">stock -</span> {item.stock}
                  </p>
                </div>

                {/* Spacer to push button to bottom */}
                <div className="flex-1"></div>

                {/* Button */}
                <Link
                  to={`/product-details/${item.id}`}
                  className="mt-3 bg-linear-to-r from-[#FA6775] to-[#F52549] w-full text-center py-2 text-white font-semibold text-sm rounded-lg hover:opacity-90 transition hover:bg-[#6ECFFF]"
                >
                  View Detail
                </Link>
              </div>
            </div>
          </div>
=======
      <div className="w-10/12 mx-auto py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
        {filteredItems.map((item) => (
          <div className="p-2">
      <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 overflow-hidden">
        <div className="bg-[#EAF8FF] p-5 flex justify-center rounded-t-2xl">
          <img
            className="w-32 h-32 lg:w-44 lg:h-44 rounded-xl object-contain"
            src={item.image}
            alt={item.name}
          />
        </div>

        <div className="p-3 flex flex-col gap-1.5">
          <h2 className="text-[14px] lg:text-xl font-semibold text-gray-700 leading-tight">
            {item.name}
          </h2>

          <div className="flex items-center justify-between mt-1">
            <p className="text-lg font-bold text-red-500">${item.discountPrice}</p>
            <p className="text-sm line-through text-gray-400">${item.price}</p>
          </div>

          <div className="flex justify-between items-center mt-2">
            <div className="flex items-center gap-1 px-2 py-1 rounded-lg">
              {Array(Math.floor(item.rating))
                .fill()
                .map((_, i) => (
                  <FaStar key={i} className="text-orange-500" />
                ))}

              {item.rating % 1 >= 0.5 && (
                <FaStarHalfAlt className="text-orange-500" />
              )}
            </div>

            <p className="text-[12px] lg:text-[14px] font-medium bg-gray-200 px-2 py-1 rounded-lg">
              <span className="text-red-500">stock -</span> {item.stock}
            </p>
          </div>

          <Link
            to={`/product-details/${item.id}`}
            className="mt-3 bg-linear-to-r from-[#FA6775] to-[#F52549] w-full text-center py-2 text-white font-semibold text-sm rounded-lg hover:opacity-90 transition hover:bg-[#6ECFFF]"
          >
            View Detail
          </Link>
        </div>
      </div>
    </div>
>>>>>>> 1a72bcf6a49c0ccd50f2dcda33870645799cc98f
        ))}
      </div>
    </div>
  );
};

export default AllItems;
