// // // import { useParams } from "react-router-dom";

// // // const OrderDetails = () => {
// // //   const { id } = useParams();

// // //   // Temporary dummy data (replace with backend API later)
// // //   const orders = [
// // //     {
// // //       id: "1",
// // //       placedOn: "24 Nov 2025",
// // //       shippingAddress: {
// // //         name: "Tushar Patil",
// // //         phone: "8999197992",
// // //         address: "TALWADE Bk, Ssaitane Road, Dhule, Maharashtra, 425408",
// // //         label: "Home",
// // //       },
// // //       items: [
// // //         {
// // //           brand: "Bewakoof®",
// // //           name: "Women's Dark Blue Washed Bootcut Jeans",
// // //           size: "28",
// // //           price: "1199",
// // //           image: "/k1.webp",
// // //         },
// // //         {
// // //           brand: "Bewakoof®",
// // //           name: "Women's Dark Blue Washed Bootcut Jeans",
// // //           size: "28",
// // //           price: "1199",
// // //           image: "/k1.webp",
// // //         },
// // //       ],
// // //       totalPrice: 2433,
// // //       status: "confirmed",
// // //     },
// // //   ];

// // //   const order = orders.find((o) => o.id == id);

// // //   if (!order) return <div>Order not found</div>;

// // //   return (
// // //     <div className="p-6 space-y-6">
// // //       {/* Order Header */}
// // //       <div className="bg-white p-5 rounded-xl shadow border">
// // //         <div className="flex justify-between">
// // //           <h1 className="text-xl font-semibold">Order Number</h1>
// // //           <p className="font-semibold">{order.id}</p>
// // //         </div>

// // //         <p className="text-gray-600 mt-2">Order placed on {order.placedOn}</p>
// // //       </div>

// // //       {/* Items */}
// // //       <div className="bg-white p-5 rounded-xl shadow border">
// // //         <h2 className="text-lg font-semibold mb-4">Order Items</h2>

// // //         {order.items.map((item, i) => (
// // //           <div key={i} className="flex gap-5 mb-6">
// // //             <img
// // //               src={item.image}
// // //               className="w-32 h-40 rounded-lg object-cover"
// // //             />
// // //             <div>
// // //               <p className="font-semibold">{item.brand}</p>
// // //               <p className="text-gray-700">{item.name}</p>
// // //               <p className="mt-2 text-gray-700">Size: {item.size}</p>
// // //               <p className="font-semibold mt-1">Price: ₹{item.price}</p>
// // //             </div>
// // //           </div>
// // //         ))}
// // //       </div>

// // //       {/* Address */}
// // //       <div className="bg-white p-5 rounded-xl shadow border">
// // //         <h2 className="text-lg font-semibold mb-3">Shipping Address</h2>
// // //         <p className="font-semibold">
// // //           {order.shippingAddress.name} | {order.shippingAddress.phone}
// // //         </p>
// // //         <p className="text-gray-800 mt-1">{order.shippingAddress.address}</p>

// // //         <span className="mt-2 inline-block text-sm bg-yellow-200 px-3 py-1 rounded">
// // //           {order.shippingAddress.label}
// // //         </span>
// // //       </div>

// // //       {/* Total */}
// // //       <div className="bg-white p-5 rounded-xl shadow border flex justify-between text-lg font-semibold">
// // //         <p>Total Price</p>
// // //         <p>₹{order.totalPrice}</p>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default OrderDetails;

// // import React from "react";
// // import { useParams } from "react-router-dom";

// // const OrderDetails = () => {
// //   const { id } = useParams();

// //   // Sample data – replace with API later
// //   const orders = [
// //     {
// //       id: "1",
// //       date: "24 Nov 2025",
// //       items: [
// //         {
// //           brand: "Bewakoof®",
// //           name: "Women's Dark Blue Washed Bootcut Jeans",
// //           size: "28",
// //           price: "1199",
// //           image: "/k1.webp",
// //         },
// //         {
// //           brand: "Bewakoof®",
// //           name: "Women's Dark Blue Washed Bootcut Jeans",
// //           size: "28",
// //           price: "1199",
// //           image: "/k2.webp",
// //         },
// //       ],
// //     },
// //   ];

// //   const order = orders.find((o) => o.id === id);

