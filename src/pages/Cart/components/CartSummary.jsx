// import React, { useState, useRef } from "react";
// import { IoChevronUp, IoChevronDown } from "react-icons/io5";
// import { Link } from "react-router-dom";

// const CartSummary = ({ cartItems }) => {
//   const [open, setOpen] = useState(false);
//   const contentRef = useRef(null);

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

//   return (
//     <div className="border rounded-xl p-5 shadow-sm bg-white transition-all duration-300 ease-out">
//       {/* ---------- HEADER ---------- */}
//       <div
//         className="flex justify-between items-center cursor-pointer"
//         onClick={() => setOpen(!open)}
//       >
//         <h2 className="text-lg font-semibold">Price Summary</h2>

//         <div className="flex items-center gap-2">
//           <p className="font-semibold text-dark">
//             ₹{finalAmount.toLocaleString()}
//           </p>

//           {/* Smooth arrow rotation */}
//           <span
//             className={`transition-transform duration-300 ${
//               open ? "rotate-180" : "rotate-0"
//             }`}
//           >
//             <IoChevronUp className="text-xl" />
//           </span>
//         </div>
//       </div>

//       {/* ---------- SMOOTH COLLAPSE SECTION ---------- */}
//       <div
//         ref={contentRef}
//         style={{
//           maxHeight: open ? contentRef.current?.scrollHeight : 0,
//         }}
//         className="overflow-hidden transition-all duration-500 ease-in-out"
//       >
//         <div className="mt-4 space-y-3 text-[15px] opacity-100 transition-opacity duration-300">
//           {/* Total MRP */}
//           <div className="flex justify-between">
//             <span>Total MRP (Incl. of taxes)</span>
//             <span className="font-medium text-dark">
//               ₹{totalMRP.toLocaleString()}
//             </span>
//           </div>

//           {/* Discount */}
//           <div className="flex justify-between">
//             <span>Bag Discount (Incl. of GST Benefit)</span>
//             <span className="font-medium text-green-600">
//               –₹{bagDiscount.toLocaleString()}
//             </span>
//           </div>

//           {/* Delivery Fee */}
//           <div className="flex justify-between">
//             <span>Delivery Fee</span>
//             <span className="font-medium text-green-600">Free</span>
//           </div>
//         </div>
//       </div>

//       {/* ---------- FREE DELIVERY STRIP ---------- */}
//       <div className="mt-4 bg-green-100 text-center py-2 rounded-md text-sm animate-fade-in">
//         Yayyy! You get{" "}
//         <span className="font-semibold text-green-600">FREE delivery</span> on
//         this order
//       </div>

//       {/* ---------- PROCEED BUTTON ---------- */}
//       {/* <button className="w-full bg-yellow-400 py-3 mt-5 rounded-lg font-semibold text-lg text-dark hover:bg-yellow-500 transition-all duration-300 active:scale-[0.98]">
//         PROCEED
//       </button> */}
//       <Link to="/checkout">
//         <button className="w-full bg-yellow-400 py-3 mt-5 rounded-lg font-semibold text-lg text-dark hover:bg-yellow-500 transition-all duration-300 active:scale-[0.98]">
//           PROCEED
//         </button>
//       </Link>
//     </div>
//   );
// };

// export default CartSummary;

import React, { useState, useRef } from "react";
import { IoChevronUp } from "react-icons/io5";
import { Link } from "react-router-dom";

const CartSummary = ({ cartItems = [] }) => {
  const [open, setOpen] = useState(false);
  const contentRef = useRef(null);

  // ===========================
  // 🧮 SAFE CALCULATIONS
  // ===========================
  const totalMRP = cartItems.reduce((acc, item) => {
    const product = item?.product_details || {};
    const qty = item?.quantity ?? 1;
    const mrp = product?.original_price ?? product?.price ?? 0;

    return acc + mrp * qty;
  }, 0);

  const totalSellingPrice = cartItems.reduce((acc, item) => {
    const product = item?.product_details || {};
    const qty = item?.quantity ?? 1;
    const selling = product?.discount_price ?? product?.price ?? 0;

    return acc + selling * qty;
  }, 0);

  const bagDiscount = totalMRP - totalSellingPrice;

  // ===========================
  // 🧾 UI
  // ===========================
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
            ₹{totalSellingPrice.toLocaleString("en-IN")}
          </p>

          <span
            className={`transition-transform duration-300 ${
              open ? "rotate-180" : "rotate-0"
            }`}
          >
            <IoChevronUp className="text-xl" />
          </span>
        </div>
      </div>

      {/* ---------- COLLAPSE SECTION ---------- */}
      <div
        ref={contentRef}
        style={{
          maxHeight: open ? contentRef.current?.scrollHeight : 0,
        }}
        className="overflow-hidden transition-all duration-500 ease-in-out"
      >
        <div className="mt-4 space-y-3 text-[15px]">
          {/* Total MRP */}
          <div className="flex justify-between">
            <span>Total MRP (Incl. of taxes)</span>
            <span className="font-medium text-dark">
              ₹{totalMRP.toLocaleString("en-IN")}
            </span>
          </div>

          {/* Discount */}
          <div className="flex justify-between">
            <span>Bag Discount</span>
            <span className="font-medium text-green-600">
              –₹{bagDiscount.toLocaleString("en-IN")}
            </span>
          </div>

          {/* Delivery Fee */}
          <div className="flex justify-between">
            <span>Delivery Fee</span>
            <span className="font-medium text-green-600">Free</span>
          </div>
        </div>
      </div>

      {/* ---------- FREE DELIVERY ---------- */}
      <div className="mt-4 bg-green-100 text-center py-2 rounded-md text-sm">
        Yayyy! You get{" "}
        <span className="font-semibold text-green-600">FREE shipping</span> on
        this order
      </div>

      {/* ---------- PROCEED ---------- */}
      <Link to="/checkout">
        <button className="w-full bg-primary py-3 mt-5 rounded-lg font-semibold text-lg text-white hover:bg-secondary transition-all active:scale-[0.98]">
          PROCEED
        </button>
      </Link>
    </div>
  );
};

export default CartSummary;
