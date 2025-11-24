// import React from "react";
// import { FaStar } from "react-icons/fa";

// const HomeProductCard = ({ product }) => {
//   return (
//     <div className="relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer group">
//       {/* Product Badge (like Oversized Fit) */}
//       {product.badge && (
//         <div className="absolute top-3 left-3 bg-white text-[11px] font-semibold text-gray-700 px-3 py-[3px] rounded-md shadow-sm uppercase tracking-wide">
//           {product.badge}
//         </div>
//       )}

//       {/* Product Image */}
//       <img
//         src={product.image}
//         alt={product.name}
//         className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-105"
//       />

//       {/* Product Info */}
//       <div className="p-4">
//         {/* Rating */}
//         <div className="flex items-center gap-1 text-sm font-medium text-gray-700 mb-1">
//           <FaStar className="text-yellow-400 text-[14px]" />
//           <span>{product.rating}</span>
//         </div>

//         {/* Brand & Name */}
//         <h3 className="text-gray-800 font-semibold text-[15px] leading-tight truncate">
//           {product.brand}
//         </h3>
//         <p className="text-gray-500 text-sm truncate">{product.name}</p>

//         {/* Price Section */}
//         <div className="flex items-center gap-2 mt-1">
//           <span className="text-[16px] font-semibold text-gray-800">
//             ₹{product.price}
//           </span>
//           <span className="text-gray-400 line-through text-sm">
//             ₹{product.originalPrice}
//           </span>
//           <span className="text-green-600 font-medium text-sm">
//             {product.discount}
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomeProductCard;

// import React from "react";
// import { FaStar } from "react-icons/fa";

// const HomeProductCard = ({ product }) => {
//   return (
//     <div className="relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer group">
//       {/* Product Badge (like Oversized Fit) */}
//       {product.badge && (
//         <div className="absolute top-3 left-3 bg-white text-[11px] font-semibold text-gray-700 px-3 py-[3px] rounded-md shadow-sm uppercase tracking-wide">
//           {product.badge}
//         </div>
//       )}

//       {/* Product Image */}
//       <img
//         src={product.image}
//         alt={product.name}
//         className="w-full h-80 object-contain bg-[#f9f9f9] transition-transform duration-300 group-hover:scale-105"
//       />

//       {/* Product Info */}
//       <div className="p-4">
//         {/* Rating */}
//         <div className="flex items-center gap-1 text-sm font-medium text-gray-700 mb-1">
//           <FaStar className="text-yellow-400 text-[14px]" />
//           <span>{product.rating}</span>
//         </div>

//         {/* Brand & Name */}
//         <h3 className="text-gray-800 font-semibold text-[15px] leading-tight truncate">
//           {product.brand}
//         </h3>
//         <p className="text-gray-500 text-sm truncate">{product.name}</p>

//         {/* Price Section */}
//         <div className="flex items-center gap-2 mt-1">
//           <span className="text-[16px] font-semibold text-gray-800">
//             ₹{product.price}
//           </span>
//           <span className="text-gray-400 line-through text-sm">
//             ₹{product.originalPrice}
//           </span>
//           <span className="text-green-600 font-medium text-sm">
//             {product.discount}
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomeProductCard;

// import React from "react";
// import { FaStar } from "react-icons/fa";

// const HomeProductCard = ({ product }) => {
//   return (
//     <div className="relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer group">
//       {/* Product Badge */}
//       {product.badge && (
//         <div className="absolute top-3 left-3 bg-white text-[11px] font-semibold text-gray-700 px-3 py-[3px] rounded-md shadow-sm uppercase tracking-wide z-10">
//           {product.badge}
//         </div>
//       )}

//       {/* Product Image */}
//       <div className="relative">
//         <img
//           src={product.image}
//           alt={product.name}
//           className="w-full h-[380px] object-cover transition-transform duration-300 group-hover:scale-105"
//         />

//         {/* Rating Badge (bottom-left on image) */}
//         <div className="absolute bottom-3 left-3 bg-white px-2 py-[3px] rounded-full shadow-sm flex items-center gap-1 text-[13px] font-medium text-gray-800">
//           <FaStar className="text-yellow-400 text-[13px]" />
//           <span>{product.rating}</span>
//         </div>
//       </div>

