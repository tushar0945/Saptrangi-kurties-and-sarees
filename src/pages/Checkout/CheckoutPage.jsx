// // // // // // // // // import React, { useState, useEffect } from "react";
// // // // // // // // // import { useCart } from "../../context/CartContext";

// // // // // // // // // // Desktop components
// // // // // // // // // import PaymentTabs from "./components/PaymentTabs";
// // // // // // // // // import CardPayment from "./components/CardPayment";
// // // // // // // // // import WalletPayment from "./components/WalletPayment";
// // // // // // // // // import UPIPayment from "./components/UPIPayment";
// // // // // // // // // import NetBankingPayment from "./components/NetBankingPayment";
// // // // // // // // // import CODPayment from "./components/CODPayment";
// // // // // // // // // import OrderSummary from "./components/OrderSummary";

// // // // // // // // // // Mobile full custom flow
// // // // // // // // // import MobileCheckout from "./components/MobileCheckout";

// // // // // // // // // const CheckoutPage = () => {
// // // // // // // // //   const { cart } = useCart();
// // // // // // // // //   const [selectedMethod, setSelectedMethod] = useState("card");

// // // // // // // // //   const [isMobile, setIsMobile] = useState(false);

// // // // // // // // //   // Detect mobile view
// // // // // // // // //   useEffect(() => {
// // // // // // // // //     const handle = () => setIsMobile(window.innerWidth < 1050);
// // // // // // // // //     handle();
// // // // // // // // //     window.addEventListener("resize", handle);
// // // // // // // // //     return () => window.removeEventListener("resize", handle);
// // // // // // // // //   }, []);

// // // // // // // // //   const renderPaymentComponent = () => {
// // // // // // // // //     switch (selectedMethod) {
// // // // // // // // //       case "card":
// // // // // // // // //         return <CardPayment />;
// // // // // // // // //       case "wallet":
// // // // // // // // //         return <WalletPayment />;
// // // // // // // // //       case "upi":
// // // // // // // // //         return <UPIPayment />;
// // // // // // // // //       case "netbanking":
// // // // // // // // //         return <NetBankingPayment />;
// // // // // // // // //       case "cod":
// // // // // // // // //         return <CODPayment amount={cart?.[0]?.price || 0} />;
// // // // // // // // //       default:
// // // // // // // // //         return <CardPayment />;
// // // // // // // // //     }
// // // // // // // // //   };

// // // // // // // // //   return (
// // // // // // // // //     <div className="max-w-[1550px] mx-auto px-3 sm:px-4 md:px-4 lg:px-10 py-10">
// // // // // // // // //       {/* DESKTOP VIEW */}
// // // // // // // // //       {!isMobile && (
// // // // // // // // //         <>
// // // // // // // // //           <h1 className="text-2xl font-semibold mb-6">
// // // // // // // // //             Choose Your Payment Method
// // // // // // // // //           </h1>

// // // // // // // // //           <div className="flex gap-8">
// // // // // // // // //             {/* Payment Tabs */}
// // // // // // // // //             <div className="w-full lg:w-2/3">
// // // // // // // // //               <div className="bg-white border rounded-lg shadow-sm flex overflow-hidden">
// // // // // // // // //                 <PaymentTabs
// // // // // // // // //                   selected={selectedMethod}
// // // // // // // // //                   onChange={setSelectedMethod}
// // // // // // // // //                 />
// // // // // // // // //                 <div className="flex-1 p-6">{renderPaymentComponent()}</div>
// // // // // // // // //               </div>
// // // // // // // // //             </div>

// // // // // // // // //             {/* Order Summary */}
// // // // // // // // //             <div className="w-full lg:w-1/3">
// // // // // // // // //               <OrderSummary cart={cart} />
// // // // // // // // //             </div>
// // // // // // // // //           </div>
// // // // // // // // //         </>
// // // // // // // // //       )}

// // // // // // // // //       {/* MOBILE VIEW */}
// // // // // // // // //       {isMobile && (
// // // // // // // // //         <MobileCheckout
// // // // // // // // //           OrderSummary={OrderSummary}
// // // // // // // // //           CardPayment={CardPayment}
// // // // // // // // //           UPIPayment={UPIPayment}
// // // // // // // // //           WalletPayment={WalletPayment}
// // // // // // // // //           NetBankingPayment={NetBankingPayment}
// // // // // // // // //           CODPayment={CODPayment}
// // // // // // // // //           cart={cart}
// // // // // // // // //         />
// // // // // // // // //       )}
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export default CheckoutPage;

// // // // // // // // import React, { useState, useEffect } from "react";
// // // // // // // // import { useCart } from "../../context/CartContext";

// // // // // // // // // Desktop components
// // // // // // // // import PaymentTabs from "./components/PaymentTabs";
// // // // // // // // import CardPayment from "./components/CardPayment";
// // // // // // // // import WalletPayment from "./components/WalletPayment";
// // // // // // // // import UPIPayment from "./components/UPIPayment";
// // // // // // // // import NetBankingPayment from "./components/NetBankingPayment";
// // // // // // // // import CODPayment from "./components/CODPayment";
// // // // // // // // import OrderSummary from "./components/OrderSummary";

// // // // // // // // // Mobile full custom flow
// // // // // // // // import MobileCheckout from "./components/MobileCheckout";

// // // // // // // // const CheckoutPage = () => {
// // // // // // // //   // ✅ UPDATED CONTEXT USAGE
// // // // // // // //   const { cart, buyNowItem, clearBuyNow } = useCart();

// // // // // // // //   // ✅ Decide source of truth
// // // // // // // //   const checkoutItems = buyNowItem ?? cart;
// // // // // // // //   console.log("checout item: ", checkoutItems);
// // // // // // // //   const [selectedMethod, setSelectedMethod] = useState("card");
// // // // // // // //   const [isMobile, setIsMobile] = useState(false);

// // // // // // // //   // Detect mobile view
// // // // // // // //   useEffect(() => {
// // // // // // // //     const handle = () => setIsMobile(window.innerWidth < 1050);
// // // // // // // //     handle();
// // // // // // // //     window.addEventListener("resize", handle);
// // // // // // // //     return () => window.removeEventListener("resize", handle);
// // // // // // // //   }, []);

// // // // // // // //   // ✅ Clear buy-now when leaving checkout (important)
// // // // // // // //   useEffect(() => {
// // // // // // // //     return () => {
// // // // // // // //       clearBuyNow();
// // // // // // // //     };
// // // // // // // //   }, [clearBuyNow]);

