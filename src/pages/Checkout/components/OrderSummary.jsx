// // // import React, { useMemo, useState } from "react";
// // // import { useCart } from "../../../context/CartContext";

// // // import DeliverToBox from "./DeliverToBox";
// // // import CartItemsList from "./CartItemsList";

// // // const OrderSummary = ({ cart: propCart }) => {
// // //   const { cart: ctxCart } = useCart();
// // //   const cart = propCart ?? ctxCart;

// // //   const [openSummary, setOpenSummary] = useState(true);

// // //   const totals = useMemo(() => {
// // //     const totalPrice = cart.reduce(
// // //       (s, i) => s + (i.price || 0) * (i.qty || 1),
// // //       0
// // //     );
// // //     const totalMRP = cart.reduce(
// // //       (s, i) => s + (i.originalPrice || i.price || 0) * (i.qty || 1),
// // //       0
// // //     );
// // //     const discount = totalMRP - totalPrice;
// // //     return { totalPrice, totalMRP, discount };
// // //   }, [cart]);

// // //   return (
// // //     <div className="space-y-4">
// // //       {/* Deliver To Box */}
// // //       <DeliverToBox />

// // //       {/* Cart Items List */}
// // //       <CartItemsList cart={cart} />

// // //       {/* Price Summary */}
// // //       <div className="bg-white border rounded-lg">
// // //         <button
// // //           onClick={() => setOpenSummary((v) => !v)}
// // //           className="w-full text-left px-4 py-3 flex justify-between items-center"
// // //         >
// // //           <span className="font-semibold">Price Summary</span>
// // //           <span>₹{totals.totalPrice.toLocaleString("en-IN")}</span>
// // //         </button>

// // //         {openSummary && (
// // //           <div className="p-4 border-t space-y-3 text-sm">
// // //             <div className="flex justify-between">
// // //               <span>Total MRP (Incl. of taxes)</span>
// // //               <span>₹{totals.totalMRP.toLocaleString("en-IN")}</span>
// // //             </div>

// // //             <div className="flex justify-between text-green-600">
// // //               <span>Bag Discount (Incl. of GST Benefit)</span>
// // //               <span>-₹{totals.discount.toLocaleString("en-IN")}</span>
// // //             </div>

// // //             <div className="flex justify-between">
// // //               <span>Delivery Fee</span>
// // //               <span className="text-green-600">Free</span>
// // //             </div>

// // //             <hr />

// // //             <div className="flex justify-between font-semibold">
// // //               <span>Total</span>
// // //               <span>₹{totals.totalPrice.toLocaleString("en-IN")}</span>
// // //             </div>
// // //           </div>
// // //         )}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default OrderSummary;

// // import React, { useMemo, useState } from "react";
// // import { useCart } from "../../../context/CartContext";

// // import DeliverToBox from "./DeliverToBox";
// // import CartItemsList from "./CartItemsList";

// // const OrderSummary = ({ cart: propCart }) => {
// //   const { cart: ctxCart } = useCart();
// //   const cart = propCart ?? ctxCart;

// //   const [openSummary, setOpenSummary] = useState(true);

// //   // =========================
// //   // PRICE CALCULATION (FIXED)
// //   // =========================
// //   const totals = useMemo(() => {
// //     const totalPrice = cart.reduce(
// //       (sum, item) =>
// //         sum + (item.product_details?.price || 0) * (item.quantity || 1),
// //       0
// //     );

// //     const totalMRP = cart.reduce(
// //       (sum, item) =>
// //         sum +
// //         (item.product_details?.mrp || item.product_details?.price || 0) *
// //           (item.quantity || 1),
// //       0
// //     );

// //     const discount = totalMRP - totalPrice;

// //     return { totalPrice, totalMRP, discount };
// //   }, [cart]);

// //   return (
// //     <div className="space-y-4">
// //       {/* Deliver To */}
// //       <DeliverToBox />

// //       {/* Items */}
// //       <CartItemsList cart={cart} />

// //       {/* Price Summary */}
// //       <div className="bg-white border rounded-lg">
// //         <button
// //           onClick={() => setOpenSummary((v) => !v)}
// //           className="w-full text-left px-4 py-3 flex justify-between items-center"
// //         >
// //           <span className="font-semibold">Price Summary</span>
// //           <span>₹{totals.totalPrice.toLocaleString("en-IN")}</span>
// //         </button>

