// // // // src/pages/Product/components/ProductTitlePrice.jsx

// // // import React from "react";
// // // import { FaStar } from "react-icons/fa";

// // // const ProductTitlePrice = ({ product }) => {
// // //   const { title, price, oldPrice, rating } = product;

// // //   const discount = oldPrice
// // //     ? Math.round(((oldPrice - price) / oldPrice) * 100)
// // //     : null;

// // //   return (
// // //     <div className="space-y-2">
// // //       {/* TITLE */}
// // //       <h1 className="text-2xl font-semibold text-gray-900 leading-tight">
// // //         {title}
// // //       </h1>

// // //       {/* RATING */}
// // //       {rating && (
// // //         <div className="flex items-center gap-1 mt-1">
// // //           <div className="flex items-center gap-1 bg-yellow-100 px-2 py-1 rounded-md">
// // //             <FaStar size={14} className="text-yellow-600" />
// // //             <span className="font-medium text-gray-800 text-sm">{rating}</span>
// // //           </div>
// // //           <span className="text-gray-500 text-sm">(Customer Ratings)</span>
// // //         </div>
// // //       )}

// // //       {/* PRICING SECTION */}
// // //       <div className="flex items-center gap-3 mt-2">
// // //         <h2 className="text-3xl font-bold text-gray-900">₹{price}</h2>

// // //         {oldPrice && (
// // //           <>
// // //             <p className="text-lg text-gray-500 line-through">₹{oldPrice}</p>

// // //             <span className="text-green-600 font-semibold text-lg">
// // //               {discount}% OFF
// // //             </span>
// // //           </>
// // //         )}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default ProductTitlePrice;

// // // src/pages/Product/components/ProductTitlePrice.jsx

// // import React from "react";
// // import { FaStar } from "react-icons/fa";
// // import { FaInfoCircle } from "react-icons/fa";

// // const ProductTitlePrice = ({ product }) => {
// //   const { title, price, oldPrice, rating } = product;

// //   const discount = oldPrice
// //     ? Math.round(((oldPrice - price) / oldPrice) * 100)
// //     : null;

// //   return (
// //     <div className="space-y-3">
// //       {/* TITLE */}
// //       <h1 className="text-2xl font-semibold text-gray-900 leading-tight">
// //         {title}
// //       </h1>

// //       {/* PRICING BLOCK */}
// //       <div className="flex items-center gap-3 mt-2">
// //         <h2 className="text-3xl font-bold text-gray-900">₹{price}</h2>

// //         {oldPrice && (
// //           <>
// //             <p className="text-lg text-gray-500 line-through">₹{oldPrice}</p>
// //             <span className="text-green-600 font-semibold text-lg">
// //               {discount}% OFF
// //             </span>
// //           </>
// //         )}
// //       </div>

// //       {/* TAXES TEXT + LOWEST PRICE IN ONE LINE */}
// //       <div className="flex items-center gap-20">
// //         <p className="text-sm text-gray-600">Inclusive of all taxes</p>

// //         <div className="flex items-center gap-1 bg-purple-100 text-purple-600 rounded-md px-3 py-1 text-sm font-medium">
// //           Get it for as low as ₹720
// //           <FaInfoCircle className="text-purple-500 ml-1" size={14} />
// //         </div>
// //       </div>

// //       {/* RATING */}
// //       {rating && (
// //         <div className="flex items-center gap-1 mt-1">
// //           <div className="flex items-center gap-1 bg-yellow-100 px-2 py-1 rounded-full">
// //             <FaStar size={14} className="text-yellow-600" />
// //             <span className="font-medium text-gray-800 text-sm">{rating}</span>
// //           </div>
// //         </div>
// //       )}

// //       {/* GREEN TAG UNDER TITLE */}
// //       <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-md inline-block w-fit">
// //         100% Cotton
// //       </span>
// //     </div>
// //   );
// // };

// // export default ProductTitlePrice;

// // import React from "react";
// // import { FaStar } from "react-icons/fa";
// // import { FaInfoCircle } from "react-icons/fa";

// // const ProductTitlePrice = ({ product }) => {
// //   const { title, price, oldPrice, rating } = product;

// //   const discount = oldPrice
// //     ? Math.round(((oldPrice - price) / oldPrice) * 100)
// //     : null;

// //   return (
// //     <div className="space-y-3">
// //       {/* TITLE */}
// //       <h1 className="text-2xl font-semibold text-gray-900 leading-tight">
// //         {title}
// //       </h1>

// //       {/* PRICE + OLD PRICE + DISCOUNT + TAXES (ONE LINE) */}
// //       <div className="flex items-center flex-wrap gap-3">
// //         {/* Price */}
// //         <h2 className="text-3xl font-bold text-gray-900">₹{price}</h2>

