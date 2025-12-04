// // // // // // import React, { useState, useRef } from "react";
// // // // // // import { useParams, Link } from "react-router-dom";
// // // // // // import { IoChevronUp } from "react-icons/io5";
// // // // // // import { CheckCircle, Truck, Package, Star } from "lucide-react";

// // // // // // const OrderDetails = () => {
// // // // // //   const { id } = useParams();
// // // // // //   const [showBreakup, setShowBreakup] = useState(false);
// // // // // //   const contentRef = useRef(null);
// // // // // //   const trackSectionRef = useRef(null);

// // // // // //   /** PROGRESS WIDTH BASED ON STATUS **/
// // // // // //   const getProgress = (status) => {
// // // // // //     switch (status) {
// // // // // //       case "confirmed":
// // // // // //         return "w-1/4";
// // // // // //       case "shipped":
// // // // // //         return "w-2/4";
// // // // // //       case "out-for-delivery":
// // // // // //         return "w-3/4";
// // // // // //       case "delivered":
// // // // // //         return "w-full";
// // // // // //       default:
// // // // // //         return "w-1/4";
// // // // // //     }
// // // // // //   };

// // // // // //   /** SAMPLE ORDER DATA **/
// // // // // //   const orders = [
// // // // // //     {
// // // // // //       id: "1",
// // // // // //       date: "24 Nov 2025",
// // // // // //       time: "10:16 pm",
// // // // // //       status: "shipped", // change to simulate
// // // // // //       eta: "29 Nov 2025",
// // // // // //       deliveredOn: "29 Nov 2025",
// // // // // //       address: {
// // // // // //         name: "Tushar Patil",
// // // // // //         mobile: "8999197992",
// // // // // //         full: "TALWADE Bk, Saitane road, near hanuman mandir , Dhule, Maharashtra, 425408",
// // // // // //         label: "Home",
// // // // // //       },
// // // // // //       userReview: null,
// // // // // //       items: [
// // // // // //         {
// // // // // //           brand: "Bewakoof®",
// // // // // //           name: "Women's Dark Blue Washed Bootcut Jeans",
// // // // // //           size: "28",
// // // // // //           price: "1199",
// // // // // //           image: "/k1.webp",
// // // // // //           slug: "peach-kurti",
// // // // // //         },
// // // // // //       ],
// // // // // //     },
// // // // // //   ];

// // // // // //   const order = orders.find((o) => o.id === id);
// // // // // //   if (!order)
// // // // // //     return <div className="p-10 text-center text-xl">Order Not Found</div>;

// // // // // //   /** SCROLL TO TRACKING SECTION **/
// // // // // //   const scrollToTracking = () => {
// // // // // //     setTimeout(() => {
// // // // // //       trackSectionRef.current?.scrollIntoView({ behavior: "smooth" });
// // // // // //     }, 100);
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className="p-6 space-y-6">
// // // // // //       {/* ---------------- ORDER NUMBER ---------------- */}
// // // // // //       <div className="bg-white p-6 rounded-xl border shadow-sm flex justify-between">
// // // // // //         <div>
// // // // // //           <p className="font-semibold text-gray-800">Order Number</p>
// // // // // //           <p className="text-gray-600 mt-1">{order.id}</p>
// // // // // //         </div>

// // // // // //         <div className="text-right">
// // // // // //           <p className="font-semibold text-gray-800">Order Placed</p>
// // // // // //           <p className="text-gray-600 mt-1">{order.date}</p>
// // // // // //         </div>
// // // // // //       </div>

// // // // // //       {/* ---------------- ITEMS ---------------- */}
// // // // // //       <div className="bg-white p-6 rounded-xl border shadow-sm">
// // // // // //         <h3 className="font-semibold text-lg mb-4">Order Items</h3>

// // // // // //         {order.items.map((item, index) => (
// // // // // //           <Link
// // // // // //             key={index}
// // // // // //             to={`/collection/${item.slug}`}
// // // // // //             className="flex gap-5 pb-5 border-b last:border-none hover:bg-gray-50 rounded-lg transition"
// // // // // //           >
// // // // // //             <div className="w-32 h-40 rounded-lg overflow-hidden">
// // // // // //               <img src={item.image} className="w-full h-full object-cover" />
// // // // // //             </div>

// // // // // //             <div>
// // // // // //               <p className="font-semibold text-lg">{item.brand}</p>
// // // // // //               <p className="text-gray-700">{item.name}</p>
// // // // // //               <p className="mt-3 text-gray-800">Size: {item.size}</p>
// // // // // //               <p className="font-semibold mt-1 text-gray-800">₹{item.price}</p>
// // // // // //             </div>
// // // // // //           </Link>
// // // // // //         ))}
// // // // // //       </div>

// // // // // //       {/* ---------------- STATUS BLOCK ---------------- */}
// // // // // //       <div className="bg-white p-6 rounded-xl border shadow-sm">
// // // // // //         {order.status === "cancelled" && (
// // // // // //           <p className="text-red-600 font-semibold text-lg">
// // // // // //             ✘ Order Cancelled
// // // // // //           </p>
// // // // // //         )}

// // // // // //         {order.status === "confirmed" && (
// // // // // //           <>
// // // // // //             <p className="text-green-600 font-semibold text-lg">
// // // // // //               ✔ Order Confirmed
// // // // // //             </p>
// // // // // //             <p className="text-gray-700">
// // // // // //               On {order.date}, {order.time}
// // // // // //             </p>
// // // // // //           </>
// // // // // //         )}

// // // // // //         {order.status === "shipped" && (
// // // // // //           <>
// // // // // //             <div className="flex items-center gap-2 mb-2">
// // // // // //               <Truck size={22} className="text-primary" />
// // // // // //               <p className="text-primary font-semibold text-lg">
// // // // // //                 Order Shipped
// // // // // //               </p>
// // // // // //             </div>

// // // // // //             <p className="text-gray-700">Arriving by {order.eta}</p>
// // // // // //           </>
// // // // // //         )}

// // // // // //         {order.status === "delivered" && (
// // // // // //           <>
// // // // // //             <div className="flex items-center gap-2 mb-2">
// // // // // //               <CheckCircle size={22} className="text-green-600" />
// // // // // //               <p className="text-green-700 font-semibold text-lg">
// // // // // //                 Delivered Successfully
// // // // // //               </p>
// // // // // //             </div>

// // // // // //             <p className="text-gray-700">Delivered on {order.deliveredOn}</p>
// // // // // //           </>
// // // // // //         )}

// // // // // //         {/* PROGRESS BAR */}
// // // // // //         {order.status !== "cancelled" && (
// // // // // //           <div className="w-full h-2 bg-gray-200 mt-5 rounded">
// // // // // //             <div
// // // // // //               className={`h-full bg-orange-400 rounded transition-all duration-500 ${getProgress(
// // // // // //                 order.status
// // // // // //               )}`}
// // // // // //             ></div>
// // // // // //           </div>
// // // // // //         )}

// // // // // //         {/* ----- ACTION BUTTONS: MATCH BEWAKOOF COMPLETELY ----- */}
// // // // // //         <div className="flex items-center gap-6 mt-6">
// // // // // //           {/* CANCEL ACTIVE only in confirmed */}
// // // // // //           {order.status === "confirmed" && (
// // // // // //             <Link
// // // // // //               to={`/myaccount/orders/${order.id}/cancel`}
// // // // // //               className="flex-1 flex items-center justify-center gap-2 py-3 border border-gray-300 rounded-lg
// // // // // //               text-red-500 font-medium hover:bg-red-50 transition"
// // // // // //             >
// // // // // //               ✖ Cancel
// // // // // //             </Link>
// // // // // //           )}

// // // // // //           {/* CANCEL DISABLED in shipped */}
// // // // // //           {order.status === "shipped" && (
// // // // // //             <button
// // // // // //               disabled
// // // // // //               className="flex-1 flex items-center justify-center py-3 border border-gray-300 rounded-lg
// // // // // //               text-gray-400 cursor-not-allowed"
// // // // // //             >
// // // // // //               ✖ Cancel
// // // // // //             </button>
// // // // // //           )}

// // // // // //           {/* TRACK BUTTON: DISABLED in confirmed */}
// // // // // //           {order.status === "confirmed" && (
// // // // // //             <button
// // // // // //               disabled
// // // // // //               className="flex-1 flex items-center justify-center py-3 border border-gray-300 rounded-lg
// // // // // //               text-gray-400 cursor-not-allowed"
// // // // // //             >
// // // // // //               📍 Track
// // // // // //             </button>
// // // // // //           )}

// // // // // //           {/* TRACK BUTTON: ACTIVE in shipped */}
// // // // // //           {order.status === "shipped" && (
// // // // // //             <button
// // // // // //               onClick={scrollToTracking}
// // // // // //               className="flex-1 flex items-center justify-center py-3 border border-blue-400 text-blue-600
// // // // // //               rounded-lg font-semibold hover:bg-blue-50 transition"
// // // // // //             >
// // // // // //               📍 Track
// // // // // //             </button>
// // // // // //           )}

// // // // // //           {/* REVIEW BUTTON for delivered */}
// // // // // //           {order.status === "delivered" && (
// // // // // //             <button
// // // // // //               className="flex-1 flex items-center justify-center gap-2 py-3 bg-primary text-white rounded-lg
// // // // // //             hover:bg-secondary transition"
// // // // // //             >
// // // // // //               <Star size={18} /> Write a Review
// // // // // //             </button>
// // // // // //           )}
// // // // // //         </div>
// // // // // //       </div>

// // // // // //       {/* ---------------- SHIPPING ADDRESS ---------------- */}
// // // // // //       <div className="bg-white p-6 rounded-xl border shadow-sm">
// // // // // //         <div className="flex justify-between items-start">
// // // // // //           <h3 className="font-semibold text-lg">Shipping Address</h3>
// // // // // //           <span className="px-3 py-1 border border-orange-300 text-orange-700 rounded text-sm">
// // // // // //             {order.address.label}
// // // // // //           </span>
// // // // // //         </div>

// // // // // //         <p className="mt-3 font-semibold">
// // // // // //           {order.address.name} | {order.address.mobile}
// // // // // //         </p>

// // // // // //         <p className="text-gray-700 mt-1">{order.address.full}</p>
// // // // // //       </div>

// // // // // //       {/* ---------------- PRICE BREAKUP ---------------- */}
// // // // // //       <div className="bg-white p-6 rounded-xl border shadow-sm">
// // // // // //         <div className="flex justify-between items-center">
// // // // // //           <p className="text-xl font-semibold">
// // // // // //             ₹{order.items.reduce((t, i) => t + Number(i.price), 0)}.00 Total
// // // // // //             Price
// // // // // //           </p>
// // // // // //           <p className="text-gray-700 font-medium">To be paid by COD</p>
// // // // // //         </div>

// // // // // //         <div
// // // // // //           onClick={() => setShowBreakup(!showBreakup)}
// // // // // //           className="flex items-center mt-2 cursor-pointer w-fit"
// // // // // //         >
// // // // // //           <p className="text-blue-600 font-semibold">View Breakup</p>
// // // // // //           <IoChevronUp
// // // // // //             className={`text-lg text-blue-600 transition-transform ${
// // // // // //               showBreakup ? "rotate-180" : "rotate-0"
// // // // // //             }`}
// // // // // //           />
// // // // // //         </div>

// // // // // //         <div
// // // // // //           ref={contentRef}
// // // // // //           style={{
// // // // // //             maxHeight: showBreakup ? contentRef.current?.scrollHeight : 0,
// // // // // //           }}
// // // // // //           className="overflow-hidden transition-all duration-500"
// // // // // //         >
// // // // // //           <div className="mt-4 space-y-4 text-[15px]">
// // // // // //             <div className="flex justify-between">
// // // // // //               <span>Cart Total</span>
// // // // // //               <span className="font-medium">₹899</span>
// // // // // //             </div>

// // // // // //             <div className="flex justify-between">
// // // // // //               <span>Delivery Fee</span>
// // // // // //               <span className="font-medium text-green-600">FREE</span>
// // // // // //             </div>

// // // // // //             <div className="flex justify-between">
// // // // // //               <span>COD Fee</span>
// // // // // //               <span className="font-medium">₹20</span>
// // // // // //             </div>

// // // // // //             <hr />
// // // // // //             <div className="flex justify-between font-semibold">
// // // // // //               <p>Total to be paid</p>
// // // // // //               <p>₹919.00</p>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </div>

// // // // // //       {/* ---------------- HELP ---------------- */}
// // // // // //       <div className="bg-white p-6 rounded-xl border shadow-sm text-center">
// // // // // //         <p className="text-blue-600 font-semibold cursor-pointer">Need Help?</p>
// // // // // //       </div>

// // // // // //       {/* ---------------- TRACKING TIMELINE SECTION ---------------- */}
// // // // // //       {(order.status === "shipped" || order.status === "delivered") && (
// // // // // //         <div
// // // // // //           ref={trackSectionRef}
// // // // // //           className="bg-white p-6 rounded-xl border shadow-sm"
// // // // // //         >
// // // // // //           <h2 className="font-semibold text-lg mb-4">Track Your Order</h2>

// // // // // //           <p className="text-gray-700 mb-2">
// // // // // //             Status:{" "}
// // // // // //             <span className="font-semibold capitalize">{order.status}</span>
// // // // // //           </p>

// // // // // //           <p className="text-gray-700">
// // // // // //             Courier Partner: <span className="font-semibold">Xpressbees</span>
// // // // // //           </p>

// // // // // //           <p className="text-gray-700 mt-1">
// // // // // //             AWS/Tracking ID:{" "}
// // // // // //             <span className="font-semibold text-primary">125852132149</span>
// // // // // //           </p>

// // // // // //           <hr className="my-4" />

// // // // // //           {/* TIMELINE */}
// // // // // //           <div className="space-y-8">
// // // // // //             {/* Arriving */}
// // // // // //             <div className="flex items-start gap-4">
// // // // // //               <div className="relative flex flex-col items-center">
// // // // // //                 <span className="relative z-10 w-6 h-6 flex items-center justify-center">
// // // // // //                   <CheckCircle size={20} className="text-green-600" />
// // // // // //                 </span>

// // // // // //                 <span className="w-[2px] bg-green-600 flex-1"></span>
// // // // // //               </div>

// // // // // //               <div>
// // // // // //                 <h4 className="font-semibold text-green-700">Arriving By</h4>
// // // // // //                 <p className="text-gray-700">{order.eta}</p>
// // // // // //               </div>
// // // // // //             </div>

// // // // // //             {/* In Transit */}
// // // // // //             <div className="flex items-start gap-4">
// // // // // //               <div className="relative flex flex-col items-center">
// // // // // //                 <span className="relative z-10 w-6 h-6 flex items-center justify-center">
// // // // // //                   <CheckCircle size={20} className="text-green-600" />
// // // // // //                 </span>

// // // // // //                 <span className="w-[2px] bg-green-600 flex-1"></span>
// // // // // //               </div>

// // // // // //               <div>
// // // // // //                 <h4 className="font-semibold text-green-700">In Transit On</h4>
// // // // // //                 <p className="text-gray-700">28 November 2025</p>
// // // // // //               </div>
// // // // // //             </div>

// // // // // //             {/* Picked Up */}
// // // // // //             <div className="flex items-start gap-4">
// // // // // //               <div className="relative flex flex-col items-center">
// // // // // //                 <span className="relative z-10 w-6 h-6 flex items-center justify-center">
// // // // // //                   <Package size={20} className="text-green-600" />
// // // // // //                 </span>

// // // // // //                 <span className="w-[2px] bg-green-600 flex-1"></span>
// // // // // //               </div>

// // // // // //               <div>
// // // // // //                 <h4 className="font-semibold text-green-700">Picked Up On</h4>
// // // // // //                 <p className="text-gray-700">27 November 2025</p>
// // // // // //               </div>
// // // // // //             </div>

// // // // // //             {/* Order Placed */}
// // // // // //             <div className="flex items-start gap-4">
// // // // // //               <div className="relative flex flex-col items-center">
// // // // // //                 <span className="relative z-10 w-6 h-6 flex items-center justify-center">
// // // // // //                   <Package size={20} className="text-green-600" />
// // // // // //                 </span>

// // // // // //                 <span className="w-[2px] bg-green-600 flex-1 opacity-0"></span>
// // // // // //               </div>

// // // // // //               <div>
// // // // // //                 <h4 className="font-semibold text-green-700">
// // // // // //                   Order Placed On
// // // // // //                 </h4>
// // // // // //                 <p className="text-gray-700">{order.date}</p>
// // // // // //               </div>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       )}
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default OrderDetails;

// // // // // import React, { useState, useRef } from "react";
// // // // // import { useParams, Link } from "react-router-dom";
// // // // // import { IoChevronUp } from "react-icons/io5";
// // // // // import { CheckCircle, Truck, Package, Star } from "lucide-react";