// //         {openSummary && (
// //           <div className="p-4 border-t space-y-3 text-sm">
// //             <div className="flex justify-between">
// //               <span>Total MRP (Incl. of taxes)</span>
// //               <span>₹{totals.totalMRP.toLocaleString("en-IN")}</span>
// //             </div>

// //             <div className="flex justify-between text-green-600">
// //               <span>Bag Discount (Incl. of GST Benefit)</span>
// //               <span>-₹{totals.discount.toLocaleString("en-IN")}</span>
// //             </div>

// //             <div className="flex justify-between">
// //               <span>Delivery Fee</span>
// //               <span className="text-green-600">Free</span>
// //             </div>

// //             <hr />

// //             <div className="flex justify-between font-semibold">
// //               <span>Total</span>
// //               <span>₹{totals.totalPrice.toLocaleString("en-IN")}</span>
// //             </div>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default OrderSummary;

// import React, { useMemo, useState } from "react";
// import DeliverToBox from "./DeliverToBox";
// import CartItemsList from "./CartItemsList";

// const OrderSummary = ({ cart }) => {
//   const [openSummary, setOpenSummary] = useState(true);

//   const totals = useMemo(() => {
//     const totalPrice = cart.reduce(
//       (sum, item) => sum + (item.price || 0) * (item.quantity || 1),
//       0
//     );

//     const totalMRP = cart.reduce(
//       (sum, item) => sum + (item.mrp || item.price || 0) * (item.quantity || 1),
//       0
//     );

//     const discount = totalMRP - totalPrice;

//     return { totalPrice, totalMRP, discount };
//   }, [cart]);

//   return (
//     <div className="space-y-4">
//       {/* Deliver To */}
//       <DeliverToBox />

//       {/* Items */}
//       <CartItemsList cart={cart} />

//       {/* Price Summary */}
//       <div className="bg-white border rounded-lg">
//         <button
//           onClick={() => setOpenSummary((v) => !v)}
//           className="w-full text-left px-4 py-3 flex justify-between items-center"
//         >
//           <span className="font-semibold">Price Summary</span>
//           <span>₹{totals.totalPrice.toLocaleString("en-IN")}</span>
//         </button>

//         {openSummary && (
//           <div className="p-4 border-t space-y-3 text-sm">
//             <div className="flex justify-between">
//               <span>Total MRP (Incl. of taxes)</span>
//               <span>₹{totals.totalMRP.toLocaleString("en-IN")}</span>
//             </div>

//             <div className="flex justify-between text-green-600">
//               <span>Bag Discount (Incl. of GST Benefit)</span>
//               <span>-₹{totals.discount.toLocaleString("en-IN")}</span>
//             </div>

//             <div className="flex justify-between">
//               <span>Delivery Fee</span>
//               <span className="text-green-600">Free</span>
//             </div>

//             <hr />

//             <div className="flex justify-between font-semibold">
//               <span>Total</span>
//               <span>₹{totals.totalPrice.toLocaleString("en-IN")}</span>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default OrderSummary;

import React, { useMemo } from "react";
import DeliverToBox from "./DeliverToBox";
import CartItemsList from "./CartItemsList";

const OrderSummary = ({ cart, onPay, loading }) => {
  const totals = useMemo(() => {
    const totalPrice = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    const totalMRP = cart.reduce(
      (sum, item) => sum + (item.mrp || item.price) * item.quantity,
      0
    );
    return { totalPrice, totalMRP, discount: totalMRP - totalPrice };
  }, [cart]);

  return (
    <div className="space-y-4">
      <DeliverToBox />

      <CartItemsList cart={cart} />

      <div className="bg-white border rounded-lg p-4 space-y-3 text-sm">
        <div className="flex justify-between">
          <span>Total MRP</span>
          <span>₹{totals.totalMRP}</span>
        </div>
        <div className="flex justify-between text-green-600">
          <span>Discount</span>
          <span>-₹{totals.discount}</span>
        </div>
        <div className="flex justify-between">
          <span>Delivery</span>
          <span className="text-green-600">FREE</span>
        </div>

        <hr />

        <div className="flex justify-between font-semibold text-base">
          <span>Total</span>
          <span>₹{totals.totalPrice}</span>
        </div>

        <button
          onClick={onPay}
          disabled={loading}
          className="w-full mt-4 bg-primary text-white py-3 rounded-lg font-semibold disabled:opacity-50"
        >
          {loading ? "Processing..." : `Pay ₹${totals.totalPrice}`}
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;
