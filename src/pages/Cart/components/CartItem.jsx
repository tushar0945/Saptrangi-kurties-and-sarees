// // // // // // // // // import React from "react";

// // // // // // // // // const CartItem = ({ item }) => {
// // // // // // // // //   return (
// // // // // // // // //     <div className="flex gap-4 p-4 bg-white rounded-xl shadow-sm border">
// // // // // // // // //       <img
// // // // // // // // //         src={item.image}
// // // // // // // // //         alt={item.title}
// // // // // // // // //         className="w-28 h-32 object-cover rounded-lg"
// // // // // // // // //       />

// // // // // // // // //       <div className="flex flex-col justify-between flex-1">
// // // // // // // // //         <div>
// // // // // // // // //           <h3 className="text-lg font-semibold">{item.title}</h3>
// // // // // // // // //           <p className="text-sm text-gray-500">Delivery in 5–7 days</p>

// // // // // // // // //           <div className="flex items-center gap-4 mt-3">
// // // // // // // // //             <span className="px-3 py-1 rounded-md bg-neutral text-dark">
// // // // // // // // //               Size: {item.size}
// // // // // // // // //             </span>

// // // // // // // // //             <span className="px-3 py-1 rounded-md bg-neutral text-dark">
// // // // // // // // //               Qty: {item.qty}
// // // // // // // // //             </span>
// // // // // // // // //           </div>
// // // // // // // // //         </div>

// // // // // // // // //         <div className="flex items-center justify-between mt-4">
// // // // // // // // //           <div>
// // // // // // // // //             <p className="text-lg font-semibold text-primary">₹{item.price}</p>
// // // // // // // // //             <p className="text-sm line-through text-gray-400">
// // // // // // // // //               ₹{item.originalPrice}
// // // // // // // // //             </p>
// // // // // // // // //           </div>

// // // // // // // // //           <button className="text-sm text-red-500">Remove</button>
// // // // // // // // //         </div>
// // // // // // // // //       </div>
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export default CartItem;

// // // // // // // // import { IoClose } from "react-icons/io5";
// // // // // // // // import { CheckCircle } from "lucide-react";

// // // // // // // // const CartItem = ({ item }) => {
// // // // // // // //   return (
// // // // // // // //     <div className="border rounded-xl p-4 bg-white shadow-sm hover:shadow-md transition-all">
// // // // // // // //       {/* TOP ROW → Image + Content + Remove */}
// // // // // // // //       <div className="flex gap-4 relative">
// // // // // // // //         {/* LEFT: PRODUCT IMAGE */}
// // // // // // // //         <img
// // // // // // // //           src={item.image}
// // // // // // // //           alt={item.title}
// // // // // // // //           className="w-28 h-32 object-cover rounded-lg"
// // // // // // // //         />

// // // // // // // //         {/* MIDDLE CONTENT */}
// // // // // // // //         <div className="flex-1 flex flex-col gap-1">
// // // // // // // //           {/* Brand */}
// // // // // // // //           <h2 className="font-semibold text-lg">{item.brand || "Saptrangi"}</h2>

// // // // // // // //           {/* Title */}
// // // // // // // //           <p className="text-gray-600 text-sm leading-snug">{item.title}</p>

// // // // // // // //           {/* Delivery Info */}
// // // // // // // //           <div className="flex items-center gap-2 mt-1 text-sm">
// // // // // // // //             <CheckCircle size={16} className="text-green-600" />
// // // // // // // //             <p className="text-gray-700">
// // // // // // // //               Delivery by{" "}
// // // // // // // //               <span className="font-semibold text-dark">{item.delivery}</span>
// // // // // // // //             </p>
// // // // // // // //           </div>

// // // // // // // //           {/* SIZE & QTY */}
// // // // // // // //           <div className="flex gap-3 mt-3">
// // // // // // // //             {/* Size Select */}
// // // // // // // //             <select className="px-3 py-1.5 border rounded-md text-sm bg-neutral cursor-pointer">
// // // // // // // //               <option>Size : {item.size}</option>
// // // // // // // //               <option>XS</option>
// // // // // // // //               <option>S</option>
// // // // // // // //               <option>M</option>
// // // // // // // //               <option>L</option>
// // // // // // // //               <option>XL</option>
// // // // // // // //               <option>2XL</option>
// // // // // // // //             </select>

