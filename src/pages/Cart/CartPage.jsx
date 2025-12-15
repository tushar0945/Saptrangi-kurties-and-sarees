// // // // import React, { useEffect } from "react";
// // // // import { useNavigate } from "react-router-dom";

// // // // import CartItem from "./components/CartItem";
// // // // import CartSummary from "./components/CartSummary";
// // // // import DeliveryPincodeBox from "./components/DeliveryPincodeBox";
// // // // import TrustBadges from "./components/TrustBadges";
// // // // import { useCart } from "../../context/CartContext";

// // // // const CartPage = () => {
// // // //   const { cart, fetchCart } = useCart(); // ✅ fetchCart added
// // // //   const navigate = useNavigate();

// // // //   // 🔄 LOAD CART FROM BACKEND
// // // //   useEffect(() => {
// // // //     fetchCart();
// // // //   }, []);

// // // //   // ⛔ EMPTY CART
// // // //   if (!cart || cart.length === 0) {
// // // //     return (
// // // //       <div className="w-full min-h-[70vh] flex flex-col items-center justify-center px-4 py-16 bg-neutral-50">
// // // //         <img
// // // //           src="https://cdn-icons-png.flaticon.com/512/3081/3081559.png"
// // // //           alt="empty-cart"
// // // //           className="w-24 h-24 mb-6 drop-shadow-sm"
// // // //         />

// // // //         <h1 className="text-2xl font-semibold text-gray-800 mb-2">
// // // //           Your Bag is Empty
// // // //         </h1>

// // // //         <p className="text-gray-500 text-base mb-8">
// // // //           Add items you love and start shopping.
// // // //         </p>

// // // //         <button
// // // //           onClick={() => navigate("/")}
// // // //           className="px-10 py-3 bg-pink-600 text-white rounded-lg text-lg hover:bg-pink-700 transition"
// // // //         >
// // // //           Continue Shopping
// // // //         </button>
// // // //       </div>
// // // //     );
// // // //   }

// // // //   // ✅ CART UI
// // // //   return (
// // // //     <div className="max-w-[1550px] mx-auto px-3 sm:px-4 md:px-4 lg:px-10 py-10">
// // // //       <h1 className="text-2xl font-semibold mb-6">My Bag ({cart.length})</h1>

// // // //       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
// // // //         {/* LEFT */}
// // // //         <div className="lg:col-span-2 flex flex-col gap-4">
// // // //           {cart.map((item) => (
// // // //             <CartItem key={item.id + item.size} item={item} />
// // // //           ))}
// // // //         </div>

// // // //         {/* RIGHT */}
// // // //         <div className="flex flex-col gap-5">
// // // //           <DeliveryPincodeBox
// // // //             pincode="425408"
// // // //             onChange={() => console.log("Change pincode")}
// // // //           />

// // // //           <CartSummary cartItems={cart} />

// // // //           <TrustBadges />
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default CartPage;

// // // import React, { useEffect, useState } from "react";
// // // import { useNavigate } from "react-router-dom";

// // // import CartItem from "./components/CartItem";
// // // import CartSummary from "./components/CartSummary";
// // // import DeliveryPincodeBox from "./components/DeliveryPincodeBox";
// // // import TrustBadges from "./components/TrustBadges";
// // // import api from "../../api/axios";

// // // const CartPage = () => {
// // //   const navigate = useNavigate();

// // //   const [cart, setCart] = useState([]);
// // //   const [loading, setLoading] = useState(true);
// // //   const [error, setError] = useState(null);

// // //   // 🔄 FETCH CART USING AXIOS
// // //   useEffect(() => {
// // //     const loadCart = async () => {
// // //       try {
// // //         setLoading(true);
// // //         setError(null);

// // //         const res = await api.get("/orders/cart/");
// // //         // 👆 adjust endpoint if needed
// // //         console.log("Cart res:", res);
// // //         setCart(res.data?.items || []); // safe fallback
// // //       } catch (err) {
// // //         console.error("Fetch cart failed:", err);

// // //         if (err.response?.status === 401) {
// // //           navigate("/login", { replace: true });
// // //         } else {
// // //           setError("Failed to load cart");
// // //         }
// // //       } finally {
// // //         setLoading(false);
// // //       }
// // //     };

// // //     loadCart();
// // //   }, [navigate]);

// // //   // ⏳ LOADING
// // //   if (loading) {
// // //     return (
// // //       <div className="w-full min-h-[60vh] flex items-center justify-center">
// // //         <p className="text-gray-500 text-lg">Loading your bag...</p>
// // //       </div>
// // //     );
// // //   }

