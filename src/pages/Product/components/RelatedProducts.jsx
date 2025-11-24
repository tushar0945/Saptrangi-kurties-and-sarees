// src/pages/Product/components/RelatedProducts.jsx
import React from "react";
import HomeProductCard from "../../Home/HomeProductCard";

const RelatedProducts = ({ products }) => {
  if (!products || products.length === 0) return null;

  return (
    <div className="mt-14">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 px-1">
        Related Products
      </h2>

      <div className="flex gap-4 overflow-x-auto scroll-smooth px-1 pb-2 no-scrollbar">
        {products.map((item) => (
          <div key={item.id} className="flex-shrink-0">
            <HomeProductCard {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
