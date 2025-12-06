// import React from "react";
// import CartItem from "./components/CartItem";
// import CartSummary from "./components/CartSummary";
// import DeliveryPincodeBox from "./components/DeliveryPincodeBox";

// const CartPage = () => {
//   // 🔥 dummy cart items (later replace with context or redux)
//   const cartItems = [
//     {
//       id: 1,
//       title: "Peach Kurti",
//       price: 1299,
//       originalPrice: 1999,
//       size: "M",
//       qty: 1,
//       image: "/assets/peach-kurti.jpg",
//     },
//   ];

//   return (
//     <div className="max-w-[1200px] mx-auto px-4 lg:px-6 py-10">
//       <h1 className="text-2xl font-semibold mb-6">
//         My Bag ({cartItems.length})
//       </h1>

//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//         {/* LEFT = items */}
//         <div className="lg:col-span-2 flex flex-col gap-4">
//           {cartItems.map((item) => (
//             <CartItem key={item.id} item={item} />
//           ))}
//         </div>

//         {/* RIGHT = summary */}

//         <CartSummary cartItems={cartItems} />
//       </div>
//     </div>
//   );
// };

// export default CartPage;

// import React from "react";
// import CartItem from "./components/CartItem";
// import CartSummary from "./components/CartSummary";
// import DeliveryPincodeBox from "./components/DeliveryPincodeBox";
// import TrustBadges from "./components/TrustBadges";

// const CartPage = () => {
//   const cartItems = [
//     {
//       id: 1,
//       brand: "Saptrangi",
//       title: "Peach Kurti",
//       price: 1299,
//       originalPrice: 1999,
//       saved: 700,
//       deliveryDate: "28 Nov 2025",
//       size: "M",
//       qty: 1,
//       image: "./k1.webp",
//     },
//   ];

//   return (
//     <div className="max-w-[1200px] mx-auto px-4 lg:px-6 py-10">
//       <h1 className="text-2xl font-semibold mb-6">
//         My Bag ({cartItems.length})
//       </h1>

//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//         {/* LEFT → CART ITEMS */}
//         <div className="lg:col-span-2 flex flex-col gap-4">
//           {cartItems.map((item) => (
//             <CartItem key={item.id} item={item} />
//           ))}
//         </div>

//         {/* RIGHT → DELIVERY + SUMMARY */}
//         <div className="flex flex-col gap-5">
//           {/* ⭐ Delivery Pincode Box */}
//           <DeliveryPincodeBox
//             pincode="425408"
//             onChange={() => console.log("Change pincode")}
//           />

//           {/* ⭐ Price Summary */}
//           <CartSummary cartItems={cartItems} />
//           <TrustBadges />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CartPage;

// import React from "react";
// import CartItem from "./components/CartItem";
// import CartSummary from "./components/CartSummary";
// import DeliveryPincodeBox from "./components/DeliveryPincodeBox";
// import TrustBadges from "./components/TrustBadges";
// import { useCart } from "../../context/CartContext"; // ⭐ added

// const CartPage = () => {
//   const { cart } = useCart(); // ⭐ real cart data

//   return (
//     <div className="max-w-[1200px] mx-auto px-4 lg:px-6 py-10">
//       <h1 className="text-2xl font-semibold mb-6">My Bag ({cart.length})</h1>

//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//         {/* LEFT → CART ITEMS */}
//         <div className="lg:col-span-2 flex flex-col gap-4">
//           {cart.map((item) => (
//             <CartItem
//               key={item.id + item.size} // unique key
//               item={item}
//             />
//           ))}

//           {cart.length === 0 && (
//             <p className="text-gray-600 mt-4 text-lg">Your bag is empty.</p>
//           )}
//         </div>

//         {/* RIGHT → DELIVERY + SUMMARY */}
//         <div className="flex flex-col gap-5">
//           {/* ⭐ Delivery Pincode Box */}
//           <DeliveryPincodeBox
//             pincode="425408"
//             onChange={() => console.log("Change pincode")}
//           />
//           {/* ⭐ Price Summary */}
//           <CartSummary cartItems={cart} />
//           <TrustBadges />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CartPage;

// import React from "react";
// import { useNavigate } from "react-router-dom";

// import CartItem from "./components/CartItem";
// import CartSummary from "./components/CartSummary";
// import DeliveryPincodeBox from "./components/DeliveryPincodeBox";
// import TrustBadges from "./components/TrustBadges";
// import { useCart } from "../../context/CartContext";

// const CartPage = () => {
//   const { cart } = useCart();
//   const navigate = useNavigate();