// // // // // // // //   const renderPaymentComponent = () => {
// // // // // // // //     switch (selectedMethod) {
// // // // // // // //       case "card":
// // // // // // // //         return <CardPayment />;
// // // // // // // //       case "wallet":
// // // // // // // //         return <WalletPayment />;
// // // // // // // //       case "upi":
// // // // // // // //         return <UPIPayment />;
// // // // // // // //       case "netbanking":
// // // // // // // //         return <NetBankingPayment />;
// // // // // // // //       case "cod":
// // // // // // // //         return (
// // // // // // // //           <CODPayment
// // // // // // // //             amount={
// // // // // // // //               checkoutItems?.[0]?.price * (checkoutItems?.[0]?.qty || 1) || 0
// // // // // // // //             }
// // // // // // // //           />
// // // // // // // //         );
// // // // // // // //       default:
// // // // // // // //         return <CardPayment />;
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   // 🛑 Safety: empty checkout
// // // // // // // //   if (!checkoutItems || checkoutItems.length === 0) {
// // // // // // // //     return (
// // // // // // // //       <div className="h-[60vh] flex items-center justify-center text-gray-600">
// // // // // // // //         Your checkout is empty
// // // // // // // //       </div>
// // // // // // // //     );
// // // // // // // //   }

// // // // // // // //   return (
// // // // // // // //     <div className="max-w-[1550px] mx-auto px-3 sm:px-4 md:px-4 lg:px-10 py-10">
// // // // // // // //       {/* DESKTOP VIEW */}
// // // // // // // //       {!isMobile && (
// // // // // // // //         <>
// // // // // // // //           <h1 className="text-2xl font-semibold mb-6">
// // // // // // // //             Choose Your Payment Method
// // // // // // // //           </h1>

// // // // // // // //           <div className="flex gap-8">
// // // // // // // //             {/* Payment Tabs */}
// // // // // // // //             <div className="w-full lg:w-2/3">
// // // // // // // //               <div className="bg-white border rounded-lg shadow-sm flex overflow-hidden">
// // // // // // // //                 <PaymentTabs
// // // // // // // //                   selected={selectedMethod}
// // // // // // // //                   onChange={setSelectedMethod}
// // // // // // // //                 />
// // // // // // // //                 <div className="flex-1 p-6">{renderPaymentComponent()}</div>
// // // // // // // //               </div>
// // // // // // // //             </div>

// // // // // // // //             {/* Order Summary */}
// // // // // // // //             <div className="w-full lg:w-1/3">
// // // // // // // //               <OrderSummary cart={checkoutItems} />
// // // // // // // //             </div>
// // // // // // // //           </div>
// // // // // // // //         </>
// // // // // // // //       )}

// // // // // // // //       {/* MOBILE VIEW */}
// // // // // // // //       {isMobile && (
// // // // // // // //         <MobileCheckout
// // // // // // // //           OrderSummary={OrderSummary}
// // // // // // // //           CardPayment={CardPayment}
// // // // // // // //           UPIPayment={UPIPayment}
// // // // // // // //           WalletPayment={WalletPayment}
// // // // // // // //           NetBankingPayment={NetBankingPayment}
// // // // // // // //           CODPayment={CODPayment}
// // // // // // // //           cart={checkoutItems}
// // // // // // // //         />
// // // // // // // //       )}
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default CheckoutPage;

// // // // // // // import React, { useState, useEffect } from "react";
// // // // // // // import { useCart } from "../../context/CartContext";

// // // // // // // // Desktop components
// // // // // // // import PaymentTabs from "./components/PaymentTabs";
// // // // // // // import CardPayment from "./components/CardPayment";
// // // // // // // import WalletPayment from "./components/WalletPayment";
// // // // // // // import UPIPayment from "./components/UPIPayment";
// // // // // // // import NetBankingPayment from "./components/NetBankingPayment";
// // // // // // // import CODPayment from "./components/CODPayment";
// // // // // // // import OrderSummary from "./components/OrderSummary";

// // // // // // // // Mobile flow
// // // // // // // import MobileCheckout from "./components/MobileCheckout";

// // // // // // // const CheckoutPage = () => {
// // // // // // //   // ✅ CONTEXT
// // // // // // //   const { cart, buyNowItem, clearBuyNow } = useCart();

// // // // // // //   console.log("Buy now : ", buyNowItem);
// // // // // // //   console.log("Cart : ", cart);
// // // // // // //   // ✅ Decide checkout source
// // // // // // //   const checkoutItems = buyNowItem ?? cart;

// // // // // // //   const [selectedMethod, setSelectedMethod] = useState("card");
// // // // // // //   const [isMobile, setIsMobile] = useState(false);

// // // // // // //   // =========================
// // // // // // //   // MOBILE DETECTION
// // // // // // //   // =========================
// // // // // // //   useEffect(() => {
// // // // // // //     const handleResize = () => setIsMobile(window.innerWidth < 1050);
// // // // // // //     handleResize();
// // // // // // //     window.addEventListener("resize", handleResize);
// // // // // // //     return () => window.removeEventListener("resize", handleResize);
// // // // // // //   }, []);

// // // // // // //   // // =========================
// // // // // // //   // // CLEAR BUY-NOW ON EXIT
// // // // // // //   // // =========================
// // // // // // //   // useEffect(() => {
// // // // // // //   //   return () => {
// // // // // // //   //     clearBuyNow();
// // // // // // //   //   };
// // // // // // //   // }, [clearBuyNow]);

// // // // // // //   // =========================
// // // // // // //   // PAYMENT RENDER
// // // // // // //   // =========================
// // // // // // //   const renderPaymentComponent = () => {
// // // // // // //     const item = checkoutItems?.[0];
// // // // // // //     const price = item?.product_details?.price || 0;
// // // // // // //     const qty = item?.quantity || 1;

// // // // // // //     switch (selectedMethod) {
// // // // // // //       case "card":
// // // // // // //         return <CardPayment />;
// // // // // // //       case "wallet":
// // // // // // //         return <WalletPayment />;
// // // // // // //       case "upi":
// // // // // // //         return <UPIPayment />;
// // // // // // //       case "netbanking":
// // // // // // //         return <NetBankingPayment />;
// // // // // // //       case "cod":
// // // // // // //         return <CODPayment amount={price * qty} />;
// // // // // // //       default:
// // // // // // //         return <CardPayment />;
// // // // // // //     }
// // // // // // //   };