// // //   // ❌ ERROR
// // //   if (error) {
// // //     return (
// // //       <div className="w-full min-h-[60vh] flex flex-col items-center justify-center gap-4">
// // //         <p className="text-red-500 font-medium">{error}</p>
// // //         <button
// // //           onClick={() => navigate("/")}
// // //           className="px-6 py-2 bg-primary text-white rounded-lg"
// // //         >
// // //           Continue Shopping
// // //         </button>
// // //       </div>
// // //     );
// // //   }

// // //   // ⛔ EMPTY CART
// // //   if (!cart || cart.length === 0) {
// // //     return (
// // //       <div className="w-full min-h-[70vh] flex flex-col items-center justify-center px-4 py-16 bg-neutral-50">
// // //         <img
// // //           src="https://cdn-icons-png.flaticon.com/512/3081/3081559.png"
// // //           alt="empty-cart"
// // //           className="w-24 h-24 mb-6 drop-shadow-sm"
// // //         />

// // //         <h1 className="text-2xl font-semibold text-gray-800 mb-2">
// // //           Your Bag is Empty
// // //         </h1>

// // //         <p className="text-gray-500 text-base mb-8">
// // //           Add items you love and start shopping.
// // //         </p>

// // //         <button
// // //           onClick={() => navigate("/")}
// // //           className="px-10 py-3 bg-pink-600 text-white rounded-lg text-lg hover:bg-pink-700 transition"
// // //         >
// // //           Continue Shopping
// // //         </button>
// // //       </div>
// // //     );
// // //   }

// // //   // ✅ CART UI
// // //   return (
// // //     <div className="max-w-[1550px] mx-auto px-3 sm:px-4 md:px-4 lg:px-10 py-10">
// // //       <h1 className="text-2xl font-semibold mb-6">My Bag ({cart.length})</h1>

// // //       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
// // //         {/* LEFT */}
// // //         <div className="lg:col-span-2 flex flex-col gap-4">
// // //           {cart.map((item) => (
// // //             <CartItem key={`${item.id}-${item.size}`} item={item} />
// // //           ))}
// // //         </div>

// // //         {/* RIGHT */}
// // //         <div className="flex flex-col gap-5">
// // //           <DeliveryPincodeBox
// // //             pincode="425408"
// // //             onChange={() => console.log("Change pincode")}
// // //           />

// // //           <CartSummary cartItems={cart} />

// // //           <TrustBadges />
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default CartPage;

// // import React, { useEffect, useState } from "react";
// // import { useNavigate } from "react-router-dom";

// // import CartItem from "./components/CartItem";
// // import CartSummary from "./components/CartSummary";
// // import DeliveryPincodeBox from "./components/DeliveryPincodeBox";
// // import TrustBadges from "./components/TrustBadges";
// // import api from "../../api/axios";

// // const CartPage = () => {
// //   const navigate = useNavigate();

// //   const [cart, setCart] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);

// //   // ===========================
// //   // 🛒 FETCH CART
// //   // ===========================
// //   useEffect(() => {
// //     const loadCart = async () => {
// //       try {
// //         setLoading(true);
// //         setError(null);

// //         const res = await api.get("/orders/cart/");
// //         console.log("Cart res:", res);

// //         // ✅ FIX 1: correct key
// //         setCart(res.data?.cart || []);
// //       } catch (err) {
// //         console.error("Fetch cart failed:", err);

// //         if (err.response?.status === 401) {
// //           navigate("/login", { replace: true });
// //         } else {
// //           setError("Failed to load cart");
// //         }
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     loadCart();
// //   }, [navigate]);

// //   // ⏳ LOADING
// //   if (loading) {
// //     return (
// //       <div className="w-full min-h-[60vh] flex items-center justify-center">
// //         <p className="text-gray-500 text-lg">Loading your bag...</p>
// //       </div>
// //     );
// //   }

// //   // ❌ ERROR
// //   if (error) {
// //     return (
// //       <div className="w-full min-h-[60vh] flex flex-col items-center justify-center gap-4">
// //         <p className="text-red-500 font-medium">{error}</p>
// //         <button
// //           onClick={() => navigate("/")}
// //           className="px-6 py-2 bg-primary text-white rounded-lg"
// //         >
// //           Continue Shopping
// //         </button>
// //       </div>
// //     );
// //   }