// // // // // const OrderDetails = () => {
// // // // //   const { id } = useParams();
// // // // //   const [showBreakup, setShowBreakup] = useState(false);
// // // // //   const contentRef = useRef(null);
// // // // //   const trackSectionRef = useRef(null);

// // // // //   /** PROGRESS WIDTH */
// // // // //   const getProgress = (status) => {
// // // // //     switch (status) {
// // // // //       case "confirmed":
// // // // //         return "w-1/4";
// // // // //       case "shipped":
// // // // //         return "w-2/4";
// // // // //       case "out-for-delivery":
// // // // //         return "w-3/4";
// // // // //       case "delivered":
// // // // //         return "w-full";
// // // // //       default:
// // // // //         return "w-1/4";
// // // // //     }
// // // // //   };

// // // // //   /** SAMPLE ORDER DATA */
// // // // //   const orders = [
// // // // //     {
// // // // //       id: "1",
// // // // //       date: "24 Nov 2025",
// // // // //       time: "10:16 pm",
// // // // //       status: "delivered", // change to confirmed | shipped | delivered
// // // // //       eta: "29 Nov 2025",
// // // // //       pickedOn: "27 Nov 2025",
// // // // //       transitDate: "28 Nov 2025",
// // // // //       deliveredOn: "29 Nov 2025",
// // // // //       address: {
// // // // //         name: "Tushar Patil",
// // // // //         mobile: "8999197992",
// // // // //         full: "TALWADE Bk, Saitane road, near hanuman mandir , Dhule, Maharashtra, 425408",
// // // // //         label: "Home",
// // // // //       },
// // // // //       userReview: null,
// // // // //       items: [
// // // // //         {
// // // // //           brand: "Bewakoof®",
// // // // //           name: "Women's Dark Blue Washed Bootcut Jeans",
// // // // //           size: "28",
// // // // //           price: "1199",
// // // // //           image: "/k1.webp",
// // // // //           slug: "peach-kurti",
// // // // //         },
// // // // //       ],
// // // // //     },
// // // // //   ];

// // // // //   const order = orders.find((o) => o.id === id);
// // // // //   if (!order)
// // // // //     return <div className="p-10 text-center text-xl">Order Not Found</div>;

// // // // //   /** SCROLL TO TRACK SECTION */
// // // // //   const scrollToTracking = () => {
// // // // //     setTimeout(() => {
// // // // //       trackSectionRef.current?.scrollIntoView({ behavior: "smooth" });
// // // // //     }, 100);
// // // // //   };

// // // // //   /** CORRECT TIMELINE ORDER */
// // // // //   const steps = [
// // // // //     { label: "Order Placed On", date: order.date },
// // // // //     { label: "Picked Up On", date: order.pickedOn },
// // // // //     { label: "In Transit On", date: order.transitDate },
// // // // //     { label: "Arriving By", date: order.eta },
// // // // //     { label: "Delivered On", date: order.deliveredOn },
// // // // //   ];

// // // // //   const statusIndexMap = {
// // // // //     confirmed: 0, // only order placed is green
// // // // //     shipped: 2, // placed + picked + transit are green
// // // // //     "out-for-delivery": 3,
// // // // //     delivered: 4,
// // // // //   };

// // // // //   const completedIndex = statusIndexMap[order.status];

// // // // //   return (
// // // // //     <div className="p-6 space-y-6">
// // // // //       {/* ORDER NUMBER */}
// // // // //       <div className="bg-white p-6 rounded-xl border shadow-sm flex justify-between">
// // // // //         <div>
// // // // //           <p className="font-semibold text-gray-800">Order Number</p>
// // // // //           <p className="text-gray-600 mt-1">{order.id}</p>
// // // // //         </div>

// // // // //         <div className="text-right">
// // // // //           <p className="font-semibold text-gray-800">Order Placed</p>
// // // // //           <p className="text-gray-600 mt-1">{order.date}</p>
// // // // //         </div>
// // // // //       </div>

// // // // //       {/* ITEMS */}
// // // // //       <div className="bg-white p-6 rounded-xl border shadow-sm">
// // // // //         <h3 className="font-semibold text-lg mb-4">Order Items</h3>

// // // // //         {order.items.map((item, index) => (
// // // // //           <Link
// // // // //             key={index}
// // // // //             to={`/collection/${item.slug}`}
// // // // //             className="flex gap-5 pb-5 border-b last:border-none hover:bg-gray-50 rounded-lg transition"
// // // // //           >
// // // // //             <div className="w-32 h-40 rounded-lg overflow-hidden">
// // // // //               <img src={item.image} className="w-full h-full object-cover" />
// // // // //             </div>

// // // // //             <div>
// // // // //               <p className="font-semibold text-lg">{item.brand}</p>
// // // // //               <p className="text-gray-700">{item.name}</p>
// // // // //               <p className="mt-3 text-gray-800">Size: {item.size}</p>
// // // // //               <p className="font-semibold mt-1 text-gray-800">₹{item.price}</p>
// // // // //             </div>
// // // // //           </Link>
// // // // //         ))}
// // // // //       </div>

// // // // //       {/* STATUS BLOCK */}
// // // // //       <div className="bg-white p-6 rounded-xl border shadow-sm">
// // // // //         {order.status === "confirmed" && (
// // // // //           <>
// // // // //             <p className="text-green-600 font-semibold text-lg">
// // // // //               ✔ Order Confirmed
// // // // //             </p>
// // // // //             <p className="text-gray-700">
// // // // //               On {order.date}, {order.time}
// // // // //             </p>
// // // // //           </>
// // // // //         )}

// // // // //         {order.status === "shipped" && (
// // // // //           <>
// // // // //             <div className="flex items-center gap-2 mb-2">
// // // // //               <Truck size={22} className="text-primary" />
// // // // //               <p className="text-primary font-semibold text-lg">
// // // // //                 Order Shipped
// // // // //               </p>
// // // // //             </div>
// // // // //             <p className="text-gray-700">Arriving by {order.eta}</p>
// // // // //           </>
// // // // //         )}

// // // // //         {order.status === "delivered" && (
// // // // //           <>
// // // // //             <div className="flex items-center gap-2 mb-2">
// // // // //               <CheckCircle size={22} className="text-green-600" />
// // // // //               <p className="text-green-700 font-semibold text-lg">
// // // // //                 Delivered Successfully
// // // // //               </p>
// // // // //             </div>
// // // // //             <p className="text-gray-700">Delivered on {order.deliveredOn}</p>
// // // // //           </>
// // // // //         )}

// // // // //         {/* PROGRESS BAR */}
// // // // //         {order.status !== "cancelled" && (
// // // // //           <div className="w-full h-2 bg-gray-200 mt-5 rounded">
// // // // //             <div
// // // // //               className={`h-full bg-orange-400 rounded transition-all duration-500 ${getProgress(
// // // // //                 order.status
// // // // //               )}`}
// // // // //             ></div>
// // // // //           </div>
// // // // //         )}

// // // // //         {/* ACTION BUTTONS */}
// // // // //         <div className="flex items-center gap-6 mt-6">
// // // // //           {order.status === "confirmed" && (
// // // // //             <>
// // // // //               <Link
// // // // //                 to={`/myaccount/orders/${order.id}/cancel`}
// // // // //                 className="flex-1 flex items-center justify-center py-3 border border-gray-300 rounded-lg
// // // // //                 text-red-500 font-medium hover:bg-red-50 transition"
// // // // //               >
// // // // //                 ✖ Cancel
// // // // //               </Link>

// // // // //               <button
// // // // //                 disabled
// // // // //                 className="flex-1 py-3 border border-gray-300 rounded-lg text-gray-400 cursor-not-allowed"
// // // // //               >
// // // // //                 📍 Track
// // // // //               </button>
// // // // //             </>
// // // // //           )}

// // // // //           {order.status === "shipped" && (
// // // // //             <>
// // // // //               <button
// // // // //                 disabled
// // // // //                 className="flex-1 py-3 border border-gray-300 rounded-lg text-gray-400 cursor-not-allowed"
// // // // //               >
// // // // //                 ✖ Cancel
// // // // //               </button>

// // // // //               <button
// // // // //                 onClick={scrollToTracking}
// // // // //                 className="flex-1 py-3 border border-blue-400 text-blue-600
// // // // //                 rounded-lg font-semibold hover:bg-blue-50 transition"
// // // // //               >
// // // // //                 📍 Track
// // // // //               </button>
// // // // //             </>
// // // // //           )}

// // // // //           {order.status === "delivered" && (
// // // // //             <button className="flex-1 flex items-center justify-center gap-2 py-3 bg-primary text-white rounded-lg hover:bg-secondary transition">
// // // // //               <Star size={18} /> Write a Review
// // // // //             </button>
// // // // //           )}
// // // // //         </div>
// // // // //       </div>

// // // // //       {/* SHIPPING ADDRESS */}
// // // // //       <div className="bg-white p-6 rounded-xl border shadow-sm">
// // // // //         <div className="flex justify-between items-start">
// // // // //           <h3 className="font-semibold text-lg">Shipping Address</h3>
// // // // //           <span className="px-3 py-1 border border-orange-300 text-orange-700 rounded text-sm">
// // // // //             {order.address.label}
// // // // //           </span>
// // // // //         </div>

// // // // //         <p className="mt-3 font-semibold">
// // // // //           {order.address.name} | {order.address.mobile}
// // // // //         </p>

// // // // //         <p className="text-gray-700 mt-1">{order.address.full}</p>
// // // // //       </div>

// // // // //       {/* PRICE BREAKUP */}
// // // // //       <div className="bg-white p-6 rounded-xl border shadow-sm">
// // // // //         <div className="flex justify-between items-center">
// // // // //           <p className="text-xl font-semibold">
// // // // //             ₹{order.items.reduce((t, i) => t + Number(i.price), 0)}.00 Total
// // // // //             Price
// // // // //           </p>
// // // // //           <p className="text-gray-700 font-medium">To be paid by COD</p>
// // // // //         </div>

// // // // //         <div
// // // // //           onClick={() => setShowBreakup(!showBreakup)}
// // // // //           className="flex items-center mt-2 cursor-pointer w-fit"
// // // // //         >
// // // // //           <p className="text-blue-600 font-semibold">View Breakup</p>
// // // // //           <IoChevronUp
// // // // //             className={`text-lg text-blue-600 transition-transform ${
// // // // //               showBreakup ? "rotate-180" : "rotate-0"
// // // // //             }`}
// // // // //           />
// // // // //         </div>

// // // // //         <div
// // // // //           ref={contentRef}
// // // // //           style={{
// // // // //             maxHeight: showBreakup ? contentRef.current?.scrollHeight : 0,
// // // // //           }}
// // // // //           className="overflow-hidden transition-all duration-500"
// // // // //         >
// // // // //           <div className="mt-4 space-y-4 text-[15px]">
// // // // //             <div className="flex justify-between">
// // // // //               <span>Cart Total</span>
// // // // //               <span className="font-medium">₹899</span>
// // // // //             </div>

// // // // //             <div className="flex justify-between">
// // // // //               <span>Delivery Fee</span>
// // // // //               <span className="font-medium text-green-600">FREE</span>
// // // // //             </div>

// // // // //             <div className="flex justify-between">
// // // // //               <span>COD Fee</span>
// // // // //               <span className="font-medium">₹20</span>
// // // // //             </div>

// // // // //             <hr />
// // // // //             <div className="flex justify-between font-semibold">
// // // // //               <p>Total to be paid</p>
// // // // //               <p>₹919.00</p>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>

// // // // //       {/* HELP */}
// // // // //       <div className="bg-white p-6 rounded-xl border shadow-sm text-center">
// // // // //         <p className="text-blue-600 font-semibold cursor-pointer">Need Help?</p>
// // // // //       </div>

// // // // //       {/* TRACKING SECTION */}
// // // // //       {(order.status === "shipped" || order.status === "delivered") && (
// // // // //         <div
// // // // //           ref={trackSectionRef}
// // // // //           className="bg-white p-6 rounded-xl border shadow-sm"
// // // // //         >
// // // // //           <h2 className="font-semibold text-lg mb-4">Track Your Order</h2>

// // // // //           <p className="text-gray-700 mb-2">
// // // // //             Status:{" "}
// // // // //             <span className="font-semibold capitalize">{order.status}</span>
// // // // //           </p>

// // // // //           <p className="text-gray-700">
// // // // //             Courier Partner: <span className="font-semibold">Xpressbees</span>
// // // // //           </p>

// // // // //           <p className="text-gray-700 mt-1">
// // // // //             AWS/Tracking ID:{" "}
// // // // //             <span className="font-semibold text-primary">125852132149</span>
// // // // //           </p>

// // // // //           <hr className="my-4" />

// // // // //           {/* TIMELINE */}
// // // // //           <div className="space-y-10 mt-4">
// // // // //             {steps.map((step, index) => {
// // // // //               const isDone = index <= completedIndex;
// // // // //               const isLast = index === steps.length - 1;

// // // // //               return (
// // // // //                 <div key={index} className="flex items-start gap-4">
// // // // //                   {/* ICON + LINE */}
// // // // //                   <div className="flex flex-col items-center relative">
// // // // //                     {/* ICON */}
// // // // //                     <span className="w-6 h-6 flex items-center justify-center relative z-10">
// // // // //                       {isDone ? (
// // // // //                         <CheckCircle size={22} className="text-green-600" />
// // // // //                       ) : (
// // // // //                         <Package size={20} className="text-gray-400" />
// // // // //                       )}
// // // // //                     </span>

// // // // //                     {/* LINE */}
// // // // //                     {!isLast && (
// // // // //                       <span
// // // // //                         className={`w-[2px] flex-1 ${
// // // // //                           isDone ? "bg-green-600" : "bg-gray-300"
// // // // //                         }`}
// // // // //                       ></span>
// // // // //                     )}
// // // // //                   </div>

// // // // //                   {/* TEXT */}
// // // // //                   <div>
// // // // //                     <h4
// // // // //                       className={`font-semibold ${
// // // // //                         isDone ? "text-green-700" : "text-gray-600"
// // // // //                       }`}
// // // // //                     >
// // // // //                       {step.label}
// // // // //                     </h4>
// // // // //                     <p className="text-gray-700">{step.date}</p>
// // // // //                   </div>
// // // // //                 </div>
// // // // //               );
// // // // //             })}
// // // // //           </div>
// // // // //         </div>
// // // // //       )}
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default OrderDetails;

// // // // import React, { useState, useRef } from "react";
// // // // import { useParams, Link } from "react-router-dom";
// // // // import { IoChevronUp } from "react-icons/io5";
// // // // import { CheckCircle, Truck, Package, Star } from "lucide-react";

// // // // const OrderDetails = () => {
// // // //   const { id } = useParams();
// // // //   const [showBreakup, setShowBreakup] = useState(false);
// // // //   const contentRef = useRef(null);
// // // //   const trackSectionRef = useRef(null);

// // // //   /** --------------------------
// // // //    *  REVIEW MODAL STATES
// // // //    --------------------------- **/
// // // //   const [openReviewModal, setOpenReviewModal] = useState(false);
// // // //   const [rating, setRating] = useState(0);
// // // //   const [reviewText, setReviewText] = useState("");

// // // //   /** --------------------------
// // // //    *  RETURN MODAL STATES
// // // //    --------------------------- **/
// // // //   const [openReturnModal, setOpenReturnModal] = useState(false);
// // // //   const [returnReason, setReturnReason] = useState("");
// // // //   const [returnStatus, setReturnStatus] = useState(null);

// // // //   /** PROGRESS WIDTH */
// // // //   const getProgress = (status) => {
// // // //     switch (status) {
// // // //       case "confirmed":
// // // //         return "w-1/4";
// // // //       case "shipped":
// // // //         return "w-2/4";
// // // //       case "out-for-delivery":
// // // //         return "w-3/4";
// // // //       case "delivered":
// // // //         return "w-full";
// // // //       default:
// // // //         return "w-1/4";
// // // //     }
// // // //   };

// // // //   /** SAMPLE DATA (use API later) */
// // // //   const orders = [
// // // //     {
// // // //       id: "1",
// // // //       date: "24 Nov 2025",
// // // //       time: "10:16 pm",
// // // //       status: "delivered", // change to test
// // // //       eta: "29 Nov 2025",
// // // //       pickedOn: "27 Nov 2025",
// // // //       transitDate: "28 Nov 2025",
// // // //       deliveredOn: "29 Nov 2025",
// // // //       address: {
// // // //         name: "Tushar Patil",
// // // //         mobile: "8999197992",
// // // //         full: "TALWADE Bk, Saitane road, near hanuman mandir , Dhule, Maharashtra, 425408",
// // // //         label: "Home",
// // // //       },
// // // //       userReview: null,
// // // //       items: [
// // // //         {
// // // //           brand: "Bewakoof®",
// // // //           name: "Women's Dark Blue Washed Bootcut Jeans",
// // // //           size: "28",
// // // //           price: "1199",
// // // //           image: "/k1.webp",
// // // //           slug: "peach-kurti",
// // // //         },
// // // //       ],
// // // //     },
// // // //   ];

