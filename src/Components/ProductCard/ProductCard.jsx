import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router";

export default function ProductCard({ product }) {
  const { id, name, price, discountPrice, rating, image, stock } = product;

  return (
    <div className=" p-0 md:p-2 flex flex-col">
      <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 overflow-hidden">
        <div className="bg-[#EAF8FF] py-1 md:p-5 flex justify-center rounded-t-2xl">
          <img
            className="w-32 h-32 lg:w-44 lg:h-44 rounded-xl "
            src={image}
            alt={name}
          />
        </div>

        <div className="p-3 flex flex-col gap-1.5">
          <h2 className="text-[14px] lg:text-xl font-semibold text-gray-700 leading-tight">
            {name}
          </h2>

          <div className="flex items-center justify-between mt-1">
            <p className="text-lg font-bold text-red-500">${discountPrice}</p>
            <p className="text-sm line-through text-gray-400">${price}</p>
          </div>

          <div className="flex justify-between items-center mt-1 md:mt-2">
            <div className="flex items-center gap-1 px-2 py-0 md:py-1 rounded-lg">
              {Array(Math.floor(rating))
                .fill()
                .map((_, i) => (
                  <FaStar key={i} className="text-orange-500" />
                ))}

              {rating % 1 >= 0.5 && (
                <FaStarHalfAlt className="text-orange-500" />
              )}
            </div>

            <p className="text-[12px] lg:text-[14px] font-medium bg-gray-200 px-2 py-1 rounded-lg hidden md:flex">
              <span className="text-red-500">stock -</span> {stock}
            </p>
          </div>

          <Link
            to={`/product-details/${id}`}
            className="mt-3 bg-linear-to-r from-[#FA6775] to-[#F52549] w-full text-center py-2 text-white font-semibold text-sm rounded-lg hover:opacity-90 transition hover:bg-[#6ECFFF]"
          >
            View Detail
          </Link>
        </div>
      </div>
    </div>
  );
}
