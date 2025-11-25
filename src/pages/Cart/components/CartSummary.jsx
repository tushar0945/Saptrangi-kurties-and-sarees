// // // // import React from "react";

// // // // const CartSummary = ({ cartItems }) => {
// // // //   const subtotal = cartItems.reduce((sum, i) => sum + i.price * i.qty, 0);

// // // //   return (
// // // //     <div className="bg-white border shadow-sm rounded-xl p-5 h-fit sticky top-20">
// // // //       <h2 className="font-semibold text-lg mb-4">Price Summary</h2>

// // // //       <div className="flex justify-between mb-2 text-gray-600">
// // // //         <span>Total MRP</span>
// // // //         <span>₹{subtotal}</span>
// // // //       </div>

// // // //       <div className="flex justify-between mb-2 text-primary">
// // // //         <span>Shipping</span>
// // // //         <span>FREE</span>
// // // //       </div>

// // // //       <div className="border-t my-3"></div>

// // // //       <div className="flex justify-between font-semibold text-lg">
// // // //         <span>Total</span>
// // // //         <span>₹{subtotal}</span>
// // // //       </div>

// // // //       <button className="mt-5 w-full bg-primary text-white py-3 rounded-xl font-semibold hover:bg-secondary">
// // // //         PROCEED
// // // //       </button>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default CartSummary;

// // // import React from "react";
// // // import { ChevronDown } from "lucide-react";

// // // const CartSummary = ({ total }) => {
// // //   return (
// // //     <div className="bg-white border rounded-xl shadow-sm p-5">
// // //       {/* HEADER */}
// // //       <div className="flex items-center justify-between mb-3">
// // //         <h2 className="font-semibold text-lg text-gray-800">Price Summary</h2>
// // //         <ChevronDown size={20} className="text-gray-500" />
// // //       </div>

// // //       {/* PRICE TOTAL */}
// // //       <div className="flex justify-between text-gray-800 text-base mb-2">
// // //         <span>Total</span>
// // //         <span className="font-semibold">₹{total}</span>
// // //       </div>

// // //       {/* FREE DELIVERY BAR */}
// // //       <div className="mt-3 bg-[#eeffec] text-[#328427] text-sm py-2 px-3 rounded-md border border-[#d6f5d1]">
// // //         Yay! You get <span className="font-semibold">FREE delivery</span> on
// // //         this order
// // //       </div>

// // //       {/* PROCEED BUTTON */}
// // //       <button className="mt-6 w-full bg-[#fdd835] hover:bg-[#fbc02d] text-gray-900 py-3 rounded-lg font-semibold tracking-wide transition">
// // //         PROCEED
// // //       </button>

// // //       {/* ASSURANCE ICONS */}
// // //       <div className="flex justify-between items-center mt-7 text-center text-gray-600">
// // //         <div className="flex flex-col items-center gap-1 text-xs">
// // //           <img
// // //             src="https://images.bewakoof.com/web/quality.svg"
// // //             alt="Quality"
// // //             className="w-8 opacity-90"
// // //           />
// // //           QUALITY
// // //           <br />
// // //           ASSURANCE
// // //         </div>

// // //         <div className="flex flex-col items-center gap-1 text-xs">
// // //           <img
// // //             src="https://images.bewakoof.com/web/secuire-payments.svg"
// // //             alt="Payment"
// // //             className="w-8 opacity-90"
// // //           />
// // //           100% SECURE
// // //           <br />
// // //           PAYMENT
// // //         </div>

// // //         <div className="flex flex-col items-center gap-1 text-xs">
// // //           <img
// // //             src="https://images.bewakoof.com/web/Easy-Returns.svg"
// // //             alt="Returns"
// // //             className="w-8 opacity-90"
// // //           />
// // //           EASY RETURNS &<br />
// // //           INSTANT REFUNDS
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default CartSummary;

// // import React from "react";
// // import { ChevronUp } from "lucide-react";

