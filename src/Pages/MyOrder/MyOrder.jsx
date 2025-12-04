<<<<<<< HEAD
import React, { useContext } from "react";
=======
import React, { use } from "react";
>>>>>>> 1a72bcf6a49c0ccd50f2dcda33870645799cc98f
import { OrderContext } from "../../Provider/OrderProvider/OrderProvider";
import image from "../../assets/undraw_order-delivered_puaw.svg";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";

const MyOrder = () => {
<<<<<<< HEAD
  const { order } = useContext(OrderContext);

  return (
    <div className="w-[95%] md:w-[90%] lg:w-10/12 mx-auto my-10">
      <title>kidzoMart - My Orders</title>

      <h2 className="text-xl md:text-2xl lg:text-4xl font-bold text-center mb-10">
        My Orders
      </h2>

      {order.length === 0 ? (
        <div className="flex justify-center items-center flex-col">
          <p className="text-center text-gray-500 text-[16px] md:text-xl mt-2 mb-4">
            You have no orders yet.
          </p>
          <div>
            <img className="my-8 md:my-12 w-60 md:w-80" src={image} alt="No Orders" />
          </div>
          <Link
            to="/"
            className="btn bg-linear-to-r from-[#FA6775] to-[#F52549] text-white mt-4 px-6 py-3 rounded-lg"
          >
            Go Back Home and Order Now
          </Link>
        </div>
      ) : (
        <>
          {/* ---------- MOBILE CARD LAYOUT ---------- */}
          <div className="grid grid-cols-1 gap-6 md:hidden">
            {order.map((product, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-2xl p-4 flex flex-col gap-2 border border-gray-200"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={product.pictureURL}
                    alt={product.productName}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-700 truncate max-w-xs">
                      {product.productName}
                    </h3>
                    <div className="flex items-center gap-1 text-orange-600">
                      <FaStar className="w-4 h-4" /> {product.rating}
                    </div>
                  </div>
                </div>
                <div className="flex justify-between mt-2 text-sm">
                  <p>Quantity: {product.orderQuantity}</p>
                  <p>Price: ${product.price}</p>
                </div>
                <div className="flex justify-between mt-1 text-sm font-semibold">
                  <p>Total: ${product.price * product.orderQuantity}</p>
                  <p className="text-yellow-500">Processing</p>
                </div>
              </div>
            ))}
          </div>

          {/* ---------- DESKTOP TABLE LAYOUT ---------- */}
          <div className="hidden md:block overflow-x-auto">
            <table className="table-auto min-w-[600px] w-full border border-gray-200 rounded-lg shadow-md text-sm md:text-base">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-2 px-3 text-left">#</th>
                  <th className="py-2 px-3 text-left">Product</th>
                  <th className="py-2 px-3 text-left">Quantity</th>
                  <th className="py-2 px-3 text-left">Rating</th>
                  <th className="py-2 px-3 text-left">Price</th>
                  <th className="py-2 px-3 text-left">Total</th>
                  <th className="py-2 px-3 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {order.map((product, index) => (
                  <tr
                    key={product.id}
                    className="border-b hover:bg-gray-50 transition-colors"
                  >
                    <td className="py-2 px-3">{index + 1}</td>
                    <td className="py-2 px-3 flex items-center gap-2">
                      <img
                        src={product.image}
                        alt={product.productName}
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                      <span className="max-w-[250px]">{product.productName}</span>
                    </td>
                    <td className="py-2 px-3">{product.orderQuantity}</td>
                    <td className="py-2 px-3 flex items-center gap-1 text-orange-600">
                      <FaStar className="w-4 h-4 md:w-5 md:h-5" /> {product.rating}
                    </td>
                    <td className="py-2 px-3 font-semibold">${product.price}</td>
                    <td className="py-2 px-3 font-semibold">
                      ${product.price * product.orderQuantity}
                    </td>
                    <td className="py-2 px-3 text-yellow-500 font-semibold">
                      Processing
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
=======
  const { order } = use(OrderContext);

  return (
    <div>
      <title> kidzoMart - My-Order</title>
      <div className="w-[90%] lg:w-10/12 mx-auto my-10">
        {order.length === 0 ? (
          <div className="flex justify-center items-center flex-col">
            <h2 className="text-xl md:text-2xl lg:text-4xl font-bold text-center mb-4">
              My Orders
            </h2>
            <p className="text-center text-gray-500 text-[16px] md:text-xl mt-2 mb-4">
              You have no orders yet.
            </p>
            <div>
              <img className="my-15" src={image} alt="" />
            </div>
            <Link
              to="/"
              className="btn bg-linear-to-r from-[#FA6775]  to-[#F52549] text-white"
            >
              Go Back Home and order Now
            </Link>
          </div>
        ) : (
          <div>
            <h2 className="text-xl md:text-2xl lg:text-4xl font-bold text-center mb-10">
              My Orders
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {order.map((product, index) => (
                <div
                  key={index}
                  className="card bg-base-100 shadow-lg rounded-xl"
                >
                  <figure className="px-5 pt-5">
                    <img
                      src={product.pictureURL}
                      alt={product.productName}
                      className="rounded-xl w-full h-50 md:h-78 "
                    />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title text-[16px] md:text-xl font-semibold">
                      {product.productName}
                    </h2>
                    <p className="text-gray-500 text-[14px]">
                      Category: {product.subCategory}
                    </p>
                    <p className="flex items-center gap-1 bg-orange-100 text-orange-600 px-1.5 py-0.5 md:px-3 md:py-1 rounded-lg">
                      <FaStar /> {product.rating}
                    </p>
                    <p className="text-[16px] md:text-xl font-semibold mt-1 md:mt-2">
                      Price: ${product.price}
                    </p>
                    <p className=" text-[14px] md:text-[16px] font-semibold mt-1 md:mt-2 text-yellow-300">
                      Status Processing
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
>>>>>>> 1a72bcf6a49c0ccd50f2dcda33870645799cc98f
    </div>
  );
};

export default MyOrder;
