import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router";

const HomeSlider = () => {
  return (
    <div>
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 8000 }}
        loop={true}
      >
        {/* =============== SLIDE 1 =============== */}
        <SwiperSlide>
          <section
            className="
              w-full  
              h-[500px] md:h-[650px]   /* SAME HEIGHT FOR ALL SLIDES */
              bg-linear-to-l from-[#6ECFFF] to-[#1EA7FF]
              rounded-3xl 
              px-6 md:px-14 
              py-10 md:py-16 
              flex flex-col md:flex-row 
              items-center justify-between 
              relative overflow-hidden
            "
          >
            {/* Background circles */}
            <div className="absolute top-10 left-10 w-40 h-40 bg-orange-300/30 rounded-full blur-2xl" />
            <div className="absolute bottom-10 right-20 w-52 h-52 bg-orange-200/40 rounded-full blur-2xl" />

            {/* LEFT TEXT */}
            <div className="flex-1 z-10">
              <span className="bg-yellow-300 text-black text-sm px-4 py-1 rounded-full md:text-lg font-medium">
                FREE Delivery on Orders Over $20
              </span>

              <h1 className="text-4xl md:text-6xl font-extrabold text-white mt-6 leading-tight">
                Discover Amazing Toys <br /> For Your Little Ones
              </h1>

              <p className="text-white/90 mt-4 text-lg max-w-md">
                Choose from thousands of fun and educational toys designed to inspire creativity.
              </p>

              <Link to='all-items' className="btn mt-4 bg-white text-black px-5 py-2 rounded-full font-semibold shadow hover:scale-105 transition">
                Shop Now →
              </Link>
            </div>

            {/* RIGHT IMAGE */}
            <div className="flex-1 flex justify-center z-10 relative">
              <img
                src="https://www.radiustheme.com/demo/wordpress/themes/toyup/wp-content/uploads/2024/01/h1banner_1.png"
                alt="Kid"
                className="w-72 md:w-150 h-40 md:h-165 drop-shadow-2xl pt-5 md:pt-15 hidden md:flex"
              />

              <img
                src="https://www.radiustheme.com/demo/wordpress/themes/toyup/wp-content/uploads/2023/12/hero-elements-1.svg"
                alt="rocket"
                className="absolute left-15 top-20 w-20 animate-bounce"
              />

              <img
                src="https://www.radiustheme.com/demo/wordpress/themes/toyup/wp-content/uploads/2024/01/banner1-element_01.svg"
                alt="plane"
                className="absolute right-15 top-15 w-20 animate-pulse"
              />
            </div>
          </section>
        </SwiperSlide>

        {/* =============== SLIDE 2 =============== */}
        <SwiperSlide>
          <section
            className="
              w-full  
              h-[500px] md:h-[650px]
              bg-linear-to-l from-[#6ECFFF] to-[#1EA7FF]
              rounded-3xl 
              px-6 md:px-14 
              py-10 md:py-16 
              flex flex-col md:flex-row 
              items-center justify-between 
              relative overflow-hidden
            "
          >
            <div className="absolute top-10 left-10 w-40 h-40 bg-orange-300/30 rounded-full blur-2xl" />
            <div className="absolute bottom-10 right-20 w-52 h-52 bg-orange-200/40 rounded-full blur-2xl" />

            {/* LEFT TEXT */}
            <div className="flex-1 z-10">
              <span className="bg-yellow-300 text-black px-4 py-1 rounded-full text-lg font-medium">
                Weekend Discount
              </span>

              <h1 className="text-4xl md:text-6xl font-extrabold text-white mt-6 leading-tight">
                Toys That Bring <br /> Joy & Imagination
              </h1>

              <p className="text-white/90 mt-4 text-lg max-w-md">
                Special weekend deals on best-selling toys for creative young minds.
              </p>

              <Link to='all-items' className="btn mt-4 bg-white text-black px-5 py-2 rounded-full font-semibold shadow hover:scale-105 transition">
                Shop Now →
              </Link>
            </div>

            {/* RIGHT IMAGE */}
            <div className="flex-1 flex justify-center z-10 relative">
              <img
                src="https://www.radiustheme.com/demo/wordpress/themes/toyup/wp-content/uploads/2023/12/h4banner_1.png"
                alt="Kid"
                className="w-72 md:w-150 h-50 md:h-165 drop-shadow-2xl pt-5 md:pt-15"
              />

              <img
                src="https://www.radiustheme.com/demo/wordpress/themes/toyup/wp-content/uploads/2023/12/parasuit-2.svg"
                alt="toy"
                className="absolute left-15 top-20 w-20 animate-bounce hidden md:flex"
              />

              <img
                src="https://www.radiustheme.com/demo/wordpress/themes/toyup/wp-content/uploads/2023/12/hero-elements-1.svg"
                alt="plane"
                className="absolute right-15 top-15 w-20 animate-pulse hidden md:flex"
              />
            </div>
          </section>
        </SwiperSlide>

        {/* =============== SLIDE 3 =============== */}
        <SwiperSlide>
          <section
            className="
              w-full  
              h-[500px] md:h-[650px]
              bg-linear-to-l from-[#6ECFFF] to-[#1EA7FF]
              rounded-3xl 
              px-6 md:px-14 
              py-10 md:py-16 
              flex flex-col md:flex-row 
              items-center justify-between 
              relative overflow-hidden
            "
          >
            <div className="absolute top-10 left-10 w-40 h-40 bg-orange-300/30 rounded-full blur-2xl" />
            <div className="absolute bottom-10 right-20 w-52 h-52 bg-orange-200/40 rounded-full blur-2xl" />

            {/* LEFT TEXT */}
            <div className="flex-1 z-10">
              <span className="bg-yellow-300 text-black px-4 py-1 rounded-full text-lg font-medium">
                Special Offer Today
              </span>

              <h1 className="text-4xl md:text-6xl font-extrabold text-white mt-6 leading-tight">
                Give Kids The Best <br /> Playtime Experience
              </h1>

              <p className="text-white/90 mt-4 text-lg max-w-md">
                Explore exciting toys designed to boost joy, creativity & imagination.
              </p>

              <Link to='all-items' className=" btn mt-4 bg-white text-black px-5 py-2 rounded-full font-semibold shadow hover:scale-105 transition">
                Shop Now →
              </Link>
            </div>

            {/* RIGHT IMAGE */}
            <div className="flex-1 flex justify-center z-10 relative">
              <img
                src="https://www.radiustheme.com/demo/wordpress/themes/toyup/wp-content/uploads/2024/01/h1banner_1.png"
                alt="Kid"
                className="w-50 md:w-150 h-40 md:h-165 drop-shadow-2xl pt-5 md:pt-15"
              />

              <img
                src="https://www.radiustheme.com/demo/wordpress/themes/toyup/wp-content/uploads/2023/12/hero-elements-1.svg"
                alt="rocket"
                className="absolute left-15 top-20 w-20 animate-bounce hidden md:flex"
              />

              <img
                src="https://www.radiustheme.com/demo/wordpress/themes/toyup/wp-content/uploads/2024/01/banner1-element_01.svg"
                alt="plane"
                className="absolute right-15 top-15 w-20 animate-pulse hidden md:flex"
              />
            </div>
          </section>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeSlider;