// //   // 🛑 EMPTY CART
// //   if (!cart || cart.length === 0) {
// //     return (
// //       <div className="w-full min-h-[70vh] flex flex-col items-center justify-center px-4 py-16 bg-neutral-50">
// //         <img
// //           src="https://cdn-icons-png.flaticon.com/512/3081/3081559.png"
// //           alt="empty-cart"
// //           className="w-24 h-24 mb-6 drop-shadow-sm"
// //         />

// //         <h1 className="text-2xl font-semibold text-gray-800 mb-2">
// //           Your Bag is Empty
// //         </h1>

// //         <p className="text-gray-500 text-base mb-8">
// //           Add items you love and start shopping.
// //         </p>

// //         <button
// //           onClick={() => navigate("/")}
// //           className="px-10 py-3 bg-pink-600 text-white rounded-lg text-lg hover:bg-pink-700 transition"
// //         >
// //           Continue Shopping
// //         </button>
// //       </div>
// //     );
// //   }

// //   // ✅ CART UI
// //   return (
// //     <div className="max-w-[1550px] mx-auto px-3 sm:px-4 md:px-4 lg:px-10 py-10">
// //       <h1 className="text-2xl font-semibold mb-6">My Bag ({cart.length})</h1>

// //       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
// //         {/* LEFT */}
// //         <div className="lg:col-span-2 flex flex-col gap-4">
// //           {cart.map((item) => (
// //             // ✅ FIX 2: stable key
// //             <CartItem key={item.id} item={item} />
// //           ))}
// //         </div>

// //         {/* RIGHT */}
// //         <div className="flex flex-col gap-5">
// //           <DeliveryPincodeBox
// //             pincode="425408"
// //             onChange={() => console.log("Change pincode")}
// //           />

// //           <CartSummary cartItems={cart} />

// //           <TrustBadges />
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default CartPage;

// import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { useCart } from "../../context/CartContext";

// import CartItem from "./components/CartItem";
// import CartSummary from "./components/CartSummary";
// import DeliveryPincodeBox from "./components/DeliveryPincodeBox";
// import TrustBadges from "./components/TrustBadges";

// const CartPage = () => {
//   const navigate = useNavigate();

//   // ✅ SINGLE SOURCE OF TRUTH
//   const { cart, loading, fetchCart } = useCart();

//   // ===========================
//   // 🛒 ENSURE CART IS LOADED
//   // ===========================
//   useEffect(() => {
//     fetchCart();
//   }, [fetchCart]);

//   // ⏳ LOADING
//   if (loading) {
//     return (
//       <div className="w-full min-h-[60vh] flex items-center justify-center">
//         <p className="text-gray-500 text-lg">Loading your bag...</p>
//       </div>
//     );
//   }

//   // 🛑 EMPTY CART
//   if (!cart || cart.length === 0) {
//     return (
//       <div className="w-full min-h-[70vh] flex flex-col items-center justify-center px-4 py-16 bg-neutral-50">
//         <img
//           src="https://cdn-icons-png.flaticon.com/512/3081/3081559.png"
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

//   // ✅ CART UI
//   return (
//     <div className="max-w-[1550px] mx-auto px-3 sm:px-4 md:px-4 lg:px-10 py-10">
//       <h1 className="text-2xl font-semibold mb-6">My Bag ({cart.length})</h1>

//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//         {/* LEFT */}
//         <div className="lg:col-span-2 flex flex-col gap-4">
//           {cart.map((item) => (
//             <CartItem key={item.id} item={item} />
//           ))}
//         </div>

//         {/* RIGHT */}
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
import { useCart } from "../../context/CartContext";

import CartItem from "./components/CartItem";
import CartSummary from "./components/CartSummary";
import DeliveryPincodeBox from "./components/DeliveryPincodeBox";
import TrustBadges from "./components/TrustBadges";

const CartPage = () => {
  const navigate = useNavigate();

  // ✅ SINGLE SOURCE OF TRUTH (NO FETCH HERE)
  const { cart, loading } = useCart();

  // ⏳ LOADING
  if (loading) {
    return (
      <div className="w-full min-h-[60vh] flex items-center justify-center">
        <p className="text-gray-500 text-lg">Loading your bag...</p>
      </div>
    );
  }

  // 🛑 EMPTY CART
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

  // ✅ CART UI
  return (
    <div className="max-w-[1550px] mx-auto px-3 sm:px-4 md:px-4 lg:px-10 py-10">
      <h1 className="text-2xl font-semibold mb-6">My Bag ({cart.length})</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* LEFT */}
        <div className="lg:col-span-2 flex flex-col gap-4">
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>

        {/* RIGHT */}
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