//       {/* Product Details */}
//       <div className="p-3">
//         {/* Brand */}
//         <h3 className="text-gray-800 font-semibold text-[15px] leading-tight">
//           {product.brand || "Bewakoof®"}
//         </h3>

//         {/* Product Name */}
//         <p className="text-gray-500 text-sm line-clamp-1">{product.name}</p>

//         {/* Price Section */}
//         <div className="flex items-center gap-2 mt-1">
//           <span className="text-[16px] font-semibold text-gray-800">
//             ₹{product.price}
//           </span>
//           <span className="text-gray-400 line-through text-sm">
//             ₹{product.originalPrice}
//           </span>
//           <span className="text-green-600 font-medium text-sm">
//             {product.discount}
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomeProductCard;

// import React from "react";
// import { FaStar } from "react-icons/fa";

// const HomeProductCard = ({ product }) => {
//   return (
//     <div className="relative bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer">
//       {/* Product Badge */}
//       {product.badge && (
//         <div className="absolute top-3 left-3 bg-white text-[11px] font-semibold text-gray-700 px-3 py-[3px] rounded-md shadow-sm uppercase tracking-wide z-10">
//           {product.badge}
//         </div>
//       )}

//       {/* Product Image */}
//       <div className="relative w-full h-[420px] overflow-hidden">
//         <img
//           src={product.image}
//           alt={product.name}
//           className="w-full h-full object-cover"
//         />

//         {/* Rating Badge */}
//         <div className="absolute bottom-3 left-3 bg-white px-2 py-[3px] rounded-full shadow-sm flex items-center gap-1 text-[13px] font-medium text-gray-800">
//           <FaStar className="text-yellow-400 text-[13px]" />
//           <span>{product.rating}</span>
//         </div>
//       </div>

//       {/* Product Details */}
//       <div className="p-3">
//         <h3 className="text-gray-800 font-semibold text-[15px] leading-tight">
//           {product.brand || "Bewakoof®"}
//         </h3>
//         <p className="text-gray-500 text-sm line-clamp-1">{product.name}</p>

//         <div className="flex items-center gap-2 mt-1">
//           <span className="text-[16px] font-semibold text-gray-800">
//             ₹{product.price}
//           </span>
//           <span className="text-gray-400 line-through text-sm">
//             ₹{product.originalPrice}
//           </span>
//           <span className="text-green-600 font-medium text-sm">
//             {product.discount}
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomeProductCard;

// import React from "react";
// import { FaStar } from "react-icons/fa";

// const HomeProductCard = ({ product }) => {
//   return (
//     <div className="relative bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer w-[230px] mx-auto">
//       {/* Product Badge */}
//       {product.badge && (
//         <div className="absolute top-2 left-2 bg-white text-[10px] font-semibold text-gray-700 px-2 py-[2px] rounded-md shadow-sm uppercase tracking-wide z-10">
//           {product.badge}
//         </div>
//       )}

//       {/* Product Image */}
//       <div className="relative w-full h-[340px] overflow-hidden">
//         <img
//           src={product.image}
//           alt={product.name}
//           className="w-full h-full object-cover"
//         />

//         {/* Rating Badge */}
//         <div className="absolute bottom-3 left-3 bg-white px-2 py-[2px] rounded-full shadow-sm flex items-center gap-1 text-[12px] font-medium text-gray-800">
//           <FaStar className="text-yellow-400 text-[12px]" />
//           <span>{product.rating}</span>
//         </div>
//       </div>

//       {/* Product Details */}
//       <div className="p-3">
//         <h3 className="text-gray-800 font-semibold text-[14px] leading-tight">
//           {product.brand || "Bewakoof®"}
//         </h3>
//         <p className="text-gray-500 text-sm line-clamp-1">{product.name}</p>

//         <div className="flex items-center gap-2 mt-1">
//           <span className="text-[15px] font-semibold text-gray-800">
//             ₹{product.price}
//           </span>
//           <span className="text-gray-400 line-through text-xs">
//             ₹{product.originalPrice}
//           </span>
//           <span className="text-green-600 font-medium text-xs">
//             {product.discount}
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomeProductCard;

// import React from "react";
// import { FaStar } from "react-icons/fa";

