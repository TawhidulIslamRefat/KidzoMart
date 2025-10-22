import React from 'react';
import image1 from '../../assets/Apple-Logo-PNG.png'
import image2 from '../../assets/AMD.png'
import image3 from '../../assets/Dell_Logo.svg'
import image4 from '../../assets/Hewlett-Packard-Logo.wine.png'
import image6 from '../../assets/SAm.png'



const BestBrand = () => {
    return (
          <div className='my-10'>

            <h1 className='text-3xl font-bold text-center'>Popular Brands</h1>
   <div className='grid grid-cols-5 gap-4'>
    <div className="card bg-base-300 shadow-sm py-5 mt-8">
  <figure>
    <img className='w-25'
      src={image1}
      alt="Apple Logo" />
  </figure>
  <div className="card-body">
    <h2 className=" text-center text-xl font-medium">Apple</h2>
    <div className="card-actions justify-end">
    </div>
  </div>
   </div>
   <div className="card bg-base-300 shadow-sm py-5 mt-8">
  <figure>
    <img className='w-50'
      src={image6}
      alt="Apple Logo" />
  </figure>
  <div className="card-body">
    <h2 className=" text-center text-xl font-medium">Samsung</h2>
    <div className="card-actions justify-end">
    </div>
  </div>
   </div>
   <div className="card bg-base-300 shadow-sm py-5 mt-8">
  <figure>
    <img className='w-50'
      src={image2}
      alt="Apple Logo" />
  </figure>
  <div className="card-body">
    <h2 className=" text-center text-xl font-medium">AMD</h2>
    <div className="card-actions justify-end">
    </div>
  </div>
   </div>
   <div className="card bg-base-300 shadow-sm py-5 mt-8">
  <figure>
    <img className='w-25'
      src={image3}
      alt="Apple Logo" />
  </figure>
  <div className="card-body">
    <h2 className=" text-center text-xl font-medium">DELL</h2>
    <div className="card-actions justify-end">
    </div>
  </div>
   </div>
   <div className="card bg-base-300 shadow-sm py-5 mt-8">
  <figure>
    <img className='w-40'
      src={image4}
      alt="Apple Logo" />
  </figure>
  <div className="card-body">
    <h2 className=" text-center text-xl font-medium">HP</h2>
    <div className="card-actions justify-end">
    </div>
  </div>
   </div>
   </div>
  </div>
    );
};

export default BestBrand;