// // // // // // // //             {/* Qty Select */}
// // // // // // // //             <select className="px-3 py-1.5 border rounded-md text-sm bg-neutral cursor-pointer">
// // // // // // // //               <option>Qty : {item.qty}</option>
// // // // // // // //               <option>1</option>
// // // // // // // //               <option>2</option>
// // // // // // // //               <option>3</option>
// // // // // // // //             </select>
// // // // // // // //           </div>
// // // // // // // //         </div>

// // // // // // // //         {/* REMOVE BUTTON */}
// // // // // // // //         <button className="absolute top-2 right-2 text-gray-500 hover:text-red-500 transition">
// // // // // // // //           <IoClose size={22} />
// // // // // // // //         </button>
// // // // // // // //       </div>

// // // // // // // //       {/* BOTTOM → PRICE */}
// // // // // // // //       <div className="flex justify-end mt-4">
// // // // // // // //         <div className="text-right">
// // // // // // // //           {/* Price */}
// // // // // // // //           <p className="text-lg font-semibold text-dark">
// // // // // // // //             ₹{item.price.toLocaleString()}
// // // // // // // //           </p>

// // // // // // // //           {/* Original Price & Discount */}
// // // // // // // //           <p className="text-sm text-gray-500 line-through -mt-1">
// // // // // // // //             ₹{item.originalPrice.toLocaleString()}
// // // // // // // //           </p>

// // // // // // // //           <p className="text-sm text-green-600 font-medium">
// // // // // // // //             You saved ₹{(item.originalPrice - item.price).toLocaleString()}
// // // // // // // //           </p>
// // // // // // // //         </div>
// // // // // // // //       </div>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default CartItem;

// // // // // // // import { IoClose } from "react-icons/io5";
// // // // // // // import { CheckCircle } from "lucide-react";

// // // // // // // const CartItem = ({ item }) => {
// // // // // // //   return (
// // // // // // //     <div className="border rounded-xl p-4 bg-white hover:shadow-md transition-all">
// // // // // // //       {/* ---- MAIN ROW ---- */}
// // // // // // //       <div className="flex gap-4 relative">
// // // // // // //         {/* PRODUCT IMAGE */}
// // // // // // //         <img
// // // // // // //           src={item.image}
// // // // // // //           alt={item.title}
// // // // // // //           className="w-28 h-32 rounded-lg object-cover"
// // // // // // //         />

// // // // // // //         {/* ---- RIGHT CONTENT ---- */}
// // // // // // //         <div className="flex-1">
// // // // // // //           {/* BRAND NAME */}
// // // // // // //           <h2 className="font-semibold text-lg leading-tight">
// // // // // // //             {item.brand || "Saptrangi"}
// // // // // // //           </h2>

// // // // // // //           {/* PRODUCT TITLE */}
// // // // // // //           <p className="text-gray-600 text-sm">{item.title}</p>

// // // // // // //           {/* DELIVERY DATE */}
// // // // // // //           <div className="flex items-center gap-1 text-sm mt-2">
// // // // // // //             <CheckCircle size={16} className="text-green-600" />
// // // // // // //             <span className="text-gray-700">
// // // // // // //               Delivery by <span className="font-semibold">{item.delivery}</span>
// // // // // // //             </span>
// // // // // // //           </div>

// // // // // // //           {/* SIZE & QTY CONTROLS */}
// // // // // // //           <div className="flex items-center gap-3 mt-3">
// // // // // // //             {/* SIZE */}
// // // // // // //             <div className="border rounded-md bg-gray-50 px-3 py-1.5 text-sm">
// // // // // // //               Size : {item.size}
// // // // // // //             </div>

// // // // // // //             {/* QTY */}
// // // // // // //             <div className="border rounded-md bg-gray-50 px-3 py-1.5 text-sm">
// // // // // // //               Qty : {item.qty}
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //         </div>

// // // // // // //         {/* REMOVE BUTTON */}
// // // // // // //         <button className="absolute top-2 right-2 text-gray-500 hover:text-red-500 transition">
// // // // // // //           <IoClose size={22} />
// // // // // // //         </button>
// // // // // // //       </div>

// // // // // // //       {/* ---- PRICE SECTION ---- */}
// // // // // // //       <div className="flex justify-end mt-3">
// // // // // // //         <div className="text-right">
// // // // // // //           {/* FINAL PRICE */}
// // // // // // //           <p className="text-lg font-semibold text-dark">
// // // // // // //             ₹{item.price.toLocaleString()}
// // // // // // //           </p>