// //   if (!order)
// //     return <div className="p-10 text-center text-xl">Order Not Found</div>;

// //   return (
// //     <div className="p-6 space-y-6">
// //       {/* ------------------- ORDER NUMBER + DATE ------------------- */}
// //       <div className="bg-white p-6 rounded-xl border shadow-sm flex justify-between items-center">
// //         <div>
// //           <h2 className="text-xl font-bold">Order Number</h2>
// //           <p className="mt-1 text-gray-600">Order placed on {order.date}</p>
// //         </div>

// //         <p className="text-gray-700 text-lg font-semibold">{order.id}</p>
// //       </div>

// //       {/* ------------------- ORDER ITEMS ------------------- */}
// //       <div className="bg-white p-6 rounded-xl border shadow-sm">
// //         <h3 className="text-lg font-semibold mb-4">Order Items</h3>

// //         <div className="space-y-6">
// //           {order.items.map((item, index) => (
// //             <div
// //               key={index}
// //               className="flex gap-5 border-b pb-4 last:border-none last:pb-0"
// //             >
// //               <div className="w-32 h-40 rounded-lg overflow-hidden">
// //                 <img
// //                   src={item.image}
// //                   alt={item.name}
// //                   className="w-full h-full object-cover rounded-lg"
// //                 />
// //               </div>

// //               <div>
// //                 <p className="font-semibold text-lg">{item.brand}</p>
// //                 <p className="text-gray-700">{item.name}</p>

// //                 <p className="mt-3 text-gray-800">Size: {item.size}</p>

// //                 <p className="font-semibold mt-1 text-gray-800">
// //                   Price: ₹{item.price}
// //                 </p>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>

// //       {/* ------------------- TOTAL ------------------- */}
// //       <div className="bg-white p-6 rounded-xl border shadow-sm flex justify-between items-center">
// //         <p className="text-lg font-semibold">
// //           ₹{order.items.reduce((t, it) => t + Number(it.price), 0)}
// //           .00 Total Price
// //         </p>

// //         <p className="text-gray-700 font-medium">COD Payment</p>
// //       </div>

// //       {/* ------------------- HELP SECTION ------------------- */}
// //       <div className="bg-white p-6 rounded-xl border shadow-sm text-center">
// //         <p className="text-blue-700 font-semibold cursor-pointer">Need Help?</p>
// //       </div>
// //     </div>
// //   );
// // };

// // export default OrderDetails;

// import React from "react";
// import { useParams } from "react-router-dom";

// const OrderDetails = () => {
//   const { id } = useParams();

//   // SAMPLE DATA (replace with API)
//   const orders = [
//     {
//       id: "1",
//       date: "24 Nov 2025",
//       time: "10:16 pm",
//       status: "confirmed",
//       address: {
//         name: "Tushar Patil",
//         mobile: "8999197992",
//         full: "TALWADE Bk, Saitane road, near hanuman mandir , Dhule, Maharashtra, 425408",
//         label: "Home",
//       },
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
//   ];

//   const order = orders.find((o) => o.id === id);

//   if (!order)
//     return <div className="p-10 text-center text-xl">Order Not Found</div>;

//   return (
//     <div className="p-6 space-y-6">
//       {/* ---------------- ORDER NUMBER + ORDER PLACED ---------------- */}
//       <div className="bg-white p-6 rounded-xl border shadow-sm flex justify-between items-start">
//         {/* LEFT — ORDER NUMBER */}
//         <div>
//           <p className="text-[15px] font-semibold text-gray-800">
//             Order Number
//           </p>
//           <p className="text-gray-600 mt-1 text-[15px]">{order.id}</p>
//         </div>

//         {/* RIGHT — ORDER PLACED */}
//         <div className="text-right">
//           <p className="text-[15px] font-semibold text-gray-800">
//             Order Placed
//           </p>
//           <p className="text-gray-600 mt-1 text-[15px]">{order.date}</p>
//         </div>
//       </div>

//       {/* ---------------- ORDER ITEMS ---------------- */}
//       <div className="bg-white p-6 rounded-xl border shadow-sm">
//         <h3 className="font-semibold text-lg mb-4">Order Items</h3>