// // // //   const order = orders.find((o) => o.id === id);
// // // //   if (!order)
// // // //     return <div className="p-10 text-center text-xl">Order Not Found</div>;

// // // //   /** SCROLL TO TRACK */
// // // //   const scrollToTracking = () => {
// // // //     setTimeout(() => {
// // // //       trackSectionRef.current?.scrollIntoView({ behavior: "smooth" });
// // // //     }, 100);
// // // //   };

// // // //   /** TIMELINE ORDER */
// // // //   const steps = [
// // // //     { label: "Order Placed On", date: order.date },
// // // //     { label: "Picked Up On", date: order.pickedOn },
// // // //     { label: "In Transit On", date: order.transitDate },
// // // //     { label: "Arriving By", date: order.eta },
// // // //     { label: "Delivered On", date: order.deliveredOn },
// // // //   ];

// // // //   const statusIndexMap = {
// // // //     confirmed: 0,
// // // //     shipped: 2,
// // // //     "out-for-delivery": 3,
// // // //     delivered: 4,
// // // //   };

// // // //   const completedIndex = statusIndexMap[order.status];

// // // //   return (
// // // //     <div className="p-6 space-y-6">
// // // //       {/* ORDER NUMBER */}
// // // //       <div className="bg-white p-6 rounded-xl border shadow-sm flex justify-between">
// // // //         <div>
// // // //           <p className="font-semibold text-gray-800">Order Number</p>
// // // //           <p className="text-gray-600 mt-1">{order.id}</p>
// // // //         </div>

// // // //         <div className="text-right">
// // // //           <p className="font-semibold text-gray-800">Order Placed</p>
// // // //           <p className="text-gray-600 mt-1">{order.date}</p>
// // // //         </div>
// // // //       </div>

// // // //       {/* ITEMS */}
// // // //       <div className="bg-white p-6 rounded-xl border shadow-sm">
// // // //         <h3 className="font-semibold text-lg mb-4">Order Items</h3>

// // // //         {order.items.map((item, index) => (
// // // //           <Link
// // // //             key={index}
// // // //             to={`/collection/${item.slug}`}
// // // //             className="flex gap-5 pb-5 border-b last:border-none hover:bg-gray-50 rounded-lg transition"
// // // //           >
// // // //             <div className="w-32 h-40 rounded-lg overflow-hidden">
// // // //               <img src={item.image} className="w-full h-full object-cover" />
// // // //             </div>

// // // //             <div>
// // // //               <p className="font-semibold text-lg">{item.brand}</p>
// // // //               <p className="text-gray-700">{item.name}</p>
// // // //               <p className="mt-3 text-gray-800">Size: {item.size}</p>
// // // //               <p className="font-semibold mt-1 text-gray-800">₹{item.price}</p>
// // // //             </div>
// // // //           </Link>
// // // //         ))}
// // // //       </div>

// // // //       {/* STATUS BLOCK */}
// // // //       <div className="bg-white p-6 rounded-xl border shadow-sm">
// // // //         {order.status === "shipped" && (
// // // //           <>
// // // //             <div className="flex items-center gap-2 mb-2">
// // // //               <Truck size={22} className="text-primary" />
// // // //               <p className="text-primary font-semibold text-lg">
// // // //                 Order Shipped
// // // //               </p>
// // // //             </div>
// // // //             <p className="text-gray-700">Arriving by {order.eta}</p>
// // // //           </>
// // // //         )}

// // // //         {order.status === "delivered" && (
// // // //           <>
// // // //             <div className="flex items-center gap-2 mb-2">
// // // //               <CheckCircle size={22} className="text-green-600" />
// // // //               <p className="text-green-700 font-semibold text-lg">
// // // //                 Delivered Successfully
// // // //               </p>
// // // //             </div>
// // // //             <p className="text-gray-700">Delivered on {order.deliveredOn}</p>
// // // //           </>
// // // //         )}

// // // //         {/* PROGRESS */}
// // // //         {order.status !== "cancelled" && (
// // // //           <div className="w-full h-2 bg-gray-200 mt-5 rounded">
// // // //             <div
// // // //               className={`h-full bg-primary rounded transition-all duration-500 ${getProgress(
// // // //                 order.status
// // // //               )}`}
// // // //             ></div>
// // // //           </div>
// // // //         )}

// // // //         {/* ---------------- ACTION BUTTONS ---------------- */}
// // // //         <div className="flex items-center gap-4 mt-6">
// // // //           {order.status === "delivered" && (
// // // //             <>
// // // //               {/* WRITE REVIEW */}
// // // //               <button
// // // //                 onClick={() => setOpenReviewModal(true)}
// // // //                 className="flex-1 flex items-center justify-center gap-2 py-3 bg-primary text-white rounded-lg hover:bg-secondary transition"
// // // //               >
// // // //                 <Star size={18} /> Write a Review
// // // //               </button>

// // // //               {/* RETURN ORDER */}
// // // //               <button
// // // //                 onClick={() => setOpenReturnModal(true)}
// // // //                 className="flex-1 flex items-center justify-center gap-2 py-3 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition"
// // // //               >
// // // //                 ↩ Return
// // // //               </button>
// // // //             </>
// // // //           )}
// // // //         </div>

// // // //         {/* RETURN STATUS MESSAGE */}
// // // //         {returnStatus === "requested" && (
// // // //           <div className="mt-4 bg-green-50 p-4 rounded-lg border border-green-300 text-green-700">
// // // //             Return request submitted. Pickup will be arranged in 2 days.
// // // //           </div>
// // // //         )}
// // // //       </div>

// // // //       {/* ADDRESS */}
// // // //       <div className="bg-white p-6 rounded-xl border shadow-sm">
// // // //         <div className="flex justify-between items-start">
// // // //           <h3 className="font-semibold text-lg">Shipping Address</h3>
// // // //           <span className="px-3 py-1 border border-primary text-primary rounded text-sm">
// // // //             {order.address.label}
// // // //           </span>
// // // //         </div>

// // // //         <p className="mt-3 font-semibold">
// // // //           {order.address.name} | {order.address.mobile}
// // // //         </p>
// // // //         <p className="text-gray-700 mt-1">{order.address.full}</p>
// // // //       </div>

// // // //       {/* PRICE BREAKUP */}
// // // //       <div className="bg-white p-6 rounded-xl border shadow-sm">
// // // //         <div className="flex justify-between items-center">
// // // //           <p className="text-xl font-semibold">
// // // //             ₹{order.items.reduce((t, i) => t + Number(i.price), 0)}.00 Total
// // // //             Price
// // // //           </p>
// // // //           <p className="text-gray-700 font-medium">To be paid by COD</p>
// // // //         </div>

// // // //         <div
// // // //           onClick={() => setShowBreakup(!showBreakup)}
// // // //           className="flex items-center mt-2 cursor-pointer w-fit"
// // // //         >
// // // //           <p className="text-primary font-semibold">View Breakup</p>
// // // //           <IoChevronUp
// // // //             className={`text-lg text-primary transition-transform ${
// // // //               showBreakup ? "rotate-180" : "rotate-0"
// // // //             }`}
// // // //           />
// // // //         </div>

// // // //         <div
// // // //           ref={contentRef}
// // // //           style={{
// // // //             maxHeight: showBreakup ? contentRef.current?.scrollHeight : 0,
// // // //           }}
// // // //           className="overflow-hidden transition-all duration-500"
// // // //         >
// // // //           <div className="mt-4 space-y-4 text-[15px]">
// // // //             <div className="flex justify-between">
// // // //               <span>Cart Total</span>
// // // //               <span className="font-medium">₹899</span>
// // // //             </div>

// // // //             <div className="flex justify-between">
// // // //               <span>Delivery Fee</span>
// // // //               <span className="font-medium text-green-600">FREE</span>
// // // //             </div>

// // // //             <div className="flex justify-between">
// // // //               <span>COD Fee</span>
// // // //               <span className="font-medium">₹20</span>
// // // //             </div>

// // // //             <hr />

// // // //             <div className="flex justify-between font-semibold">
// // // //               <p>Total to be paid</p>
// // // //               <p>₹919.00</p>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </div>

// // // //       {/* HELP */}
// // // //       <div className="bg-white p-6 rounded-xl border shadow-sm text-center">
// // // //         <p className="text-primary font-semibold cursor-pointer">Need Help?</p>
// // // //       </div>

// // // //       {/* ---------------- TRACKING TIMELINE ---------------- */}
// // // //       {(order.status === "shipped" || order.status === "delivered") && (
// // // //         <div
// // // //           ref={trackSectionRef}
// // // //           className="bg-white p-6 rounded-xl border shadow-sm"
// // // //         >
// // // //           <h2 className="font-semibold text-lg mb-4">Track Your Order</h2>

// // // //           <div className="space-y-10 mt-4">
// // // //             {steps.map((step, index) => {
// // // //               const isDone = index <= completedIndex;
// // // //               const isLast = index === steps.length - 1;

// // // //               return (
// // // //                 <div key={index} className="flex items-start gap-4">
// // // //                   {/* ICON + LINE */}
// // // //                   <div className="flex flex-col items-center relative">
// // // //                     <span className="w-6 h-6 flex items-center justify-center relative z-10">
// // // //                       {isDone ? (
// // // //                         <CheckCircle size={22} className="text-green-600" />
// // // //                       ) : (
// // // //                         <Package size={20} className="text-gray-400" />
// // // //                       )}
// // // //                     </span>

// // // //                     {!isLast && (
// // // //                       <span
// // // //                         className={`w-[2px] flex-1 ${
// // // //                           isDone ? "bg-green-600" : "bg-gray-300"
// // // //                         }`}
// // // //                       ></span>
// // // //                     )}
// // // //                   </div>

// // // //                   <div>
// // // //                     <h4
// // // //                       className={`font-semibold ${
// // // //                         isDone ? "text-green-700" : "text-gray-600"
// // // //                       }`}
// // // //                     >
// // // //                       {step.label}
// // // //                     </h4>
// // // //                     <p className="text-gray-700">{step.date}</p>
// // // //                   </div>
// // // //                 </div>
// // // //               );
// // // //             })}
// // // //           </div>
// // // //         </div>
// // // //       )}

// // // //       {/* ---------------- REVIEW MODAL ---------------- */}
// // // //       {openReviewModal && (
// // // //         <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
// // // //           <div className="bg-white w-11/12 max-w-md p-6 rounded-xl shadow-lg">
// // // //             <h2 className="text-lg font-semibold mb-4">Write a Review</h2>

// // // //             {/* Rating */}
// // // //             <div className="flex gap-2 mb-3">
// // // //               {[1, 2, 3, 4, 5].map((num) => (
// // // //                 <button
// // // //                   key={num}
// // // //                   onClick={() => setRating(num)}
// // // //                   className={`w-10 h-10 rounded-full border flex items-center justify-center
// // // //                     ${
// // // //                       rating >= num
// // // //                         ? "bg-primary text-white"
// // // //                         : "bg-neutral text-dark"
// // // //                     }`}
// // // //                 >
// // // //                   {num}
// // // //                 </button>
// // // //               ))}
// // // //             </div>

// // // //             {/* Review Input */}
// // // //             <textarea
// // // //               value={reviewText}
// // // //               onChange={(e) => setReviewText(e.target.value)}
// // // //               placeholder="Share your experience..."
// // // //               className="w-full border p-3 rounded-lg outline-none"
// // // //               rows="4"
// // // //             />

// // // //             {/* Buttons */}
// // // //             <div className="flex justify-end gap-3 mt-4">
// // // //               <button
// // // //                 onClick={() => setOpenReviewModal(false)}
// // // //                 className="px-4 py-2 rounded-lg bg-neutral"
// // // //               >
// // // //                 Cancel
// // // //               </button>

// // // //               <button
// // // //                 onClick={() => {
// // // //                   order.userReview = { rating, text: reviewText };
// // // //                   setOpenReviewModal(false);
// // // //                 }}
// // // //                 className="px-4 py-2 rounded-lg bg-primary text-white"
// // // //               >
// // // //                 Submit
// // // //               </button>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       )}

// // // //       {/* ---------------- RETURN MODAL ---------------- */}
// // // //       {openReturnModal && (
// // // //         <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
// // // //           <div className="bg-white w-11/12 max-w-md p-6 rounded-xl shadow-lg">
// // // //             <h2 className="text-lg font-semibold mb-4">Return Order</h2>

// // // //             {/* Reason */}
// // // //             <label className="text-sm font-medium">Reason for Return</label>
// // // //             <select
// // // //               value={returnReason}
// // // //               onChange={(e) => setReturnReason(e.target.value)}
// // // //               className="w-full border p-3 rounded-lg mt-1"
// // // //             >
// // // //               <option value="">Select a reason</option>
// // // //               <option value="Wrong Size">Wrong Size</option>
// // // //               <option value="Defective Product">Defective Product</option>
// // // //               <option value="Product Not as Described">
// // // //                 Product Not as Described
// // // //               </option>
// // // //               <option value="Other">Other</option>
// // // //             </select>

// // // //             {/* Buttons */}
// // // //             <div className="flex justify-end gap-3 mt-4">
// // // //               <button
// // // //                 onClick={() => setOpenReturnModal(false)}
// // // //                 className="px-4 py-2 rounded-lg bg-neutral"
// // // //               >
// // // //                 Cancel
// // // //               </button>

// // // //               <button
// // // //                 disabled={!returnReason}
// // // //                 onClick={() => {
// // // //                   setReturnStatus("requested");
// // // //                   setOpenReturnModal(false);
// // // //                 }}
// // // //                 className="px-4 py-2 rounded-lg bg-primary text-white disabled:opacity-40"
// // // //               >
// // // //                 Submit Return
// // // //               </button>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       )}
// // // //     </div>
// // // //   );
// // // // };

// // // // export default OrderDetails;

// // // import React, { useState, useRef } from "react";
// // // import { useParams, Link } from "react-router-dom";
// // // import { IoChevronUp } from "react-icons/io5";
// // // import { CheckCircle, Truck, Package, Star, X } from "lucide-react";

// // // const OrderDetails = () => {
// // //   const { id } = useParams();
// // //   const [showBreakup, setShowBreakup] = useState(false);
// // //   const [showReviewModal, setShowReviewModal] = useState(false);
// // //   const [showReturnModal, setShowReturnModal] = useState(false);
// // //   const [reviewText, setReviewText] = useState("");
// // //   const [returnReason, setReturnReason] = useState("");

// // //   const contentRef = useRef(null);
// // //   const trackSectionRef = useRef(null);

// // //   /** -------- SAMPLE ORDER DATA ---------- */
// // //   const orders = [
// // //     {
// // //       id: "1",
// // //       date: "24 Nov 2025",
// // //       time: "10:16 pm",
// // //       status: "delivered", // try confirmed | shipped | delivered
// // //       eta: "29 Nov 2025",
// // //       pickedOn: "27 Nov 2025",
// // //       transitDate: "28 Nov 2025",
// // //       deliveredOn: "29 Nov 2025",
// // //       address: {
// // //         name: "Tushar Patil",
// // //         mobile: "8999197992",
// // //         full: "TALWADE Bk, Saitane road, near hanuman mandir , Dhule, Maharashtra, 425408",
// // //         label: "Home",
// // //       },
// // //       items: [
// // //         {
// // //           brand: "Bewakoof®",
// // //           name: "Women's Dark Blue Washed Bootcut Jeans",
// // //           size: "28",
// // //           price: "1199",
// // //           image: "/k1.webp",
// // //           slug: "peach-kurti",
// // //         },
// // //       ],
// // //     },
// // //   ];

// // //   const order = orders.find((o) => o.id === id);
// // //   if (!order)
// // //     return <div className="p-10 text-center text-xl">Order Not Found</div>;

// // //   /** Progress Bar Logic */
// // //   const getProgress = (status) => {
// // //     switch (status) {
// // //       case "confirmed":
// // //         return "w-1/4";
// // //       case "shipped":
// // //         return "w-2/4";
// // //       case "out-for-delivery":
// // //         return "w-3/4";
// // //       case "delivered":
// // //         return "w-full";
// // //       default:
// // //         return "w-1/4";
// // //     }
// // //   };

// // //   /** Scroll to tracker */
// // //   const scrollToTracking = () => {
// // //     setTimeout(() => {
// // //       trackSectionRef.current?.scrollIntoView({ behavior: "smooth" });
// // //     }, 100);
// // //   };

