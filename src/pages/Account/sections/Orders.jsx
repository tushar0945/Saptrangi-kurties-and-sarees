// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { X, CheckCircle, ChevronRight } from "lucide-react";

// const Orders = () => {
//   const navigate = useNavigate();

//   const orders = [
//     {
//       id: 1,
//       status: "confirmed",
//       date: "24 Nov 2025",
//       items: [
//         {
//           brand: "Bewakoof®",
//           name: "Women's Dark Blue Washed Bootcut Jeans",
//           size: "28",
//           price: "1199",
//           image: "/k1.webp",
//         },
//         {
//           brand: "Bewakoof®",
//           name: "Women's Dark Blue Washed Bootcut Jeans",
//           size: "28",
//           price: "1199",
//           image: "/k2.webp",
//         },
//       ],
//     },
//     {
//       id: 2,
//       status: "cancelled",
//       items: [
//         {
//           brand: "Bewakoof®",
//           name: "Women's Dark Blue Washed Bootcut Jeans",
//           size: "28",
//           price: "1199",
//           image: "/k3.webp",
//         },
//       ],
//     },
//   ];

//   // ===============================
//   // EMPTY ORDERS UI
//   // ===============================
//   if (!orders || orders.length === 0) {
//     return (
//       <div className="min-h-[60vh] flex flex-col items-center justify-center relative bg-neutral-50 px-6 pt-10 pb-10 overflow-hidden">
//         {/* Soft Pastel Blobs */}
//         <div className="absolute -top-20 -left-20 w-60 h-60 bg-pink-200/40 rounded-full blur-3xl"></div>
//         <div className="absolute -bottom-20 -right-16 w-64 h-64 bg-orange-200/40 rounded-full blur-3xl"></div>

//         {/* Illustration */}
//         <img
//           src="https://cdn-icons-png.flaticon.com/512/5626/5626436.png"
//           alt="empty-orders"
//           className="w-28 mb-6 drop-shadow"
//         />

//         {/* Heading */}
//         <h2 className="text-3xl font-bold text-gray-800 mb-2">No Orders Yet</h2>

//         {/* Subtitle */}
//         <p className="text-gray-500 text-base text-center max-w-md leading-relaxed mb-8">
//           Looks like you haven't placed any orders yet. Start exploring
//           beautiful collections today!
//         </p>

//         {/* CTA */}
//         <button
//           onClick={() => navigate("/")}
//           className="
//             px-10 py-3
//             bg-gradient-to-r from-pink-500 to-orange-400
//             text-white font-semibold
//             rounded-xl
//             shadow-md
//             hover:shadow-lg
//             active:scale-95
//             transition-all
//           "
//         >
//           Start Shopping
//         </button>
//       </div>
//     );
//   }

//   // ===============================
//   // ORDERS LIST UI
//   // ===============================
//   return (
//     <div className="space-y-6">
//       {orders.map((order) => {
//         const isConfirmed = order.status === "confirmed";

//         return (
//           <Link
//             key={order.id}
//             to={`/order-details/${order.id}`}
//             className="block bg-white border rounded-xl shadow-sm p-5 hover:shadow-md transition"
//           >
//             {/* Status Row */}
//             <div className="flex justify-between items-start pb-4 border-b">
//               <div className="flex items-center gap-2">
//                 {isConfirmed ? (
//                   <CheckCircle className="w-6 h-6 text-green-600" />
//                 ) : (
//                   <X className="w-6 h-6 text-gray-500" />
//                 )}

//                 <div>
//                   <p className="font-semibold">
//                     {isConfirmed ? "Order Confirmed" : "Order Cancelled"}
//                   </p>

//                   {isConfirmed && (
//                     <p className="text-gray-600 text-sm">
//                       Order placed on {order.date}
//                     </p>
//                   )}
//                 </div>
//               </div>

//               <ChevronRight className="w-5 h-5 text-gray-500" />
//             </div>