//   // ⛔ EMPTY CART — SHOW CLEAN EMPTY UI ⛔
//   if (!cart || cart.length === 0) {
//     return (
//       // <div className="w-full min-h-[70vh] flex flex-col items-center justify-center px-4 py-16">
//       //   <h1 className="text-3xl font-semibold mb-3">Your Bag is Empty</h1>
//       //   <p className="text-gray-500 text-lg mb-6">
//       //     Looks like you haven’t added anything yet.
//       //   </p>

//       //   <button
//       //     onClick={() => navigate("/")}
//       //     className="px-6 py-3 bg-pink-600 text-white rounded-lg text-lg hover:bg-pink-700 transition"
//       //   >
//       //     Continue Shopping
//       //   </button>
//       // </div>
//       <div className="w-full min-h-[70vh] flex flex-col items-center justify-center px-4 py-16 bg-neutral-50">
//         <img
//           src="https://cdn-icons-png.flaticon.com/512/3081/3081559.png" // choose any PNG you like
//           alt="empty-cart"
//           className="w-24 h-24 mb-6 drop-shadow-sm"
//         />

//         <h1 className="text-2xl font-semibold text-gray-800 mb-2">
//           Your Bag is Empty
//         </h1>

//         <p className="text-gray-500 text-base mb-8">
//           Add items you love and start shopping.
//         </p>

//         <button
//           onClick={() => navigate("/")}
//           className="px-10 py-3 bg-pink-600 text-white rounded-lg text-lg hover:bg-pink-700 transition"
//         >
//           Continue Shopping
//         </button>
//       </div>
//     );
//   }

//   // ✅ CART HAS ITEMS — SHOW FULL LAYOUT
//   return (
//     <div className="max-w-[1200px] mx-auto px-4 lg:px-6 py-10">
//       <h1 className="text-2xl font-semibold mb-6">My Bag ({cart.length})</h1>

//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//         {/* LEFT → CART ITEMS */}
//         <div className="lg:col-span-2 flex flex-col gap-4">
//           {cart.map((item) => (
//             <CartItem key={item.id + item.size} item={item} />
//           ))}
//         </div>

//         {/* RIGHT → DELIVERY + SUMMARY */}
//         <div className="flex flex-col gap-5">
//           <DeliveryPincodeBox
//             pincode="425408"
//             onChange={() => console.log("Change pincode")}
//           />

//           <CartSummary cartItems={cart} />

//           <TrustBadges />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CartPage;

import React from "react";
import { useNavigate } from "react-router-dom";

import CartItem from "./components/CartItem";
import CartSummary from "./components/CartSummary";
import DeliveryPincodeBox from "./components/DeliveryPincodeBox";
import TrustBadges from "./components/TrustBadges";
import { useCart } from "../../context/CartContext";

const CartPage = () => {
  const { cart } = useCart();
  const navigate = useNavigate();

  // ⛔ EMPTY CART — CLEAN UI
  if (!cart || cart.length === 0) {
    return (
      <div className="w-full min-h-[70vh] flex flex-col items-center justify-center px-4 py-16 bg-neutral-50">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3081/3081559.png"
          alt="empty-cart"
          className="w-24 h-24 mb-6 drop-shadow-sm"
        />

        <h1 className="text-2xl font-semibold text-gray-800 mb-2">
          Your Bag is Empty
        </h1>

        <p className="text-gray-500 text-base mb-8">
          Add items you love and start shopping.
        </p>

        <button
          onClick={() => navigate("/")}
          className="px-10 py-3 bg-pink-600 text-white rounded-lg text-lg hover:bg-pink-700 transition"
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  // ✅ CART ITEMS AVAILABLE — FULL LAYOUT
  return (
    <div
      className="
      max-w-[1550px] mx-auto 
      px-3 sm:px-4 md:px-4 lg:px-10 
      py-10
    "
    >
      <h1 className="text-2xl font-semibold mb-6">My Bag ({cart.length})</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* LEFT → CART ITEMS */}
        <div className="lg:col-span-2 flex flex-col gap-4">
          {cart.map((item) => (
            <CartItem key={item.id + item.size} item={item} />
          ))}
        </div>

        {/* RIGHT → PINCODE + SUMMARY */}
        <div className="flex flex-col gap-5">
          <DeliveryPincodeBox
            pincode="425408"
            onChange={() => console.log("Change pincode")}
          />

          <CartSummary cartItems={cart} />

          <TrustBadges />
        </div>
      </div>
    </div>
  );
};

export default CartPage;