// // //   /** Timeline Steps */
// // //   const steps = [
// // //     { label: "Order Placed On", date: order.date },
// // //     { label: "Picked Up On", date: order.pickedOn },
// // //     { label: "In Transit On", date: order.transitDate },
// // //     { label: "Arriving By", date: order.eta },
// // //     { label: "Delivered On", date: order.deliveredOn },
// // //   ];

// // //   const statusIndexMap = {
// // //     confirmed: 0,
// // //     shipped: 2,
// // //     "out-for-delivery": 3,
// // //     delivered: 4,
// // //   };

// // //   const completedIndex = statusIndexMap[order.status];

// // //   return (
// // //     <div className="p-6 space-y-6">
// // //       {/* ---------- ORDER NUMBER ---------- */}
// // //       <div className="bg-white p-6 rounded-xl border shadow-sm flex justify-between">
// // //         <div>
// // //           <p className="font-semibold text-dark">Order Number</p>
// // //           <p className="text-gray-600 mt-1">{order.id}</p>
// // //         </div>

// // //         <div className="text-right">
// // //           <p className="font-semibold text-dark">Order Placed</p>
// // //           <p className="text-gray-600 mt-1">{order.date}</p>
// // //         </div>
// // //       </div>

// // //       {/* ---------- ORDERED ITEMS ---------- */}
// // //       <div className="bg-white p-6 rounded-xl border shadow-sm">
// // //         <h3 className="font-semibold text-lg mb-4 text-dark">Order Items</h3>

// // //         {order.items.map((item, index) => (
// // //           <Link
// // //             key={index}
// // //             to={`/collection/${item.slug}`}
// // //             className="flex gap-5 pb-5 border-b last:border-none hover:bg-neutral/50 rounded-lg transition"
// // //           >
// // //             <div className="w-32 h-40 rounded-lg overflow-hidden">
// // //               <img src={item.image} className="w-full h-full object-cover" />
// // //             </div>

// // //             <div>
// // //               <p className="font-semibold text-lg">{item.brand}</p>
// // //               <p className="text-gray-700">{item.name}</p>
// // //               <p className="mt-3 text-dark">Size: {item.size}</p>
// // //               <p className="font-semibold mt-1 text-dark">₹{item.price}</p>
// // //             </div>
// // //           </Link>
// // //         ))}
// // //       </div>

// // //       {/* ---------- STATUS BLOCK ---------- */}
// // //       <div className="bg-white p-6 rounded-xl border shadow-sm">
// // //         {/* Status Heading */}
// // //         {order.status === "confirmed" && (
// // //           <>
// // //             <p className="text-green-600 font-semibold text-lg">
// // //               ✔ Order Confirmed
// // //             </p>
// // //             <p className="text-gray-700">
// // //               On {order.date}, {order.time}
// // //             </p>
// // //           </>
// // //         )}

// // //         {order.status === "shipped" && (
// // //           <>
// // //             <div className="flex items-center gap-2 mb-2">
// // //               <Truck size={22} className="text-primary" />
// // //               <p className="text-primary font-semibold text-lg">
// // //                 Order Shipped
// // //               </p>
// // //             </div>
// // //             <p className="text-gray-700">Arriving by {order.eta}</p>
// // //           </>
// // //         )}

// // //         {order.status === "delivered" && (
// // //           <>
// // //             <div className="flex items-center gap-2 mb-2">
// // //               <CheckCircle size={22} className="text-green-600" />
// // //               <p className="text-green-700 font-semibold text-lg">
// // //                 Delivered Successfully
// // //               </p>
// // //             </div>
// // //             <p className="text-gray-700">Delivered on {order.deliveredOn}</p>
// // //           </>
// // //         )}

// // //         {/* Progress Bar */}
// // //         {order.status !== "cancelled" && (
// // //           <div className="w-full h-2 bg-gray-200 mt-5 rounded">
// // //             <div
// // //               className={`h-full bg-primary rounded transition-all duration-500 ${getProgress(
// // //                 order.status
// // //               )}`}
// // //             ></div>
// // //           </div>
// // //         )}

// // //         {/* ------- BUTTONS ------- */}
// // //         <div className="flex items-center gap-4 mt-6 flex-wrap">
// // //           {/* Confirmed */}
// // //           {order.status === "confirmed" && (
// // //             <>
// // //               <Link
// // //                 to={`/myaccount/orders/${order.id}/cancel`}
// // //                 className="flex-1 py-3 border border-gray-300 rounded-lg text-red-500 font-medium text-center"
// // //               >
// // //                 ✖ Cancel
// // //               </Link>

// // //               <button
// // //                 disabled
// // //                 className="flex-1 py-3 border border-gray-300 rounded-lg text-gray-400 cursor-not-allowed"
// // //               >
// // //                 📍 Track
// // //               </button>
// // //             </>
// // //           )}

// // //           {/* Shipped */}
// // //           {order.status === "shipped" && (
// // //             <>
// // //               <button
// // //                 disabled
// // //                 className="flex-1 py-3 border border-gray-300 rounded-lg text-gray-400"
// // //               >
// // //                 ✖ Cancel
// // //               </button>

// // //               <button
// // //                 onClick={scrollToTracking}
// // //                 className="flex-1 py-3 border border-primary text-primary rounded-lg font-semibold"
// // //               >
// // //                 📍 Track
// // //               </button>
// // //             </>
// // //           )}

// // //           {/* Delivered */}
// // //           {order.status === "delivered" && (
// // //             <div className="flex items-center gap-6 mt-6 w-full">
// // //               {/* ⭐ Review Button — Filled but same layout as outline */}
// // //               <button
// // //                 onClick={() => setShowReviewModal(true)}
// // //                 className="flex-1 py-3 border border-primary rounded-lg
// // //                  text-white bg-primary font-medium text-center
// // //                  hover:bg-secondary transition flex items-center justify-center gap-2"
// // //               >
// // //                 <Star size={17} />
// // //                 Review
// // //               </button>

// // //               {/* ↩ Return Button — Outline */}
// // //               <button
// // //                 onClick={() => setShowReturnModal(true)}
// // //                 className="flex-1 py-3 border border-primary rounded-lg
// // //                  text-primary font-medium text-center
// // //                  hover:bg-primary hover:text-white transition
// // //                  flex items-center justify-center gap-2"
// // //               >
// // //                 ↩ Return
// // //               </button>
// // //             </div>
// // //           )}
// // //         </div>
// // //       </div>

// // //       {/* ---------- SHIPPING ADDRESS ---------- */}
// // //       <div className="bg-white p-6 rounded-xl border shadow-sm">
// // //         <div className="flex justify-between">
// // //           <h3 className="font-semibold text-lg">Shipping Address</h3>
// // //           <span className="px-3 py-1 border border-primary text-primary rounded text-sm">
// // //             {order.address.label}
// // //           </span>
// // //         </div>

// // //         <p className="mt-3 font-semibold">
// // //           {order.address.name} | {order.address.mobile}
// // //         </p>
// // //         <p className="text-gray-700 mt-1">{order.address.full}</p>
// // //       </div>

// // //       {/* ---------- PRICE BREAKUP ---------- */}
// // //       <div className="bg-white p-6 rounded-xl border shadow-sm">
// // //         <div className="flex justify-between">
// // //           <p className="text-xl font-semibold">
// // //             ₹{order.items.reduce((t, i) => t + Number(i.price), 0)}.00 Total
// // //           </p>
// // //           <p className="text-gray-700">To be paid by COD</p>
// // //         </div>

// // //         <div
// // //           onClick={() => setShowBreakup(!showBreakup)}
// // //           className="flex items-center mt-3 cursor-pointer w-fit"
// // //         >
// // //           <p className="text-primary font-semibold">View Breakup</p>
// // //           <IoChevronUp
// // //             className={`text-primary ml-2 transition-transform ${
// // //               showBreakup ? "rotate-180" : "rotate-0"
// // //             }`}
// // //           />
// // //         </div>

// // //         <div
// // //           ref={contentRef}
// // //           style={{
// // //             maxHeight: showBreakup ? contentRef.current?.scrollHeight : 0,
// // //           }}
// // //           className="overflow-hidden transition-all duration-500"
// // //         >
// // //           <div className="mt-4 space-y-4 text-[15px]">
// // //             <div className="flex justify-between">
// // //               <span>Cart Total</span>
// // //               <span className="font-medium">₹899</span>
// // //             </div>
// // //             <div className="flex justify-between">
// // //               <span>Delivery Fee</span>
// // //               <span className="font-medium text-green-600">FREE</span>
// // //             </div>
// // //             <div className="flex justify-between">
// // //               <span>COD Fee</span>
// // //               <span className="font-medium">₹20</span>
// // //             </div>
// // //             <hr />
// // //             <div className="flex justify-between font-semibold">
// // //               <p>Total to be paid</p>
// // //               <p>₹919.00</p>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* ---------- NEED HELP ---------- */}
// // //       <div className="bg-white p-6 rounded-xl border shadow-sm text-center">
// // //         <p className="text-primary font-semibold cursor-pointer">Need Help?</p>
// // //       </div>

// // //       {/* ---------- TRACKING SECTION (HIDDEN WHEN DELIVERED) ---------- */}
// // //       {order.status === "shipped" && (
// // //         <div
// // //           ref={trackSectionRef}
// // //           className="bg-white p-6 rounded-xl border shadow-sm"
// // //         >
// // //           <h2 className="font-semibold text-lg mb-4">Track Your Order</h2>

// // //           <p className="text-gray-700 mb-1">
// // //             Status: <span className="font-semibold">{order.status}</span>
// // //           </p>

// // //           <p className="text-gray-700">
// // //             Courier: <span className="font-semibold">Xpressbees</span>
// // //           </p>

// // //           <p className="text-gray-700 mt-1">
// // //             Tracking ID:{" "}
// // //             <span className="font-semibold text-primary">125852132149</span>
// // //           </p>

// // //           <hr className="my-4" />

// // //           <div className="space-y-10 mt-4">
// // //             {steps.map((step, index) => {
// // //               const isDone = index <= completedIndex;
// // //               const isLast = index === steps.length - 1;

// // //               return (
// // //                 <div key={index} className="flex items-start gap-4">
// // //                   <div className="flex flex-col items-center">
// // //                     <span className="w-6 h-6 flex items-center justify-center">
// // //                       {isDone ? (
// // //                         <CheckCircle size={22} className="text-green-600" />
// // //                       ) : (
// // //                         <Package size={20} className="text-gray-400" />
// // //                       )}
// // //                     </span>

// // //                     {!isLast && (
// // //                       <span
// // //                         className={`w-[2px] flex-1 ${
// // //                           isDone ? "bg-green-600" : "bg-gray-300"
// // //                         }`}
// // //                       ></span>
// // //                     )}
// // //                   </div>

// // //                   <div>
// // //                     <h4
// // //                       className={`font-semibold ${
// // //                         isDone ? "text-green-700" : "text-gray-600"
// // //                       }`}
// // //                     >
// // //                       {step.label}
// // //                     </h4>
// // //                     <p className="text-gray-700">{step.date}</p>
// // //                   </div>
// // //                 </div>
// // //               );
// // //             })}
// // //           </div>
// // //         </div>
// // //       )}

// // //       {/* ---------------------------------------------------------- */}
// // //       {/* -------------------- REVIEW MODAL ------------------------ */}
// // //       {/* ---------------------------------------------------------- */}
// // //       {showReviewModal && (
// // //         <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50">
// // //           <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-md">
// // //             <div className="flex justify-between items-center mb-4">
// // //               <h2 className="text-lg font-semibold">Write a Review</h2>
// // //               <X
// // //                 size={22}
// // //                 className="cursor-pointer"
// // //                 onClick={() => setShowReviewModal(false)}
// // //               />
// // //             </div>

// // //             <textarea
// // //               value={reviewText}
// // //               onChange={(e) => setReviewText(e.target.value)}
// // //               rows={4}
// // //               placeholder="Share your experience..."
// // //               className="w-full border rounded-lg p-3"
// // //             />

// // //             <button
// // //               onClick={() => {
// // //                 alert("Review Submitted: " + reviewText);
// // //                 setShowReviewModal(false);
// // //               }}
// // //               className="w-full mt-4 py-3 bg-primary text-white rounded-lg"
// // //             >
// // //               Submit Review
// // //             </button>
// // //           </div>
// // //         </div>
// // //       )}

// // //       {/* ---------------------------------------------------------- */}
// // //       {/* -------------------- RETURN MODAL ------------------------ */}
// // //       {/* ---------------------------------------------------------- */}
// // //       {showReturnModal && (
// // //         <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50">
// // //           <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-md">
// // //             <div className="flex justify-between items-center mb-4">
// // //               <h2 className="text-lg font-semibold">Return Order</h2>
// // //               <X
// // //                 size={22}
// // //                 className="cursor-pointer"
// // //                 onClick={() => setShowReturnModal(false)}
// // //               />
// // //             </div>

// // //             <label className="font-medium text-gray-700">
// // //               Reason for Return
// // //             </label>
// // //             <select
// // //               className="w-full border rounded-lg p-2 mt-2"
// // //               value={returnReason}
// // //               onChange={(e) => setReturnReason(e.target.value)}
// // //             >
// // //               <option value="">Select a reason</option>
// // //               <option>Wrong Size</option>
// // //               <option>Defective Product</option>
// // //               <option>Product Not as Described</option>
// // //               <option>Other</option>
// // //             </select>

// // //             <button
// // //               disabled={!returnReason}
// // //               onClick={() => {
// // //                 alert("Return Requested: " + returnReason);
// // //                 setShowReturnModal(false);
// // //               }}
// // //               className={`w-full mt-4 py-3 rounded-lg ${
// // //                 returnReason
// // //                   ? "bg-primary text-white"
// // //                   : "bg-gray-300 text-gray-500 cursor-not-allowed"
// // //               }`}
// // //             >
// // //               Submit Return Request
// // //             </button>
// // //           </div>
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default OrderDetails;

// // import React, { useState, useRef } from "react";
// // import { useParams, Link } from "react-router-dom";
// // import { IoChevronUp } from "react-icons/io5";
// // import { CheckCircle, Truck, Package, Star, X } from "lucide-react";

// // const OrderDetails = () => {
// //   const { id } = useParams();

// //   const [showBreakup, setShowBreakup] = useState(false);
// //   const [showReviewModal, setShowReviewModal] = useState(false);
// //   const [showReturnModal, setShowReturnModal] = useState(false);

// //   // review states
// //   const [reviewText, setReviewText] = useState("");
// //   const [reviewRating, setReviewRating] = useState(0);

// //   // return states
// //   const [returnReason, setReturnReason] = useState("");
// //   const [returnSlot, setReturnSlot] = useState("10 AM – 2 PM");
// //   const [showSlotPicker, setShowSlotPicker] = useState(false);

// //   const contentRef = useRef(null);
// //   const trackSectionRef = useRef(null);

// //   /** -------- SAMPLE ORDER DATA ---------- */
// //   const orders = [
// //     {
// //       id: "1",
// //       date: "24 Nov 2025",
// //       time: "10:16 pm",
// //       status: "delivered", // try: confirmed | shipped | delivered
// //       eta: "29 Nov 2025",
// //       pickedOn: "27 Nov 2025",
// //       transitDate: "28 Nov 2025",
// //       deliveredOn: "29 Nov 2025",
// //       address: {
// //         name: "Tushar Patil",
// //         mobile: "8999197992",
// //         full: "TALWADE Bk, Saitane road, near hanuman mandir , Dhule, Maharashtra, 425408",
// //         label: "Home",
// //       },
// //       items: [
// //         {
// //           brand: "Bewakoof®",
// //           name: "Women's Dark Blue Washed Bootcut Jeans",
// //           size: "28",
// //           price: "1199",
// //           image: "/k1.webp",
// //           slug: "peach-kurti",
// //         },
// //       ],
// //     },
// //   ];

// //   const order = orders.find((o) => o.id === id);
// //   if (!order)
// //     return <div className="p-10 text-center text-xl">Order Not Found</div>;

// //   /** Progress Bar Logic */
// //   const getProgress = (status) => {
// //     switch (status) {
// //       case "confirmed":
// //         return "w-1/4";
// //       case "shipped":
// //         return "w-2/4";
// //       case "out-for-delivery":
// //         return "w-3/4";
// //       case "delivered":
// //         return "w-full";
// //       default:
// //         return "w-1/4";
// //     }
// //   };

// //   /** Scroll to tracker */
// //   const scrollToTracking = () => {
// //     setTimeout(() => {
// //       trackSectionRef.current?.scrollIntoView({ behavior: "smooth" });
// //     }, 100);
// //   };

// //   /** Timeline Steps */
// //   const steps = [
// //     { label: "Order Placed On", date: order.date },
// //     { label: "Picked Up On", date: order.pickedOn },
// //     { label: "In Transit On", date: order.transitDate },
// //     { label: "Arriving By", date: order.eta },
// //     { label: "Delivered On", date: order.deliveredOn },
// //   ];

