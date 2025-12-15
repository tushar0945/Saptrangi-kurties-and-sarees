import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const HomeProductCard = ({
  slug,
  main_image,
  hover_image,
  name,
  price,
  mrp, // <-- use mrp instead of oldPrice
  rating,
}) => {
  const discount = mrp ? Math.round(((mrp - price) / mrp) * 100) : null;

  return (
    <Link to={`/collection/${slug}`}>
      <div
        className="w-[190px] sm:w-[210px] md:w-[230px] lg:w-[260px] 
                      rounded-2xl cursor-pointer transition-all group"
      >
        {/* IMAGE WRAPPER */}
        <div
          className="relative w-full 
                        h-[300px] sm:h-[320px] md:h-[330px] lg:h-[360px] 
                        rounded-2xl overflow-hidden"
        >
          {/* MAIN IMAGE */}
          <img
            src={main_image}
            alt={name}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover
              transition-opacity duration-500
              opacity-100 group-hover:opacity-0 object-[center_-0%]"
          />

          {/* HOVER IMAGE */}
          <img
            src={hover_image || main_image}
            alt={name}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover
              opacity-0 group-hover:opacity-100
              transform transition-all duration-700 ease-out
              scale-100 group-hover:scale-105 object-[center_-0%]"
          />

          {/* RATING BADGE */}
          <div
            className="absolute bottom-2 left-2 md:bottom-3 md:left-3 
                          flex items-center gap-1 bg-white/80 backdrop-blur-sm 
                          px-2 py-0.5 rounded-md shadow-md"
          >
            <FaStar size={12} className="text-yellow-500" />
            <span className="text-[11px] md:text-[12px] font-semibold text-gray-800">
              {rating}
            </span>
          </div>
        </div>

        {/* TEXT */}
        <div className="mt-2 md:mt-3 px-1.5 pb-3">
          <h3 className="text-[12px] md:text-[13px] font-bold text-gray-600">
            SaptRangi®
          </h3>

          <p className="text-[12px] md:text-[13px] text-gray-900 font-medium leading-tight line-clamp-2">
            {name}
          </p>

          <div className="flex items-center gap-2 mt-1">
            <h4 className="text-[15px] md:text-[16px] font-bold">₹{price}</h4>

            {mrp && (
              <>
                <p className="text-[12px] line-through text-gray-500">₹{mrp}</p>
                <p className="text-[13px] text-green-600 font-semibold">
                  {discount}% OFF
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default HomeProductCard;