//         <div className="space-y-6">
//           {order.items.map((item, index) => (
//             <div
//               key={index}
//               className="flex gap-5 pb-5 border-b last:border-none"
//             >
//               <div className="w-32 h-40 rounded-lg overflow-hidden bg-white">
//                 <img
//                   src={item.image}
//                   className="w-full h-full object-cover rounded-lg"
//                   alt=""
//                 />
//               </div>

//               <div>
//                 <p className="font-semibold text-lg">{item.brand}</p>
//                 <p className="text-gray-700">{item.name}</p>

//                 <p className="mt-3 text-gray-800">Size: {item.size}</p>

//                 <p className="font-semibold mt-1 text-gray-800">
//                   Price: ₹{item.price}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* ---------------- STATUS TRACK ---------------- */}
//       <div className="bg-white p-6 rounded-xl border shadow-sm">
//         <p className="font-semibold text-lg text-green-600">
//           ✔ Order Confirmed
//         </p>
//         <p className="text-gray-600 mt-1">
//           On {order.date}, {order.time}
//         </p>

//         <div className="w-full h-2 bg-gray-200 mt-4 rounded">
//           <div className="h-full bg-orange-400 w-1/3 rounded"></div>
//         </div>

//         <div className="grid grid-cols-3 mt-4 text-center text-gray-600 font-medium">
//           <p>● Cancel</p>
//           <p></p>
//           <p>📍 Track</p>
//         </div>
//       </div>

//       {/* ---------------- SHIPPING ADDRESS ---------------- */}
//       <div className="bg-white p-6 rounded-xl border shadow-sm">
//         <div className="flex justify-between items-start">
//           <h3 className="font-semibold text-lg">Shipping Address</h3>

//           <span className="px-3 py-1 border border-orange-300 text-orange-700 rounded text-sm">
//             {order.address.label}
//           </span>
//         </div>

//         <p className="mt-3 font-semibold">
//           {order.address.name} | {order.address.mobile}
//         </p>

//         <p className="text-gray-700 mt-1">{order.address.full}</p>
//       </div>

//       {/* ---------------- TOTAL PRICE ---------------- */}
//       <div className="bg-white p-6 rounded-xl border shadow-sm flex justify-between items-center">
//         <p className="text-lg font-semibold">
//           ₹{order.items.reduce((t, it) => t + Number(it.price), 0)}.00 Total
//           Price
//         </p>

//         <p className="text-gray-700 font-medium">To be paid by COD</p>
//       </div>

//       {/* ---------------- HELP ---------------- */}
//       <div className="bg-white p-6 rounded-xl border shadow-sm text-center">
//         <p className="text-blue-600 font-semibold cursor-pointer">Need Help?</p>
//       </div>
//     </div>
//   );
// };

// export default OrderDetails;

// import React, { useState } from "react";
// import { useParams, Link, useNavigate } from "react-router-dom";

// const OrderDetails = () => {
//   const { id } = useParams();
//   const [showBreakup, setShowBreakup] = useState(false);

//   const getProgress = (status) => {
//     switch (status) {
//       case "confirmed":
//         return "w-1/3";
//       case "shipped":
//         return "w-2/3";
//       case "delivered":
//         return "w-full";
//       case "cancelled":
//         return "w-0";
//       default:
//         return "w-1/3";
//     }
//   };

//   // SAMPLE DATA (replace with API)
//   const orders = [
//     {
//       id: "1",
//       date: "24 Nov 2025",
//       time: "10:16 pm",
//       status: "confirmed",
//       address: {
//         name: "Tushar Patil",
//         mobile: "8999197992",
//         full: "TALWADE Bk, Saitane road, near hanuman mandir , Dhule, Maharashtra, 425408",
//         label: "Home",
//       },
//       items: [
//         {
//           brand: "Bewakoof®",
//           name: "Women's Dark Blue Washed Bootcut Jeans",
//           size: "28",
//           price: "1199",
//           image: "/k1.webp",
//           slug: "peach-kurti",
//         },
//         {
//           brand: "Bewakoof®",
//           name: "Women's Dark Blue Washed Bootcut Jeans",
//           size: "28",
//           price: "1199",
//           image: "/k2.webp",
//           slug: "grey-imported-kurti",
//         },
//       ],
//     },
//   ];

//   const order = orders.find((o) => o.id === id);

//   if (!order)
//     return <div className="p-10 text-center text-xl">Order Not Found</div>;

