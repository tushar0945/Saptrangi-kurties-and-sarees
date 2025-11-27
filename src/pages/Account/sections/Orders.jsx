// // // import React from "react";
// // // import { X, ChevronRight } from "lucide-react";

// // // const Orders = () => {
// // //   const orders = [
// // //     {
// // //       id: 1,
// // //       status: "Order Cancelled",
// // //       brand: "Bewakoof®",
// // //       name: "Women's Dark Blue Washed Bootcut Jeans",
// // //       size: "28",
// // //       price: "1199",
// // //       image: "/k1.webp",
// // //     },
// // //     {
// // //       id: 2,
// // //       status: "Order Cancelled",
// // //       brand: "Bewakoof®",
// // //       name: "Women's Dark Blue Washed Bootcut Jeans",
// // //       size: "28",
// // //       price: "1199",
// // //       image: "/k2.webp",
// // //     },
// // //   ];

// // //   return (
// // //     <div className="space-y-6">
// // //       {orders.map((order) => (
// // //         <div
// // //           key={order.id}
// // //           className="bg-white border rounded-xl shadow-sm p-5"
// // //         >
// // //           {/* Top Status Section */}
// // //           <div className="flex justify-between items-center pb-4 border-b">
// // //             <div className="flex items-center gap-2 font-semibold text-gray-700">
// // //               <X className="w-5 h-5 text-gray-500" />
// // //               {order.status}
// // //             </div>

// // //             <ChevronRight className="w-5 h-5 text-gray-500" />
// // //           </div>

// // //           {/* Product Section */}
// // //           <div className="flex gap-5 mt-4">
// // //             <div className="w-32 h-40 rounded-lg overflow-hidden bg-white flex items-center justify-center">
// // //               <img
// // //                 src={order.image}
// // //                 alt={order.name}
// // //                 className="w-full h-full object-contain"
// // //               />
// // //             </div>

// // //             <div>
// // //               <p className="font-semibold text-lg">{order.brand}</p>

// // //               <p className="text-gray-700 mt-1">{order.name}</p>

// // //               <p className="mt-3 text-gray-800">Size: {order.size}</p>

// // //               <p className="text-gray-800 font-semibold mt-1">
// // //                 Price: ₹{order.price}
// // //               </p>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       ))}
// // //     </div>
// // //   );
// // // };

// // // export default Orders;

// // import React from "react";
// // import { X, CheckCircle, ChevronRight } from "lucide-react";

// // const Orders = () => {
// //   const orders = [
// //     {
// //       id: 1,
// //       status: "confirmed",
// //       date: "24 Nov 2025",
// //       brand: "Bewakoof®",
// //       name: "Women's Dark Blue Washed Bootcut Jeans",
// //       size: "28",
// //       price: "1199",
// //       image: "/k1.webp",
// //     },
// //     {
// //       id: 2,
// //       status: "cancelled",
// //       brand: "Bewakoof®",
// //       name: "Women's Dark Blue Washed Bootcut Jeans",
// //       size: "28",
// //       price: "1199",
// //       image: "/k2.webp",
// //     },
// //   ];

// //   return (
// //     <div className="space-y-6">
// //       {orders.map((order) => {
// //         const isConfirmed = order.status === "confirmed";

// //         return (
// //           <div
// //             key={order.id}
// //             className="bg-white border rounded-xl shadow-sm p-5"
// //           >
// //             {/* TOP SECTION - Status Row */}
// //             <div className="flex justify-between items-start pb-4 border-b">
// //               <div className="flex items-center gap-2">
// //                 {isConfirmed ? (
// //                   <CheckCircle className="w-6 h-6 text-green-600" />
// //                 ) : (
// //                   <X className="w-6 h-6 text-gray-500" />
// //                 )}

// //                 <div className="flex flex-col">
// //                   <span className="font-semibold text-gray-800">
// //                     {isConfirmed ? "Order Confirmed" : "Order Cancelled"}
// //                   </span>