// //   const statusIndexMap = {
// //     confirmed: 0,
// //     shipped: 2,
// //     "out-for-delivery": 3,
// //     delivered: 4,
// //   };

// //   const completedIndex = statusIndexMap[order.status];

// //   /** Pretty pickup schedule text (Option C) */
// //   const getPickupScheduleLabel = () => {
// //     const today = new Date();
// //     const tomorrow = new Date(today);
// //     tomorrow.setDate(today.getDate() + 1);

// //     const day = tomorrow.toLocaleDateString("en-GB", {
// //       day: "2-digit",
// //       month: "short",
// //       year: "numeric",
// //     });

// //     return `Pickup scheduled for ${day} between ${returnSlot}`;
// //   };

// //   const returnReasons = [
// //     "Wrong Size",
// //     "Defective / Damaged Product",
// //     "Product Not as Described",
// //     "Received Wrong Item",
// //     "Other",
// //   ];

// //   return (
// //     <div className="p-6 space-y-6">
// //       {/* ---------- ORDER NUMBER ---------- */}
// //       <div className="bg-white p-6 rounded-xl border shadow-sm flex justify-between">
// //         <div>
// //           <p className="font-semibold text-dark">Order Number</p>
// //           <p className="text-gray-600 mt-1">{order.id}</p>
// //         </div>

// //         <div className="text-right">
// //           <p className="font-semibold text-dark">Order Placed</p>
// //           <p className="text-gray-600 mt-1">{order.date}</p>
// //         </div>
// //       </div>

// //       {/* ---------- ORDERED ITEMS ---------- */}
// //       <div className="bg-white p-6 rounded-xl border shadow-sm">
// //         <h3 className="font-semibold text-lg mb-4 text-dark">Order Items</h3>

// //         {order.items.map((item, index) => (
// //           <Link
// //             key={index}
// //             to={`/collection/${item.slug}`}
// //             className="flex gap-5 pb-5 border-b last:border-none hover:bg-neutral/50 rounded-lg transition"
// //           >
// //             <div className="w-32 h-40 rounded-lg overflow-hidden">
// //               <img src={item.image} className="w-full h-full object-cover" />
// //             </div>

// //             <div>
// //               <p className="font-semibold text-lg">{item.brand}</p>
// //               <p className="text-gray-700">{item.name}</p>
// //               <p className="mt-3 text-dark">Size: {item.size}</p>
// //               <p className="font-semibold mt-1 text-dark">₹{item.price}</p>
// //             </div>
// //           </Link>
// //         ))}
// //       </div>

// //       {/* ---------- STATUS BLOCK ---------- */}
// //       <div className="bg-white p-6 rounded-xl border shadow-sm">
// //         {/* Status Heading */}
// {order.status === "confirmed" && (
//   <>
//     <p className="text-green-600 font-semibold text-lg">
//       ✔ Order Confirmed
//     </p>
//     <p className="text-gray-700">
//       On {order.date}, {order.time}
//     </p>
//   </>
// )}

// {order.status === "shipped" && (
//   <>
//     <div className="flex items-center gap-2 mb-2">
//       <Truck size={22} className="text-primary" />
//       <p className="text-primary font-semibold text-lg">
//         Order Shipped
//       </p>
//     </div>
//     <p className="text-gray-700">Arriving by {order.eta}</p>
//   </>
// )}

// //         {order.status === "delivered" && (
// //           <>
// //             <div className="flex items-center gap-2 mb-2">
// //               <CheckCircle size={22} className="text-green-600" />
// //               <p className="text-green-700 font-semibold text-lg">
// //                 Delivered Successfully
// //               </p>
// //             </div>
// //             <p className="text-gray-700">Delivered on {order.deliveredOn}</p>
// //           </>
// //         )}

// //         {/* Progress Bar */}
// //         {order.status !== "cancelled" && (
// //           <div className="w-full h-2 bg-gray-200 mt-5 rounded">
// //             <div
// //               className={`h-full bg-primary rounded transition-all duration-500 ${getProgress(
// //                 order.status
// //               )}`}
// //             ></div>
// //           </div>
// //         )}

// //         {/* ------- ACTION BUTTONS (desktop & mobile friendly) ------- */}
// //         <div className="flex items-center gap-4 mt-6 flex-wrap">
// {/* Confirmed */}
// {order.status === "confirmed" && (
//   <>
//     <Link
//       to={`/myaccount/orders/${order.id}/cancel`}
//       className="flex-1 py-3 border border-gray-300 rounded-lg text-red-500 font-medium text-center"
//     >
//       ✖ Cancel
//     </Link>

//     <button
//       disabled
//       className="flex-1 py-3 border border-gray-300 rounded-lg text-gray-400 cursor-not-allowed"
//     >
//       📍 Track
//     </button>
//   </>
// )}

// {/* Shipped */}
// {order.status === "shipped" && (
//   <>
//     <button
//       disabled
//       className="flex-1 py-3 border border-gray-300 rounded-lg text-gray-400 cursor-not-allowed"
//     >
//       ✖ Cancel
//     </button>

//     <button
//       onClick={scrollToTracking}
//       className="flex-1 py-3 border border-primary text-primary rounded-lg font-semibold"
//     >
//       📍 Track
//     </button>
//   </>
// )}

// //           {/* Delivered */}
// //           {order.status === "delivered" && (
// //             <>
// //               {/* Review button – same sizing as others */}
// //               <button
// //                 onClick={() => setShowReviewModal(true)}
// //                 className="flex-1 py-3 border border-primary rounded-lg text-white bg-primary font-medium text-center hover:bg-secondary transition flex items-center justify-center gap-2"
// //               >
// //                 <Star size={17} />
// //                 Review
// //               </button>

// //               {/* Return button – outline */}
// //               <button
// //                 onClick={() => setShowReturnModal(true)}
// //                 className="flex-1 py-3 border border-primary rounded-lg text-primary font-medium text-center hover:bg-primary hover:text-white transition flex items-center justify-center gap-2"
// //               >
// //                 ↩ Return
// //               </button>
// //             </>
// //           )}
// //         </div>
// //       </div>

// //       {/* ---------- SHIPPING ADDRESS ---------- */}
// //       <div className="bg-white p-6 rounded-xl border shadow-sm">
// //         <div className="flex justify-between">
// //           <h3 className="font-semibold text-lg">Shipping Address</h3>
// //           <span className="px-3 py-1 border border-primary text-primary rounded text-sm">
// //             {order.address.label}
// //           </span>
// //         </div>

// //         <p className="mt-3 font-semibold">
// //           {order.address.name} | {order.address.mobile}
// //         </p>
// //         <p className="text-gray-700 mt-1">{order.address.full}</p>
// //       </div>

// //       {/* ---------- PRICE BREAKUP ---------- */}
// //       <div className="bg-white p-6 rounded-xl border shadow-sm">
// //         <div className="flex justify-between">
// //           <p className="text-xl font-semibold">
// //             ₹{order.items.reduce((t, i) => t + Number(i.price), 0)}.00 Total
// //           </p>
// //           <p className="text-gray-700">To be paid by COD</p>
// //         </div>

// //         <div
// //           onClick={() => setShowBreakup(!showBreakup)}
// //           className="flex items-center mt-3 cursor-pointer w-fit"
// //         >
// //           <p className="text-primary font-semibold">View Breakup</p>
// //           <IoChevronUp
// //             className={`text-primary ml-2 transition-transform ${
// //               showBreakup ? "rotate-180" : "rotate-0"
// //             }`}
// //           />
// //         </div>

// //         <div
// //           ref={contentRef}
// //           style={{
// //             maxHeight: showBreakup ? contentRef.current?.scrollHeight : 0,
// //           }}
// //           className="overflow-hidden transition-all duration-500"
// //         >
// //           <div className="mt-4 space-y-4 text-[15px]">
// //             <div className="flex justify-between">
// //               <span>Cart Total</span>
// //               <span className="font-medium">₹899</span>
// //             </div>
// //             <div className="flex justify-between">
// //               <span>Delivery Fee</span>
// //               <span className="font-medium text-green-600">FREE</span>
// //             </div>
// //             <div className="flex justify-between">
// //               <span>COD Fee</span>
// //               <span className="font-medium">₹20</span>
// //             </div>
// //             <hr />
// //             <div className="flex justify-between font-semibold">
// //               <p>Total to be paid</p>
// //               <p>₹919.00</p>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* ---------- NEED HELP ---------- */}
// //       <div className="bg-white p-6 rounded-xl border shadow-sm text-center">
// //         <p className="text-primary font-semibold cursor-pointer">Need Help?</p>
// //       </div>

// //       {/* ---------- TRACKING SECTION (only when shipped) ---------- */}
// //       {order.status === "shipped" && (
// //         <div
// //           ref={trackSectionRef}
// //           className="bg-white p-6 rounded-xl border shadow-sm"
// //         >
// //           <h2 className="font-semibold text-lg mb-4">Track Your Order</h2>

// //           <p className="text-gray-700 mb-1">
// //             Status:{" "}
// //             <span className="font-semibold capitalize">{order.status}</span>
// //           </p>

// //           <p className="text-gray-700">
// //             Courier: <span className="font-semibold">Xpressbees</span>
// //           </p>

// //           <p className="text-gray-700 mt-1">
// //             Tracking ID:{" "}
// //             <span className="font-semibold text-primary">125852132149</span>
// //           </p>

// //           <hr className="my-4" />

// //           <div className="space-y-10 mt-4">
// //             {steps.map((step, index) => {
// //               const isDone = index <= completedIndex;
// //               const isLast = index === steps.length - 1;

// //               return (
// //                 <div key={index} className="flex items-start gap-4">
// //                   <div className="flex flex-col items-center">
// //                     <span className="w-6 h-6 flex items-center justify-center">
// //                       {isDone ? (
// //                         <CheckCircle size={22} className="text-green-600" />
// //                       ) : (
// //                         <Package size={20} className="text-gray-400" />
// //                       )}
// //                     </span>

// //                     {!isLast && (
// //                       <span
// //                         className={`w-[2px] flex-1 ${
// //                           isDone ? "bg-green-600" : "bg-gray-300"
// //                         }`}
// //                       ></span>
// //                     )}
// //                   </div>

// //                   <div>
// //                     <h4
// //                       className={`font-semibold ${
// //                         isDone ? "text-green-700" : "text-gray-600"
// //                       }`}
// //                     >
// //                       {step.label}
// //                     </h4>
// //                     <p className="text-gray-700">{step.date}</p>
// //                   </div>
// //                 </div>
// //               );
// //             })}
// //           </div>
// //         </div>
// //       )}

// //       {/* ---------------------------------------------------------- */}
// //       {/* -------------------- REVIEW MODAL ------------------------ */}
// //       {/* ---------------------------------------------------------- */}
// //       {showReviewModal && (
// //         <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50">
// //           <div className="bg-white p-6 rounded-2xl shadow-2xl w-full max-w-md">
// //             <div className="flex justify-between items-center mb-4">
// //               <h2 className="text-lg font-semibold text-dark">
// //                 Review Product
// //               </h2>
// //               <button
// //                 onClick={() => setShowReviewModal(false)}
// //                 className="p-1 rounded-full hover:bg-neutral/70"
// //               >
// //                 <X size={20} />
// //               </button>
// //             </div>

// //             {/* Rating row */}
// //             <div className="mb-4">
// //               <p className="text-sm text-gray-700 mb-2">Overall Rating</p>
// //               <div className="flex gap-2">
// //                 {[1, 2, 3, 4, 5].map((star) => (
// //                   <button
// //                     key={star}
// //                     type="button"
// //                     onClick={() => setReviewRating(star)}
// //                     className="w-9 h-9 flex items-center justify-center rounded-full border border-neutral hover:border-primary transition"
// //                   >
// //                     <Star
// //                       size={18}
// //                       className={
// //                         star <= reviewRating
// //                           ? "fill-primary text-primary"
// //                           : "text-gray-400"
// //                       }
// //                     />
// //                   </button>
// //                 ))}
// //               </div>
// //             </div>

// //             <textarea
// //               value={reviewText}
// //               onChange={(e) => setReviewText(e.target.value)}
// //               rows={4}
// //               placeholder="Share your experience with this product..."
// //               className="w-full border border-neutral rounded-xl p-3 text-sm outline-none focus:border-primary"
// //             />

// //             <button
// //               onClick={() => {
// //                 alert(
// //                   `Review Submitted\nRating: ${reviewRating}★\nComment: ${reviewText}`
// //                 );
// //                 setShowReviewModal(false);
// //                 setReviewRating(0);
// //                 setReviewText("");
// //               }}
// //               disabled={!reviewRating}
// //               className={`w-full mt-4 py-3 rounded-xl font-semibold text-sm ${
// //                 reviewRating
// //                   ? "bg-primary text-white hover:bg-secondary transition"
// //                   : "bg-neutral text-gray-500 cursor-not-allowed"
// //               }`}
// //             >
// //               Submit Review
// //             </button>
// //           </div>
// //         </div>
// //       )}

// //       {/* ---------------------------------------------------------- */}
// //       {/* -------------------- RETURN MODAL ------------------------ */}
// //       {/* ---------------------------------------------------------- */}
// //       {showReturnModal && (
// //         <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50">
// //           <div className="bg-white p-6 rounded-2xl shadow-2xl w-full max-w-md">
// //             <div className="flex justify-between items-center mb-3">
// //               <h2 className="text-lg font-semibold text-dark">Return Order</h2>
// //               <button
// //                 onClick={() => setShowReturnModal(false)}
// //                 className="p-1 rounded-full hover:bg-neutral/70"
// //               >
// //                 <X size={20} />
// //               </button>
// //             </div>

// //             {/* Reason list */}
// //             <p className="text-sm font-medium text-gray-700 mb-2">
// //               Select a reason for return
// //             </p>
// //             <div className="space-y-2 mb-4">
// //               {returnReasons.map((reason) => {
// //                 const active = returnReason === reason;
// //                 return (
// //                   <button
// //                     key={reason}
// //                     type="button"
// //                     onClick={() => setReturnReason(reason)}
// //                     className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm border transition ${
// //                       active
// //                         ? "border-primary bg-primary/5 text-dark"
// //                         : "border-neutral text-dark/70 hover:border-primary/60"
// //                     }`}
// //                   >
// //                     <span>{reason}</span>
// //                     {active && (
// //                       <CheckCircle size={18} className="text-primary" />
// //                     )}
// //                   </button>
// //                 );
// //               })}
// //             </div>

// //             {/* Pickup schedule (Option C style) */}
// //             <div className="mb-4 rounded-lg bg-neutral/60 p-3">
// //               <p className="text-xs font-semibold text-gray-600 mb-1">
// //                 Pickup Schedule
// //               </p>
// //               <p className="text-sm text-dark">{getPickupScheduleLabel()}</p>

// //               <button
// //                 type="button"
// //                 onClick={() => setShowSlotPicker((v) => !v)}
// //                 className="mt-2 text-xs font-semibold text-primary underline"
// //               >
// //                 Change pickup time slot
// //               </button>

// //               {showSlotPicker && (
// //                 <div className="mt-2 flex flex-wrap gap-2">
// //                   {["10 AM – 2 PM", "2 PM – 6 PM", "6 PM – 9 PM"].map(
// //                     (slot) => {
// //                       const active = returnSlot === slot;
// //                       return (
// //                         <button
// //                           key={slot}
// //                           type="button"
// //                           onClick={() => {
// //                             setReturnSlot(slot);
// //                             setShowSlotPicker(false);
// //                           }}
// //                           className={`px-3 py-1 rounded-full text-xs border transition ${
// //                             active
// //                               ? "bg-primary text-white border-primary"
// //                               : "border-neutral text-dark/70 hover:border-primary"
// //                           }`}
// //                         >
// //                           {slot}
// //                         </button>
// //                       );
// //                     }
// //                   )}
// //                 </div>
// //               )}
// //             </div>

// //             {/* Submit return */}
// //             <button
// //               disabled={!returnReason}
// //               onClick={() => {
// //                 alert(
// //                   `Return Requested\nReason: ${returnReason}\n${getPickupScheduleLabel()}`
// //                 );
// //                 setShowReturnModal(false);
// //                 setReturnReason("");
// //               }}
// //               className={`w-full mt-1 py-3 rounded-xl font-semibold text-sm ${
// //                 returnReason
// //                   ? "bg-primary text-white hover:bg-secondary transition"
// //                   : "bg-neutral text-gray-500 cursor-not-allowed"
// //               }`}
// //             >
// //               Submit Return Request
// //             </button>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default OrderDetails;

// import React, { useState, useRef } from "react";
// import { useParams, Link } from "react-router-dom";
// import { IoChevronUp } from "react-icons/io5";
// import { CheckCircle, Truck, Package, Star, X } from "lucide-react";

// const OrderDetails = () => {
//   const { id } = useParams();

