// // // src/pages/Checkout/components/CartItemsList.jsx
// // import React, { useState } from "react";
// // import { IoChevronDown, IoChevronUp } from "react-icons/io5";

// // const CartItemsList = ({ cart }) => {
// //   const [openItems, setOpenItems] = useState(true);

// //   return (
// //     <div className="bg-white border rounded-lg">
// //       <button
// //         onClick={() => setOpenItems((v) => !v)}
// //         className="w-full text-left px-4 py-3 flex justify-between items-center"
// //       >
// //         <span className="font-semibold">Item ({cart.length})</span>
// //         <span>{openItems ? <IoChevronUp /> : <IoChevronDown />}</span>
// //       </button>

// //       {openItems && (
// //         <div className="p-4 border-t space-y-3">
// //           {cart.map((item) => (
// //             <div key={item.id + item.size} className="flex gap-3 items-center">
// //               <img
// //                 src={item.image}
// //                 className="w-14 h-14 rounded object-cover"
// //                 alt={item.title}
// //               />
// //               <div className="flex-1">
// //                 <div className="text-sm text-gray-700">{item.title}</div>
// //                 <div className="text-xs text-green-600 mt-1">
// //                   Delivery by {item.deliveryDate}
// //                 </div>
// //               </div>
// //               <div className="text-right text-sm">
// //                 ₹{(item.price || 0).toLocaleString("en-IN")}
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default CartItemsList;

// // src/pages/Checkout/components/CartItemsList.jsx
// import React, { useState } from "react";
// import { IoChevronDown, IoChevronUp } from "react-icons/io5";

// const CartItemsList = ({ cart }) => {
//   const [openItems, setOpenItems] = useState(true);

//   return (
//     <div className="bg-white border rounded-lg">
//       <button
//         onClick={() => setOpenItems((v) => !v)}
//         className="w-full text-left px-4 py-3 flex justify-between items-center"
//       >
//         <span className="font-semibold">Item ({cart.length})</span>
//         <span>{openItems ? <IoChevronUp /> : <IoChevronDown />}</span>
//       </button>

//       {openItems && (
//         <div className="p-4 border-t space-y-3">
//           {cart.map((item) => {
//             const product = item.product_details;

//             return (
//               <div key={item.id} className="flex gap-3 items-center">
//                 {/* PRODUCT IMAGE */}
//                 <img
//                   src={product?.main_image || product?.hover_image}
//                   className="w-14 h-14 rounded object-cover"
//                   alt={product?.name}
//                 />

//                 {/* PRODUCT INFO */}
//                 <div className="flex-1">
//                   <div className="text-sm text-gray-700">{product?.name}</div>

//                   <div className="text-xs text-gray-500 mt-1">
//                     Qty: {item.quantity}
//                   </div>
//                 </div>

//                 {/* PRICE */}
//                 <div className="text-right text-sm font-medium">
//                   ₹
//                   {(
//                     (product?.price || 0) * (item.quantity || 1)
//                   ).toLocaleString("en-IN")}
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       )}
//     </div>
//   );
// };

// export default CartItemsList;

import React, { useState } from "react";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";

const CartItemsList = ({ cart }) => {
  const [openItems, setOpenItems] = useState(true);

  return (
    <div className="bg-white border rounded-lg">
      <button
        onClick={() => setOpenItems((v) => !v)}
        className="w-full text-left px-4 py-3 flex justify-between items-center"
      >
        <span className="font-semibold">Item ({cart.length})</span>
        <span>{openItems ? <IoChevronUp /> : <IoChevronDown />}</span>
      </button>

      {openItems && (
        <div className="p-4 border-t space-y-3">
          {cart.map((item) => (
            <div key={item.id} className="flex gap-3 items-center">
              {/* PRODUCT IMAGE */}
              <img
                src={item.image}
                className="w-14 h-14 rounded object-cover"
                alt={item.name}
              />

              {/* PRODUCT INFO */}
              <div className="flex-1">
                <div className="text-sm text-gray-700">{item.name}</div>
                <div className="text-xs text-gray-500 mt-1">
                  Qty: {item.quantity}
                </div>
              </div>

              {/* PRICE */}
              <div className="text-right text-sm font-medium">
                ₹
                {((item.price || 0) * (item.quantity || 1)).toLocaleString(
                  "en-IN"
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartItemsList;
