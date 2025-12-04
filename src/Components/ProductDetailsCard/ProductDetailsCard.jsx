<<<<<<< HEAD
import { useState, useContext, useEffect } from "react";
import { 
  FaFacebookF, FaTwitter, FaLinkedinIn, FaPinterestP, FaInstagram, FaStar 
} from "react-icons/fa";
=======
import { useState, useContext } from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaPinterestP, FaInstagram } from "react-icons/fa";
>>>>>>> 1a72bcf6a49c0ccd50f2dcda33870645799cc98f
import { AiOutlineHeart } from "react-icons/ai";
import { FiRefreshCw } from "react-icons/fi";
import { toast, ToastContainer } from "react-toastify";
import { OrderContext } from "../../Provider/OrderProvider/OrderProvider";
<<<<<<< HEAD
import "react-toastify/dist/ReactToastify.css";

const ProductDetailsCard = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [isLoved, setIsLoved] = useState(false);
  const [activeTab, setActiveTab] = useState("description"); // tabs
  const [userRating, setUserRating] = useState(0);
  const [reviews, setReviews] = useState([]);
=======

const ProductDetailsCard = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
>>>>>>> 1a72bcf6a49c0ccd50f2dcda33870645799cc98f
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

<<<<<<< HEAD
  // Load rating & reviews from localStorage
  useEffect(() => {
    const savedRating = localStorage.getItem(`rating-${name}`);
    const savedReviews = localStorage.getItem(`reviews-${name}`);
    if (savedRating) setUserRating(Number(savedRating));
    if (savedReviews) setReviews(JSON.parse(savedReviews));
  }, [name]);

=======
>>>>>>> 1a72bcf6a49c0ccd50f2dcda33870645799cc98f
  const handleOrder = () => {
    const orderData = {
      ...product,
      orderQuantity: quantity,
      totalPrice: discountPrice * quantity,
    };
<<<<<<< HEAD
    addOrder(orderData);
    toast.success("✅ Order placed successfully!");
  };

  const handleLove = () => {
    setIsLoved(!isLoved);
    toast.info(isLoved ? "💔 Unliked" : "💖 Liked!");
  };

  const handleRepost = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.info("🔗 Product link copied!");
  };

  const handleRating = (rate) => {
    setUserRating(rate);
    localStorage.setItem(`rating-${name}`, rate);
    toast.success(`⭐ You rated ${rate} star${rate > 1 ? 's' : ''}`);
  };

  const handleAddReview = (review) => {
    if (!review) return;
    const updatedReviews = [...reviews, review];
    setReviews(updatedReviews);
    localStorage.setItem(`reviews-${name}`, JSON.stringify(updatedReviews));
    toast.success("📝 Review added!");
=======

    addOrder(orderData);
    toast.success("Order placed successfully!");
>>>>>>> 1a72bcf6a49c0ccd50f2dcda33870645799cc98f
  };

  return (
    <div className="container mx-auto px-6 py-10">
<<<<<<< HEAD
      <ToastContainer position="top-right" autoClose={2000} />
=======
      <ToastContainer />
>>>>>>> 1a72bcf6a49c0ccd50f2dcda33870645799cc98f

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* ---------- Image Section ---------- */}
<<<<<<< HEAD
        <div className="border rounded-2xl p-5 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img
            src={image}
            alt={name}
            className="w-full rounded-xl object-cover hover:scale-105 transition-transform duration-300"
=======
        <div className="border rounded-2xl p-5 shadow-sm">
          <img
            src={image}
            alt={name}
            className="w-full rounded-xl object-cover"
>>>>>>> 1a72bcf6a49c0ccd50f2dcda33870645799cc98f
          />
        </div>

        {/* ---------- Product Info Section ---------- */}
        <div>
