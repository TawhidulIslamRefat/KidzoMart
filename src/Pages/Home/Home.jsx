import React from "react";

import { useLoaderData } from "react-router";
import HomeSlider from "../../Components/HomeSlider/HomeSlider";
import BestBrand from "../../Components/BestBrand/BestBrand";
import ProductCard from "../../Components/ProductCard/ProductCard";
import NewsLetter from "../../Components/NewsLetter/NewsLetter";
import MostWantedToy from "../../Components/MostWantedToy/MostWantedToy";


const Home = () => {
  const productData = useLoaderData();
  return (
    <div>
      <title>kidzoMart - Home</title>
      <section className="w-[98%] lg:w-10/12 mx-auto mt-10">
        <HomeSlider product={productData}></HomeSlider>
      </section>
      <section className="w-10/12 mx-auto my-10 md:my-20">
        <BestBrand></BestBrand>
      </section>
      <section className=" w-full md:w-10/12 mx-auto my-10 md:my-20">
        <MostWantedToy></MostWantedToy>
      </section>
      <section
        id="top-product"
        className="w-[95%] lg:w-10/12 mx-auto my-10 md:my-20"
      >
        <h1 className=" text-xl md:text-3xl font-semibold text-center">
          Popular Toys
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2 lg:gap-4 mt-10">
          {productData.map((product) => (
            <ProductCard key={product.id} product={product}></ProductCard>
          ))}
        </div>
      </section>
      <section>
        <NewsLetter></NewsLetter>
      </section>
    </div>
  );
};

export default Home;