//   return (
//     <div className="p-6 space-y-6">
//       {/* ---------------- ORDER NUMBER + ORDER PLACED ---------------- */}
//       <div className="bg-white p-6 rounded-xl border shadow-sm flex justify-between items-start">
//         <div>
//           <p className="text-[15px] font-semibold text-gray-800">
//             Order Number
//           </p>
//           <p className="text-gray-600 mt-1 text-[15px]">{order.id}</p>
//         </div>

//         <div className="text-right">
//           <p className="text-[15px] font-semibold text-gray-800">
//             Order Placed
//           </p>
//           <p className="text-gray-600 mt-1 text-[15px]">{order.date}</p>
//         </div>
//       </div>

//       {/* ---------------- ORDER ITEMS ---------------- */}
//       <div className="bg-white p-6 rounded-xl border shadow-sm">
//         <h3 className="font-semibold text-lg mb-4">Order Items</h3>

//         <div className="space-y-6">
//           {order.items.map((item, index) => (
//             <Link
//               key={index}
//               to={`/collection/${item.slug}`}
//               className="flex gap-5 pb-5 border-b last:border-none hover:bg-gray-50 rounded-lg transition"
//             >
//               <div className="w-32 h-40 rounded-lg overflow-hidden bg-white">
//                 <img
//                   src={item.image}
//                   className="w-full h-full object-cover rounded-lg"
//                   alt=""
//                 />
//               </div>

//               <div>
//                 <p className="font-semibold text-lg">{item.brand}</p>
//                 <p className="text-gray-700">{item.name}</p>

//                 <p className="mt-3 text-gray-800">Size: {item.size}</p>

//                 <p className="font-semibold mt-1 text-gray-800">
//                   Price: ₹{item.price}
//                 </p>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>

//       {/* ---------------- STATUS TRACK ---------------- */}
//       <div className="bg-white p-6 rounded-xl border shadow-sm">
//         {/* Status text */}
//         <p
//           className={`font-semibold text-lg ${
//             order.status === "cancelled" ? "text-red-600" : "text-green-600"
//           }`}
//         >
//           {order.status === "cancelled"
//             ? "✘ Order Cancelled"
//             : "✔ Order Confirmed"}
//         </p>

//         <p className="text-gray-600 mt-1">
//           On {order.date}, {order.time}
//         </p>

//         {/* PROGRESS BAR */}
//         <div className="w-full h-2 bg-gray-200 mt-4 rounded">
//           <div
//             className={`h-full bg-orange-400 rounded transition-all duration-500 ${getProgress(
//               order.status
//             )}`}
//           ></div>
//         </div>

//         {/* BOTTOM ACTION BUTTONS */}
//         <div className="flex items-center gap-6 mt-5">
//           {/* CANCEL BUTTON */}
//           <Link
//             to={`/myaccount/orders/${order.id}/cancel`}
//             className="flex-1 flex items-center justify-center gap-2 py-3 border border-gray-300 rounded-lg
//                text-red-500 font-medium hover:bg-red-50 transition"
//           >
//             <span className="text-lg">✖</span>
//             Cancel
//           </Link>

//           {/* TRACK BUTTON */}
//           <button
//             disabled
//             className="flex-1 flex items-center justify-center gap-2 py-3 border border-gray-300 rounded-lg
//                text-gray-400 font-medium cursor-not-allowed"
//           >
//             <span className="text-lg">📍</span>
//             Track
//           </button>
//         </div>
//       </div>

//       {/* ---------------- SHIPPING ADDRESS ---------------- */}
//       <div className="bg-white p-6 rounded-xl border shadow-sm">
//         <div className="flex justify-between items-start">
//           <h3 className="font-semibold text-lg">Shipping Address</h3>

//           <span className="px-3 py-1 border border-orange-300 text-orange-700 rounded text-sm">
//             {order.address.label}
//           </span>
//         </div>

//         <p className="mt-3 font-semibold">
//           {order.address.name} | {order.address.mobile}
//         </p>

//         <p className="text-gray-700 mt-1">{order.address.full}</p>
//       </div>