<<<<<<< HEAD
          {/* Rating Display */}
          <p className="text-orange-600 text-lg font-semibold flex items-center gap-1">
            <FaStar className="text-orange-500 text-[19px]" /> {rating} 
            <span className="text-gray-500 text-sm">(Customer reviews)</span>
          </p>

          {/* User Rating */}
          <div className="flex items-center mt-2 gap-1">
            {[1,2,3,4,5].map((i) => (
              <FaStar
                key={i}
                className={`cursor-pointer transition-colors ${
                  i <= userRating ? "text-yellow-400" : "text-gray-300"
                }`}
                size={20}
                onClick={() => handleRating(i)}
              />
            ))}
            {userRating > 0 && <span className="ml-2 text-gray-600">Your rating: {userRating}</span>}
          </div>

          {/* Product Name */}
          <h2 className="text-3xl font-bold mt-3">{name}</h2>

          {/* Short Description */}
          <p className="text-gray-600 mt-3">{shortDescription}</p>

          {/* Price */}
          <div className="flex items-end gap-3 mt-5">
            <p className="text-3xl font-bold text-[#F52549]">৳{discountPrice}</p>
            <p className="text-lg line-through text-gray-400">৳{price}</p>
          </div>

          {/* Stock */}
          <p className={`font-semibold mt-1 ${stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
            {stock > 0 ? `✔ In stock (${stock} pcs)` : "Out of stock"}
          </p>

          {/* Quantity + Order + Love + Repost Buttons */}
          <div className="flex flex-wrap items-center gap-4 mt-6">
            <div className="flex items-center border rounded-lg px-3 py-2">
              <button
                onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                className="px-2 text-xl hover:text-[#F52549] transition-colors"
              >-</button>
              <span className="px-4 text-lg">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-2 text-xl hover:text-[#F52549] transition-colors"
              >+</button>
=======
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
>>>>>>> 1a72bcf6a49c0ccd50f2dcda33870645799cc98f
            </div>

            <button
              onClick={handleOrder}
<<<<<<< HEAD
              className="bg-linear-to-r from-[#FA6775] to-[#F52549] text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-200 shadow-md"
=======
              className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-semibold"
>>>>>>> 1a72bcf6a49c0ccd50f2dcda33870645799cc98f
            >
              Order Now
            </button>

<<<<<<< HEAD
            <button
              onClick={handleLove}
              className="p-3 border rounded-lg hover:bg-[#FAF0F2] transition-colors"
            >
              <AiOutlineHeart
                size={24}
                className={`cursor-pointer transition-colors duration-200 ${
                  isLoved ? "text-red-600" : "text-gray-600"
                }`}
              />
            </button>

            <button
              onClick={handleRepost}
              className="p-3 border rounded-lg hover:bg-[#FAF0F2] transition-colors"
            >
              <FiRefreshCw size={24} className="cursor-pointer" />
=======
            <button className="p-3 border rounded-lg">
              <AiOutlineHeart size={22} />
            </button>

            <button className="p-3 border rounded-lg">
              <FiRefreshCw size={22} />
>>>>>>> 1a72bcf6a49c0ccd50f2dcda33870645799cc98f
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
<<<<<<< HEAD
            <a href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`} target="_blank" rel="noopener noreferrer" className="hover:text-[#1877F2] transition-colors"><FaFacebookF size={28} className="cursor-pointer" /></a>
            <a href={`https://twitter.com/intent/tweet?url=${window.location.href}&text=${name}`} target="_blank" rel="noopener noreferrer" className="hover:text-[#1DA1F2] transition-colors"><FaTwitter size={28} className="cursor-pointer" /></a>
            <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}&title=${name}`} target="_blank" rel="noopener noreferrer" className="hover:text-[#0A66C2] transition-colors"><FaLinkedinIn size={28} className="cursor-pointer" /></a>
            <a href={`https://pinterest.com/pin/create/button/?url=${window.location.href}&description=${name}`} target="_blank" rel="noopener noreferrer" className="hover:text-[#BD081C] transition-colors"><FaPinterestP size={28} className="cursor-pointer" /></a>
            <a href={`https://www.instagram.com/`} target="_blank" rel="noopener noreferrer" className="hover:text-[#E4405F] transition-colors"><FaInstagram size={28} className="cursor-pointer" /></a>
=======
            <FaFacebookF /> <FaTwitter /> <FaLinkedinIn /> <FaPinterestP /> <FaInstagram />
>>>>>>> 1a72bcf6a49c0ccd50f2dcda33870645799cc98f
          </div>
        </div>
      </div>

<<<<<<< HEAD
      {/* ---------- Tabs: Description / Reviews ---------- */}
      <div className="mt-12">
        <div className="flex gap-4 border-b pb-2">
          <button
            onClick={() => setActiveTab("description")}
            className={`px-6 py-2 rounded-full font-semibold ${
              activeTab === "description"
                ? "bg-linear-to-r from-[#FA6775] to-[#F52549] text-white shadow-md"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            Description
          </button>
          <button
            onClick={() => setActiveTab("reviews")}
            className={`px-6 py-2 rounded-full font-semibold ${
              activeTab === "reviews"
                ? "bg-linear-to-r from-[#FA6775] to-[#F52549] text-white shadow-md"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            Reviews
          </button>
        </div>

        {activeTab === "description" && (
          <div className="mt-6">
            <p className="text-gray-600 leading-7">{description}</p>
            {features.length > 0 && (
              <ul className="list-disc ml-6 text-gray-700 mt-3">
                {features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            )}
          </div>
        )}

        {activeTab === "reviews" && (
          <div className="mt-6">
            <p className="text-gray-600 mb-4 font-semibold">
              Give your rating:
            </p>
            <div className="flex items-center gap-2 mb-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <FaStar
                  key={i}
                  className={`cursor-pointer transition-colors ${
                    i <= userRating ? "text-yellow-400" : "text-gray-300"
                  }`}
                  size={24}
                  onClick={() => handleRating(i)}
                />
              ))}
              {userRating > 0 && <span className="ml-2">{userRating} stars</span>}
            </div>

            <div className="mb-4">
              <textarea
                placeholder="Write a review..."
                className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#F52549]"
                rows={3}
                id="reviewText"
              ></textarea>
              <button
                onClick={() => {
                  const review = document.getElementById("reviewText").value;
                  handleAddReview(review);
                  document.getElementById("reviewText").value = "";
                }}
                className="mt-2 px-4 py-2 bg-linear-to-r from-[#FA6775] to-[#F52549] text-white rounded-lg font-semibold"
              >
                Add Review
              </button>
            </div>

            {reviews.length > 0 && (
              <div className="space-y-2">
                <h3 className="font-semibold mb-2">User Reviews:</h3>
                {reviews.map((r, i) => (
                  <div key={i} className="border p-2 rounded-lg bg-gray-50">
                    {r}
                  </div>
                ))}
              </div>
            )}

            {reviews.length === 0 && <p className="text-gray-500">No reviews yet.</p>}
          </div>
        )}
=======
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
>>>>>>> 1a72bcf6a49c0ccd50f2dcda33870645799cc98f
      </div>
    </div>
  );
};

export default ProductDetailsCard;