// // const CartSummary = ({ mrp = 9897, discount = 5400, total = 4497 }) => {
// //   return (
// //     <div className="bg-white border rounded-xl shadow-sm p-5">
// //       {/* HEADER */}
// //       <div className="flex items-center justify-between mb-3">
// //         <h2 className="font-semibold text-lg text-gray-800">Price Summary</h2>
// //         <ChevronUp size={20} className="text-gray-500" />
// //       </div>

// //       {/* TOTAL */}
// //       <div className="flex justify-between text-gray-900 text-base mb-3">
// //         <span>Total</span>
// //         <span className="font-semibold text-xl">₹{total}</span>
// //       </div>

// //       <hr className="border-gray-200 mb-3" />

// //       {/* TOTAL MRP */}
// //       <div className="flex justify-between text-sm mb-2">
// //         <span className="text-gray-600">Total MRP (Incl. of taxes)</span>
// //         <span className="text-gray-700 font-medium">₹{mrp}</span>
// //       </div>

// //       {/* BAG DISCOUNT */}
// //       <div className="flex justify-between text-sm mb-2">
// //         <span className="text-gray-600">
// //           Bag Discount (Incl. of GST Benefit)
// //         </span>
// //         <span className="text-green-600 font-medium">-₹{discount}</span>
// //       </div>

// //       {/* DELIVERY FEE */}
// //       <div className="flex justify-between text-sm mb-2">
// //         <span className="text-gray-600">Delivery Fee</span>
// //         <span className="text-green-600 font-medium">Free</span>
// //       </div>

// //       {/* FREE DELIVERY BANNER */}
// //       <div className="mt-4 bg-[#EEFFEC] text-[#328427] text-sm py-2 px-3 rounded-md border border-[#D6F5D1] text-center">
// //         Yay! You get <span className="font-semibold">FREE delivery</span> on
// //         this order
// //       </div>

// //       {/* PROCEED BUTTON */}
// //       <button className="mt-5 w-full bg-[#FDD835] hover:bg-[#FBC02D] text-gray-900 py-3 rounded-lg font-semibold transition">
// //         PROCEED
// //       </button>
// //     </div>
// //   );
// // };

// // export default CartSummary;

// import React, { useState } from "react";
// import { IoChevronUp, IoChevronDown } from "react-icons/io5";

// const CartSummary = ({ cartItems }) => {
//   const [open, setOpen] = useState(true);

//   // calculate values
//   const totalMRP = cartItems.reduce(
//     (acc, item) => acc + item.originalPrice * item.qty,
//     0
//   );
//   const bagDiscount = cartItems.reduce(
//     (acc, item) => acc + (item.originalPrice - item.price) * item.qty,
//     0
//   );
//   const finalAmount = totalMRP - bagDiscount;
//   const deliveryFee = 0;

//   return (
//     <div className="border rounded-xl p-5 shadow-sm bg-white">
//       {/* Header */}
//       <div
//         className="flex justify-between items-center cursor-pointer"
//         onClick={() => setOpen(!open)}
//       >
//         <h2 className="text-lg font-semibold">Price Summary</h2>

//         <div className="flex items-center gap-2">
//           <p className="font-semibold text-dark">
//             ₹{finalAmount.toLocaleString()}
//           </p>
//           {open ? (
//             <IoChevronUp className="text-xl" />
//           ) : (
//             <IoChevronDown className="text-xl" />
//           )}
//         </div>
//       </div>

//       {/* Expandable Details */}
//       {open && (
//         <div className="mt-4 space-y-3 text-[15px]">
//           <div className="flex justify-between">
//             <span>Total MRP (Incl. of taxes)</span>
//             <span className="font-medium text-dark">
//               ₹{totalMRP.toLocaleString()}
//             </span>
//           </div>

//           <div className="flex justify-between">
//             <span>Bag Discount (Incl. of GST Benefit)</span>
//             <span className="font-medium text-green-600">
//               –₹{bagDiscount.toLocaleString()}
//             </span>
//           </div>