//       {/* ---------------- TOTAL PRICE + BREAKUP ---------------- */}
//       <div className="bg-white p-6 rounded-xl border shadow-sm">
//         {/* TOP ROW - TOTAL PRICE + PAYMENT TYPE */}
//         <div className="flex justify-between items-center">
//           <p className="text-xl font-semibold">
//             ₹{order.items.reduce((t, it) => t + Number(it.price), 0)}.00 Total
//             Price
//           </p>

//           <p className="text-gray-700 font-medium">To be paid by COD</p>
//         </div>

//         {/* VIEW BREAKUP TOGGLE */}
//         <button
//           onClick={() => setShowBreakup(!showBreakup)}
//           className="text-blue-600 font-semibold mt-3 flex items-center gap-1"
//         >
//           View Breakup
//           <span
//             className={`transition-transform ${
//               showBreakup ? "rotate-180" : ""
//             }`}
//           >
//             ▼
//           </span>
//         </button>

//         {/* BREAKUP BODY */}
//         {showBreakup && (
//           <div className="mt-4 space-y-4 text-[15px]">
//             <div className="flex justify-between">
//               <p className="text-gray-700">Cart Total</p>
//               <p className="font-medium">₹899</p>
//             </div>

//             <div className="flex justify-between">
//               <p className="text-gray-700">Delivery Fee</p>
//               <p className="text-green-600 font-medium">FREE</p>
//             </div>

//             <div className="flex justify-between">
//               <p className="text-gray-700">COD Fee</p>
//               <p className="font-medium">₹20.00</p>
//             </div>

//             <hr />

//             <div className="flex justify-between font-semibold">
//               <p>Total to be paid</p>
//               <p>₹919.00</p>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* ---------------- HELP ---------------- */}
//       <div className="bg-white p-6 rounded-xl border shadow-sm text-center">
//         <p className="text-blue-600 font-semibold cursor-pointer">Need Help?</p>
//       </div>
//     </div>
//   );
// };

// export default OrderDetails;

// import React, { useState } from "react";
// import { useParams, Link } from "react-router-dom";

// const OrderDetails = () => {
//   const { id } = useParams();
//   const [showBreakup, setShowBreakup] = useState(false);

//   // Progress bar width based on status
//   const getProgress = (status) => {
//     switch (status) {
//       case "confirmed":
//         return "w-1/3";
//       case "shipped":
//         return "w-2/3";
//       case "delivered":
//         return "w-full";
//       case "cancelled":
//         return "w-0";
//       default:
//         return "w-1/3";
//     }
//   };

//   // SAMPLE ORDER DATA
//   const orders = [
//     {
//       id: "1",
//       date: "24 Nov 2025",
//       time: "10:16 pm",
//       status: "confirmed",
//       address: {
//         name: "Tushar Patil",
//         mobile: "8999197992",
//         full: "TALWADE Bk, Saitane road, near hanuman mandir , Dhule, Maharashtra, 425408",
//         label: "Home",
//       },
//       items: [
//         {
//           brand: "Bewakoof®",
//           name: "Women's Dark Blue Washed Bootcut Jeans",
//           size: "28",
//           price: "1199",
//           image: "/k1.webp",
//           slug: "peach-kurti",
//         },
//         {
//           brand: "Bewakoof®",
//           name: "Women's Dark Blue Washed Bootcut Jeans",
//           size: "28",
//           price: "1199",
//           image: "/k2.webp",
//           slug: "grey-imported-kurti",
//         },
//       ],
//     },
//   ];

//   const order = orders.find((o) => o.id === id);

//   if (!order)
//     return <div className="p-10 text-center text-xl">Order Not Found</div>;

//   return (
//     <div className="p-6 space-y-6">
//       {/* ---------------- ORDER NUMBER CARD ---------------- */}
//       <div className="bg-white p-6 rounded-xl border shadow-sm flex justify-between items-start">
//         <div>
//           <p className="text-[15px] font-semibold text-gray-800">
//             Order Number
//           </p>
//           <p className="text-gray-600 mt-1 text-[15px]">{order.id}</p>
//         </div>

//         <div className="text-right">
//           <p className="text-[15px] font-semibold text-gray-800">
//             Order Placed
//           </p>
//           <p className="text-gray-600 mt-1 text-[15px]">{order.date}</p>
//         </div>
//       </div>

//       {/* ---------------- ORDER ITEMS ---------------- */}
//       <div className="bg-white p-6 rounded-xl border shadow-sm">
//         <h3 className="font-semibold text-lg mb-4">Order Items</h3>

