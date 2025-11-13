import React from "react";
import HomeProductList from "./HomeProductList";

const HomeCategorySection = ({ bannerImage, title, products }) => {
  return (
    <section className="my-10">
      {/* Banner */}
      <div className="w-full rounded-xl overflow-hidden shadow">
        <img
          src={bannerImage}
          alt={title}
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Heading */}
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mt-5 mb-4 text-gray-800 px-2">
        {title}
      </h2>

      {/* Product Carousel */}
      <HomeProductList products={products} />
    </section>
  );
};

export default HomeCategorySection;