//             {/* Items list inside order */}
//             <div className="mt-4 space-y-6">
//               {order.items.map((item, index) => (
//                 <div key={index} className="flex gap-5">
//                   <div className="w-32 h-40 bg-white rounded-lg overflow-hidden">
//                     <img
//                       src={item.image}
//                       alt={item.name}
//                       className="w-full h-full object-contain"
//                     />
//                   </div>

//                   <div>
//                     <p className="font-semibold text-lg">{item.brand}</p>
//                     <p className="text-gray-700">{item.name}</p>
//                     <p className="mt-3 text-gray-800">Size: {item.size}</p>
//                     <p className="font-semibold mt-1 text-gray-800">
//                       Price: ₹{item.price}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </Link>
//         );
//       })}
//     </div>
//   );
// };

// export default Orders;

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { X, CheckCircle, ChevronRight } from "lucide-react";
import api from "../../../api/axios";

const Orders = () => {
  const navigate = useNavigate();

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  // ===============================
  // FETCH ORDERS
  // ===============================
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await api.get("orders/orders/"); // 🔥 backend ready
        console.log(res);
        setOrders(res.data?.orders || []);
      } catch (err) {
        console.error("Failed to fetch orders", err);
        setOrders([]);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  // ===============================
  // LOADING STATE
  // ===============================
  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <p className="text-gray-500 text-lg">Loading your orders...</p>
      </div>
    );
  }

  // ===============================
  // EMPTY ORDERS UI
  // ===============================
  if (!orders || orders.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center relative bg-neutral-50 px-6 py-10 overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute -top-20 -left-20 w-60 h-60 bg-pink-200/40 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-16 w-64 h-64 bg-orange-200/40 rounded-full blur-3xl"></div>

        <img
          src="https://cdn-icons-png.flaticon.com/512/5626/5626436.png"
          alt="empty-orders"
          className="w-28 mb-6 drop-shadow"
        />

        <h2 className="text-3xl font-bold text-gray-800 mb-2">No Orders Yet</h2>

        <p className="text-gray-500 text-base text-center max-w-md mb-8">
          Looks like you haven&apos;t placed any orders yet. Start exploring
          beautiful collections today!
        </p>

        <button
          onClick={() => navigate("/")}
          className="
            px-10 py-3
            bg-gradient-to-r from-pink-500 to-orange-400
            text-white font-semibold
            rounded-xl
            shadow-md hover:shadow-lg
            active:scale-95 transition-all
          "
        >
          Start Shopping
        </button>
      </div>
    );
  }

  // ===============================
  // ORDERS LIST UI
  // ===============================
  return (
    <div className="space-y-6">
      {orders.map((order) => {
        const isConfirmed = order.status === "confirmed";

        return (
          <Link
            key={order.id}
            to={`/order-details/${order.id}`}
            className="block bg-white border rounded-xl shadow-sm p-5 hover:shadow-md transition"
          >
            {/* STATUS */}
            <div className="flex justify-between items-start pb-4 border-b">
              <div className="flex items-center gap-2">
                {isConfirmed ? (
                  <CheckCircle className="w-6 h-6 text-green-600" />
                ) : (
                  <X className="w-6 h-6 text-gray-500" />
                )}

                <div>
                  <p className="font-semibold">
                    {isConfirmed ? "Order Confirmed" : "Order Cancelled"}
                  </p>

                  <p className="text-gray-600 text-sm">
                    Order placed on{" "}
                    {new Date(order.created_at).toLocaleDateString("en-IN")}
                  </p>
                </div>
              </div>

              <ChevronRight className="w-5 h-5 text-gray-500" />
            </div>

            {/* ITEMS */}
            <div className="mt-4 space-y-6">
              {order.items.map((item) => (
                <div key={item.id} className="flex gap-5">
                  <div className="w-32 h-40 bg-white rounded-lg overflow-hidden">
                    <img
                      src={item.product?.main_image}
                      alt={item.product?.name}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div>
                    <p className="font-semibold text-lg">
                      {item.product?.brand}
                    </p>
                    <p className="text-gray-700">{item.product?.name}</p>
                    <p className="mt-3 text-gray-800">Size: {item.size}</p>
                    <p className="font-semibold mt-1 text-gray-800">
                      Price: ₹{item.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Orders;