// const HomeProductCard = ({ image, title, price, oldPrice, rating }) => {
//   return (
//     <div className="w-[260px] bg-white rounded-xl shadow hover:shadow-lg transition-all duration-300 cursor-pointer">
//       {/* Image */}
//       <div className="w-full h-[330px] overflow-hidden rounded-t-xl">
//         <img src={image} alt={title} className="w-full h-full object-cover" />
//       </div>

//       {/* Content */}
//       <div className="p-3">
//         <h2 className="text-[15px] font-semibold text-gray-800 leading-snug">
//           {title}
//         </h2>

//         {/* Rating */}
//         <div className="flex items-center gap-1 mt-1 text-yellow-500">
//           <FaStar size={14} />
//           <span className="text-sm font-medium text-gray-700">{rating}</span>
//         </div>

//         {/* Pricing */}
//         <div className="flex items-center gap-2 mt-2">
//           <p className="text-[17px] font-semibold text-gray-900">₹{price}</p>
//           {oldPrice && (
//             <p className="text-sm line-through text-gray-500">₹{oldPrice}</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomeProductCard;

// import React from "react";
// import { FaStar } from "react-icons/fa";

// const HomeProductCard = ({ image, title, price, oldPrice, rating }) => {
//   const discount = oldPrice
//     ? Math.round(((oldPrice - price) / oldPrice) * 100)
//     : null;

//   return (
//     <div className="w-[160px] sm:w-[180px] md:w-[220px] lg:w-[260px] rounded-2xl cursor-pointer transition-all">
//       <div className="relative w-full h-[220px] sm:h-[260px] md:h-[300px] lg:h-[340px] rounded-2xl overflow-hidden">
//         <img
//           src={image}
//           alt={title}
//           className="w-full h-full object-cover object-[center_-0%]"
//         />

//         <div className="absolute bottom-2 left-2 md:bottom-3 md:left-3 flex items-center gap-1 bg-white/80 backdrop-blur-sm px-2 py-0.5 rounded-md shadow-md">
//           <FaStar size={12} className="text-yellow-500" />
//           <span className="text-[11px] md:text-[12px] font-semibold text-gray-800">
//             {rating}
//           </span>
//         </div>
//       </div>

//       <div className="mt-2 md:mt-3 px-1.5 pb-3">
//         <h3 className="text-[11px] sm:text-[12px] md:text-[13px] font-bold text-gray-600">
//           SaptRangi®
//         </h3>

//         <p className="text-[11px] sm:text-[12px] md:text-[13px] text-gray-900 font-medium leading-tight line-clamp-2">
//           {title}
//         </p>

//         <div className="flex items-center gap-2 mt-1 sm:mt-1.5">
//           <h4 className="text-[14px] sm:text-[15px] md:text-[16px] font-bold">
//             ₹{price}
//           </h4>
//           {oldPrice && (
//             <>
//               <p className="text-[11px] sm:text-[12px] line-through text-gray-500">
//                 ₹{oldPrice}
//               </p>
//               <p className="text-[12px] sm:text-[13px] text-green-600 font-semibold">
//                 {discount}% OFF
//               </p>
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomeProductCard;

// import React from "react";
// import { FaStar } from "react-icons/fa";

// const HomeProductCard = ({ image, title, price, oldPrice, rating }) => {
//   const discount = oldPrice
//     ? Math.round(((oldPrice - price) / oldPrice) * 100)
//     : null;

//   return (
//     <div
//       className="w-[190px] sm:w-[210px] md:w-[230px] lg:w-[260px]
//                     rounded-2xl cursor-pointer transition-all"
//     >
//       {/* IMAGE */}
//       <div
//         className="relative w-full
//                       h-[300px] sm:h-[320px] md:h-[330px] lg:h-[360px]
//                       rounded-2xl overflow-hidden"
//       >
//         <img
//           src={image}
//           alt={title}
//           className="w-full h-full object-cover object-[center_-0%]"
//         />

//         <div
//           className="absolute bottom-2 left-2 md:bottom-3 md:left-3
//                         flex items-center gap-1 bg-white/80 backdrop-blur-sm
//                         px-2 py-0.5 rounded-md shadow-md"
//         >
//           <FaStar size={12} className="text-yellow-500" />
//           <span className="text-[11px] md:text-[12px] font-semibold text-gray-800">
//             {rating}
//           </span>
//         </div>
//       </div>