//   const [showBreakup, setShowBreakup] = useState(false);
//   const [showReviewModal, setShowReviewModal] = useState(false);
//   const [showReturnModal, setShowReturnModal] = useState(false);

//   // review states
//   const [reviewText, setReviewText] = useState("");
//   const [reviewRating, setReviewRating] = useState(0);
//   const [savedReview, setSavedReview] = useState(null);

//   // return states
//   const [returnReason, setReturnReason] = useState("");
//   const [returnSlot, setReturnSlot] = useState("10 AM – 2 PM");
//   const [showSlotPicker, setShowSlotPicker] = useState(false);
//   const [returnInfo, setReturnInfo] = useState(null); // FINAL RETURN STATUS

//   const contentRef = useRef(null);
//   const trackSectionRef = useRef(null);
//   const savedUpis = ["tushar@upi", "tusharpatil@ybl"]; // sample saved UPI IDs
//   const [selectedUpi, setSelectedUpi] = useState("");

//   /** -------- SAMPLE ORDER DATA ---------- */
//   const orders = [
//     {
//       id: "1",
//       date: "24 Nov 2025",
//       time: "10:16 pm",
//       status: returnInfo ? "return-requested" : "confirmed", //confirmed | shipped | delivered
//       eta: "29 Nov 2025",
//       pickedOn: "27 Nov 2025",
//       transitDate: "28 Nov 2025",
//       deliveredOn: "29 Nov 2025",
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
//       ],
//     },
//   ];

//   const order = orders.find((o) => o.id === id);
//   if (!order)
//     return <div className="p-10 text-center text-xl">Order Not Found</div>;

//   /** Pickup date text */
//   const getPickupScheduleLabel = () => {
//     const today = new Date();
//     const tomorrow = new Date(today);
//     tomorrow.setDate(today.getDate() + 1);

//     const day = tomorrow.toLocaleDateString("en-GB", {
//       day: "2-digit",
//       month: "short",
//       year: "numeric",
//     });

//     return `Pickup scheduled for ${day} between ${returnSlot}`;
//   };

//   const returnReasons = [
//     "Wrong Size",
//     "Defective / Damaged Product",
//     "Product Not as Described",
//     "Received Wrong Item",
//     "Other",
//   ];

//   return (
//     <div className="p-6 space-y-6">
//       {/* ---------- ORDER NUMBER ---------- */}
//       <div className="bg-white p-6 rounded-xl border shadow-sm flex justify-between">
//         <div>
//           <p className="font-semibold text-dark">Order Number</p>
//           <p className="text-gray-600 mt-1">{order.id}</p>
//         </div>

//         <div className="text-right">
//           <p className="font-semibold text-dark">Order Placed</p>
//           <p className="text-gray-600 mt-1">{order.date}</p>
//         </div>
//       </div>

//       {/* ---------- ORDER ITEMS ---------- */}
//       <div className="bg-white p-6 rounded-xl border shadow-sm">
//         <h3 className="font-semibold text-lg mb-4 text-dark">Order Items</h3>

//         {order.items.map((item, index) => (
//           <Link
//             key={index}
//             to={`/collection/${item.slug}`}
//             className="flex gap-5 pb-5 border-b last:border-none hover:bg-neutral/50 rounded-lg transition"
//           >
//             <img
//               src={item.image}
//               className="w-32 h-40 rounded-lg object-cover"
//             />

//             <div>
//               <p className="font-semibold text-lg">{item.brand}</p>
//               <p className="text-gray-700">{item.name}</p>
//               <p className="mt-3 text-dark">Size: {item.size}</p>
//               <p className="font-semibold mt-1 text-dark">₹{item.price}</p>
//             </div>
//           </Link>
//         ))}
//       </div>

//       {/* ---------- STATUS BLOCK ---------- */}
//       <div className="bg-white p-6 rounded-xl border shadow-sm">
//         {order.status === "return-requested" ? (
//           <div className="bg-primary/10 p-4 rounded-lg border border-primary/30">
//             <p className="font-semibold text-primary text-lg flex items-center gap-2">
//               🔄 Return Requested
//             </p>
//             <p className="text-gray-700 mt-1">{returnInfo?.schedule}</p>
//             <p className="text-gray-600 text-sm mt-1">
//               Reason: {returnInfo?.reason}
//             </p>
//           </div>
//         ) : order.status === "delivered" ? (
//           <>
//             <p className="text-green-700 font-semibold text-lg flex items-center gap-2">
//               <CheckCircle size={22} /> Delivered Successfully
//             </p>
//             <p className="text-gray-700">Delivered on {order.deliveredOn}</p>
//           </>
//         ) : null}

//         {/* Buttons */}
//         {order.status === "delivered" && !returnInfo && (
//           <div className="flex gap-4 mt-6">
//             <button
//               onClick={() => !savedReview && setShowReviewModal(true)}
//               className={`flex-1 py-3 border rounded-lg flex items-center justify-center gap-2
//                 ${
//                   savedReview
//                     ? "border-neutral text-gray-500 bg-neutral cursor-not-allowed"
//                     : "border-primary bg-primary text-white hover:bg-secondary"
//                 }`}
//             >
//               <Star size={17} />
//               {savedReview ? "Reviewed" : "Review"}
//             </button>

//             <button
//               onClick={() => setShowReturnModal(true)}
//               className="flex-1 py-3 border border-primary rounded-lg text-primary hover:bg-primary hover:text-white flex items-center justify-center gap-2"
//             >
//               ↩ Return
//             </button>
//           </div>
//         )}
//       </div>

//       {/* ---------- SHIPPING ADDRESS ---------- */}
//       <div className="bg-white p-6 rounded-xl border shadow-sm">
//         <h3 className="font-semibold text-lg mb-1">Shipping Address</h3>
//         <p className="font-semibold">
//           {order.address.name} | {order.address.mobile}
//         </p>
//         <p className="text-gray-700">{order.address.full}</p>
//       </div>

//       {/* ---------- PRICE BREAKUP ---------- */}
//       <div className="bg-white p-6 rounded-xl border shadow-sm">
//         {/* Total + Payment Status Row */}
//         <div className="flex justify-between items-center">
//           <p className="text-xl font-semibold">
//             ₹{order.items.reduce((t, i) => t + Number(i.price), 0)}.00 Total
//           </p>

//           {order.status === "delivered" ? (
//             <span className="px-3 py-1 text-sm font-semibold text-green-600 bg-green-100 rounded-lg">
//               Paid
//             </span>
//           ) : (
//             <span className="px-3 py-1 text-sm font-medium text-yellow-600 bg-yellow-100 rounded-lg">
//               To be paid before delivery
//             </span>
//           )}
//         </div>

//         {/* Breakup Toggle */}
//         <div
//           onClick={() => setShowBreakup(!showBreakup)}
//           className="cursor-pointer mt-3 flex items-center gap-2"
//         >
//           <p className="text-primary font-semibold">View Breakup</p>
//           <IoChevronUp
//             className={`text-primary transition ${
//               showBreakup ? "rotate-180" : ""
//             }`}
//           />
//         </div>

//         <div
//           ref={contentRef}
//           style={{
//             maxHeight: showBreakup ? contentRef.current?.scrollHeight : 0,
//           }}
//           className="transition-all overflow-hidden"
//         >
//           <div className="mt-4 space-y-4">
//             <div className="flex justify-between">
//               <span>Cart Total</span>
//               <span className="font-medium">₹899</span>
//             </div>
//             <div className="flex justify-between">
//               <span>Delivery Fee</span>
//               <span className="font-medium text-green-600">FREE</span>
//             </div>
//             <div className="flex justify-between">
//               <span>COD Fee</span>
//               <span className="font-medium">₹20</span>
//             </div>
//             <hr />
//             <div className="flex justify-between font-semibold">
//               <p>Total to be paid</p>
//               <p>₹919.00</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ---------- REVIEW MODAL ---------- */}
//       {showReviewModal && (
//         <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50">
//           <div className="bg-white p-6 rounded-2xl w-full max-w-md">
//             <div className="flex justify-between mb-4">
//               <h2 className="font-semibold text-lg">Write a Review</h2>
//               <X
//                 size={22}
//                 onClick={() => setShowReviewModal(false)}
//                 className="cursor-pointer"
//               />
//             </div>

//             {/* Stars */}
//             <div className="flex gap-2 mb-4">
//               {[1, 2, 3, 4, 5].map((star) => (
//                 <button
//                   key={star}
//                   onClick={() => setReviewRating(star)}
//                   className="w-9 h-9 flex items-center justify-center border rounded-full"
//                 >
//                   <Star
//                     size={18}
//                     className={`${
//                       star <= reviewRating
//                         ? "fill-primary text-primary"
//                         : "text-gray-400"
//                     }`}
//                   />
//                 </button>
//               ))}
//             </div>

//             <textarea
//               value={reviewText}
//               onChange={(e) => setReviewText(e.target.value)}
//               rows={4}
//               placeholder="Write your experience..."
//               className="w-full border p-3 rounded-xl"
//             />

//             <button
//               onClick={() => {
//                 setSavedReview({
//                   rating: reviewRating,
//                   text: reviewText,
//                 });
//                 setShowReviewModal(false);
//               }}
//               disabled={!reviewRating}
//               className={`w-full mt-4 py-3 rounded-xl font-semibold ${
//                 reviewRating
//                   ? "bg-primary text-white"
//                   : "bg-gray-300 text-gray-600"
//               }`}
//             >
//               Submit Review
//             </button>
//           </div>
//         </div>
//       )}

//       {/* ---------- RETURN MODAL ---------- */}
//       {/* ---------- RETURN MODAL ---------- */}
//       {showReturnModal && (
//         <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50">
//           <div className="bg-white p-6 rounded-2xl w-full max-w-md">
//             <div className="flex justify-between">
//               <h2 className="font-semibold text-lg">Return Order</h2>
//               <X
//                 size={22}
//                 onClick={() => setShowReturnModal(false)}
//                 className="cursor-pointer"
//               />
//             </div>

//             {/* ----- RETURN REASON ----- */}
//             <p className="mt-3 font-medium">Reason for Return</p>

//             <div className="mt-2 space-y-2">
//               {returnReasons.map((reason) => (
//                 <button
//                   key={reason}
//                   onClick={() => setReturnReason(reason)}
//                   className={`w-full text-left px-3 py-2 rounded-lg border ${
//                     returnReason === reason
//                       ? "border-primary bg-primary/10"
//                       : "border-gray-300 hover:border-primary"
//                   }`}
//                 >
//                   {reason}
//                 </button>
//               ))}
//             </div>

//             {/* ----- REFUND VIA UPI (NEW) ----- */}
//             <div className="mt-5">
//               <p className="font-medium text-sm text-gray-700 mb-2">
//                 Select Refund Method (UPI)
//               </p>

//               <div className="space-y-2">
//                 {savedUpis.map((upi) => {
//                   const isSelected = selectedUpi === upi;
//                   return (
//                     <button
//                       key={upi}
//                       onClick={() => setSelectedUpi(upi)}
//                       className={`w-full flex items-center justify-between px-3 py-2 rounded-lg border text-sm ${
//                         isSelected
//                           ? "border-primary bg-primary/10 text-dark"
//                           : "border-gray-300 hover:border-primary/70 text-dark/70"
//                       }`}
//                     >
//                       <span>{upi}</span>
//                       {isSelected && (
//                         <CheckCircle size={18} className="text-primary" />
//                       )}
//                     </button>
//                   );
//                 })}
//               </div>

//               {/* Add new UPI option */}
//               <Link
//                 to="/myaccount/payments"
//                 className="mt-2 text-xs text-primary underline block w-fit"
//               >
//                 + Add another UPI ID
//               </Link>
//             </div>

//             {/* ----- PICKUP SCHEDULE ----- */}
//             <div className="mt-5 rounded-lg bg-neutral/50 p-3">
//               <p className="text-xs font-semibold text-gray-600 mb-1">
//                 Pickup Schedule
//               </p>
//               <p className="text-sm">{getPickupScheduleLabel()}</p>

//               <button
//                 type="button"
//                 onClick={() => setShowSlotPicker((v) => !v)}
//                 className="mt-2 text-xs font-semibold text-primary underline"
//               >
//                 Change pickup time slot
//               </button>

//               {showSlotPicker && (
//                 <div className="mt-2 flex flex-wrap gap-2">
//                   {["10 AM – 2 PM", "2 PM – 6 PM", "6 PM – 9 PM"].map(
//                     (slot) => {
//                       const active = returnSlot === slot;
//                       return (
//                         <button
//                           key={slot}
//                           type="button"
//                           onClick={() => {
//                             setReturnSlot(slot);
//                             setShowSlotPicker(false);
//                           }}
//                           className={`px-3 py-1 rounded-full text-xs border transition ${
//                             active
//                               ? "bg-primary text-white border-primary"
//                               : "border-neutral text-dark/70 hover:border-primary"
//                           }`}
//                         >
//                           {slot}
//                         </button>
//                       );
//                     }
//                   )}
//                 </div>
//               )}
//             </div>

//             {/* ----- SUBMIT BUTTON ----- */}
//             <button
//               disabled={!returnReason || !selectedUpi}
//               onClick={() => {
//                 setReturnInfo({
//                   reason: returnReason,
//                   schedule: getPickupScheduleLabel(),
//                   upi: selectedUpi,
//                 });
//                 setShowReturnModal(false);
//                 setReturnReason("");
//                 setSelectedUpi("");
//               }}
//               className={`w-full mt-4 py-3 rounded-xl font-semibold ${
//                 returnReason && selectedUpi
//                   ? "bg-primary text-white hover:bg-secondary"
//                   : "bg-gray-300 text-gray-600 cursor-not-allowed"
//               }`}
//             >
//               Submit Return Request
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default OrderDetails;

// import React, { useState, useRef } from "react";
// import { useParams, Link } from "react-router-dom";
// import { IoChevronUp } from "react-icons/io5";
// import { CheckCircle, Star, X } from "lucide-react";

// const OrderDetails = () => {
//   const { id } = useParams();

//   const [showBreakup, setShowBreakup] = useState(false);
//   const [showReviewModal, setShowReviewModal] = useState(false);
//   const [showReturnModal, setShowReturnModal] = useState(false);

//   // review states
//   const [reviewText, setReviewText] = useState("");
//   const [reviewRating, setReviewRating] = useState(0);
//   const [savedReview, setSavedReview] = useState(null);

//   // return states
//   const [returnReason, setReturnReason] = useState("");
//   const [returnSlot, setReturnSlot] = useState("10 AM – 2 PM");
//   const [showSlotPicker, setShowSlotPicker] = useState(false);
//   const [returnInfo, setReturnInfo] = useState(null); // local "return requested" info

//   const [selectedUpi, setSelectedUpi] = useState("");
//   const savedUpis = ["tushar@upi", "tusharpatil@ybl"]; // sample UPI IDs

//   const contentRef = useRef(null);

//   /** -------- SAMPLE ORDER DATA (replace with API) ---------- */
//   const orders = [
//     {
//       id: "1",
//       date: "24 Nov 2025",
//       time: "10:16 pm",
//       status: "delivered", // from API: confirmed | shipped | delivered | return-requested | returned
//       eta: "29 Nov 2025",
//       pickedOn: "27 Nov 2025",
//       transitDate: "28 Nov 2025",
//       deliveredOn: "29 Nov 2025",
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
//       ],
//     },
//   ];

//   const order = orders.find((o) => o.id === id);

//   if (!order) {
//     return <div className="p-10 text-center text-xl">Order Not Found</div>;
//   }

//   // 👇 status that UI will use – if local return is requested, we temporarily
//   // treat it as "return-requested" in UI (real app: backend should send this)
//   const baseStatus = order.status; // what API says
//   const status = returnInfo ? "return-requested" : baseStatus;

//   /** Pickup schedule label (for tomorrow) */
//   const getPickupScheduleLabel = () => {
//     const today = new Date();
//     const tomorrow = new Date(today);
//     tomorrow.setDate(today.getDate() + 1);

//     const day = tomorrow.toLocaleDateString("en-GB", {
//       day: "2-digit",
//       month: "short",
//       year: "numeric",
//     });

//     return `Pickup scheduled for ${day} between ${returnSlot}`;
//   };

//   const returnReasons = [
//     "Wrong Size",
//     "Defective / Damaged Product",
//     "Product Not as Described",
//     "Received Wrong Item",
//     "Other",
//   ];

//   const totalAmount = order.items.reduce((t, i) => t + Number(i.price), 0);

//   // COD fee separate for refund calc (your logic choice #2)
//   const COD_FEE = 20;
//   const refundAmount = totalAmount - COD_FEE;

//   const paidStatuses = ["delivered", "return-requested", "returned"];
//   const isPaid = paidStatuses.includes(status);