// // // // // // //           {/* ORIGINAL PRICE */}
// // // // // // //           <p className="text-sm text-gray-500 line-through -mt-1">
// // // // // // //             ₹{item.originalPrice.toLocaleString()}
// // // // // // //           </p>

// // // // // // //           {/* SAVINGS */}
// // // // // // //           <p className="text-sm text-green-600 font-medium">
// // // // // // //             You saved ₹{(item.originalPrice - item.price).toLocaleString()}
// // // // // // //           </p>
// // // // // // //         </div>
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default CartItem;

// // // // // // import { IoClose } from "react-icons/io5";
// // // // // // import { CheckCircle } from "lucide-react";

// // // // // // const CartItem = ({ item }) => {
// // // // // //   return (
// // // // // //     <div className="border rounded-xl p-4 bg-white shadow-sm hover:shadow-md transition-all">
// // // // // //       {/* MAIN FLEX (IMAGE + CONTENT + PRICE) */}
// // // // // //       <div className="flex items-start gap-4 relative">
// // // // // //         {/* IMAGE */}
// // // // // //         <img
// // // // // //           src={item.image}
// // // // // //           className="w-28 h-32 object-cover rounded-lg flex-shrink-0"
// // // // // //         />

// // // // // //         {/* CENTER CONTENT */}
// // // // // //         <div className="flex flex-col gap-1 flex-grow">
// // // // // //           <h2 className="font-semibold text-lg">{item.brand}</h2>

// // // // // //           <p className="text-gray-600 text-sm">{item.title}</p>

// // // // // //           {/* DELIVERY */}
// // // // // //           <div className="flex items-center gap-1 text-sm mt-1">
// // // // // //             <CheckCircle size={16} className="text-green-600" />
// // // // // //             <span className="text-gray-700">
// // // // // //               Delivery by <span className="font-semibold">{item.delivery}</span>
// // // // // //             </span>
// // // // // //           </div>

// // // // // //           {/* SIZE + QTY */}
// // // // // //           <div className="flex gap-3 mt-3">
// // // // // //             <div className="px-3 py-1.5 bg-gray-50 border rounded-md text-sm">
// // // // // //               Size : {item.size}
// // // // // //             </div>
// // // // // //             <div className="px-3 py-1.5 bg-gray-50 border rounded-md text-sm">
// // // // // //               Qty : {item.qty}
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </div>

// // // // // //         {/* PRICE BLOCK — stays close to content */}
// // // // // //         <div className="flex flex-col items-end flex-shrink-0">
// // // // // //           <p className="text-lg font-semibold">₹{item.price}</p>

// // // // // //           <p className="text-sm text-gray-400 line-through -mt-1">
// // // // // //             ₹{item.originalPrice}
// // // // // //           </p>

// // // // // //           <p className="text-sm text-green-600 font-medium">
// // // // // //             You saved ₹{item.originalPrice - item.price}
// // // // // //           </p>
// // // // // //         </div>

// // // // // //         {/* REMOVE BUTTON */}
// // // // // //         <button className="absolute top-2 right-2 text-gray-500 hover:text-red-500">
// // // // // //           <IoClose size={22} />
// // // // // //         </button>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default CartItem;

// // // // // import { IoClose } from "react-icons/io5";
// // // // // import { CheckCircle } from "lucide-react";

// // // // // const CartItem = ({ item }) => {
// // // // //   return (
// // // // //     <div className="bg-white border rounded-xl p-4 shadow-sm hover:shadow-md transition-all">
// // // // //       {/* FULL ROW — BEWAKOOF STYLE */}
// // // // //       <div className="flex items-start justify-between gap-4 relative">
// // // // //         {/* LEFT — IMAGE */}
// // // // //         <img
// // // // //           src={item.image}
// // // // //           className="w-28 h-32 object-cover rounded-lg flex-shrink-0"
// // // // //         />

// // // // //         {/* MIDDLE — DETAILS */}
// // // // //         <div className="flex flex-col justify-start gap-1 flex-grow">
// // // // //           {/* Brand Name */}
// // // // //           <h2 className="font-semibold text-base">
// // // // //             {item.brand || "Saptrangi"}
// // // // //           </h2>

// // // // //           {/* Product Title */}
// // // // //           <p className="text-gray-600 text-sm">{item.title}</p>