//           <div className="flex justify-between">
//             <span>Delivery Fee</span>
//             <span className="font-medium text-green-600">Free</span>
//           </div>
//         </div>
//       )}

//       {/* Free Delivery Strip */}
//       <div className="mt-4 bg-green-100 text-center py-2 rounded-md text-sm">
//         Yayyy! You get{" "}
//         <span className="font-semibold text-green-600">FREE delivery</span> on
//         this order
//       </div>

//       {/* Proceed Button */}
//       <button className="w-full bg-yellow-400 py-3 mt-5 rounded-lg font-semibold text-lg text-dark hover:bg-yellow-500 transition">
//         PROCEED
//       </button>
//     </div>
//   );
// };

// export default CartSummary;

import React, { useState, useRef } from "react";
import { IoChevronUp, IoChevronDown } from "react-icons/io5";
import { Link } from "react-router-dom";

const CartSummary = ({ cartItems }) => {
  const [open, setOpen] = useState(false);
  const contentRef = useRef(null);

  // calculate values
  const totalMRP = cartItems.reduce(
    (acc, item) => acc + item.originalPrice * item.qty,
    0
  );
  const bagDiscount = cartItems.reduce(
    (acc, item) => acc + (item.originalPrice - item.price) * item.qty,
    0
  );
  const finalAmount = totalMRP - bagDiscount;

  return (
    <div className="border rounded-xl p-5 shadow-sm bg-white transition-all duration-300 ease-out">
      {/* ---------- HEADER ---------- */}
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <h2 className="text-lg font-semibold">Price Summary</h2>

        <div className="flex items-center gap-2">
          <p className="font-semibold text-dark">
            ₹{finalAmount.toLocaleString()}
          </p>

          {/* Smooth arrow rotation */}
          <span
            className={`transition-transform duration-300 ${
              open ? "rotate-180" : "rotate-0"
            }`}
          >
            <IoChevronUp className="text-xl" />
          </span>
        </div>
      </div>

      {/* ---------- SMOOTH COLLAPSE SECTION ---------- */}
      <div
        ref={contentRef}
        style={{
          maxHeight: open ? contentRef.current?.scrollHeight : 0,
        }}
        className="overflow-hidden transition-all duration-500 ease-in-out"
      >
        <div className="mt-4 space-y-3 text-[15px] opacity-100 transition-opacity duration-300">
          {/* Total MRP */}
          <div className="flex justify-between">
            <span>Total MRP (Incl. of taxes)</span>
            <span className="font-medium text-dark">
              ₹{totalMRP.toLocaleString()}
            </span>
          </div>

          {/* Discount */}
          <div className="flex justify-between">
            <span>Bag Discount (Incl. of GST Benefit)</span>
            <span className="font-medium text-green-600">
              –₹{bagDiscount.toLocaleString()}
            </span>
          </div>

          {/* Delivery Fee */}
          <div className="flex justify-between">
            <span>Delivery Fee</span>
            <span className="font-medium text-green-600">Free</span>
          </div>
        </div>
      </div>

      {/* ---------- FREE DELIVERY STRIP ---------- */}
      <div className="mt-4 bg-green-100 text-center py-2 rounded-md text-sm animate-fade-in">
        Yayyy! You get{" "}
        <span className="font-semibold text-green-600">FREE delivery</span> on
        this order
      </div>

      {/* ---------- PROCEED BUTTON ---------- */}
      {/* <button className="w-full bg-yellow-400 py-3 mt-5 rounded-lg font-semibold text-lg text-dark hover:bg-yellow-500 transition-all duration-300 active:scale-[0.98]">
        PROCEED
      </button> */}
      <Link to="/checkout">
        <button className="w-full bg-yellow-400 py-3 mt-5 rounded-lg font-semibold text-lg text-dark hover:bg-yellow-500 transition-all duration-300 active:scale-[0.98]">
          PROCEED
        </button>
      </Link>
    </div>
  );
};

export default CartSummary;
