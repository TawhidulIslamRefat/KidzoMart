import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {Pagination, Autoplay } from "swiper/modules";
import image1 from '../../assets/—Pngtree—30 off transparent discount offer_8508084.png'
import image2 from '../../assets/—Pngtree—special offer free png_6960768.png'


const HomeSlider = ({product}) => {
    const slideProduct = product.slice(0,3);
    return (
        <div>
            <Swiper
            modules={[Pagination,Autoplay]}
            pagination={{clickable:true}}
            autoplay={{delay:5000}}
            loop={true}>
                {
                slideProduct.map((product)=> <SwiperSlide key={product.productId}>
                  <div className='w-full flex justify-around items-center gap-2 lg:gap-100 p-2 lg:p-10 bg-gradient-to-r from-green-300 via-green-600 to-teal-700 rounded-xl relative '>
                    <img className='w-20 h-20 md:w-100 md:h-70 lg:w-150 lg:h-120 rounded-xl' src={product.pictureURL} alt="product-photo" />
                 <div className='mr-0 pr-0 md:mr-5 lg:mr-10 lg:pr-20'>
                     <h1 className='text-[14px] md:text-2xl lg:text-3xl font-bold text-[#001931] text-center'>
                    {product.productName}
                  </h1>
                    <p className='text-[12px] md:text-xl py-1 md:py-2 lg:py-3 text-center font-medium'>Price $ {product.price}</p>
                    <p className='text-[10px] md:text-[15px] lg:text-[18px] mb-5 text-[#d0d6db]'>{product.description}</p>
                 </div>
                 <div className='absolute bottom-40 hidden lg:flex left-130'>
                  <img className='w-70' src={image1} alt="" />
                 </div>
                 <div className='absolute top-0 hidden lg:flex right-80'>
                  <img className='w-30' src={image2} alt="" />
                 </div>
                  </div>
                </SwiperSlide>)
            }
            </Swiper>
        </div>
    );
};

export default HomeSlider;