// // // // //           {/* Delivery */}
// // // // //           <div className="flex items-center gap-1 text-sm mt-1">
// // // // //             <CheckCircle size={16} className="text-green-600" />
// // // // //             <span className="text-gray-700">
// // // // //               Delivery by <span className="font-semibold">{item.delivery}</span>
// // // // //             </span>
// // // // //           </div>

// // // // //           {/* Size & Quantity */}
// // // // //           <div className="flex gap-3 mt-3">
// // // // //             <div className="px-3 py-1.5 bg-gray-50 border rounded-md text-sm">
// // // // //               Size : {item.size}
// // // // //             </div>
// // // // //             <div className="px-3 py-1.5 bg-gray-50 border rounded-md text-sm">
// // // // //               Qty : {item.qty}
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>

// // // // //         {/* RIGHT — PRICE BLOCK */}
// // // // //         <div className="flex flex-col items-end flex-shrink-0 w-24">
// // // // //           <p className="text-lg font-semibold text-dark">
// // // // //             ₹{item.price.toLocaleString()}
// // // // //           </p>

// // // // //           <p className="text-sm text-gray-400 line-through -mt-1">
// // // // //             ₹{item.originalPrice.toLocaleString()}
// // // // //           </p>

// // // // //           <p className="text-sm text-green-600 font-medium">
// // // // //             You saved ₹{(item.originalPrice - item.price).toLocaleString()}
// // // // //           </p>
// // // // //         </div>

// // // // //         {/* X BUTTON */}
// // // // //         <button className="absolute top-2 right-2 text-gray-400 hover:text-red-500 transition">
// // // // //           <IoClose size={22} />
// // // // //         </button>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default CartItem;

// // // // import React from "react";
// // // // import { IoClose } from "react-icons/io5";

// // // // const CartItem = ({ item }) => {
// // // //   return (
// // // //     <div className="bg-white shadow-sm rounded-xl p-5 border border-gray-100 flex items-start justify-between gap-5">
// // // //       {/* LEFT SECTION */}
// // // //       <div className="flex gap-4">
// // // //         {/* Product Image */}
// // // //         <img
// // // //           src={item.image}
// // // //           alt={item.title}
// // // //           className="w-28 h-32 object-cover rounded-lg"
// // // //         />

// // // //         {/* Text Content */}
// // // //         <div className="flex flex-col gap-1">
// // // //           <h2 className="font-semibold text-lg text-dark">Saptrangi</h2>
// // // //           <p className="text-gray-600 text-sm">{item.title}</p>

// // // //           {/* Delivery */}
// // // //           <p className="flex items-center gap-1 text-sm mt-1 text-gray-700">
// // // //             <span className="text-green-600 text-lg">✔</span>
// // // //             Delivery by <span className="font-medium">28 Nov 2025</span>
// // // //           </p>

// // // //           {/* Size & Qty */}
// // // //           <div className="flex gap-3 mt-3">
// // // //             <button className="px-4 py-1.5 border border-gray-300 rounded-lg bg-gray-50 text-sm">
// // // //               Size : {item.size}
// // // //             </button>

// // // //             <button className="px-4 py-1.5 border border-gray-300 rounded-lg bg-gray-50 text-sm">
// // // //               Qty : {item.qty}
// // // //             </button>
// // // //           </div>
// // // //         </div>
// // // //       </div>

// // // //       {/* RIGHT SECTION */}
// // // //       <div className="flex flex-col items-end gap-1 min-w-[120px]">
// // // //         <button className="text-gray-400 hover:text-gray-600 text-xl mb-3">
// // // //           <IoClose />
// // // //         </button>

// // // //         <p className="text-[22px] font-bold text-gray-900 leading-none">
// // // //           ₹{item.price.toLocaleString()}
// // // //         </p>

// // // //         <p className="text-[14px] text-gray-400 line-through -mt-1">
// // // //           ₹{item.originalPrice.toLocaleString()}
// // // //         </p>

// // // //         <p className="text-green-600 text-[14px] font-semibold mt-1">
// // // //           You saved ₹{(item.originalPrice - item.price).toLocaleString()}
// // // //         </p>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default CartItem;

// // // import { IoClose } from "react-icons/io5";

// // // const CartItem = ({ item }) => {
// // //   return (
// // //     <div className="w-full bg-white rounded-xl border border-gray-200 shadow-sm p-5 flex items-start gap-5">
// // //       {/* IMAGE */}
// // //       <div className="w-[120px] h-[150px] overflow-hidden rounded-lg border">
// // //         <img
// // //           src={item.image}
// // //           alt={item.title}
// // //           className="w-full h-full object-cover"
// // //         />
// // //       </div>