//         <div className="space-y-6">
//           {order.items.map((item, index) => (
//             <Link
//               key={index}
//               to={`/collection/${item.slug}`}
//               className="flex gap-5 pb-5 border-b last:border-none hover:bg-gray-50 rounded-lg transition"
//             >
//               <div className="w-32 h-40 rounded-lg overflow-hidden bg-white">
//                 <img
//                   src={item.image}
//                   className="w-full h-full object-cover rounded-lg"
//                   alt=""
//                 />
//               </div>

//               <div>
//                 <p className="font-semibold text-lg">{item.brand}</p>
//                 <p className="text-gray-700">{item.name}</p>

//                 <p className="mt-3 text-gray-800">Size: {item.size}</p>

//                 <p className="font-semibold mt-1 text-gray-800">
//                   Price: ₹{item.price}
//                 </p>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>

//       {/* ---------------- ORDER STATUS ---------------- */}
//       <div className="bg-white p-6 rounded-xl border shadow-sm">
//         <p
//           className={`font-semibold text-lg ${
//             order.status === "cancelled" ? "text-red-600" : "text-green-600"
//           }`}
//         >
//           {order.status === "cancelled"
//             ? "✘ Order Cancelled"
//             : "✔ Order Confirmed"}
//         </p>

//         <p className="text-gray-600 mt-1">
//           On {order.date}, {order.time}
//         </p>

//         {/* Progress bar */}
//         <div className="w-full h-2 bg-gray-200 mt-4 rounded">
//           <div
//             className={`h-full bg-orange-400 rounded transition-all duration-500 ${getProgress(
//               order.status
//             )}`}
//           ></div>
//         </div>

//         {/* Action buttons */}
//         <div className="flex items-center gap-6 mt-5">
//           <Link
//             to={`/myaccount/orders/${order.id}/cancel`}
//             className="flex-1 flex items-center justify-center gap-2 py-3 border border-gray-300 rounded-lg
//             text-red-500 font-medium hover:bg-red-50 transition"
//           >
//             <span className="text-lg">✖</span>
//             Cancel
//           </Link>

//           <button
//             disabled
//             className="flex-1 flex items-center justify-center gap-2 py-3 border border-gray-300 rounded-lg
//             text-gray-400 font-medium cursor-not-allowed"
//           >
//             <span className="text-lg">📍</span>
//             Track
//           </button>
//         </div>
//       </div>

//       {/* ---------------- ADDRESS ---------------- */}
//       <div className="bg-white p-6 rounded-xl border shadow-sm">
//         <div className="flex justify-between items-start">
//           <h3 className="font-semibold text-lg">Shipping Address</h3>

//           <span className="px-3 py-1 border border-orange-300 text-orange-700 rounded text-sm">
//             {order.address.label}
//           </span>
//         </div>

//         <p className="mt-3 font-semibold">
//           {order.address.name} | {order.address.mobile}
//         </p>

//         <p className="text-gray-700 mt-1">{order.address.full}</p>
//       </div>

//       {/* ---------------- PRICE + BREAKUP ---------------- */}
//       <div className="bg-white p-6 rounded-xl border shadow-sm">
//         {/* row */}
//         <div className="flex justify-between items-center">
//           <p className="text-xl font-semibold">
//             ₹{order.items.reduce((t, it) => t + Number(it.price), 0)}.00 Total
//             Price
//           </p>

//           <p className="text-gray-700 font-medium">To be paid by COD</p>
//         </div>

//         {/* Breakup Toggle */}
//         <button
//           onClick={() => setShowBreakup(!showBreakup)}
//           className="text-blue-600 font-semibold mt-3 flex items-center gap-1"
//         >
//           View Breakup
//           <span className={showBreakup ? "chevron-up" : "chevron-down"}></span>
//         </button>

//         {/* Breakup Body */}
//         {showBreakup && (
//           <div className="mt-4 space-y-4 text-[15px] animate-fadeIn">
//             <div className="flex justify-between">
//               <p className="text-gray-700">Cart Total</p>
//               <p className="font-medium">₹899</p>
//             </div>

//             <div className="flex justify-between">
//               <p className="text-gray-700">Delivery Fee</p>
//               <p className="text-green-600 font-medium">FREE</p>
//             </div>