// //         {/* Old Price + Discount */}
// //         {oldPrice && (
// //           <>
// //             <p className="text-lg text-gray-500 line-through">₹{oldPrice}</p>
// //             <span className="text-green-600 font-semibold text-lg">
// //               {discount}% OFF
// //             </span>
// //           </>
// //         )}

// //         {/* Inclusive of taxes */}
// //         <p className="text-sm text-gray-600 ml-2">Inclusive of all taxes</p>
// //       </div>

// //       {/* SECOND LINE — LOWEST PRICE */}
// //       <div className="flex items-center gap-1 bg-purple-100 text-purple-600 rounded-md px-3 py-1 text-sm font-medium w-fit">
// //         Get it for as low as ₹720
// //         <FaInfoCircle className="text-purple-500 ml-1" size={14} />
// //       </div>

// //       {/* RATING */}
// //       {rating && (
// //         <div className="flex items-center gap-1 mt-1">
// //           <div className="flex items-center gap-1 bg-yellow-100 px-2 py-1 rounded-full">
// //             <FaStar size={14} className="text-yellow-600" />
// //             <span className="font-medium text-gray-800 text-sm">{rating}</span>
// //           </div>
// //         </div>
// //       )}

// //       {/* EXTRA TAG */}
// //       <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-md inline-block w-fit">
// //         100% Cotton
// //       </span>
// //     </div>
// //   );
// // };

// // export default ProductTitlePrice;

// import React from "react";
// import { FaStar } from "react-icons/fa";
// import { FaInfoCircle } from "react-icons/fa";

// const ProductTitlePrice = ({ product }) => {
//   const { title, price, oldPrice, rating } = product;

//   const discount = oldPrice
//     ? Math.round(((oldPrice - price) / oldPrice) * 100)
//     : null;

//   return (
//     <div className="space-y-2">
//       {/* TITLE */}
//       <h1 className="text-2xl font-semibold text-gray-900 leading-tight mt-0">
//         {title}
//       </h1>

//       {/* PRICE + OLD PRICE + DISCOUNT */}
//       <div className="flex items-center flex-wrap gap-2">
//         <h2 className="text-3xl font-bold text-gray-900">₹{price}</h2>

//         {oldPrice && (
//           <>
//             <p className="text-lg text-gray-500 line-through">₹{oldPrice}</p>
//             <span className="text-green-600 font-semibold text-lg">
//               {discount}% OFF
//             </span>
//           </>
//         )}

//         <p className="text-sm text-gray-600 ml-1">Inclusive of all taxes</p>
//       </div>

//       {/* LOWEST PRICE LINE */}
//       <div className="flex items-center gap-1 bg-purple-100 text-purple-600 rounded-md px-3 py-1 text-sm font-medium w-fit">
//         Get it for as low as ₹720
//         <FaInfoCircle className="text-purple-500 ml-1" size={14} />
//       </div>

//       {/* RATING */}
//       {rating && (
//         <div className="flex items-center gap-1">
//           <div className="flex items-center gap-1 bg-yellow-100 px-2 py-1 rounded-full">
//             <FaStar size={14} className="text-yellow-600" />
//             <span className="font-medium text-gray-800 text-sm">{rating}</span>
//           </div>
//         </div>
//       )}

//       {/* EXTRA TAG */}
//       <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-md inline-block w-fit">
//         100% Cotton
//       </span>
//     </div>
//   );
// };

// export default ProductTitlePrice;

import React from "react";
import { FaStar, FaInfoCircle } from "react-icons/fa";

const ProductTitlePrice = ({ product }) => {
  const { name, price, mrp, rating } = product;

  const discount = mrp ? Math.round(((mrp - price) / mrp) * 100) : null;

  return (
    <div className="space-y-2">
      <h1 className="text-2xl font-semibold text-gray-900">{name}</h1>

      <div className="flex items-center flex-wrap gap-2">
        <h2 className="text-3xl font-bold text-gray-900">₹{price}</h2>

        {mrp && (
          <>
            <p className="text-lg text-gray-500 line-through">₹{mrp}</p>
            <span className="text-green-600 font-semibold text-lg">
              {discount}% OFF
            </span>
          </>
        )}

        <p className="text-sm text-gray-600 ml-1">Inclusive of all taxes</p>
      </div>

      {/* <div className="flex items-center gap-1 bg-purple-100 text-purple-600 rounded-md px-3 py-1 text-sm font-medium w-fit">
        Get it for as low as ₹720
        <FaInfoCircle size={14} />
      </div> */}

      {rating && (
        <div className="flex items-center gap-1">
          <div className="flex items-center gap-1 bg-yellow-100 px-2 py-1 rounded-full">
            <FaStar className="text-yellow-600" size={14} />
            <span className="font-medium text-gray-800 text-sm">{rating}</span>
          </div>
        </div>
      )}

      <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-md inline-block">
        100% Cotton
      </span>
    </div>
  );
};

export default ProductTitlePrice;
