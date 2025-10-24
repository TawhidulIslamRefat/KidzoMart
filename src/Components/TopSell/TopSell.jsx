import React from "react";
import { FaStar } from "react-icons/fa";
const TopSell = () => {
  return (
    <div className="mt-20">

      <h1 className='text-3xl font-bold text-center mb-10'>Top Sold Products</h1>

  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">

        <div className="card bg-base-300 shadow-sm " data-aos="slide-right">
  <figure className="p-4">
    <img className="w-25 h-25 lg:w-80 lg:h-60 bg-[#D9D9D9]  rounded-2xl "
      src="https://www.dealmonday.co.uk/image/cache/wp/gp/Apple/apple-iphone-15-pro-uk-blue-2-5-800x800.webp"
      alt="product" />
  </figure>
  <div className="card-body">
    <h2 className="text-[12px] md:text-xl font-semibold ">iPhone 15 Pro</h2>
    <div className="flex justify-between items-center">
    <p className="text-[13px]  md:text-[18px] text-black font-medium ">Price : $1110</p>
        <p className="text-[13px]  md:text-[18px] font-semibold">Sold : 1.5k</p>
    </div>
  </div>
       </div>


        <div className="card bg-base-300 shadow-sm" data-aos="slide-down">
  <figure className="p-4">
    <img className="w-25 h-25 lg:w-80 lg:h-60 bg-[#D9D9D9]  rounded-2xl "
      src="https://atlas-content-cdn.pixelsquid.com/assets_v2/248/2485087899981190761/jpeg-600/G03.jpg?modifiedAt=1"
      alt="product" />
  </figure>
  <div className="card-body">
    <h2 className="text-[12px] md:text-xl font-semibold ">Samsung Galaxy Tab S8</h2>
    <div className="flex justify-between items-center">
    <p className="text-[13px]  lg:text-[18px] text-black font-medium ">Price : $649.99</p>
        <p className="text-[13px]  lg:text-[18px] font-semibold">Sold : 1.2k</p>
    </div>
    <div className="card-actions justify-end">
    </div>
  </div>
       </div>


        <div className="card bg-base-300 shadow-sm" data-aos="slide-up">
  <figure className="p-4">
    <img className="w-25 h-25 lg:w-80 lg:h-60 bg-[#D9D9D9]  rounded-2xl "
      src="https://www.custommacbd.com/cdn/shop/files/Google-Pixel-8-Pro-Bay-Custom-Mac-BD.png?v=1705991042"
      alt="Product" />
  </figure>
  <div className="card-body">
    <h2 className="text-[12px] md:text-xl font-semibold ">Google Pixel 8</h2>
    <div className="flex justify-between items-center">
    <p className="text-[13px]  lg:text-[18px] text-black font-medium ">Price : $899.99</p>
        <p className="text-[13px]  lg:text-[18px] font-semibold">Sold : 1.1k</p>
    </div>
    <div className="card-actions justify-end">
    </div>
  </div>
       </div>


        <div className="card bg-base-300 shadow-sm" data-aos="slide-down">
  <figure className="p-4">
    <img className="w-25 h-25 lg:w-80 lg:h-60  bg-[#D9D9D9]  rounded-2xl "
      src="https://www.pngall.com/wp-content/uploads/13/Galaxy-S23-Ultra-PNG-Clipart.webp"
      alt="product" />
  </figure>
  <div className="card-body">
    <h2 className="text-[12px] md:text-xl font-semibold ">Samsung Galaxy S23 Ultra</h2>
    <div className="flex justify-between items-center">
        <p className="text-[13px]  lg:text-[18px] text-black font-medium ">Price : $1110</p>
     <p className="text-[13px]  lg:text-[18px] font-semibold">Sold : 1.k</p>
    </div>
  </div>
       </div>


        <div className="card bg-base-300 shadow-sm" data-aos="slide-left">
  <figure className="p-4">
    <img className="w-25 h-25 lg:w-80 lg:h-60 bg-[#D9D9D9]  rounded-2xl "
      src="https://png.pngtree.com/png-vector/20240315/ourmid/pngtree-isolated-of-sony-wh-1000xm5-wireless-headphones-front-view-featuring-a-png-image_11941302.png"
      alt="product" />
  </figure>
  <div className="card-body">
    <h2 className="text-[12px] md:text-xl font-semibold ">Sony Headphones</h2>
    <div className="flex justify-between items-center">
        <p className="text-[13px]  lg:text-[18px] text-black font-medium ">Price : $399.99</p>
        <p className="text-[13px]  lg:text-[18px] font-semibold">Sold : 0.954k</p>
    </div>
    <div className="card-actions justify-end">
    </div>
  </div>
       </div>
  </div>
    </div>
  );
};

export default TopSell;