// // // // // // //   // =========================
// // // // // // //   // SAFETY CHECK
// // // // // // //   // =========================
// // // // // // //   if (!checkoutItems || checkoutItems.length === 0) {
// // // // // // //     return (
// // // // // // //       <div className="h-[60vh] flex items-center justify-center text-gray-600">
// // // // // // //         Your checkout is empty
// // // // // // //       </div>
// // // // // // //     );
// // // // // // //   }

// // // // // // //   // =========================
// // // // // // //   // UI
// // // // // // //   // =========================
// // // // // // //   return (
// // // // // // //     <div className="max-w-[1550px] mx-auto px-3 sm:px-4 md:px-4 lg:px-10 py-10">
// // // // // // //       {/* DESKTOP */}
// // // // // // //       {!isMobile && (
// // // // // // //         <>
// // // // // // //           <h1 className="text-2xl font-semibold mb-6">
// // // // // // //             Choose Your Payment Method
// // // // // // //           </h1>

// // // // // // //           <div className="flex gap-8">
// // // // // // //             {/* PAYMENT SECTION */}
// // // // // // //             <div className="w-full lg:w-2/3">
// // // // // // //               <div className="bg-white border rounded-lg shadow-sm flex overflow-hidden">
// // // // // // //                 <PaymentTabs
// // // // // // //                   selected={selectedMethod}
// // // // // // //                   onChange={setSelectedMethod}
// // // // // // //                 />
// // // // // // //                 <div className="flex-1 p-6">{renderPaymentComponent()}</div>
// // // // // // //               </div>
// // // // // // //             </div>

// // // // // // //             {/* ORDER SUMMARY */}
// // // // // // //             <div className="w-full lg:w-1/3">
// // // // // // //               <OrderSummary cart={checkoutItems} />
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //         </>
// // // // // // //       )}

// // // // // // //       {/* MOBILE */}
// // // // // // //       {isMobile && (
// // // // // // //         <MobileCheckout
// // // // // // //           OrderSummary={OrderSummary}
// // // // // // //           CardPayment={CardPayment}
// // // // // // //           UPIPayment={UPIPayment}
// // // // // // //           WalletPayment={WalletPayment}
// // // // // // //           NetBankingPayment={NetBankingPayment}
// // // // // // //           CODPayment={CODPayment}
// // // // // // //           cart={checkoutItems}
// // // // // // //         />
// // // // // // //       )}
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default CheckoutPage;

// // // // // // import React, { useState, useEffect } from "react";
// // // // // // import { useCart } from "../../context/CartContext";

// // // // // // // Desktop components
// // // // // // import PaymentTabs from "./components/PaymentTabs";
// // // // // // import CardPayment from "./components/CardPayment";
// // // // // // import WalletPayment from "./components/WalletPayment";
// // // // // // import UPIPayment from "./components/UPIPayment";
// // // // // // import NetBankingPayment from "./components/NetBankingPayment";
// // // // // // import CODPayment from "./components/CODPayment";
// // // // // // import OrderSummary from "./components/OrderSummary";

// // // // // // // Mobile flow
// // // // // // import MobileCheckout from "./components/MobileCheckout";

// // // // // // /**
// // // // // //  * ✅ Normalize checkout items
// // // // // //  * Converts BOTH cart items (backend) and buyNow items (frontend)
// // // // // //  * into ONE common structure used by checkout UI
// // // // // //  */
// // // // // // const normalizeCheckoutItems = (items, type) => {
// // // // // //   if (!items || items.length === 0) return [];

// // // // // //   // BUY NOW (frontend-created)
// // // // // //   if (type === "buyNow") {
// // // // // //     return items.map((item) => ({
// // // // // //       id: item.id,
// // // // // //       name: item.title,
// // // // // //       image: item.image,
// // // // // //       price: item.price,
// // // // // //       mrp: item.price,
// // // // // //       quantity: item.qty,
// // // // // //       size: item.size,
// // // // // //     }));
// // // // // //   }

// // // // // //   // CART (backend-created)
// // // // // //   return items.map((item) => ({
// // // // // //     id: item.id,
// // // // // //     name: item.product_details?.name,
// // // // // //     image:
// // // // // //       item.product_details?.main_image || item.product_details?.hover_image,
// // // // // //     price: item.product_details?.price,
// // // // // //     mrp: item.product_details?.mrp,
// // // // // //     quantity: item.quantity,
// // // // // //     size: item.size,
// // // // // //   }));
// // // // // // };

// // // // // // const CheckoutPage = () => {
// // // // // //   const { cart, buyNowItem } = useCart();

// // // // // //   // ✅ Normalize data ONCE
// // // // // //   const checkoutItems = buyNowItem
// // // // // //     ? normalizeCheckoutItems(buyNowItem, "buyNow")
// // // // // //     : normalizeCheckoutItems(cart, "cart");

// // // // // //   const [selectedMethod, setSelectedMethod] = useState("card");
// // // // // //   const [isMobile, setIsMobile] = useState(false);

// // // // // //   // =========================
// // // // // //   // MOBILE DETECTION
// // // // // //   // =========================
// // // // // //   useEffect(() => {
// // // // // //     const handleResize = () => setIsMobile(window.innerWidth < 1050);
// // // // // //     handleResize();
// // // // // //     window.addEventListener("resize", handleResize);
// // // // // //     return () => window.removeEventListener("resize", handleResize);
// // // // // //   }, []);

// // // // // //   // =========================
// // // // // //   // PAYMENT RENDER
// // // // // //   // =========================
// // // // // //   const renderPaymentComponent = () => {
// // // // // //     const item = checkoutItems[0];
// // // // // //     const price = item?.price || 0;
// // // // // //     const qty = item?.quantity || 1;

// // // // // //     switch (selectedMethod) {
// // // // // //       case "card":
// // // // // //         return <CardPayment />;
// // // // // //       case "wallet":
// // // // // //         return <WalletPayment />;
// // // // // //       case "upi":
// // // // // //         return <UPIPayment />;
// // // // // //       case "netbanking":
// // // // // //         return <NetBankingPayment />;
// // // // // //       case "cod":
// // // // // //         return <CODPayment amount={price * qty} />;
// // // // // //       default:
// // // // // //         return <CardPayment />;
// // // // // //     }
// // // // // //   };

// // // // // //   // =========================
// // // // // //   // SAFETY CHECK
// // // // // //   // =========================
// // // // // //   if (!checkoutItems || checkoutItems.length === 0) {
// // // // // //     return (
// // // // // //       <div className="h-[60vh] flex items-center justify-center text-gray-600">
// // // // // //         Your checkout is empty
// // // // // //       </div>
// // // // // //     );
// // // // // //   }

