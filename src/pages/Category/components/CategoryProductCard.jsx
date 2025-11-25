// // src/pages/Category/components/CategoryProductCard.jsx

// import React from "react";
// import { FaStar } from "react-icons/fa";
// import { Link } from "react-router-dom";

// const CategoryProductCard = ({
//   slug,
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
//     <Link to={`/collection/${slug}`} className="block w-full">
//       <div className="w-full rounded-2xl cursor-pointer transition-all group">
//         {/* IMAGE */}
//         <div className="relative w-full h-[300px] sm:h-[320px] md:h-[330px] lg:h-[360px] rounded-2xl overflow-hidden">
//           {/* MAIN IMAGE */}
//           <img
//             src={image}
//             alt={title}
//             loading="lazy"
//             className="absolute inset-0 w-full h-full object-cover
//                        transition-opacity duration-500
//                        opacity-100 group-hover:opacity-0"
//           />

//           {/* HOVER IMAGE */}
//           <img
//             src={hoverImage || image}
//             alt={title}
//             loading="lazy"
//             className="absolute inset-0 w-full h-full object-cover
//                        opacity-0 group-hover:opacity-100
//                        transform transition-all duration-700 ease-out
//                        group-hover:scale-105"
//           />

//           {/* RATING */}
//           <div
//             className="absolute bottom-2 left-2 flex items-center gap-1
//                           bg-white/85 backdrop-blur-sm px-2 py-1 rounded-md shadow-sm"
//           >
//             <FaStar size={12} className="text-yellow-500" />
//             <span className="text-xs font-semibold">{rating}</span>
//           </div>
//         </div>

//         {/* TEXT */}
//         <div className="mt-3 px-1 pb-3">
//           <h3 className="text-xs font-bold text-gray-600">SaptRangi®</h3>

//           <p className="text-sm text-gray-900 font-medium line-clamp-2 mt-1">
//             {title}
//           </p>

//           {/* PRICE */}
//           <div className="flex items-center gap-2 mt-1">
//             <h4 className="text-lg font-bold">₹{price}</h4>

//             {oldPrice && (
//               <>
//                 <p className="text-sm line-through text-gray-500">
//                   ₹{oldPrice}
//                 </p>
//                 <p className="text-sm text-green-600 font-semibold">
//                   {discount}% OFF
//                 </p>
//               </>
//             )}
//           </div>
//         </div>
//       </div>
//     </Link>
//   );
// };

// export default CategoryProductCard;

// src/pages/Category/components/CategoryProductCard.jsx
import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const CategoryProductCard = ({
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
    <Link to={`/collection/${slug}`} className="block w-full">
      <div className="w-full rounded-2xl transition-all group">
        <div className="relative w-full h-[300px] sm:h-[320px] md:h-[330px] lg:h-[360px] rounded-2xl overflow-hidden">
          <img
            src={image}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-100 group-hover:opacity-0"
          />
          <img
            src={hoverImage || image}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transform transition-all duration-700 group-hover:scale-105 object-[center_-0%]"
          />

          <div className="absolute bottom-2 left-2 flex items-center gap-1 bg-white/85 backdrop-blur-sm px-2 py-1 rounded-md shadow-sm">
            <FaStar size={12} className="text-yellow-500" />
            <span className="text-xs font-semibold">{rating}</span>
          </div>
        </div>

        <div className="mt-3 px-1 pb-3">
          <h3 className="text-xs font-bold text-gray-600">SaptRangi®</h3>
          <p className="text-sm text-gray-900 font-medium line-clamp-2 mt-1">
            {title}
          </p>

          <div className="flex items-center gap-2 mt-1">
            <h4 className="text-lg font-bold">₹{price}</h4>
            {oldPrice && (
              <>
                <p className="text-sm line-through text-gray-500">
                  ₹{oldPrice}
                </p>
                <p className="text-sm text-green-600 font-semibold">
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

export default CategoryProductCard;