// // //       {/* MIDDLE CONTENT */}
// // //       <div className="flex-1 flex flex-col gap-2">
// // //         <h2 className="text-lg font-semibold text-gray-900">{item.brand}</h2>
// // //         <p className="text-gray-600 text-[15px] -mt-1">{item.title}</p>

// // //         {/* DELIVERY */}
// // //         <p className="flex items-center text-sm text-gray-700 gap-1 mt-1">
// // //           <span className="text-green-600 text-lg">✔</span>
// // //           Delivery by <span className="font-semibold">{item.deliveryDate}</span>
// // //         </p>

// // //         {/* SIZE + QTY */}
// // //         <div className="flex items-center gap-3 mt-3">
// // //           <div className="border px-4 py-2 rounded-lg bg-gray-50 text-gray-700 text-sm">
// // //             Size : {item.size}
// // //           </div>

// // //           <div className="border px-4 py-2 rounded-lg bg-gray-50 text-gray-700 text-sm">
// // //             Qty : {item.qty}
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* RIGHT PRICE BLOCK */}
// // //       <div className="flex flex-col items-end gap-1 min-w-[120px]">
// // //         <button className="text-gray-400 hover:text-gray-600 text-xl -mt-1">
// // //           <IoClose />
// // //         </button>

// // //         <p className="text-[22px] font-bold text-gray-900 leading-none">
// // //           ₹{item.price.toLocaleString()}
// // //         </p>

// // //         <p className="text-sm text-gray-400 line-through -mt-[2px]">
// // //           ₹{item.originalPrice.toLocaleString()}
// // //         </p>

// // //         <p className="text-green-600 text-sm font-medium mt-[2px]">
// // //           You saved ₹{(item.originalPrice - item.price).toLocaleString()}
// // //         </p>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default CartItem;

// // import { X } from "lucide-react";

// // const CartItem = ({ item }) => {
// //   return (
// //     <div
// //       className="
// //       w-full bg-white rounded-xl border shadow-sm
// //       p-5 flex items-start gap-4 relative
// //     "
// //     >
// //       {/* Remove Button (top-right) */}
// //       <button className="absolute top-5 right-5 text-gray-500 hover:text-gray-700">
// //         <X size={20} />
// //       </button>
// //       {/* Left Image */}
// //       <div className="w-[110px] h-[140px] rounded-md overflow-hidden border">
// //         <img
// //           src={item.image}
// //           className="w-full h-full object-cover"
// //           alt={item.title}
// //         />
// //       </div>
// //       {/* Middle Text Content */}
// //       <div className="flex-1 flex flex-col">
// //         {/* BRAND */}
// //         <h3 className="text-base font-semibold text-gray-900 leading-tight">
// //           {item.brand}
// //         </h3>

// //         {/* TITLE */}
// //         <p className="text-sm text-gray-600 mt-1 leading-tight">{item.title}</p>

// //         {/* Delivery Row */}
// //         <div className="flex items-center gap-2 mt-2">
// //           <span className="text-green-600 text-lg leading-none">✔</span>
// //           <span className="text-gray-700 text-sm leading-none">
// //             Delivery by{" "}
// //             <span className="font-semibold">{item.deliveryDate}</span>
// //           </span>
// //         </div>

// //         {/* Size + Qty Row */}
// //         <div className="flex gap-3 mt-4">
// //           <div className="px-4 py-1.5 bg-gray-100 text-sm border rounded-md">
// //             Size : <span className="font-medium">{item.size}</span>
// //           </div>

// //           <div className="px-4 py-1.5 bg-gray-100 text-sm border rounded-md">
// //             Qty : <span className="font-medium">{item.qty}</span>
// //           </div>
// //         </div>
// //       </div>
// //       {/* Price Column (Right) */}
// //       <div className="flex flex-col items-end justify-center min-w-[130px] mt-2">
// //         <p className="text-[22px] font-bold text-[#1a1a1a] leading-none">
// //           ₹{item.price}
// //         </p>

// //         <p className="text-[15px] text-gray-500 line-through leading-none mt-1">
// //           ₹{item.originalPrice}
// //         </p>

// //         <p className="text-[15px] text-green-600 font-medium mt-2 leading-none">
// //           You saved ₹{item.saved}
// //         </p>
// //       </div>
// //     </div>
// //   );
// // };