// // // // // //   // =========================
// // // // // //   // UI
// // // // // //   // =========================
// // // // // //   return (
// // // // // //     <div className="max-w-[1550px] mx-auto px-3 sm:px-4 md:px-4 lg:px-10 py-10">
// // // // // //       {/* DESKTOP */}
// // // // // //       {!isMobile && (
// // // // // //         <>
// // // // // //           <h1 className="text-2xl font-semibold mb-6">
// // // // // //             Choose Your Payment Method
// // // // // //           </h1>

// // // // // //           <div className="flex gap-8">
// // // // // //             {/* PAYMENT */}
// // // // // //             <div className="w-full lg:w-2/3">
// // // // // //               <div className="bg-white border rounded-lg shadow-sm flex overflow-hidden">
// // // // // //                 <PaymentTabs
// // // // // //                   selected={selectedMethod}
// // // // // //                   onChange={setSelectedMethod}
// // // // // //                 />
// // // // // //                 <div className="flex-1 p-6">{renderPaymentComponent()}</div>
// // // // // //               </div>
// // // // // //             </div>

// // // // // //             {/* ORDER SUMMARY */}
// // // // // //             <div className="w-full lg:w-1/3">
// // // // // //               <OrderSummary cart={checkoutItems} />
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </>
// // // // // //       )}

// // // // // //       {/* MOBILE */}
// // // // // //       {isMobile && (
// // // // // //         <MobileCheckout
// // // // // //           CardPayment={CardPayment}
// // // // // //           UPIPayment={UPIPayment}
// // // // // //           WalletPayment={WalletPayment}
// // // // // //           NetBankingPayment={NetBankingPayment}
// // // // // //           CODPayment={CODPayment}
// // // // // //           cart={checkoutItems}
// // // // // //         />
// // // // // //       )}
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default CheckoutPage;

// // // // // import React, { useState, useEffect } from "react";
// // // // // import axios from "axios";
// // // // // import { useCart } from "../../context/CartContext";
// // // // // import OrderSummary from "./components/OrderSummary";

// // // // // /**
// // // // //  * Normalize checkout items
// // // // //  */
// // // // // const normalizeCheckoutItems = (items, type) => {
// // // // //   if (!items || items.length === 0) return [];

// // // // //   if (type === "buyNow") {
// // // // //     return items.map((item) => ({
// // // // //       id: item.id,
// // // // //       name: item.title,
// // // // //       image: item.image,
// // // // //       price: item.price,
// // // // //       quantity: item.qty,
// // // // //       size: item.size,
// // // // //     }));
// // // // //   }

// // // // //   return items.map((item) => ({
// // // // //     id: item.id,
// // // // //     name: item.product_details?.name,
// // // // //     image:
// // // // //       item.product_details?.main_image || item.product_details?.hover_image,
// // // // //     price: item.product_details?.price,
// // // // //     quantity: item.quantity,
// // // // //     size: item.size,
// // // // //   }));
// // // // // };

// // // // // const CheckoutPage = () => {
// // // // //   const { cart, buyNowItem } = useCart();
// // // // //   const checkoutItems = buyNowItem
// // // // //     ? normalizeCheckoutItems(buyNowItem, "buyNow")
// // // // //     : normalizeCheckoutItems(cart, "cart");

// // // // //   const [loading, setLoading] = useState(false);

// // // // //   // =========================
// // // // //   // TOTAL AMOUNT
// // // // //   // =========================
// // // // //   const totalAmount = checkoutItems.reduce(
// // // // //     (sum, item) => sum + item.price * item.quantity,
// // // // //     0
// // // // //   );

// // // // //   // =========================
// // // // //   // LOAD RAZORPAY
// // // // //   // =========================
// // // // //   const loadRazorpayScript = () => {
// // // // //     return new Promise((resolve) => {
// // // // //       const script = document.createElement("script");
// // // // //       script.src = "https://checkout.razorpay.com/v1/checkout.js";
// // // // //       script.onload = () => resolve(true);
// // // // //       script.onerror = () => resolve(false);
// // // // //       document.body.appendChild(script);
// // // // //     });
// // // // //   };

// // // // //   // =========================
// // // // //   // PAY NOW HANDLER
// // // // //   // =========================
// // // // //   const handlePayNow = async () => {
// // // // //     if (loading) return;
// // // // //     setLoading(true);

// // // // //     const sdkLoaded = await loadRazorpayScript();
// // // // //     if (!sdkLoaded) {
// // // // //       alert("Razorpay SDK failed to load");
// // // // //       setLoading(false);
// // // // //       return;
// // // // //     }

// // // // //     try {
// // // // //       // 1️⃣ Create order (Backend)
// // // // //       const { data } = await axios.post(
// // // // //         "http://localhost:8000/api/create-order/",
// // // // //         { amount: totalAmount }
// // // // //       );

// // // // //       // 2️⃣ Razorpay options
// // // // //       const options = {
// // // // //         key: data.key,
// // // // //         amount: data.amount,
// // // // //         currency: "INR",
// // // // //         order_id: data.order_id,
// // // // //         name: "Barkat Imperial Elegance",
// // // // //         description: "Order Payment",

// // // // //         handler: async function (response) {
// // // // //           // 3️⃣ Verify payment (Backend)
// // // // //           await axios.post(
// // // // //             "http://localhost:8000/api/verify-payment/",
// // // // //             response
// // // // //           );

// // // // //           window.location.href = "/order-success";
// // // // //         },

// // // // //         modal: {
// // // // //           ondismiss: () => setLoading(false),
// // // // //         },

// // // // //         theme: {
// // // // //           color: "#0f766e",
// // // // //         },
// // // // //       };

// // // // //       const razorpay = new window.Razorpay(options);
// // // // //       razorpay.open();
// // // // //     } catch (err) {
// // // // //       console.error(err);
// // // // //       alert("Payment failed. Please try again.");
// // // // //       setLoading(false);
// // // // //     }
// // // // //   };

// // // // //   // =========================
// // // // //   // SAFETY CHECK
// // // // //   // =========================
// // // // //   if (!checkoutItems.length) {
// // // // //     return (
// // // // //       <div className="h-[60vh] flex items-center justify-center text-gray-600">
// // // // //         Your checkout is empty
// // // // //       </div>
// // // // //     );
// // // // //   }