//       {/* TEXT */}
//       <div className="mt-2 md:mt-3 px-1.5 pb-3">
//         <h3 className="text-[12px] md:text-[13px] font-bold text-gray-600">
//           SaptRangi®
//         </h3>

//         <p className="text-[12px] md:text-[13px] text-gray-900 font-medium leading-tight line-clamp-2">
//           {title}
//         </p>

//         <div className="flex items-center gap-2 mt-1">
//           <h4 className="text-[15px] md:text-[16px] font-bold">₹{price}</h4>

//           {oldPrice && (
//             <>
//               <p className="text-[12px] line-through text-gray-500">
//                 ₹{oldPrice}
//               </p>
//               <p className="text-[13px] text-green-600 font-semibold">
//                 {discount}% OFF
//               </p>
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomeProductCard;

// import React from "react";
// import { FaStar } from "react-icons/fa";

// const HomeProductCard = ({
//   image,
//   hoverImage,
//   title,
//   price,
//   oldPrice,
//   rating,
// }) => {
//   const discount = oldPrice
//     ? Math.round(((oldPrice - price) / oldPrice) * 100)
//     : null;

//   return (
//     <div
//       className="w-[190px] sm:w-[210px] md:w-[230px] lg:w-[260px]
//                     rounded-2xl cursor-pointer transition-all group"
//     >
//       {/* IMAGE WRAPPER */}
//       <div
//         className="relative w-full
//                       h-[300px] sm:h-[320px] md:h-[330px] lg:h-[360px]
//                       rounded-2xl overflow-hidden"
//       >
//         {/* MAIN IMAGE */}
//         <img
//           src={image}
//           alt={title}
//           className="absolute inset-0 w-full h-full object-cover
//              transition-opacity duration-500
//              opacity-100 group-hover:opacity-0 object-[center_-0%]"
//         />

//         {/* HOVER IMAGE (with zoom) */}
//         <img
//           src={hoverImage}
//           alt={title}
//           className="absolute inset-0 w-full h-full object-cover
//              opacity-0 group-hover:opacity-100
//              transform transition-all duration-700 ease-out
//              scale-100 group-hover:scale-105 object-[center_-0%]"
//         />

//         {/* RATING BADGE */}
//         <div
//           className="absolute bottom-2 left-2 md:bottom-3 md:left-3
//                         flex items-center gap-1 bg-white/80 backdrop-blur-sm
//                         px-2 py-0.5 rounded-md shadow-md"
//         >
//           <FaStar size={12} className="text-yellow-500" />
//           <span className="text-[11px] md:text-[12px] font-semibold text-gray-800">
//             {rating}
//           </span>
//         </div>
//       </div>

//       {/* TEXT */}
//       <div className="mt-2 md:mt-3 px-1.5 pb-3">
//         <h3 className="text-[12px] md:text-[13px] font-bold text-gray-600">
//           SaptRangi®
//         </h3>

//         <p className="text-[12px] md:text-[13px] text-gray-900 font-medium leading-tight line-clamp-2">
//           {title}
//         </p>

//         <div className="flex items-center gap-2 mt-1">
//           <h4 className="text-[15px] md:text-[16px] font-bold">₹{price}</h4>

//           {oldPrice && (
//             <>
//               <p className="text-[12px] line-through text-gray-500">
//                 ₹{oldPrice}
//               </p>
//               <p className="text-[13px] text-green-600 font-semibold">
//                 {discount}% OFF
//               </p>
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomeProductCard;

import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const HomeProductCard = ({
  slug,
  image,
  hoverImage,
  title,
  price,
  oldPrice,
  rating,
}) => {
  const discount = oldPrice
    ? Math.round(((oldPrice - price) / oldPrice) * 100)
    : null;

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
            src={image}
            alt={title}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover
             transition-opacity duration-500
             opacity-100 group-hover:opacity-0 object-[center_-0%]"
          />

          {/* HOVER IMAGE (with zoom) */}
          <img
            src={hoverImage || image}
            alt={title}
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
            {title}
          </p>

          <div className="flex items-center gap-2 mt-1">
            <h4 className="text-[15px] md:text-[16px] font-bold">₹{price}</h4>

            {oldPrice && (
              <>
                <p className="text-[12px] line-through text-gray-500">
                  ₹{oldPrice}
                </p>
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
