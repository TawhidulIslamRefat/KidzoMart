import { useState, useContext } from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaPinterestP, FaInstagram } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { FiRefreshCw } from "react-icons/fi";
import { toast, ToastContainer } from "react-toastify";
import { OrderContext } from "../../Provider/OrderProvider/OrderProvider";

const ProductDetailsCard = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const { addOrder } = useContext(OrderContext);

  const {
    name,
    image,
    price,
    discountPrice,
    rating,
    stock,
    shortDescription,
    description,
    features = [],
    category,
    brand,
    ageGroup,
    SKU,
  } = product;

  const handleOrder = () => {
    const orderData = {
      ...product,
      orderQuantity: quantity,
      totalPrice: discountPrice * quantity,
    };

    addOrder(orderData);
    toast.success("Order placed successfully!");
  };

  return (
    <div className="container mx-auto px-6 py-10">
      <ToastContainer />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* ---------- Image Section ---------- */}
        <div className="border rounded-2xl p-5 shadow-sm">
          <img
            src={image}
            alt={name}
            className="w-full rounded-xl object-cover"
          />
        </div>

        {/* ---------- Product Info Section ---------- */}
        <div>
          <p className="text-yellow-500 text-lg font-semibold">
            ⭐ {rating} <span className="text-gray-500 text-sm">(Customer reviews)</span>
          </p>

          <h2 className="text-3xl font-bold mt-1">{name}</h2>

          <p className="text-gray-600 mt-3">{shortDescription}</p>

          <div className="flex items-end gap-3 mt-5">
            <p className="text-3xl font-bold text-teal-600">৳{discountPrice}</p>
            <p className="text-lg line-through text-gray-400">৳{price}</p>
          </div>

          <p className="text-green-600 font-semibold mt-1">
            ✔ In stock ({stock} pcs)
          </p>

          {/* Quantity + Order Button */}
          <div className="flex items-center gap-4 mt-6">
            <div className="flex items-center border rounded-lg px-3 py-2">
              <button
                onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                className="px-2 text-xl"
              >
                -
              </button>
              <span className="px-4 text-lg">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-2 text-xl"
              >
                +
              </button>
            </div>

            <button
              onClick={handleOrder}
              className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-semibold"
            >
              Order Now
            </button>

            <button className="p-3 border rounded-lg">
              <AiOutlineHeart size={22} />
            </button>

            <button className="p-3 border rounded-lg">
              <FiRefreshCw size={22} />
            </button>
          </div>

          {/* Extra Info */}
          <div className="grid grid-cols-2 gap-4 mt-8 text-gray-600">
            <p><b>SKU:</b> {SKU}</p>
            <p><b>Category:</b> {category}</p>
            <p><b>Age Group:</b> {ageGroup}</p>
            <p><b>Brand:</b> {brand}</p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-6 text-gray-600">
            <span className="font-semibold">Share:</span>
            <FaFacebookF /> <FaTwitter /> <FaLinkedinIn /> <FaPinterestP /> <FaInstagram />
          </div>
        </div>
      </div>

      {/* ---------- Description Section ---------- */}
      <div className="mt-12">
        <div className="flex gap-4 border-b pb-2">
          <button className="bg-teal-600 text-white px-6 py-2 rounded-full font-semibold">
            Description
          </button>
        </div>

        <p className="text-gray-600 mt-6 leading-7">{description}</p>

        <ul className="list-disc ml-6 text-gray-700 mt-3">
          {features.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductDetailsCard;