// // // // //   // =========================
// // // // //   // UI
// // // // //   // =========================
// // // // //   return (
// // // // //     <div className="max-w-[1550px] mx-auto px-3 sm:px-4 md:px-4 lg:px-10 py-10">
// // // // //       <h1 className="text-2xl font-semibold mb-6">Checkout</h1>

// // // // //       <div className="flex flex-col lg:flex-row gap-8">
// // // // //         {/* LEFT SECTION */}
// // // // //         <div className="w-full lg:w-2/3 space-y-6">
// // // // //           {/* ADDRESS (placeholder for now) */}
// // // // //           <div className="bg-white border rounded-lg p-6">
// // // // //             <h2 className="font-semibold mb-2">Delivery Address</h2>
// // // // //             <p className="text-sm text-gray-600">
// // // // //               John Doe
// // // // //               <br />
// // // // //               123, MG Road
// // // // //               <br />
// // // // //               Mumbai – 400001
// // // // //               <br />
// // // // //               Maharashtra
// // // // //             </p>
// // // // //           </div>

// // // // //           {/* PAY NOW */}
// // // // //           <button
// // // // //             onClick={handlePayNow}
// // // // //             disabled={loading}
// // // // //             className="w-full bg-teal-600 text-white py-4 rounded-lg font-semibold hover:bg-teal-700 transition disabled:opacity-50"
// // // // //           >
// // // // //             {loading ? "Processing..." : `Pay ₹${totalAmount.toLocaleString()}`}
// // // // //           </button>
// // // // //         </div>

// // // // //         {/* RIGHT SECTION */}
// // // // //         <div className="w-full lg:w-1/3">
// // // // //           <OrderSummary cart={checkoutItems} />
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default CheckoutPage;

// // // // import React, { useState, useEffect } from "react";
// // // // import axios from "axios";
// // // // import { useCart } from "../../context/CartContext";
// // // // import OrderSummary from "./components/OrderSummary";

// // // // /**
// // // //  * Normalize checkout items
// // // //  */
// // // // const normalizeCheckoutItems = (items, type) => {
// // // //   if (!items || items.length === 0) return [];

// // // //   if (type === "buyNow") {
// // // //     return items.map((item) => ({
// // // //       id: item.id,
// // // //       name: item.title,
// // // //       image: item.image,
// // // //       price: item.price,
// // // //       quantity: item.qty,
// // // //       size: item.size,
// // // //       mrp: item.price,
// // // //     }));
// // // //   }

// // // //   return items.map((item) => ({
// // // //     id: item.id,
// // // //     name: item.product_details?.name,
// // // //     image:
// // // //       item.product_details?.main_image || item.product_details?.hover_image,
// // // //     price: item.product_details?.price,
// // // //     mrp: item.product_details?.mrp,
// // // //     quantity: item.quantity,
// // // //     size: item.size,
// // // //   }));
// // // // };

// // // // const CheckoutPage = () => {
// // // //   const { cart, buyNowItem } = useCart();
// // // //   const checkoutItems = buyNowItem
// // // //     ? normalizeCheckoutItems(buyNowItem, "buyNow")
// // // //     : normalizeCheckoutItems(cart, "cart");

// // // //   const [loading, setLoading] = useState(false);

// // // //   const totalAmount = checkoutItems.reduce(
// // // //     (sum, item) => sum + item.price * item.quantity,
// // // //     0
// // // //   );

// // // //   // ---------------- RAZORPAY ----------------
// // // //   const loadRazorpayScript = () =>
// // // //     new Promise((resolve) => {
// // // //       const script = document.createElement("script");
// // // //       script.src = "https://checkout.razorpay.com/v1/checkout.js";
// // // //       script.onload = () => resolve(true);
// // // //       script.onerror = () => resolve(false);
// // // //       document.body.appendChild(script);
// // // //     });

// // // //   const handlePayNow = async () => {
// // // //     if (loading) return;
// // // //     setLoading(true);

// // // //     const loaded = await loadRazorpayScript();
// // // //     if (!loaded) {
// // // //       alert("Razorpay SDK failed");
// // // //       setLoading(false);
// // // //       return;
// // // //     }

// // // //     try {
// // // //       const { data } = await axios.post(
// // // //         "http://localhost:8000/api/create-order/",
// // // //         { amount: totalAmount }
// // // //       );

// // // //       const options = {
// // // //         key: data.key,
// // // //         amount: data.amount,
// // // //         currency: "INR",
// // // //         order_id: data.order_id,
// // // //         name: "SaajNika",
// // // //         description: "Order Payment",
// // // //         handler: async (response) => {
// // // //           await axios.post(
// // // //             "http://localhost:8000/api/verify-payment/",
// // // //             response
// // // //           );
// // // //           window.location.href = "/order-success";
// // // //         },
// // // //         modal: {
// // // //           ondismiss: () => setLoading(false),
// // // //         },
// // // //         theme: { color: "#0f766e" },
// // // //       };

// // // //       new window.Razorpay(options).open();
// // // //     } catch (e) {
// // // //       alert("Payment failed");
// // // //       setLoading(false);
// // // //     }
// // // //   };

// // // //   if (!checkoutItems.length) {
// // // //     return (
// // // //       <div className="h-[60vh] flex items-center justify-center text-gray-600">
// // // //         Your checkout is empty
// // // //       </div>
// // // //     );
// // // //   }

// // // //   return (
// // // //     <div className="max-w-[1550px] mx-auto px-4 py-10">
// // // //       <h1 className="text-2xl font-semibold mb-6">Checkout</h1>

// // // //       <div className="flex flex-col lg:flex-row gap-8">
// // // //         {/* LEFT */}
// // // //         <div className="w-full lg:w-2/3">
// // // //           <OrderSummary
// // // //             cart={checkoutItems}
// // // //             onPay={handlePayNow}
// // // //             loading={loading}
// // // //           />
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default CheckoutPage;

// // // import React, { useState } from "react";
// // // import axios from "axios";
// // // import { useCart } from "../../context/CartContext";
// // // import OrderSummary from "./components/OrderSummary";

// // // /**
// // //  * Normalize checkout items
// // //  */
// // // const normalizeCheckoutItems = (items, type) => {
// // //   if (!items || items.length === 0) return [];

// // //   if (type === "buyNow") {
// // //     return items.map((item) => ({
// // //       id: item.id,
// // //       name: item.title,
// // //       image: item.image,
// // //       price: item.price,
// // //       quantity: item.qty,
// // //       size: item.size,
// // //       mrp: item.price,
// // //     }));
// // //   }