//   return (
//     <div className="p-6 space-y-6">
//       {/* ---------- ORDER NUMBER ---------- */}
//       <div className="bg-white p-6 rounded-xl border shadow-sm flex justify-between">
//         <div>
//           <p className="font-semibold text-dark">Order Number</p>
//           <p className="text-gray-600 mt-1">{order.id}</p>
//         </div>

//         <div className="text-right">
//           <p className="font-semibold text-dark">Order Placed</p>
//           <p className="text-gray-600 mt-1">
//             {order.date} • {order.time}
//           </p>
//         </div>
//       </div>

//       {/* ---------- ORDER ITEMS ---------- */}
//       <div className="bg-white p-6 rounded-xl border shadow-sm">
//         <h3 className="font-semibold text-lg mb-4 text-dark">Order Items</h3>

//         {order.items.map((item, index) => (
//           <Link
//             key={index}
//             to={`/collection/${item.slug}`}
//             className="flex gap-5 pb-5 border-b last:border-none hover:bg-neutral/50 rounded-lg transition"
//           >
//             <img
//               src={item.image}
//               className="w-32 h-40 rounded-lg object-cover"
//               alt={item.name}
//             />

//             <div>
//               <p className="font-semibold text-lg">{item.brand}</p>
//               <p className="text-gray-700">{item.name}</p>
//               <p className="mt-3 text-dark">Size: {item.size}</p>
//               <p className="font-semibold mt-1 text-dark">₹{item.price}</p>
//             </div>
//           </Link>
//         ))}
//       </div>

//       {/* ---------- STATUS / BANNER BLOCK ---------- */}
//       <div className="bg-white p-6 rounded-xl border shadow-sm space-y-3">
//         {/* STATUS HEADER BASED ON STATUS + RETURN INFO */}
//         {status === "return-requested" && (
//           <div className="bg-primary/10 p-4 rounded-lg border border-primary/30">
//             <p className="font-semibold text-primary text-lg flex items-center gap-2">
//               🔄 Return Requested
//             </p>
//             <p className="text-gray-700 mt-1">
//               {returnInfo?.schedule || getPickupScheduleLabel()}
//             </p>
//             <p className="text-gray-600 text-sm mt-1">
//               Reason: {returnInfo?.reason || returnReason}
//             </p>
//             {returnInfo?.upi && (
//               <p className="text-gray-600 text-sm">
//                 Refund to UPI:{" "}
//                 <span className="font-semibold">{returnInfo.upi}</span>
//               </p>
//             )}
//             <p className="text-[12px] text-gray-500 mt-1">
//               Refund of ₹{refundAmount} will be initiated to your selected UPI
//               after the item is picked up and quality check is completed.
//             </p>
//           </div>
//         )}

//         {status === "returned" && (
//           <div className="bg-green-50 p-4 rounded-lg border border-green-200">
//             <p className="font-semibold text-green-700 text-lg flex items-center gap-2">
//               <CheckCircle size={20} /> Item Returned
//             </p>
//             <p className="text-gray-700 mt-1">
//               Refund of ₹{refundAmount} has been processed to your UPI.
//             </p>
//           </div>
//         )}

//         {status === "delivered" && !returnInfo && (
//           <>
//             <p className="text-green-700 font-semibold text-lg flex items-center gap-2">
//               <CheckCircle size={22} /> Delivered Successfully
//             </p>
//             <p className="text-gray-700">Delivered on {order.deliveredOn}</p>
//           </>
//         )}

//         {status === "confirmed" && (
//           <>
//             <p className="text-green-600 font-semibold text-lg">
//               ✔ Order Confirmed
//             </p>
//             <p className="text-gray-700">
//               On {order.date}, {order.time}
//             </p>
//           </>
//         )}

//         {status === "shipped" && (
//           <>
//             <p className="font-semibold text-primary text-lg">
//               🚚 Order Shipped
//             </p>
//             <p className="text-gray-700">Arriving by {order.eta}</p>
//           </>
//         )}

//         {/* ACTION BUTTONS – only for delivered and not yet return-requested/returned */}
//         {status === "delivered" && !returnInfo && (
//           <div className="flex gap-4 mt-4 flex-wrap">
//             {/* Review button */}
//             <button
//               onClick={() => !savedReview && setShowReviewModal(true)}
//               className={`flex-1 py-3 border rounded-lg flex items-center justify-center gap-2
//                 ${
//                   savedReview
//                     ? "border-neutral bg-neutral text-gray-500 cursor-not-allowed"
//                     : "border-primary bg-primary text-white hover:bg-secondary"
//                 }`}
//             >
//               <Star size={17} />
//               {savedReview ? "Reviewed" : "Review"}
//             </button>

//             {/* Return button */}
//             <button
//               onClick={() => setShowReturnModal(true)}
//               className="flex-1 py-3 border border-primary rounded-lg text-primary hover:bg-primary hover:text-white flex items-center justify-center gap-2"
//             >
//               ↩ Return
//             </button>
//           </div>
//         )}

//         {/* Show saved review summary if exists */}
//         {savedReview && (
//           <div className="mt-4 bg-neutral/50 rounded-lg p-3 text-sm">
//             <p className="font-semibold mb-1 flex items-center gap-2">
//               Your Review
//               <span className="flex items-center gap-1 text-primary">
//                 {Array.from({ length: savedReview.rating }).map((_, i) => (
//                   <Star
//                     key={i}
//                     size={14}
//                     className="fill-primary text-primary"
//                   />
//                 ))}
//               </span>
//             </p>
//             <p className="text-gray-700">{savedReview.text}</p>
//           </div>
//         )}
//       </div>

//       {/* ---------- SHIPPING ADDRESS ---------- */}
//       <div className="bg-white p-6 rounded-xl border shadow-sm">
//         <h3 className="font-semibold text-lg mb-1">Shipping Address</h3>
//         <p className="font-semibold">
//           {order.address.name} | {order.address.mobile}
//         </p>
//         <p className="text-gray-700">{order.address.full}</p>
//       </div>

//       {/* ---------- PRICE BREAKUP + PAYMENT STATUS ---------- */}
//       <div className="bg-white p-6 rounded-xl border shadow-sm">
//         {/* Total + Payment Chip */}
//         <div className="flex justify-between items-center">
//           <p className="text-xl font-semibold">₹{totalAmount}.00 Total</p>

//           {isPaid ? (
//             <span className="px-3 py-1 text-sm font-semibold text-green-600 bg-green-100 rounded-lg">
//               Paid
//             </span>
//           ) : (
//             <span className="px-3 py-1 text-sm font-medium text-yellow-600 bg-yellow-100 rounded-lg">
//               To be paid before delivery
//             </span>
//           )}
//         </div>

//         {/* View Breakup */}
//         <div
//           onClick={() => setShowBreakup(!showBreakup)}
//           className="cursor-pointer mt-3 flex items-center gap-2"
//         >
//           <p className="text-primary font-semibold">View Breakup</p>
//           <IoChevronUp
//             className={`text-primary transition ${
//               showBreakup ? "rotate-180" : ""
//             }`}
//           />
//         </div>

//         {/* Breakup content */}
//         <div
//           ref={contentRef}
//           style={{
//             maxHeight: showBreakup ? contentRef.current?.scrollHeight : 0,
//           }}
//           className="transition-all overflow-hidden"
//         >
//           <div className="mt-4 space-y-4 text-[15px]">
//             <div className="flex justify-between">
//               <span>Item Total</span>
//               <span className="font-medium">₹{totalAmount}</span>
//             </div>
//             <div className="flex justify-between">
//               <span>Delivery Fee</span>
//               <span className="font-medium text-green-600">FREE</span>
//             </div>
//             <div className="flex justify-between">
//               <span>COD Fee</span>
//               <span className="font-medium">₹{COD_FEE}</span>
//             </div>
//             <hr />
//             <div className="flex justify-between font-semibold">
//               <p>Total to be paid</p>
//               <p>₹{totalAmount + COD_FEE}.00</p>
//             </div>
//             <p className="text-xs text-gray-500">
//               Refund (if returned): ₹{refundAmount} (COD fee of ₹{COD_FEE} is
//               non-refundable).
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* ---------- NEED HELP ---------- */}
//       <div className="bg-white p-6 rounded-xl border shadow-sm text-center">
//         <p className="text-primary font-semibold cursor-pointer">Need Help?</p>
//       </div>

//       {/* ===================== REVIEW MODAL ===================== */}
//       {showReviewModal && (
//         <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50">
//           <div className="bg-white p-6 rounded-2xl shadow-2xl w-full max-w-md">
//             <div className="flex justify-between items-center mb-4">
//               <h2 className="text-lg font-semibold text-dark">
//                 Review Product
//               </h2>
//               <button
//                 onClick={() => setShowReviewModal(false)}
//                 className="p-1 rounded-full hover:bg-neutral/70"
//               >
//                 <X size={20} />
//               </button>
//             </div>

//             {/* Rating row */}
//             <div className="mb-4">
//               <p className="text-sm text-gray-700 mb-2">Overall Rating</p>
//               <div className="flex gap-2">
//                 {[1, 2, 3, 4, 5].map((star) => (
//                   <button
//                     key={star}
//                     type="button"
//                     onClick={() => setReviewRating(star)}
//                     className="w-9 h-9 flex items-center justify-center rounded-full border border-neutral hover:border-primary transition"
//                   >
//                     <Star
//                       size={18}
//                       className={
//                         star <= reviewRating
//                           ? "fill-primary text-primary"
//                           : "text-gray-400"
//                       }
//                     />
//                   </button>
//                 ))}
//               </div>
//             </div>

//             <textarea
//               value={reviewText}
//               onChange={(e) => setReviewText(e.target.value)}
//               rows={4}
//               placeholder="Share your experience with this product..."
//               className="w-full border border-neutral rounded-xl p-3 text-sm outline-none focus:border-primary"
//             />

//             <button
//               onClick={() => {
//                 setSavedReview({
//                   rating: reviewRating,
//                   text: reviewText,
//                 });
//                 setShowReviewModal(false);
//               }}
//               disabled={!reviewRating}
//               className={`w-full mt-4 py-3 rounded-xl font-semibold text-sm ${
//                 reviewRating
//                   ? "bg-primary text-white hover:bg-secondary transition"
//                   : "bg-neutral text-gray-500 cursor-not-allowed"
//               }`}
//             >
//               Submit Review
//             </button>
//           </div>
//         </div>
//       )}

//       {/* ===================== RETURN MODAL ===================== */}
//       {showReturnModal && (
//         <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50">
//           <div className="bg-white p-6 rounded-2xl shadow-2xl w-full max-w-md">
//             <div className="flex justify-between items-center mb-3">
//               <h2 className="text-lg font-semibold text-dark">Return Order</h2>
//               <button
//                 onClick={() => setShowReturnModal(false)}
//                 className="p-1 rounded-full hover:bg-neutral/70"
//               >
//                 <X size={20} />
//               </button>
//             </div>

//             {/* Reason list */}
//             <p className="text-sm font-medium text-gray-700 mb-2">
//               Select a reason for return
//             </p>
//             <div className="space-y-2 mb-4">
//               {returnReasons.map((reason) => {
//                 const active = returnReason === reason;
//                 return (
//                   <button
//                     key={reason}
//                     type="button"
//                     onClick={() => setReturnReason(reason)}
//                     className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm border transition ${
//                       active
//                         ? "border-primary bg-primary/5 text-dark"
//                         : "border-neutral text-dark/70 hover:border-primary/60"
//                     }`}
//                   >
//                     <span>{reason}</span>
//                     {active && (
//                       <CheckCircle size={18} className="text-primary" />
//                     )}
//                   </button>
//                 );
//               })}
//             </div>

//             {/* Refund via UPI */}
//             <div className="mt-4">
//               <p className="font-medium text-sm text-gray-700 mb-2">
//                 Select Refund Method (UPI)
//               </p>

//               <div className="space-y-2">
//                 {savedUpis.map((upi) => {
//                   const isSelected = selectedUpi === upi;
//                   return (
//                     <button
//                       key={upi}
//                       onClick={() => setSelectedUpi(upi)}
//                       className={`w-full flex items-center justify-between px-3 py-2 rounded-lg border text-sm ${
//                         isSelected
//                           ? "border-primary bg-primary/10 text-dark"
//                           : "border-gray-300 hover:border-primary/70 text-dark/70"
//                       }`}
//                     >
//                       <span>{upi}</span>
//                       {isSelected && (
//                         <CheckCircle size={18} className="text-primary" />
//                       )}
//                     </button>
//                   );
//                 })}
//               </div>

//               <Link
//                 to="/myaccount/payments"
//                 className="mt-2 text-xs text-primary underline block w-fit"
//               >
//                 + Add another UPI ID
//               </Link>

//               <p className="text-[11px] text-gray-500 mt-1">
//                 Refund of ₹{refundAmount} will be processed to the selected UPI
//                 once the return is completed.
//               </p>
//             </div>

//             {/* Pickup schedule */}
//             <div className="mt-5 rounded-lg bg-neutral/50 p-3">
//               <p className="text-xs font-semibold text-gray-600 mb-1">
//                 Pickup Schedule
//               </p>
//               <p className="text-sm">{getPickupScheduleLabel()}</p>

//               <button
//                 type="button"
//                 onClick={() => setShowSlotPicker((v) => !v)}
//                 className="mt-2 text-xs font-semibold text-primary underline"
//               >
//                 Change pickup time slot
//               </button>

//               {showSlotPicker && (
//                 <div className="mt-2 flex flex-wrap gap-2">
//                   {["10 AM – 2 PM", "2 PM – 6 PM", "6 PM – 9 PM"].map(
//                     (slot) => {
//                       const active = returnSlot === slot;
//                       return (
//                         <button
//                           key={slot}
//                           type="button"
//                           onClick={() => {
//                             setReturnSlot(slot);
//                             setShowSlotPicker(false);
//                           }}
//                           className={`px-3 py-1 rounded-full text-xs border transition ${
//                             active
//                               ? "bg-primary text-white border-primary"
//                               : "border-neutral text-dark/70 hover:border-primary"
//                           }`}
//                         >
//                           {slot}
//                         </button>
//                       );
//                     }
//                   )}
//                 </div>
//               )}
//             </div>

//             {/* Submit Return */}
//             <button
//               disabled={!returnReason || !selectedUpi}
//               onClick={() => {
//                 setReturnInfo({
//                   reason: returnReason,
//                   schedule: getPickupScheduleLabel(),
//                   upi: selectedUpi,
//                 });
//                 setShowReturnModal(false);
//                 setReturnReason("");
//                 setSelectedUpi("");
//               }}
//               className={`w-full mt-4 py-3 rounded-xl font-semibold text-sm ${
//                 returnReason && selectedUpi
//                   ? "bg-primary text-white hover:bg-secondary"
//                   : "bg-gray-300 text-gray-600 cursor-not-allowed"
//               }`}
//             >
//               Submit Return Request
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default OrderDetails;