// // export default CartItem;

// // import { X } from "lucide-react";

// // const CartItem = ({ item }) => {
// //   return (
// //     <div
// //       className="
// //       w-full bg-white rounded-xl shadow-sm border
// //       p-5 flex items-start gap-4 relative
// //     "
// //     >
// //       {/* Remove Item Button */}
// //       <button className="absolute top-5 right-5 text-gray-500 hover:text-gray-700">
// //         <X size={20} />
// //       </button>

// //       {/* Product Image */}
// //       <div className="w-[120px] h-[150px] rounded-lg overflow-hidden">
// //         <img
// //           src={item.image}
// //           className="w-full h-full object-cover"
// //           alt={item.title}
// //         />
// //       </div>

// //       {/* Middle Section */}
// //       <div className="flex-1 flex flex-col gap-1">
// //         <h3 className="text-[18px] font-semibold text-[#1a1a1a]">
// //           {item.brand}
// //         </h3>

// //         <p className="text-gray-600 text-sm">{item.title}</p>

// //         <div className="flex items-center gap-2 mt-2">
// //           <span className="text-green-600 text-lg">✔</span>
// //           <span className="text-gray-700 text-sm">
// //             Delivery by{" "}
// //             <span className="font-semibold">{item.deliveryDate}</span>
// //           </span>
// //         </div>

// //         <div className="flex gap-3 mt-3">
// //           <div className="px-4 py-2 bg-gray-100 rounded-md text-sm text-gray-700 border">
// //             Size : <span className="font-medium">{item.size}</span>
// //           </div>
// //           <div className="px-4 py-2 bg-gray-100 rounded-md text-sm text-gray-700 border">
// //             Qty : <span className="font-medium">{item.qty}</span>
// //           </div>
// //         </div>
// //       </div>

// //       {/* RIGHT PRICE SECTION — FINAL FIXED */}
// //       <div className="flex flex-col items-end mt-auto pr-1">
// //         <p className="text-[22px] font-bold text-[#1a1a1a] leading-none">
// //           ₹{item.price.toLocaleString("en-IN")}
// //         </p>

// //         <p className="text-[14px] text-[#9ca3af] line-through -mt-1">
// //           ₹{item.originalPrice.toLocaleString("en-IN")}
// //         </p>

// //         <p className="text-[15px] text-[#16a34a] font-medium mt-1">
// //           You saved ₹{item.saved.toLocaleString("en-IN")}
// //         </p>
// //       </div>
// //     </div>
// //   );
// // };

// // export default CartItem;

// import { useState } from "react";
// import { X } from "lucide-react";
// import SizeModal from "./SizeModal";
// import QtyModal from "./QtyModal";

// const CartItem = ({ item }) => {
//   const [sizeModal, setSizeModal] = useState(false);
//   const [qtyModal, setQtyModal] = useState(false);

//   // local size & qty (later connect to Cart Context / Redux)
//   const [size, setSize] = useState(item.size);
//   const [qty, setQty] = useState(item.qty);

//   return (
//     <>
//       {/* SIZE MODAL */}
//       <SizeModal
//         open={sizeModal}
//         currentSize={size}
//         onClose={() => setSizeModal(false)}
//         onUpdate={(val) => setSize(val)}
//       />

//       {/* QTY MODAL */}
//       <QtyModal
//         open={qtyModal}
//         currentQty={qty}
//         onClose={() => setQtyModal(false)}
//         onUpdate={(val) => setQty(val)}
//       />

//       {/* Main Card */}
//       <div
//         className="
//         w-full bg-white rounded-xl shadow-sm border
//         p-5 flex items-start gap-4 relative
//       "
//       >
//         {/* Remove Button */}
//         <button className="absolute top-5 right-5 text-gray-500 hover:text-gray-700">
//           <X size={20} />
//         </button>

//         {/* Image */}
//         <div className="w-[120px] h-[150px] rounded-lg overflow-hidden">
//           <img
//             src={item.image}
//             className="w-full h-full object-cover"
//             alt={item.title}
//           />
//         </div>

//         {/* Middle Section */}
//         <div className="flex-1 flex flex-col gap-1">
//           <h3 className="text-[18px] font-semibold text-[#1a1a1a]">
//             {item.brand}
//           </h3>

//           <p className="text-gray-600 text-sm">{item.title}</p>