// // //   return items.map((item) => ({
// // //     id: item.id,
// // //     name: item.product_details?.name,
// // //     image:
// // //       item.product_details?.main_image || item.product_details?.hover_image,
// // //     price: item.product_details?.price,
// // //     mrp: item.product_details?.mrp,
// // //     quantity: item.quantity,
// // //     size: item.size,
// // //   }));
// // // };

// // // const CheckoutPage = () => {
// // //   const { cart, buyNowItem } = useCart();

// // //   const checkoutItems = buyNowItem
// // //     ? normalizeCheckoutItems(buyNowItem, "buyNow")
// // //     : normalizeCheckoutItems(cart, "cart");

// // //   const [loading, setLoading] = useState(false);

// // //   const totalAmount = checkoutItems.reduce(
// // //     (sum, item) => sum + item.price * item.quantity,
// // //     0
// // //   );

// // //   // Load Razorpay
// // //   const loadRazorpayScript = () =>
// // //     new Promise((resolve) => {
// // //       const script = document.createElement("script");
// // //       script.src = "https://checkout.razorpay.com/v1/checkout.js";
// // //       script.onload = () => resolve(true);
// // //       script.onerror = () => resolve(false);
// // //       document.body.appendChild(script);
// // //     });

// // //   const handlePayNow = async () => {
// // //     if (loading) return;
// // //     setLoading(true);

// // //     const loaded = await loadRazorpayScript();
// // //     if (!loaded) {
// // //       alert("Razorpay SDK failed to load");
// // //       setLoading(false);
// // //       return;
// // //     }

// // //     try {
// // //       const { data } = await axios.post("/api/create-order/", {
// // //         amount: totalAmount,
// // //       });

// // //       const options = {
// // //         key: data.key,
// // //         amount: data.amount,
// // //         currency: "INR",
// // //         order_id: data.order_id,
// // //         name: "SaajNika",
// // //         description: "Order Payment",
// // //         handler: async (response) => {
// // //           await axios.post(
// // //             "http://localhost:8000/api/verify-payment/",
// // //             response
// // //           );
// // //           window.location.href = "/order-success";
// // //         },
// // //         modal: {
// // //           ondismiss: () => setLoading(false),
// // //         },
// // //         theme: { color: "#0f766e" },
// // //       };

// // //       new window.Razorpay(options).open();
// // //     } catch (err) {
// // //       alert("Payment failed");
// // //       setLoading(false);
// // //     }
// // //   };

// // //   if (!checkoutItems.length) {
// // //     return (
// // //       <div className="h-[60vh] flex items-center justify-center text-gray-600">
// // //         Your checkout is empty
// // //       </div>
// // //     );
// // //   }

// // //   return (
// // //     <div className="min-h-screen bg-[#f5f5f5]">
// // //       <div className="max-w-[1100px] mx-auto px-4 py-10">
// // //         <h1 className="text-2xl font-semibold mb-6">Checkout</h1>

// // //         <OrderSummary
// // //           cart={checkoutItems}
// // //           onPay={handlePayNow}
// // //           loading={loading}
// // //         />
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default CheckoutPage;

// // // import React, { useState } from "react";
// // // import { useCart } from "../../context/CartContext";
// // // import OrderSummary from "./components/OrderSummary";
// // // import api from "../../api/axios";

// // // /**
// // //  * Normalize checkout items
// // //  */
// // // const normalizeCheckoutItems = (items, type) => {
// // //   if (!items || items.length === 0) return [];

// // //   if (type === "buyNow") {
// // //     return items.map((item) => ({
// // //       id: item.id,
// // //       name: item.title,
// // //       image: item.image,
// // //       price: item.price,
// // //       quantity: item.qty,
// // //       size: item.size,
// // //       mrp: item.price,
// // //     }));
// // //   }

// // //   return items.map((item) => ({
// // //     id: item.id,
// // //     name: item.product_details?.name,
// // //     image:
// // //       item.product_details?.main_image || item.product_details?.hover_image,
// // //     price: item.product_details?.price,
// // //     mrp: item.product_details?.mrp,
// // //     quantity: item.quantity,
// // //     size: item.size,
// // //   }));
// // // };

// // // const CheckoutPage = () => {
// // //   const { cart, buyNowItem } = useCart();
// // //   const [loading, setLoading] = useState(false);

// // //   const checkoutItems = buyNowItem
// // //     ? normalizeCheckoutItems(buyNowItem, "buyNow")
// // //     : normalizeCheckoutItems(cart, "cart");

// // //   const totalAmount = checkoutItems.reduce(
// // //     (sum, item) => sum + item.price * item.quantity,
// // //     0
// // //   );

// // //   // 🔹 Load Razorpay script
// // //   const loadRazorpayScript = () =>
// // //     new Promise((resolve) => {
// // //       const script = document.createElement("script");
// // //       script.src = "https://checkout.razorpay.com/v1/checkout.js";
// // //       script.onload = () => resolve(true);
// // //       script.onerror = () => resolve(false);
// // //       document.body.appendChild(script);
// // //     });

// // //   const handlePayNow = async () => {
// // //     if (loading) return;
// // //     setLoading(true);

// // //     const loaded = await loadRazorpayScript();
// // //     if (!loaded) {
// // //       alert("Razorpay SDK failed to load");
// // //       setLoading(false);
// // //       return;
// // //     }

// // //     try {
// // //       // ✅ Create Razorpay order (protected API)
// // //       const { data } = await api.post("/orders/buy-now/", {
// // //         amount: totalAmount,
// // //       });

// // //       const options = {
// // //         key: data.key,
// // //         amount: data.amount,
// // //         currency: "INR",
// // //         order_id: data.order_id,
// // //         name: "SaajNika",
// // //         description: "Order Payment",

// // //         handler: async (response) => {
// // //           try {
// // //             // ✅ Verify payment (protected API)
// // //             await api.post("/payments/verify/", response);
// // //             window.location.href = "/order-success";
// // //           } catch (err) {
// // //             alert("Payment verification failed");
// // //             setLoading(false);
// // //           }
// // //         },

// // //         modal: {
// // //           ondismiss: () => setLoading(false),
// // //         },

// // //         theme: {
// // //           color: "#0f766e",
// // //         },
// // //       };

// // //       new window.Razorpay(options).open();
// // //     } catch (err) {
// // //       alert("Payment failed");
// // //       setLoading(false);
// // //     }
// // //   };