import React, { useState, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { IoChevronUp } from "react-icons/io5";
import { CheckCircle, Star, X, Package } from "lucide-react";

const OrderDetails = () => {
  const { id } = useParams();

  const [showBreakup, setShowBreakup] = useState(false);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [showReturnModal, setShowReturnModal] = useState(false);

  // review states
  const [reviewText, setReviewText] = useState("");
  const [reviewRating, setReviewRating] = useState(0);
  const [savedReview, setSavedReview] = useState(null);

  // return states
  const [returnReason, setReturnReason] = useState("");
  const [returnSlot, setReturnSlot] = useState("10 AM – 2 PM");
  const [showSlotPicker, setShowSlotPicker] = useState(false);
  const [returnInfo, setReturnInfo] = useState(null); // local "return requested" info

  const [selectedUpi, setSelectedUpi] = useState("");
  const savedUpis = ["tushar@upi", "tusharpatil@ybl"]; // sample UPI IDs

  const contentRef = useRef(null);

  /** -------- SAMPLE ORDER DATA (replace with API) ---------- */
  const orders = [
    {
      id: "1",
      date: "24 Nov 2025",
      time: "10:16 pm",
      status: "returned", // from API: confirmed | shipped | delivered | return-requested | returned
      eta: "29 Nov 2025",
      pickedOn: "27 Nov 2025",
      transitDate: "28 Nov 2025",
      deliveredOn: "29 Nov 2025",
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
      ],
    },
  ];

  const trackSectionRef = useRef(null);

  // 🔧 Add this function
  const scrollToTracking = () => {
    setTimeout(() => {
      trackSectionRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const order = orders.find((o) => o.id === id);

  if (!order) {
    return <div className="p-10 text-center text-xl">Order Not Found</div>;
  }

  // 👇 status that UI will use – if local return is requested, we temporarily
  // treat it as "return-requested" in UI (real app: backend should send this)
  const baseStatus = order.status; // what API says
  const status = returnInfo ? "return-requested" : baseStatus;

  /** Pickup schedule label (for tomorrow) */
  const getPickupScheduleLabel = () => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    const day = tomorrow.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });

    return `Pickup scheduled for ${day} between ${returnSlot}`;
  };

  const returnReasons = [
    "Wrong Size",
    "Defective / Damaged Product",
    "Product Not as Described",
    "Received Wrong Item",
    "Other",
  ];

  const totalAmount = order.items.reduce((t, i) => t + Number(i.price), 0);

  // COD fee separate for refund calc (your logic choice #2)
  const COD_FEE = 20;
  const refundAmount = totalAmount - COD_FEE;

  const paidStatuses = ["delivered", "return-requested", "returned"];
  const isPaid = paidStatuses.includes(status);

  return (
    <div className="p-6 space-y-6">
      {/* ---------- ORDER NUMBER ---------- */}
      <div className="bg-white p-6 rounded-xl border shadow-sm flex justify-between">
        <div>
          <p className="font-semibold text-dark">Order Number</p>
          <p className="text-gray-600 mt-1">{order.id}</p>
        </div>

        <div className="text-right">
          <p className="font-semibold text-dark">Order Placed</p>
          <p className="text-gray-600 mt-1">
            {order.date} • {order.time}
          </p>
        </div>
      </div>

      {/* ---------- ORDER ITEMS ---------- */}
      <div className="bg-white p-6 rounded-xl border shadow-sm">
        <h3 className="font-semibold text-lg mb-4 text-dark">Order Items</h3>

        {order.items.map((item, index) => (
          <Link
            key={index}
            to={`/collection/${item.slug}`}
            className="flex gap-5 pb-5 border-b last:border-none hover:bg-neutral/50 rounded-lg transition"
          >
            <img
              src={item.image}
              className="w-32 h-40 rounded-lg object-cover"
              alt={item.name}
            />

            <div>
              <p className="font-semibold text-lg">{item.brand}</p>
              <p className="text-gray-700">{item.name}</p>
              <p className="mt-3 text-dark">Size: {item.size}</p>
              <p className="font-semibold mt-1 text-dark">₹{item.price}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* ---------- STATUS / BANNER BLOCK ---------- */}
      <div className="bg-white p-6 rounded-xl border shadow-sm space-y-3">
        {/* STATUS HEADER BASED ON STATUS + RETURN INFO */}
        {status === "return-requested" && (
          <div className="bg-primary/10 p-4 rounded-lg border border-primary/30">
            <p className="font-semibold text-primary text-lg flex items-center gap-2">
              🔄 Return Requested
            </p>
            <p className="text-gray-700 mt-1">
              {returnInfo?.schedule || getPickupScheduleLabel()}
            </p>
            <p className="text-gray-600 text-sm mt-1">
              Reason: {returnInfo?.reason || returnReason}
            </p>
            {returnInfo?.upi && (
              <p className="text-gray-600 text-sm">
                Refund to UPI:{" "}
                <span className="font-semibold">{returnInfo.upi}</span>
              </p>
            )}
            <p className="text-[12px] text-gray-500 mt-1">
              Refund of ₹{refundAmount} will be initiated to your selected UPI
              after the item is picked up and quality check is completed.
            </p>
          </div>
        )}

        {status === "returned" && (
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <p className="font-semibold text-green-700 text-lg flex items-center gap-2">
              <CheckCircle size={20} /> Item Returned
            </p>
            <p className="text-gray-700 mt-1">
              Refund of ₹{refundAmount} has been processed to your UPI.
            </p>
          </div>
        )}

        {status === "delivered" && !returnInfo && (
          <>
            <p className="text-green-700 font-semibold text-lg flex items-center gap-2">
              <CheckCircle size={22} /> Delivered Successfully
            </p>
            <p className="text-gray-700">Delivered on {order.deliveredOn}</p>
          </>
        )}

        {status === "confirmed" && (
          <>
            <p className="text-green-600 font-semibold text-lg">
              ✔ Order Confirmed
            </p>
            <p className="text-gray-700">
              On {order.date}, {order.time}
            </p>
          </>
        )}

        {status === "shipped" && (
          <>
            <p className="font-semibold text-primary text-lg">
              🚚 Order Shipped
            </p>
            <p className="text-gray-700">Arriving by {order.eta}</p>
          </>
        )}

        {/* -------------------- ACTION BUTTONS -------------------- */}
        <div className="flex items-center gap-4 mt-6 flex-wrap">
          {/* 1️⃣ CONFIRMED */}
          {status === "confirmed" && (
            <>
              <Link
                to={`/account/orders/${order.id}/cancel`}
                className="flex-1 py-3 border border-gray-300 rounded-lg 
        text-red-500 font-medium text-center"
              >
                ✖ Cancel
              </Link>

              <button
                disabled
                className="flex-1 py-3 border border-gray-300 rounded-lg 
        text-gray-400 cursor-not-allowed"
              >
                📍 Track
              </button>
            </>
          )}

          {/* 2️⃣ SHIPPED */}
          {status === "shipped" && (
            <>
              <button
                disabled
                className="flex-1 py-3 border border-gray-300 rounded-lg 
        text-gray-400 cursor-not-allowed"
              >
                ✖ Cancel
              </button>

              <button
                onClick={scrollToTracking}
                className="flex-1 py-3 border border-primary text-primary 
        rounded-lg font-semibold"
              >
                📍 Track
              </button>
            </>
          )}

          {/* 3️⃣ DELIVERED */}
          {status === "delivered" && !returnInfo && (
            <>
              {/* Review Button */}
              <button
                onClick={() => !savedReview && setShowReviewModal(true)}
                className={`flex-1 py-3 border rounded-lg flex items-center justify-center gap-2
          ${
            savedReview
              ? "border-neutral bg-neutral text-gray-500 cursor-not-allowed"
              : "border-primary bg-primary text-white hover:bg-secondary"
          }`}
              >
                <Star size={17} />
                {savedReview ? "Reviewed" : "Review"}
              </button>

              {/* Return Button */}
              <button
                onClick={() => setShowReturnModal(true)}
                className="flex-1 py-3 border border-primary rounded-lg 
        text-primary font-medium hover:bg-primary hover:text-white 
        flex items-center justify-center gap-2"
              >
                ↩ Return
              </button>
            </>
          )}

          {/* 4️⃣ RETURN REQUESTED */}
          {status === "return-requested" && (
            <p className="text-primary font-medium text-sm mt-2 w-full">
              Return request submitted. Pickup scheduled.
            </p>
          )}

          {/* 5️⃣ RETURNED */}
          {status === "returned" && (
            <p className="text-green-600 font-medium text-sm mt-2 w-full">
              Item successfully returned.
            </p>
          )}
        </div>

        {/* Show saved review summary if exists */}
        {savedReview && (
          <div className="mt-4 bg-neutral/50 rounded-lg p-3 text-sm">
            <p className="font-semibold mb-1 flex items-center gap-2">
              Your Review
              <span className="flex items-center gap-1 text-primary">
                {Array.from({ length: savedReview.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className="fill-primary text-primary"
                  />
                ))}
              </span>
            </p>
            <p className="text-gray-700">{savedReview.text}</p>
          </div>
        )}
      </div>

      {/* ---------- SHIPPING ADDRESS ---------- */}
      <div className="bg-white p-6 rounded-xl border shadow-sm">
        <h3 className="font-semibold text-lg mb-1">Shipping Address</h3>
        <p className="font-semibold">
          {order.address.name} | {order.address.mobile}
        </p>
        <p className="text-gray-700">{order.address.full}</p>
      </div>

      {/* ---------- PRICE BREAKUP + PAYMENT STATUS ---------- */}
      <div className="bg-white p-6 rounded-xl border shadow-sm">
        {/* Total + Payment Chip */}
        <div className="flex justify-between items-center">
          <p className="text-xl font-semibold">₹{totalAmount}.00 Total</p>

          {isPaid ? (
            <span className="px-3 py-1 text-sm font-semibold text-green-600 bg-green-100 rounded-lg">
              Paid
            </span>
          ) : (
            <span className="px-3 py-1 text-sm font-medium text-yellow-600 bg-yellow-100 rounded-lg">
              To be paid before delivery
            </span>
          )}
        </div>

        {/* View Breakup */}
        <div
          onClick={() => setShowBreakup(!showBreakup)}
          className="cursor-pointer mt-3 flex items-center gap-2"
        >
          <p className="text-primary font-semibold">View Breakup</p>
          <IoChevronUp
            className={`text-primary transition ${
              showBreakup ? "rotate-180" : ""
            }`}
          />
        </div>

        {/* Breakup content */}
        <div
          ref={contentRef}
          style={{
            maxHeight: showBreakup ? contentRef.current?.scrollHeight : 0,
          }}
          className="transition-all overflow-hidden"
        >
          <div className="mt-4 space-y-4 text-[15px]">
            <div className="flex justify-between">
              <span>Item Total</span>
              <span className="font-medium">₹{totalAmount}</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery Fee</span>
              <span className="font-medium text-green-600">FREE</span>
            </div>
            <div className="flex justify-between">
              <span>COD Fee</span>
              <span className="font-medium">₹{COD_FEE}</span>
            </div>
            <hr />
            <div className="flex justify-between font-semibold">
              <p>Total to be paid</p>
              <p>₹{totalAmount + COD_FEE}.00</p>
            </div>
            <p className="text-xs text-gray-500">
              Refund (if returned): ₹{refundAmount} (COD fee of ₹{COD_FEE} is
              non-refundable).
            </p>
          </div>
        </div>
      </div>

      {/* ---------- NEED HELP ---------- */}
      <div className="bg-white p-6 rounded-xl border shadow-sm text-center">
        <p className="text-primary font-semibold cursor-pointer">Need Help?</p>
      </div>

      {/* ---------- TRACKING SECTION (only when shipped) ---------- */}
      {status === "shipped" && (
        <div
          ref={trackSectionRef}
          className="bg-white p-6 rounded-xl border shadow-sm"
        >
          <h2 className="font-semibold text-lg mb-4">Track Your Order</h2>

          <p className="text-gray-700 mb-1">
            Status: <span className="font-semibold capitalize">{status}</span>
          </p>

          <p className="text-gray-700">
            Courier: <span className="font-semibold">Xpressbees</span>
          </p>

          <p className="text-gray-700 mt-1">
            Tracking ID:{" "}
            <span className="font-semibold text-primary">125852132149</span>
          </p>

          <hr className="my-4" />

          <div className="space-y-10 mt-4">
            {[
              { label: "Order Placed On", date: order.date },
              { label: "Picked Up On", date: order.pickedOn },
              { label: "In Transit On", date: order.transitDate },
              { label: "Arriving By", date: order.eta },
              { label: "Delivered On", date: order.deliveredOn },
            ].map((step, index, arr) => {
              const isDone = index <= 2; // shipped = 2nd step complete
              const isLast = index === arr.length - 1;

              return (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex flex-col items-center">
                    <span className="w-6 h-6 flex items-center justify-center">
                      {isDone ? (
                        <CheckCircle size={22} className="text-green-600" />
                      ) : (
                        <Package size={20} className="text-gray-400" />
                      )}
                    </span>

                    {!isLast && (
                      <span
                        className={`w-[2px] flex-1 ${
                          isDone ? "bg-green-600" : "bg-gray-300"
                        }`}
                      ></span>
                    )}
                  </div>

                  <div>
                    <h4
                      className={`font-semibold ${
                        isDone ? "text-green-700" : "text-gray-600"
                      }`}
                    >
                      {step.label}
                    </h4>
                    <p className="text-gray-700">{step.date}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ===================== REVIEW MODAL ===================== */}
      {showReviewModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50">
          <div className="bg-white p-6 rounded-2xl shadow-2xl w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-dark">
                Review Product
              </h2>
              <button
                onClick={() => setShowReviewModal(false)}
                className="p-1 rounded-full hover:bg-neutral/70"
              >
                <X size={20} />
              </button>
            </div>

            {/* Rating row */}
            <div className="mb-4">
              <p className="text-sm text-gray-700 mb-2">Overall Rating</p>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setReviewRating(star)}
                    className="w-9 h-9 flex items-center justify-center rounded-full border border-neutral hover:border-primary transition"
                  >
                    <Star
                      size={18}
                      className={
                        star <= reviewRating
                          ? "fill-primary text-primary"
                          : "text-gray-400"
                      }
                    />
                  </button>
                ))}
              </div>
            </div>

            <textarea
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              rows={4}
              placeholder="Share your experience with this product..."
              className="w-full border border-neutral rounded-xl p-3 text-sm outline-none focus:border-primary"
            />

            <button
              onClick={() => {
                setSavedReview({
                  rating: reviewRating,
                  text: reviewText,
                });
                setShowReviewModal(false);
              }}
              disabled={!reviewRating}
              className={`w-full mt-4 py-3 rounded-xl font-semibold text-sm ${
                reviewRating
                  ? "bg-primary text-white hover:bg-secondary transition"
                  : "bg-neutral text-gray-500 cursor-not-allowed"
              }`}
            >
              Submit Review
            </button>
          </div>
        </div>
      )}

      {/* ===================== RETURN MODAL ===================== */}
      {showReturnModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50">
          <div className="bg-white p-6 rounded-2xl shadow-2xl w-full max-w-md">
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-lg font-semibold text-dark">Return Order</h2>
              <button
                onClick={() => setShowReturnModal(false)}
                className="p-1 rounded-full hover:bg-neutral/70"
              >
                <X size={20} />
              </button>
            </div>

            {/* Reason list */}
            <p className="text-sm font-medium text-gray-700 mb-2">
              Select a reason for return
            </p>
            <div className="space-y-2 mb-4">
              {returnReasons.map((reason) => {
                const active = returnReason === reason;
                return (
                  <button
                    key={reason}
                    type="button"
                    onClick={() => setReturnReason(reason)}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm border transition ${
                      active
                        ? "border-primary bg-primary/5 text-dark"
                        : "border-neutral text-dark/70 hover:border-primary/60"
                    }`}
                  >
                    <span>{reason}</span>
                    {active && (
                      <CheckCircle size={18} className="text-primary" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Refund via UPI */}
            <div className="mt-4">
              <p className="font-medium text-sm text-gray-700 mb-2">
                Select Refund Method (UPI)
              </p>

              <div className="space-y-2">
                {savedUpis.map((upi) => {
                  const isSelected = selectedUpi === upi;
                  return (
                    <button
                      key={upi}
                      onClick={() => setSelectedUpi(upi)}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-lg border text-sm ${
                        isSelected
                          ? "border-primary bg-primary/10 text-dark"
                          : "border-gray-300 hover:border-primary/70 text-dark/70"
                      }`}
                    >
                      <span>{upi}</span>
                      {isSelected && (
                        <CheckCircle size={18} className="text-primary" />
                      )}
                    </button>
                  );
                })}
              </div>

              <Link
                to="/account/payments"
                className="mt-2 text-xs text-primary underline block w-fit"
              >
                + Add another UPI ID
              </Link>

              <p className="text-[11px] text-gray-500 mt-1">
                Refund of ₹{refundAmount} will be processed to the selected UPI
                once the return is completed.
              </p>
            </div>

            {/* Pickup schedule */}
            <div className="mt-5 rounded-lg bg-neutral/50 p-3">
              <p className="text-xs font-semibold text-gray-600 mb-1">
                Pickup Schedule
              </p>
              <p className="text-sm">{getPickupScheduleLabel()}</p>

              <button
                type="button"
                onClick={() => setShowSlotPicker((v) => !v)}
                className="mt-2 text-xs font-semibold text-primary underline"
              >
                Change pickup time slot
              </button>

              {showSlotPicker && (
                <div className="mt-2 flex flex-wrap gap-2">
                  {["10 AM – 2 PM", "2 PM – 6 PM", "6 PM – 9 PM"].map(
                    (slot) => {
                      const active = returnSlot === slot;
                      return (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => {
                            setReturnSlot(slot);
                            setShowSlotPicker(false);
                          }}
                          className={`px-3 py-1 rounded-full text-xs border transition ${
                            active
                              ? "bg-primary text-white border-primary"
                              : "border-neutral text-dark/70 hover:border-primary"
                          }`}
                        >
                          {slot}
                        </button>
                      );
                    }
                  )}
                </div>
              )}
            </div>

            {/* Submit Return */}
            <button
              disabled={!returnReason || !selectedUpi}
              onClick={() => {
                setReturnInfo({
                  reason: returnReason,
                  schedule: getPickupScheduleLabel(),
                  upi: selectedUpi,
                });
                setShowReturnModal(false);
                setReturnReason("");
                setSelectedUpi("");
              }}
              className={`w-full mt-4 py-3 rounded-xl font-semibold text-sm ${
                returnReason && selectedUpi
                  ? "bg-primary text-white hover:bg-secondary"
                  : "bg-gray-300 text-gray-600 cursor-not-allowed"
              }`}
            >
              Submit Return Request
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderDetails;
