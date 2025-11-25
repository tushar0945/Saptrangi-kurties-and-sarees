// // import { useCart } from "../../../context/CartContext";

// // const OrderSummary = () => {
// //   const { cart } = useCart();

// //   const totalMRP = cart.reduce((acc, item) => acc + item.originalPrice, 0);
// //   const discount = cart.reduce((acc, item) => acc + item.saved, 0);
// //   const finalPrice = totalMRP - discount;

// //   return (
// //     <div className="bg-white rounded-xl shadow p-5 border">
// //       <h2 className="text-xl font-semibold mb-4">Price Summary</h2>

// //       <div className="flex justify-between mb-2">
// //         <span>Total MRP</span>
// //         <span>₹{totalMRP}</span>
// //       </div>

// //       <div className="flex justify-between mb-2 text-green-600">
// //         <span>Bag Discount</span>
// //         <span>-₹{discount}</span>
// //       </div>

// //       <div className="flex justify-between mb-4">
// //         <span>Delivery Fee</span>
// //         <span className="text-green-600">Free</span>
// //       </div>

// //       <div className="flex justify-between text-xl font-bold border-t pt-3">
// //         <span>Total</span>
// //         <span>₹{finalPrice}</span>
// //       </div>
// //     </div>
// //   );
// // };

// // export default OrderSummary;

// import React, { useMemo, useState } from "react";
// import { useCart } from "../../../context/CartContext";

// const OrderSummary = ({ cart: propCart }) => {
//   const { cart: ctxCart } = useCart();
//   const cart = propCart ?? ctxCart;

//   const totals = useMemo(() => {
//     const totalPrice = cart.reduce(
//       (s, i) => s + (i.price || 0) * (i.qty || 1),
//       0
//     );
//     const totalMRP = cart.reduce(
//       (s, i) => s + (i.originalPrice || i.price || 0) * (i.qty || 1),
//       0
//     );
//     const discount = totalMRP - totalPrice;
//     return { totalPrice, totalMRP, discount };
//   }, [cart]);

//   const [openItems, setOpenItems] = useState(true);
//   const [openSummary, setOpenSummary] = useState(true);

//   return (
//     <div className="space-y-4">
//       {/* Deliver To box (static for now) */}
//       <div className="bg-white border rounded-lg p-4">
//         <div className="flex justify-between items-start">
//           <div>
//             <p className="text-sm text-gray-600">Delivering order to</p>
//             <p className="font-semibold">Your Address Label</p>
//             <p className="text-sm text-gray-600">City, State, PIN</p>
//           </div>
//           <button className="text-sm text-primary">CHANGE</button>
//         </div>
//       </div>

//       {/* Items */}
//       <div className="bg-white border rounded-lg">
//         <button
//           onClick={() => setOpenItems((v) => !v)}
//           className="w-full text-left px-4 py-3 flex justify-between items-center"
//         >
//           <span className="font-semibold">Item ({cart.length})</span>
//           <span>{openItems ? "▴" : "▾"}</span>
//         </button>

//         {openItems && (
//           <div className="p-4 border-t space-y-3">
//             {cart.map((item) => (
//               <div
//                 key={item.id + item.size}
//                 className="flex gap-3 items-center"
//               >
//                 <img
//                   src={item.image}
//                   className="w-14 h-14 rounded object-cover"
//                   alt={item.title}
//                 />
//                 <div className="flex-1">
//                   <div className="text-sm text-gray-700">{item.title}</div>
//                   <div className="text-xs text-green-600 mt-1">
//                     Delivery by {item.deliveryDate}
//                   </div>
//                 </div>
//                 <div className="text-right text-sm">
//                   ₹{(item.price || 0).toLocaleString("en-IN")}
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>

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

import React, { useMemo, useState } from "react";
import { useCart } from "../../../context/CartContext";

import DeliverToBox from "./DeliverToBox";
import CartItemsList from "./CartItemsList";

const OrderSummary = ({ cart: propCart }) => {
  const { cart: ctxCart } = useCart();
  const cart = propCart ?? ctxCart;

  const [openSummary, setOpenSummary] = useState(true);

  const totals = useMemo(() => {
    const totalPrice = cart.reduce(
      (s, i) => s + (i.price || 0) * (i.qty || 1),
      0
    );
    const totalMRP = cart.reduce(
      (s, i) => s + (i.originalPrice || i.price || 0) * (i.qty || 1),
      0
    );
    const discount = totalMRP - totalPrice;
    return { totalPrice, totalMRP, discount };
  }, [cart]);

  return (
    <div className="space-y-4">
      {/* Deliver To Box */}
      <DeliverToBox />

      {/* Cart Items List */}
      <CartItemsList cart={cart} />

      {/* Price Summary */}
      <div className="bg-white border rounded-lg">
        <button
          onClick={() => setOpenSummary((v) => !v)}
          className="w-full text-left px-4 py-3 flex justify-between items-center"
        >
          <span className="font-semibold">Price Summary</span>
          <span>₹{totals.totalPrice.toLocaleString("en-IN")}</span>
        </button>

        {openSummary && (
          <div className="p-4 border-t space-y-3 text-sm">
            <div className="flex justify-between">
              <span>Total MRP (Incl. of taxes)</span>
              <span>₹{totals.totalMRP.toLocaleString("en-IN")}</span>
            </div>

            <div className="flex justify-between text-green-600">
              <span>Bag Discount (Incl. of GST Benefit)</span>
              <span>-₹{totals.discount.toLocaleString("en-IN")}</span>
            </div>

            <div className="flex justify-between">
              <span>Delivery Fee</span>
              <span className="text-green-600">Free</span>
            </div>

            <hr />

            <div className="flex justify-between font-semibold">
              <span>Total</span>
              <span>₹{totals.totalPrice.toLocaleString("en-IN")}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderSummary;