//           {/* Delivery */}
//           <div className="flex items-center gap-2 mt-2">
//             <span className="text-green-600 text-lg">✔</span>
//             <span className="text-gray-700 text-sm">
//               Delivery by{" "}
//               <span className="font-semibold">{item.deliveryDate}</span>
//             </span>
//           </div>

//           {/* Size + Qty Buttons (clickable) */}
//           <div className="flex gap-3 mt-3">
//             <button
//               onClick={() => setSizeModal(true)}
//               className="px-4 py-2 bg-gray-100 rounded-md text-sm text-gray-700 border flex items-center gap-1"
//             >
//               Size : <span className="font-medium">{size}</span> ▼
//             </button>

//             <button
//               onClick={() => setQtyModal(true)}
//               className="px-4 py-2 bg-gray-100 rounded-md text-sm text-gray-700 border flex items-center gap-1"
//             >
//               Qty : <span className="font-medium">{qty}</span> ▼
//             </button>
//           </div>
//         </div>

//         {/* PRICE SECTION */}
//         <div className="flex flex-col items-end mt-auto pr-1">
//           <p className="text-[22px] font-bold text-[#1a1a1a] leading-none">
//             ₹{item.price.toLocaleString("en-IN")}
//           </p>

//           <p className="text-[14px] text-[#9ca3af] line-through -mt-1">
//             ₹{item.originalPrice.toLocaleString("en-IN")}
//           </p>

//           <p className="text-[15px] text-[#16a34a] font-medium mt-1">
//             You saved ₹{item.saved.toLocaleString("en-IN")}
//           </p>
//         </div>
//       </div>
//     </>
//   );
// };

// export default CartItem;

// import { useState } from "react";
// import { X } from "lucide-react";
// import SizeModal from "./SizeModal";
// import QtyModal from "./QtyModal";

// const CartItem = ({ item }) => {
//   const [sizeModal, setSizeModal] = useState(false);
//   const [qtyModal, setQtyModal] = useState(false);

//   const [size, setSize] = useState(item.size);
//   const [qty, setQty] = useState(item.qty);

//   return (
//     <>
//       {/* SIZE MODAL */}
//       <SizeModal
//         open={sizeModal}
//         currentSize={size}
//         onClose={() => setSizeModal(false)}
//         onUpdate={(val) => setSize(val)}
//       />

//       {/* QTY MODAL */}
//       <QtyModal
//         open={qtyModal}
//         currentQty={qty}
//         onClose={() => setQtyModal(false)}
//         onUpdate={(val) => setQty(val)}
//       />

//       {/* Main Card */}
//       <div
//         className="
//         w-full bg-white rounded-xl shadow-sm border
//         p-5 flex items-start gap-4 relative
//       "
//       >
//         {/* Remove Button */}
//         <button className="absolute top-5 right-5 text-gray-500 hover:text-gray-700">
//           <X size={20} />
//         </button>

//         {/* Image */}
//         <div className="w-[120px] h-[150px] rounded-lg overflow-hidden">
//           <img
//             src={item.image}
//             className="w-full h-full object-cover"
//             alt={item.title}
//           />
//         </div>

//         {/* Middle Section */}
//         <div className="flex-1 flex flex-col gap-1">
//           <h3 className="text-[18px] font-semibold text-[#1a1a1a]">
//             {item.brand}
//           </h3>

//           <p className="text-gray-600 text-sm">{item.title}</p>

//           {/* Delivery */}
//           <div className="flex items-center gap-2 mt-2">
//             <span className="text-green-600 text-lg">✔</span>
//             <span className="text-gray-700 text-sm">
//               Delivery by{" "}
//               <span className="font-semibold">{item.deliveryDate}</span>
//             </span>
//           </div>

//           {/* Size + Qty Buttons */}
//           <div className="flex gap-3 mt-3">
//             <button
//               onClick={() => setSizeModal(true)}
//               className="px-4 py-2 bg-gray-100 rounded-md text-sm text-gray-700 border flex items-center gap-1"
//             >
//               Size : <span className="font-medium">{size}</span>
//               <span className="chevron-down"></span>
//             </button>

//             <button
//               onClick={() => setQtyModal(true)}
//               className="px-4 py-2 bg-gray-100 rounded-md text-sm text-gray-700 border flex items-center gap-1"
//             >
//               Qty : <span className="font-medium">{qty}</span>
//               <span className="chevron-down"></span>
//             </button>
//           </div>
//         </div>