// // //   if (!checkoutItems.length) {
// // //     return (
// // //       <div className="h-[60vh] flex items-center justify-center text-gray-600">
// // //         Your checkout is empty
// // //       </div>
// // //     );
// // //   }

// // //   return (
// // //     <div className="min-h-screen bg-[#f5f5f5]">
// // //       <div className="max-w-[1100px] mx-auto px-4 py-10">
// // //         <h1 className="text-2xl font-semibold mb-6">Checkout</h1>

// // //         <OrderSummary
// // //           cart={checkoutItems}
// // //           onPay={handlePayNow}
// // //           loading={loading}
// // //         />
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default CheckoutPage;

// // import React, { useState } from "react";
// // import { useCart } from "../../context/CartContext";
// // import OrderSummary from "./components/OrderSummary";
// // import api from "../../api/axios";

// // /**
// //  * Normalize checkout items
// //  */
// // const normalizeCheckoutItems = (items, type) => {
// //   if (!items || items.length === 0) return [];

// //   if (type === "buyNow") {
// //     return items.map((item) => ({
// //       id: item.id,
// //       name: item.title,
// //       image: item.image,
// //       price: item.price,
// //       quantity: item.qty,
// //       size: item.size,
// //       mrp: item.price,
// //     }));
// //   }

// //   return items.map((item) => ({
// //     id: item.id,
// //     name: item.product_details?.name,
// //     image:
// //       item.product_details?.main_image || item.product_details?.hover_image,
// //     price: item.product_details?.price,
// //     mrp: item.product_details?.mrp,
// //     quantity: item.quantity,
// //     size: item.size,
// //   }));
// // };

// // const CheckoutPage = () => {
// //   const { cart, buyNowItem } = useCart();
// //   const [loading, setLoading] = useState(false);

// //   // ✅ NEW: selected address state
// //   const [selectedAddress, setSelectedAddress] = useState(null);

// //   const checkoutItems = buyNowItem
// //     ? normalizeCheckoutItems(buyNowItem, "buyNow")
// //     : normalizeCheckoutItems(cart, "cart");

// //   // 🔹 Load Razorpay script
// //   const loadRazorpayScript = () =>
// //     new Promise((resolve) => {
// //       const script = document.createElement("script");
// //       script.src = "https://checkout.razorpay.com/v1/checkout.js";
// //       script.onload = () => resolve(true);
// //       script.onerror = () => resolve(false);
// //       document.body.appendChild(script);
// //     });

// //   const handlePayNow = async () => {
// //     if (loading) return;

// //     if (!selectedAddress) {
// //       alert("Please select delivery address");
// //       return;
// //     }

// //     setLoading(true);

// //     const loaded = await loadRazorpayScript();
// //     if (!loaded) {
// //       alert("Razorpay SDK failed to load");
// //       setLoading(false);
// //       return;
// //     }

// //     try {
// //       // 👇 Buy Now = single item
// //       const item = checkoutItems[0];
// //       console.log(item);
// //       // ✅ CORRECT PAYLOAD
// //       const { data } = await api.post("/orders/create/", {
// //         product_id: item.id,
// //         size: item.size,
// //         quantity: item.quantity,
// //         address_id: selectedAddress.id,
// //       });

// //       const options = {
// //         key: data.key,
// //         amount: data.amount,
// //         currency: "INR",
// //         order_id: data.order_id,
// //         name: "SaajNika",
// //         description: "Order Payment",

// //         handler: async (response) => {
// //           await api.post("/payments/verify/", response);
// //           window.location.href = "/order-success";
// //         },

// //         modal: {
// //           ondismiss: () => setLoading(false),
// //         },

// //         theme: {
// //           color: "#0f766e",
// //         },
// //       };

// //       new window.Razorpay(options).open();
// //     } catch (err) {
// //       alert("Payment failed");
// //       setLoading(false);
// //     }
// //   };

// //   if (!checkoutItems.length) {
// //     return (
// //       <div className="h-[60vh] flex items-center justify-center text-gray-600">
// //         Your checkout is empty
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="min-h-screen bg-[#f5f5f5]">
// //       <div className="max-w-[1100px] mx-auto px-4 py-10">
// //         <h1 className="text-2xl font-semibold mb-6">Checkout</h1>

// //         <OrderSummary
// //           cart={checkoutItems}
// //           onPay={handlePayNow}
// //           loading={loading}
// //           onAddressChange={setSelectedAddress}
// //         />
// //       </div>
// //     </div>
// //   );
// // };

// // export default CheckoutPage;

// import React, { useEffect, useState } from "react";
// import { useCart } from "../../context/CartContext";
// import OrderSummary from "./components/OrderSummary";
// import api from "../../api/axios";
// import { AddressService } from "../../services/addressService";

// /**
//  * Normalize checkout items
//  */
// const normalizeCheckoutItems = (items, type) => {
//   if (!items || items.length === 0) return [];

//   if (type === "buyNow") {
//     return items.map((item) => ({
//       id: item.id,
//       name: item.title,
//       image: item.image,
//       price: item.price,
//       quantity: item.qty,
//       size: item.size,
//       mrp: item.price,
//     }));
//   }

//   return items.map((item) => ({
//     id: item.id,
//     name: item.product_details?.name,
//     image:
//       item.product_details?.main_image || item.product_details?.hover_image,
//     price: item.product_details?.price,
//     mrp: item.product_details?.mrp,
//     quantity: item.quantity,
//     size: item.size,
//   }));
// };

// const CheckoutPage = () => {
//   const { cart, buyNowItem } = useCart();

//   const [loading, setLoading] = useState(false);

//   // 🔥 ADDRESS STATES (SOURCE OF TRUTH)
//   const [addresses, setAddresses] = useState([]);
//   const [selectedAddress, setSelectedAddress] = useState(null);

//   // 🔹 Fetch addresses once
//   useEffect(() => {
//     AddressService.getAddresses().then((res) => {
//       if (res?.length) {
//         setAddresses(res);
//         setSelectedAddress(res[0]); // default first address
//       }
//     });
//   }, []);

//   const checkoutItems = buyNowItem
//     ? normalizeCheckoutItems(buyNowItem, "buyNow")
//     : normalizeCheckoutItems(cart, "cart");

//   // 🔹 Load Razorpay script
//   const loadRazorpayScript = () =>
//     new Promise((resolve) => {
//       const script = document.createElement("script");
//       script.src = "https://checkout.razorpay.com/v1/checkout.js";
//       script.onload = () => resolve(true);
//       script.onerror = () => resolve(false);
//       document.body.appendChild(script);
//     });

