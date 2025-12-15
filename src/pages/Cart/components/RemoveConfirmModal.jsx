// // // import { X } from "lucide-react";

// // // const RemoveConfirmModal = ({ open, item, onClose, onConfirm }) => {
// // //   if (!open) return null;

// // //   return (
// // //     <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center">
// // //       <div className="bg-white w-[90%] max-w-lg rounded-xl shadow-xl p-6 relative animate-fadeIn">
// // //         {/* Close button */}
// // //         <button
// // //           className="absolute right-4 top-4 text-gray-500 hover:text-black"
// // //           onClick={onClose}
// // //         >
// // //           <X size={22} />
// // //         </button>

// // //         <h2 className="text-xl font-semibold mb-2">Clear From Bag</h2>
// // //         <p className="text-gray-600 mb-4">
// // //           Are you sure you want to remove this item from bag?
// // //         </p>

// // //         {/* Item preview */}
// // //         <div className="flex gap-4 border p-3 rounded-lg mb-5">
// // //           <div className="w-20 h-24 rounded-md overflow-hidden bg-gray-100">
// // //             <img
// // //               src={item.image}
// // //               alt={item.title}
// // //               className="w-full h-full object-cover"
// // //             />
// // //           </div>

// // //           <div className="flex-1 flex flex-col">
// // //             <h3 className="font-semibold text-[16px]">{item.brand}</h3>
// // //             <p className="text-gray-600 text-sm">{item.title}</p>

// // //             <div className="flex items-center gap-1 mt-1">
// // //               <span className="text-green-600 text-lg">✔</span>
// // //               <span className="text-gray-700 text-sm">
// // //                 Delivery by{" "}
// // //                 <span className="font-semibold">{item.deliveryDate}</span>
// // //               </span>
// // //             </div>
// // //           </div>

// // //           {/* Price */}
// // //           <div className="text-right">
// // //             <p className="font-semibold text-lg">
// // //               ₹{item.price.toLocaleString("en-IN")}
// // //             </p>
// // //             <p className="line-through text-gray-400 text-sm">
// // //               ₹{item.originalPrice.toLocaleString("en-IN")}
// // //             </p>
// // //             <p className="text-green-600 text-sm">
// // //               You saved ₹{item.saved.toLocaleString("en-IN")}
// // //             </p>
// // //           </div>
// // //         </div>

// // //         {/* Remove Button */}
// // //         <button
// // //           onClick={onConfirm}
// // //           className="w-full py-3 bg-primary text-white rounded-xl font-semibold hover:bg-secondary transition"
// // //         >
// // //           REMOVE & PROCEED
// // //         </button>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default RemoveConfirmModal;

// // import { X } from "lucide-react";

// // const RemoveConfirmModal = ({ open, item, onClose, onConfirm }) => {
// //   if (!open || !item) return null;

// //   // ===========================
// //   // 🛡 SAFE DATA MAPPING
// //   // ===========================
// //   const product = item?.product_details || {};

// //   const {
// //     name = "Product",
// //     brand = "",
// //     image = "https://via.placeholder.com/120",
// //     price = 0,
// //     original_price = price,
// //     discount_price = null,
// //   } = product;

// //   const quantity = item?.quantity ?? 1;
// //   const finalPrice = discount_price ?? price;
// //   const savedAmount = original_price - finalPrice;

// //   return (
// //     <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center">
// //       <div className="bg-white w-[90%] max-w-lg rounded-xl shadow-xl p-6 relative animate-fadeIn">
// //         {/* Close button */}
// //         <button
// //           className="absolute right-4 top-4 text-gray-500 hover:text-black"
// //           onClick={onClose}
// //         >
// //           <X size={22} />
// //         </button>

// //         <h2 className="text-xl font-semibold mb-2">Clear From Bag</h2>
// //         <p className="text-gray-600 mb-4">
// //           Are you sure you want to remove this item from bag?
// //         </p>

// //         {/* Item preview */}
// //         <div className="flex gap-4 border p-3 rounded-lg mb-5">
// //           <div className="w-20 h-24 rounded-md overflow-hidden bg-gray-100">
// //             <img
// //               src={image}
// //               alt={name}
// //               className="w-full h-full object-cover"
// //             />
// //           </div>

// //           <div className="flex-1 flex flex-col">
// //             {brand && <h3 className="font-semibold text-[16px]">{brand}</h3>}
// //             <p className="text-gray-600 text-sm">{name}</p>

// //             <div className="flex items-center gap-1 mt-1">
// //               <span className="text-green-600 text-lg">✔</span>
// //               <span className="text-gray-700 text-sm">
// //                 Delivery in <span className="font-semibold">3–5 days</span>
// //               </span>
// //             </div>
// //           </div>

// //           {/* Price */}
// //           <div className="text-right">
// //             <p className="font-semibold text-lg">
// //               ₹{(finalPrice * quantity).toLocaleString("en-IN")}
// //             </p>