//         {/* PRICE SECTION */}
//         <div className="flex flex-col items-end mt-auto pr-1">
//           <p className="text-[22px] font-bold text-[#1a1a1a] leading-none">
//             ₹{item.price.toLocaleString("en-IN")}
//           </p>

//           <p className="text-[14px] text-[#9ca3af] line-through -mt-1">
//             ₹{item.originalPrice.toLocaleString("en-IN")}
//           </p>

//           <p className="text-[15px] text-[#16a34a] font-medium mt-1">
//             You saved ₹{item.saved.toLocaleString("en-IN")}
//           </p>
//         </div>
//       </div>
//     </>
//   );
// };

// export default CartItem;

import { useState } from "react";
import { X } from "lucide-react";
import SizeModal from "./SizeModal";
import QtyModal from "./QtyModal";
import RemoveConfirmModal from "./RemoveConfirmModal";
import { useCart } from "../../../context/CartContext";

const CartItem = ({ item }) => {
  const [sizeModal, setSizeModal] = useState(false);
  const [qtyModal, setQtyModal] = useState(false);
  const [removeModal, setRemoveModal] = useState(false);

  const [size, setSize] = useState(item.size);
  const [qty, setQty] = useState(item.qty);

  const { updateItem, removeItem } = useCart();

  return (
    <>
      {/* REMOVE CONFIRM MODAL */}
      <RemoveConfirmModal
        open={removeModal}
        item={item}
        onClose={() => setRemoveModal(false)}
        onConfirm={() => {
          removeItem(item.id, item.size);
          setRemoveModal(false);
        }}
      />

      {/* SIZE MODAL */}
      <SizeModal
        open={sizeModal}
        currentSize={size}
        onClose={() => setSizeModal(false)}
        onUpdate={(val) => {
          setSize(val);
          updateItem(item.id, item.size, { size: val });
        }}
      />

      {/* QTY MODAL */}
      <QtyModal
        open={qtyModal}
        currentQty={qty}
        onClose={() => setQtyModal(false)}
        onUpdate={(val) => {
          setQty(val);
          updateItem(item.id, item.size, { qty: val });
        }}
      />

      {/* Main Card */}
      <div className="w-full bg-white rounded-xl shadow-sm border p-5 flex items-start gap-4 relative">
        {/* Remove Button */}
        <button
          className="absolute top-5 right-5 text-gray-500 hover:text-gray-700"
          onClick={() => setRemoveModal(true)}
        >
          <X size={20} />
        </button>

        {/* Image */}
        <div className="w-[120px] h-[150px] rounded-lg overflow-hidden bg-gray-50">
          <img
            src={item.image}
            className="w-full h-full object-cover"
            alt={item.title}
          />
        </div>

        {/* Middle Section */}
        <div className="flex-1 flex flex-col gap-1">
          <h3 className="text-[18px] font-semibold text-[#1a1a1a]">
            {item.brand}
          </h3>

          <p className="text-gray-600 text-sm">{item.title}</p>

          {/* Delivery */}
          <div className="flex items-center gap-2 mt-2">
            <span className="text-green-600 text-lg">✔</span>
            <span className="text-gray-700 text-sm">
              Delivery by{" "}
              <span className="font-semibold">{item.deliveryDate}</span>
            </span>
          </div>

          {/* Size + Qty Buttons */}
          <div className="flex gap-3 mt-3">
            <button
              onClick={() => setSizeModal(true)}
              className="px-4 py-2 bg-gray-100 rounded-md text-sm text-gray-700 border flex items-center gap-1"
            >
              Size: <span className="font-medium">{size}</span>
            </button>

            <button
              onClick={() => setQtyModal(true)}
              className="px-4 py-2 bg-gray-100 rounded-md text-sm text-gray-700 border flex items-center gap-1"
            >
              Qty: <span className="font-medium">{qty}</span>
            </button>
          </div>
        </div>

        {/* PRICE SECTION */}
        <div className="flex flex-col items-end mt-auto pr-1">
          <p className="text-[22px] font-bold text-[#1a1a1a] leading-none">
            ₹{item.price.toLocaleString("en-IN")}
          </p>

          <p className="text-[14px] text-[#9ca3af] line-through -mt-1">
            ₹{item.originalPrice.toLocaleString("en-IN")}
          </p>

          <p className="text-[15px] text-[#16a34a] font-medium mt-1">
            You saved ₹{item.saved.toLocaleString("en-IN")}
          </p>
        </div>
      </div>
    </>
  );
};

export default CartItem;