// //                   {/* Show order date only when confirmed */}
// //                   {isConfirmed && (
// //                     <span className="text-sm text-gray-600">
// //                       Order placed on {order.date}
// //                     </span>
// //                   )}
// //                 </div>
// //               </div>

// //               <ChevronRight className="w-5 h-5 text-gray-500" />
// //             </div>

// //             {/* PRODUCT DETAILS */}
// //             <div className="flex gap-5 mt-4">
// //               <div className="w-32 h-40 rounded-lg overflow-hidden bg-white flex items-center justify-center">
// //                 <img
// //                   src={order.image}
// //                   alt={order.name}
// //                   className="w-full h-full object-contain rounded-lg"
// //                 />
// //               </div>

// //               <div>
// //                 <p className="font-semibold text-lg">{order.brand}</p>
// //                 <p className="text-gray-700 mt-1">{order.name}</p>

// //                 <p className="mt-3 text-gray-800">Size: {order.size}</p>

// //                 <p className="text-gray-800 font-semibold mt-1">
// //                   Price: ₹{order.price}
// //                 </p>
// //               </div>
// //             </div>
// //           </div>
// //         );
// //       })}
// //     </div>
// //   );
// // };

// // export default Orders;

// import React from "react";
// import { X, CheckCircle, ChevronRight } from "lucide-react";

// const Orders = () => {
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

//   return (
//     <div className="space-y-6">
//       {orders.map((order) => {
//         const isConfirmed = order.status === "confirmed";

//         return (
//           <div
//             key={order.id}
//             className="bg-white border rounded-xl shadow-sm p-5"
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

//             {/* ITEMS LIST INSIDE ONE ORDER */}
//             <div className="mt-4 space-y-6">
//               {order.items.map((item, index) => (
//                 <div key={index} className="flex gap-5">
//                   <div className="w-32 h-40 rounded-lg overflow-hidden bg-white">
//                     <img
//                       src={item.image}
//                       alt={item.name}
//                       className="w-full h-full object-contain rounded-lg"
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
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default Orders;

import React from "react";
import { Link } from "react-router-dom"; // ✅ IMPORTANT
import { X, CheckCircle, ChevronRight } from "lucide-react";

const Orders = () => {
  const orders = [
    {
      id: 1,
      status: "confirmed",
      date: "24 Nov 2025",
      items: [
        {
          brand: "Bewakoof®",
          name: "Women's Dark Blue Washed Bootcut Jeans",
          size: "28",
          price: "1199",
          image: "/k1.webp",
        },
        {
          brand: "Bewakoof®",
          name: "Women's Dark Blue Washed Bootcut Jeans",
          size: "28",
          price: "1199",
          image: "/k2.webp",
        },
      ],
    },
    {
      id: 2,
      status: "cancelled",
      items: [
        {
          brand: "Bewakoof®",
          name: "Women's Dark Blue Washed Bootcut Jeans",
          size: "28",
          price: "1199",
          image: "/k3.webp",
        },
      ],
    },
  ];

  return (
    <div className="space-y-6">
      {orders.map((order) => {
        const isConfirmed = order.status === "confirmed";

        return (
          <Link
            key={order.id}
            to={`/order-details/${order.id}`} // ✅ CLICKABLE
            className="block bg-white border rounded-xl shadow-sm p-5 hover:shadow-md transition"
          >
            {/* Status Row */}
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

                  {isConfirmed && (
                    <p className="text-gray-600 text-sm">
                      Order placed on {order.date}
                    </p>
                  )}
                </div>
              </div>

              <ChevronRight className="w-5 h-5 text-gray-500" />
            </div>

            {/* ITEMS LIST INSIDE ONE ORDER */}
            <div className="mt-4 space-y-6">
              {order.items.map((item, index) => (
                <div key={index} className="flex gap-5">
                  <div className="w-32 h-40 rounded-lg overflow-hidden bg-white">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-contain rounded-lg"
                    />
                  </div>

                  <div>
                    <p className="font-semibold text-lg">{item.brand}</p>
                    <p className="text-gray-700">{item.name}</p>
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
