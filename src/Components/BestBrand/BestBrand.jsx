import React from 'react';
import image1 from '../../assets/Apple-Logo-PNG.png'
import image2 from '../../assets/AMD.png'
import image3 from '../../assets/Dell_Logo.svg'
import image4 from '../../assets/Hewlett-Packard-Logo.wine.png'
import image6 from '../../assets/SAm.png'
import 'aos/dist/aos.css'; // AOS css
import AOS from "aos";
AOS.init();

const BestBrand = () => {
    return (
          <div className='my-10'>
  <h1 className='text-3xl font-bold text-center'>Popular Brands</h1>
   <div className='grid grid-cols-3 gap-4'>
    <div className="card bg-base-300 shadow-sm py-6 lg:py-5 mt-8" data-aos="fade-up">
  <figure>
    <img className='w-10 sm:25'
      src={image1}
      alt="Apple Logo" />
  </figure>
  <div className="card-body">
    <h2 className=" text-center text-[10px] sm:text-xl font-medium">Apple</h2>
  </div>
   </div>
   <div className="card bg-base-300 shadow-sm py-5 mt-8" >
  <figure>
    <img className='w-20 sm:w-50'
      src={image6}
      alt="Apple Logo" />
  </figure>
  <div className="card-body">
    <h2 className=" text-center text-[10px] sm:text-xl font-medium">Samsung</h2>
    <div className="card-actions justify-end">
    </div>
  </div>
   </div>
   <div className="card bg-base-300 shadow-sm py-5 mt-8">
  <figure>
    <img className='w-20 sm:w-50'
      src={image2}
      alt="Apple Logo" />
  </figure>
  <div className="card-body">
    <h2 className=" text-center text-[10px] sm:text-xl font-medium">AMD</h2>
    <div className="card-actions justify-end">
    </div>
  </div>
   </div>
   <div className="card bg-base-300 shadow-sm py-5 mt-8">
  <figure>
    <img className='w-10 sm:w-25'
      src={image3}
      alt="Apple Logo" />
  </figure>
  <div className="card-body">
    <h2 className=" text-center text-[10px] sm:text-xlfont-medium">DELL</h2>
    <div className="card-actions justify-end">
    </div>
  </div>
   </div>
   <div className="card bg-base-300 shadow-sm py-5 mt-8">
  <figure>
    <img className='w-15 sm:w-40'
      src={image4}
      alt="Apple Logo" />
  </figure>
  <div className="card-body">
    <h2 className=" text-center text-[10px] sm:text-xl font-medium">HP</h2>
    <div className="card-actions justify-end">
    </div>
  </div>
   </div>
   </div>
  </div>
    );
};

export default BestBrand;