// //             {original_price > finalPrice && (
// //               <p className="line-through text-gray-400 text-sm">
// //                 ₹{(original_price * quantity).toLocaleString("en-IN")}
// //               </p>
// //             )}

// //             {savedAmount > 0 && (
// //               <p className="text-green-600 text-sm">
// //                 You saved ₹{(savedAmount * quantity).toLocaleString("en-IN")}
// //               </p>
// //             )}
// //           </div>
// //         </div>

// //         {/* Remove Button */}
// //         <button
// //           onClick={onConfirm}
// //           className="w-full py-3 bg-primary text-white rounded-xl font-semibold hover:bg-secondary transition"
// //         >
// //           REMOVE & PROCEED
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default RemoveConfirmModal;

// import { X } from "lucide-react";

// const RemoveConfirmModal = ({ open, item, onClose, onConfirm }) => {
//   if (!open || !item) return null;

//   const product = item?.product_details || {};
//   const {
//     name = "Product",
//     brand = "",
//     image = "https://via.placeholder.com/120",
//     price = 0,
//     original_price = price,
//     discount_price = null,
//   } = product;

//   const quantity = item?.quantity ?? 1;
//   const finalPrice = discount_price ?? price;
//   const savedAmount = original_price - finalPrice;

//   return (
//     <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center">
//       <div className="bg-white w-[90%] max-w-lg rounded-xl shadow-xl p-6 relative">
//         <button
//           className="absolute right-4 top-4 text-gray-500 hover:text-black"
//           onClick={onClose}
//         >
//           <X size={22} />
//         </button>

//         <h2 className="text-xl font-semibold mb-2">Clear From Bag</h2>
//         <p className="text-gray-600 mb-4">
//           Are you sure you want to remove this item from bag?
//         </p>

//         <div className="flex gap-4 border p-3 rounded-lg mb-5">
//           <img
//             src={image}
//             alt={name}
//             className="w-20 h-24 object-cover rounded"
//           />

//           <div className="flex-1">
//             {brand && <h3 className="font-semibold">{brand}</h3>}
//             <p className="text-sm text-gray-600">{name}</p>
//           </div>

//           <div className="text-right">
//             <p className="font-semibold">
//               ₹{(finalPrice * quantity).toLocaleString("en-IN")}
//             </p>
//             {savedAmount > 0 && (
//               <p className="text-green-600 text-sm">
//                 You saved ₹{(savedAmount * quantity).toLocaleString("en-IN")}
//               </p>
//             )}
//           </div>
//         </div>

//         <button
//           onClick={onConfirm}
//           className="w-full py-3 bg-primary text-white rounded-xl font-semibold"
//         >
//           REMOVE & PROCEED
//         </button>
//       </div>
//     </div>
//   );
// };

// export default RemoveConfirmModal;

import { X } from "lucide-react";

const RemoveConfirmModal = ({ open, item, onClose, onConfirm }) => {
  if (!open || !item) return null;

  // =========================
  // SAFE BACKEND MAPPING
  // =========================
  const product = item.product_details || {};

  const {
    name = "Product",
    brand = "",
    main_image,
    hover_image,
    price = 0,
    mrp = price,
  } = product;

  const image = main_image || hover_image;
  const quantity = item.quantity || 1;
  const savedAmount = mrp - price;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-white w-[90%] max-w-lg rounded-xl shadow-xl p-6 relative">
        {/* CLOSE */}
        <button
          className="absolute right-4 top-4 text-gray-500 hover:text-black"
          onClick={onClose}
        >
          <X size={22} />
        </button>

        {/* HEADER */}
        <h2 className="text-xl font-semibold mb-2">Remove Item</h2>
        <p className="text-gray-600 mb-4">
          Are you sure you want to remove this item from your bag?
        </p>

        {/* ITEM PREVIEW */}
        <div className="flex gap-4 border p-3 rounded-lg mb-5">
          <img
            src={image}
            alt={name}
            className="w-20 h-24 object-cover rounded"
          />

          <div className="flex-1">
            {brand && <h3 className="font-semibold">{brand}</h3>}
            <p className="text-sm text-gray-600">{name}</p>
            <p className="text-xs text-gray-500 mt-1">Qty: {quantity}</p>
          </div>

          <div className="text-right">
            <p className="font-semibold">
              ₹{(price * quantity).toLocaleString("en-IN")}
            </p>

            {mrp > price && (
              <p className="line-through text-gray-400 text-sm">
                ₹{(mrp * quantity).toLocaleString("en-IN")}
              </p>
            )}

            {savedAmount > 0 && (
              <p className="text-green-600 text-sm">
                You saved ₹{(savedAmount * quantity).toLocaleString("en-IN")}
              </p>
            )}
          </div>
        </div>

        {/* ACTION */}
        <button
          onClick={onConfirm}
          className="w-full py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl font-semibold transition"
        >
          REMOVE ITEM
        </button>
      </div>
    </div>
  );
};

export default RemoveConfirmModal;