//   const handlePayNow = async () => {
//     if (loading) return;

//     if (!selectedAddress) {
//       alert("Please select delivery address");
//       return;
//     }

//     setLoading(true);

//     const loaded = await loadRazorpayScript();
//     if (!loaded) {
//       alert("Razorpay SDK failed to load");
//       setLoading(false);
//       return;
//     }

//     try {
//       // Buy Now → single item
//       const item = checkoutItems[0];
//       console.log("product ", item);
//       console.log(selectedAddress.id);

//       const { data } = await api.post("/payments/razorpay/create/", {
//         product_id: item.id,
//         size: item.size,
//         quantity: item.quantity,
//         address_id: selectedAddress.id,
//       });

//       console.log("Res", data);
//       console.log("Razorpay config", {
//         key: data.razorpay.key,
//         amount: data.razorpay.amount,
//         order_id: data.razorpay.razorpay_order_id,
//       });

//       const options = {
//         key: data.razorpay.key, // ✅ FIX
//         amount: data.razorpay.amount, // ✅ FIX (paise)
//         currency: data.razorpay.currency,
//         order_id: data.razorpay.razorpay_order_id, // ✅ FIX

//         name: "SaajNika",
//         description: "Order Payment",

//         handler: async (response) => {
//           await api.post("/payments/razorpay/verify/", {
//             razorpay_order_id: response.razorpay_order_id,
//             razorpay_payment_id: response.razorpay_payment_id,
//             razorpay_signature: response.razorpay_signature,
//           });

//           window.location.href = "/order-success";
//         },

//         modal: {
//           ondismiss: () => setLoading(false),
//         },

//         theme: {
//           color: "#0f766e",
//         },
//       };

//       new window.Razorpay(options).open();
//     } catch (err) {
//       alert("Payment failed");
//       setLoading(false);
//     }
//   };

//   if (!checkoutItems.length) {
//     return (
//       <div className="h-[60vh] flex items-center justify-center text-gray-600">
//         Your checkout is empty
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-[#f5f5f5]">
//       <div className="max-w-[1100px] mx-auto px-4 py-10">
//         <h1 className="text-2xl font-semibold mb-6">Checkout</h1>

//         <OrderSummary
//           cart={checkoutItems}
//           loading={loading}
//           onPay={handlePayNow}
//           addresses={addresses}
//           selectedAddress={selectedAddress}
//           onAddressChange={setSelectedAddress}
//         />
//       </div>
//     </div>
//   );
// };

// export default CheckoutPage;

import React, { useEffect, useState } from "react";
import { useCart } from "../../context/CartContext";
import OrderSummary from "./components/OrderSummary";
import api from "../../api/axios";
import { AddressService } from "../../services/addressService";

/**
 * Normalize checkout items
 */
const normalizeCheckoutItems = (items, type) => {
  if (!items || items.length === 0) return [];

  if (type === "buyNow") {
    return items.map((item) => ({
      id: item.id,
      name: item.title,
      image: item.image,
      price: item.price,
      mrp: item.price,
      quantity: item.qty,
      size: item.size,
    }));
  }

  return items.map((item) => ({
    id: item.id,
    name: item.product_details?.name,
    image:
      item.product_details?.main_image || item.product_details?.hover_image,
    price: item.product_details?.price,
    mrp: item.product_details?.mrp,
    quantity: item.quantity,
    size: item.size,
  }));
};

const CheckoutPage = () => {
  const { cart, buyNowItem } = useCart();

  const [loading, setLoading] = useState(false);

  // 📦 Address state
  const [addresses, setAddresses] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);

  /**
   * Fetch addresses
   */
  useEffect(() => {
    AddressService.getAddresses()
      .then((res) => {
        if (res?.length) {
          setAddresses(res);
          setSelectedAddress(res[0]);
        }
      })
      .catch(() => console.error("Failed to load addresses"));
  }, []);

  /**
   * Decide checkout items
   */
  const checkoutItems = buyNowItem
    ? normalizeCheckoutItems(buyNowItem, "buyNow")
    : normalizeCheckoutItems(cart, "cart");

  /**
   * Load Razorpay script
   */
  const loadRazorpayScript = () =>
    new Promise((resolve) => {
      if (window.Razorpay) return resolve(true);

      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });

  /**
   * Handle payment (REDIRECT FLOW)
   */
  const handlePayNow = async () => {
    if (loading) return;

    if (!selectedAddress) {
      alert("Please select delivery address");
      return;
    }

    if (!checkoutItems.length) {
      alert("No items to checkout");
      return;
    }

    setLoading(true);

    const sdkLoaded = await loadRazorpayScript();
    if (!sdkLoaded) {
      alert("Razorpay SDK failed to load");
      setLoading(false);
      return;
    }

    try {
      const item = checkoutItems[0];

      // 1️⃣ Create order on backend
      const { data } = await api.post("/payments/razorpay/create/", {
        product_id: item.id,
        size: item.size,
        quantity: item.quantity,
        address_id: selectedAddress.id,
      });

      // 2️⃣ Razorpay REDIRECT options (🔥 FIX)
      const options = {
        key: data.razorpay.key,
        amount: data.razorpay.amount,
        currency: data.razorpay.currency,
        order_id: data.razorpay.razorpay_order_id,

        name: "SaajNika",
        description: "Order Payment",

        // 🔥 IMPORTANT FOR PRODUCTION

        // Razorpay will hit this BACKEND URL
        callback_url: `${
          import.meta.env.VITE_BACKEND_URL
        }/payments/razorpay/verify/`,

        redirect: true,

        modal: {
          ondismiss: () => setLoading(false),
        },

        theme: {
          color: "#0f766e",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error(err);
      alert("Payment failed. Please try again.");
      setLoading(false);
    }
  };

  /**
   * Empty checkout
   */
  if (!checkoutItems.length) {
    return (
      <div className="h-[60vh] flex items-center justify-center text-gray-600">
        Your checkout is empty
      </div>
    );
  }

  /**
   * UI
   */
  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      <div className="max-w-[1100px] mx-auto px-4 py-10">
        <h1 className="text-2xl font-semibold mb-6">Checkout</h1>

        <OrderSummary
          cart={checkoutItems}
          loading={loading}
          onPay={handlePayNow}
          addresses={addresses}
          selectedAddress={selectedAddress}
          onAddressChange={setSelectedAddress}
        />
      </div>
    </div>
  );
};

export default CheckoutPage;