//             <div className="flex justify-between">
//               <p className="text-gray-700">COD Fee</p>
//               <p className="font-medium">₹20.00</p>
//             </div>

//             <hr />

//             <div className="flex justify-between font-semibold">
//               <p>Total to be paid</p>
//               <p>₹919.00</p>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* ---------------- HELP ---------------- */}
//       <div className="bg-white p-6 rounded-xl border shadow-sm text-center">
//         <p className="text-blue-600 font-semibold cursor-pointer">Need Help?</p>
//       </div>
//     </div>
//   );
// };

// export default OrderDetails;

import React, { useState, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { IoChevronUp, IoChevronDown } from "react-icons/io5";

const OrderDetails = () => {
  const { id } = useParams();
  const [showBreakup, setShowBreakup] = useState(false);
  const contentRef = useRef(null);

  // Progress bar width based on status
  const getProgress = (status) => {
    switch (status) {
      case "confirmed":
        return "w-1/3";
      case "shipped":
        return "w-2/3";
      case "delivered":
        return "w-full";
      case "cancelled":
        return "w-0";
      default:
        return "w-1/3";
    }
  };

  // SAMPLE ORDER DATA
  const orders = [
    {
      id: "1",
      date: "24 Nov 2025",
      time: "10:16 pm",
      status: "confirmed",
      address: {
        name: "Tushar Patil",
        mobile: "8999197992",
        full: "TALWADE Bk, Saitane road, near hanuman mandir , Dhule, Maharashtra, 425408",
        label: "Home",
      },
      items: [
        {
          brand: "Bewakoof®",
          name: "Women's Dark Blue Washed Bootcut Jeans",
          size: "28",
          price: "1199",
          image: "/k1.webp",
          slug: "peach-kurti",
        },
        {
          brand: "Bewakoof®",
          name: "Women's Dark Blue Washed Bootcut Jeans",
          size: "28",
          price: "1199",
          image: "/k2.webp",
          slug: "grey-imported-kurti",
        },
      ],
    },
    {
      id: "2",
      status: "cancelled",
      date: "24 Nov 2025",
      time: "10:16 pm",
      address: {
        name: "Tushar Patil",
        mobile: "8999197992",
        full: "TALWADE Bk, Saitane road, near hanuman mandir , Dhule, Maharashtra, 425408",
        label: "Home",
      },
      items: [
        {
          brand: "Bewakoof®",
          name: "Women's Dark Blue Washed Bootcut Jeans",
          size: "28",
          price: "1199",
          image: "/k3.webp",
          slug: "grey-imported-kurti",
        },
      ],
    },
  ];

  const order = orders.find((o) => o.id === id);

  if (!order)
    return <div className="p-10 text-center text-xl">Order Not Found</div>;

  return (
    <div className="p-6 space-y-6">
      {/* ---------------- ORDER NUMBER CARD ---------------- */}
      <div className="bg-white p-6 rounded-xl border shadow-sm flex justify-between items-start">
        <div>
          <p className="text-[15px] font-semibold text-gray-800">
            Order Number
          </p>
          <p className="text-gray-600 mt-1 text-[15px]">{order.id}</p>
        </div>

        <div className="text-right">
          <p className="text-[15px] font-semibold text-gray-800">
            Order Placed
          </p>
          <p className="text-gray-600 mt-1 text-[15px]">{order.date}</p>
        </div>
      </div>

      {/* ---------------- ORDER ITEMS ---------------- */}
      <div className="bg-white p-6 rounded-xl border shadow-sm">
        <h3 className="font-semibold text-lg mb-4">Order Items</h3>

        <div className="space-y-6">
          {order.items.map((item, index) => (
            <Link
              key={index}
              to={`/collection/${item.slug}`}
              className="flex gap-5 pb-5 border-b last:border-none hover:bg-gray-50 rounded-lg transition"
            >
              <div className="w-32 h-40 rounded-lg overflow-hidden bg-white">
                <img
                  src={item.image}
                  className="w-full h-full object-cover rounded-lg"
                  alt=""
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
            </Link>
          ))}
        </div>
      </div>

      {/* ---------------- ORDER STATUS ---------------- */}
      <div className="bg-white p-6 rounded-xl border shadow-sm">
        {/* Status text */}
        <p
          className={`font-semibold text-lg ${
            order.status === "cancelled" ? "text-red-600" : "text-green-600"
          }`}
        >
          {order.status === "cancelled"
            ? "✘ Order Cancelled"
            : "✔ Order Confirmed"}
        </p>

        <p className="text-gray-600 mt-1">
          On {order.date}, {order.time}
        </p>

        {/* ONLY SHOW PROGRESS BAR IF NOT CANCELLED */}
        {order.status !== "cancelled" && (
          <>
            {/* Progress bar */}
            <div className="w-full h-2 bg-gray-200 mt-4 rounded">
              <div
                className={`h-full bg-orange-400 rounded transition-all duration-500 ${getProgress(
                  order.status
                )}`}
              ></div>
            </div>

            {/* Action buttons */}
            <div className="flex items-center gap-6 mt-5">
              <Link
                to={`/myaccount/orders/${order.id}/cancel`}
                className="flex-1 flex items-center justify-center gap-2 py-3 border border-gray-300 rounded-lg 
          text-red-500 font-medium hover:bg-red-50 transition"
              >
                <span className="text-lg">✖</span>
                Cancel
              </Link>

              <button
                disabled
                className="flex-1 flex items-center justify-center gap-2 py-3 border border-gray-300 rounded-lg 
          text-gray-400 font-medium cursor-not-allowed"
              >
                <span className="text-lg">📍</span>
                Track
              </button>
            </div>
          </>
        )}
      </div>

      {/* ---------------- ADDRESS ---------------- */}
      <div className="bg-white p-6 rounded-xl border shadow-sm">
        <div className="flex justify-between items-start">
          <h3 className="font-semibold text-lg">Shipping Address</h3>

          <span className="px-3 py-1 border border-orange-300 text-orange-700 rounded text-sm">
            {order.address.label}
          </span>
        </div>

        <p className="mt-3 font-semibold">
          {order.address.name} | {order.address.mobile}
        </p>

        <p className="text-gray-700 mt-1">{order.address.full}</p>
      </div>

      {/* ---------------- PRICE + BREAKUP ---------------- */}
      <div className="bg-white p-6 rounded-xl border shadow-sm">
        {/* top row */}
        <div className="flex justify-between items-center">
          <p className="text-xl font-semibold">
            ₹{order.items.reduce((t, it) => t + Number(it.price), 0)}.00 Total
            Price
          </p>

          <p className="text-gray-700 font-medium">To be paid by COD</p>
        </div>

        {/* View Breakup Toggle */}
        <div
          className="flex items-center gap-1 mt-2 cursor-pointer w-fit"
          onClick={() => setShowBreakup(!showBreakup)}
        >
          <p className="text-blue-600 font-semibold">View Breakup</p>

          <span
            className={`transition-transform duration-300 ${
              showBreakup ? "rotate-180" : "rotate-0"
            }`}
          >
            <IoChevronUp className="text-lg text-blue-600" />
          </span>
        </div>

        {/* ---------- Smooth Collapse Section (copied from CartSummary) ---------- */}
        <div
          ref={contentRef}
          style={{
            maxHeight: showBreakup ? contentRef.current?.scrollHeight : 0,
          }}
          className="overflow-hidden transition-all duration-500 ease-in-out"
        >
          <div className="mt-4 space-y-4 text-[15px] opacity-100 transition-opacity duration-300">
            {/* Cart Total */}
            <div className="flex justify-between">
              <span>Cart Total</span>
              <span className="font-medium">₹899</span>
            </div>

            {/* Delivery */}
            <div className="flex justify-between">
              <span>Delivery Fee</span>
              <span className="font-medium text-green-600">FREE</span>
            </div>

            {/* COD Fee */}
            <div className="flex justify-between">
              <span>COD Fee</span>
              <span className="font-medium">₹20.00</span>
            </div>

            <hr />

            <div className="flex justify-between font-semibold">
              <p>Total to be paid</p>
              <p>₹919.00</p>
            </div>
          </div>
        </div>
      </div>

      {/* ---------------- HELP ---------------- */}
      <div className="bg-white p-6 rounded-xl border shadow-sm text-center">
        <p className="text-blue-600 font-semibold cursor-pointer">Need Help?</p>
      </div>
    </div>
  );
};

export default OrderDetails;
