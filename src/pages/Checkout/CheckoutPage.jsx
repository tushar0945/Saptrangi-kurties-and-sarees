// // // import React, { useState, useEffect } from "react";
// // // import { useCart } from "../../context/CartContext";

// // // // Desktop components
// // // import PaymentTabs from "./components/PaymentTabs";
// // // import CardPayment from "./components/CardPayment";
// // // import WalletPayment from "./components/WalletPayment";
// // // import UPIPayment from "./components/UPIPayment";
// // // import NetBankingPayment from "./components/NetBankingPayment";
// // // import CODPayment from "./components/CODPayment";
// // // import OrderSummary from "./components/OrderSummary";

// // // // Mobile full custom flow
// // // import MobileCheckout from "./components/MobileCheckout";

// // // const CheckoutPage = () => {
// // //   const { cart } = useCart();
// // //   const [selectedMethod, setSelectedMethod] = useState("card");

// // //   const [isMobile, setIsMobile] = useState(false);

// // //   // Detect mobile view
// // //   useEffect(() => {
// // //     const handle = () => setIsMobile(window.innerWidth < 1050);
// // //     handle();
// // //     window.addEventListener("resize", handle);
// // //     return () => window.removeEventListener("resize", handle);
// // //   }, []);

// // //   const renderPaymentComponent = () => {
// // //     switch (selectedMethod) {
// // //       case "card":
// // //         return <CardPayment />;
// // //       case "wallet":
// // //         return <WalletPayment />;
// // //       case "upi":
// // //         return <UPIPayment />;
// // //       case "netbanking":
// // //         return <NetBankingPayment />;
// // //       case "cod":
// // //         return <CODPayment amount={cart?.[0]?.price || 0} />;
// // //       default:
// // //         return <CardPayment />;
// // //     }
// // //   };

// // //   return (
// // //     <div className="max-w-[1550px] mx-auto px-3 sm:px-4 md:px-4 lg:px-10 py-10">
// // //       {/* DESKTOP VIEW */}
// // //       {!isMobile && (
// // //         <>
// // //           <h1 className="text-2xl font-semibold mb-6">
// // //             Choose Your Payment Method
// // //           </h1>

// // //           <div className="flex gap-8">
// // //             {/* Payment Tabs */}
// // //             <div className="w-full lg:w-2/3">
// // //               <div className="bg-white border rounded-lg shadow-sm flex overflow-hidden">
// // //                 <PaymentTabs
// // //                   selected={selectedMethod}
// // //                   onChange={setSelectedMethod}
// // //                 />
// // //                 <div className="flex-1 p-6">{renderPaymentComponent()}</div>
// // //               </div>
// // //             </div>

// // //             {/* Order Summary */}
// // //             <div className="w-full lg:w-1/3">
// // //               <OrderSummary cart={cart} />
// // //             </div>
// // //           </div>
// // //         </>
// // //       )}

// // //       {/* MOBILE VIEW */}
// // //       {isMobile && (
// // //         <MobileCheckout
// // //           OrderSummary={OrderSummary}
// // //           CardPayment={CardPayment}
// // //           UPIPayment={UPIPayment}
// // //           WalletPayment={WalletPayment}
// // //           NetBankingPayment={NetBankingPayment}
// // //           CODPayment={CODPayment}
// // //           cart={cart}
// // //         />
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default CheckoutPage;

// // import React, { useState, useEffect } from "react";
// // import { useCart } from "../../context/CartContext";

// // // Desktop components
// // import PaymentTabs from "./components/PaymentTabs";
// // import CardPayment from "./components/CardPayment";
// // import WalletPayment from "./components/WalletPayment";
// // import UPIPayment from "./components/UPIPayment";
// // import NetBankingPayment from "./components/NetBankingPayment";
// // import CODPayment from "./components/CODPayment";
// // import OrderSummary from "./components/OrderSummary";

// // // Mobile full custom flow
// // import MobileCheckout from "./components/MobileCheckout";

// // const CheckoutPage = () => {
// //   // ✅ UPDATED CONTEXT USAGE
// //   const { cart, buyNowItem, clearBuyNow } = useCart();

// //   // ✅ Decide source of truth
// //   const checkoutItems = buyNowItem ?? cart;
// //   console.log("checout item: ", checkoutItems);
// //   const [selectedMethod, setSelectedMethod] = useState("card");
// //   const [isMobile, setIsMobile] = useState(false);

// //   // Detect mobile view
// //   useEffect(() => {
// //     const handle = () => setIsMobile(window.innerWidth < 1050);
// //     handle();
// //     window.addEventListener("resize", handle);
// //     return () => window.removeEventListener("resize", handle);
// //   }, []);

// //   // ✅ Clear buy-now when leaving checkout (important)
// //   useEffect(() => {
// //     return () => {
// //       clearBuyNow();
// //     };
// //   }, [clearBuyNow]);

// //   const renderPaymentComponent = () => {
// //     switch (selectedMethod) {
// //       case "card":
// //         return <CardPayment />;
// //       case "wallet":
// //         return <WalletPayment />;
// //       case "upi":
// //         return <UPIPayment />;
// //       case "netbanking":
// //         return <NetBankingPayment />;
// //       case "cod":
// //         return (
// //           <CODPayment
// //             amount={
// //               checkoutItems?.[0]?.price * (checkoutItems?.[0]?.qty || 1) || 0
// //             }
// //           />
// //         );
// //       default:
// //         return <CardPayment />;
// //     }
// //   };

// //   // 🛑 Safety: empty checkout
// //   if (!checkoutItems || checkoutItems.length === 0) {
// //     return (
// //       <div className="h-[60vh] flex items-center justify-center text-gray-600">
// //         Your checkout is empty
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="max-w-[1550px] mx-auto px-3 sm:px-4 md:px-4 lg:px-10 py-10">
// //       {/* DESKTOP VIEW */}
// //       {!isMobile && (
// //         <>
// //           <h1 className="text-2xl font-semibold mb-6">
// //             Choose Your Payment Method
// //           </h1>

// //           <div className="flex gap-8">
// //             {/* Payment Tabs */}
// //             <div className="w-full lg:w-2/3">
// //               <div className="bg-white border rounded-lg shadow-sm flex overflow-hidden">
// //                 <PaymentTabs
// //                   selected={selectedMethod}
// //                   onChange={setSelectedMethod}
// //                 />
// //                 <div className="flex-1 p-6">{renderPaymentComponent()}</div>
// //               </div>
// //             </div>

// //             {/* Order Summary */}
// //             <div className="w-full lg:w-1/3">
// //               <OrderSummary cart={checkoutItems} />
// //             </div>
// //           </div>
// //         </>
// //       )}

// //       {/* MOBILE VIEW */}
// //       {isMobile && (
// //         <MobileCheckout
// //           OrderSummary={OrderSummary}
// //           CardPayment={CardPayment}
// //           UPIPayment={UPIPayment}
// //           WalletPayment={WalletPayment}
// //           NetBankingPayment={NetBankingPayment}
// //           CODPayment={CODPayment}
// //           cart={checkoutItems}
// //         />
// //       )}
// //     </div>
// //   );
// // };

// // export default CheckoutPage;

// import React, { useState, useEffect } from "react";
// import { useCart } from "../../context/CartContext";

// // Desktop components
// import PaymentTabs from "./components/PaymentTabs";
// import CardPayment from "./components/CardPayment";
// import WalletPayment from "./components/WalletPayment";
// import UPIPayment from "./components/UPIPayment";
// import NetBankingPayment from "./components/NetBankingPayment";
// import CODPayment from "./components/CODPayment";
// import OrderSummary from "./components/OrderSummary";

// // Mobile flow
// import MobileCheckout from "./components/MobileCheckout";

// const CheckoutPage = () => {
//   // ✅ CONTEXT
//   const { cart, buyNowItem, clearBuyNow } = useCart();

//   console.log("Buy now : ", buyNowItem);
//   console.log("Cart : ", cart);
//   // ✅ Decide checkout source
//   const checkoutItems = buyNowItem ?? cart;

//   const [selectedMethod, setSelectedMethod] = useState("card");
//   const [isMobile, setIsMobile] = useState(false);

//   // =========================
//   // MOBILE DETECTION
//   // =========================
//   useEffect(() => {
//     const handleResize = () => setIsMobile(window.innerWidth < 1050);
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   // // =========================
//   // // CLEAR BUY-NOW ON EXIT
//   // // =========================
//   // useEffect(() => {
//   //   return () => {
//   //     clearBuyNow();
//   //   };
//   // }, [clearBuyNow]);

//   // =========================
//   // PAYMENT RENDER
//   // =========================
//   const renderPaymentComponent = () => {
//     const item = checkoutItems?.[0];
//     const price = item?.product_details?.price || 0;
//     const qty = item?.quantity || 1;

//     switch (selectedMethod) {
//       case "card":
//         return <CardPayment />;
//       case "wallet":
//         return <WalletPayment />;
//       case "upi":
//         return <UPIPayment />;
//       case "netbanking":
//         return <NetBankingPayment />;
//       case "cod":
//         return <CODPayment amount={price * qty} />;
//       default:
//         return <CardPayment />;
//     }
//   };

//   // =========================
//   // SAFETY CHECK
//   // =========================
//   if (!checkoutItems || checkoutItems.length === 0) {
//     return (
//       <div className="h-[60vh] flex items-center justify-center text-gray-600">
//         Your checkout is empty
//       </div>
//     );
//   }

//   // =========================
//   // UI
//   // =========================
//   return (
//     <div className="max-w-[1550px] mx-auto px-3 sm:px-4 md:px-4 lg:px-10 py-10">
//       {/* DESKTOP */}
//       {!isMobile && (
//         <>
//           <h1 className="text-2xl font-semibold mb-6">
//             Choose Your Payment Method
//           </h1>

//           <div className="flex gap-8">
//             {/* PAYMENT SECTION */}
//             <div className="w-full lg:w-2/3">
//               <div className="bg-white border rounded-lg shadow-sm flex overflow-hidden">
//                 <PaymentTabs
//                   selected={selectedMethod}
//                   onChange={setSelectedMethod}
//                 />
//                 <div className="flex-1 p-6">{renderPaymentComponent()}</div>
//               </div>
//             </div>

//             {/* ORDER SUMMARY */}
//             <div className="w-full lg:w-1/3">
//               <OrderSummary cart={checkoutItems} />
//             </div>
//           </div>
//         </>
//       )}

//       {/* MOBILE */}
//       {isMobile && (
//         <MobileCheckout
//           OrderSummary={OrderSummary}
//           CardPayment={CardPayment}
//           UPIPayment={UPIPayment}
//           WalletPayment={WalletPayment}
//           NetBankingPayment={NetBankingPayment}
//           CODPayment={CODPayment}
//           cart={checkoutItems}
//         />
//       )}
//     </div>
//   );
// };

// export default CheckoutPage;

import React, { useState, useEffect } from "react";
import { useCart } from "../../context/CartContext";

// Desktop components
import PaymentTabs from "./components/PaymentTabs";
import CardPayment from "./components/CardPayment";
import WalletPayment from "./components/WalletPayment";
import UPIPayment from "./components/UPIPayment";
import NetBankingPayment from "./components/NetBankingPayment";
import CODPayment from "./components/CODPayment";
import OrderSummary from "./components/OrderSummary";

// Mobile flow
import MobileCheckout from "./components/MobileCheckout";

/**
 * ✅ Normalize checkout items
 * Converts BOTH cart items (backend) and buyNow items (frontend)
 * into ONE common structure used by checkout UI
 */
const normalizeCheckoutItems = (items, type) => {
  if (!items || items.length === 0) return [];

  // BUY NOW (frontend-created)
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

  // CART (backend-created)
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

  // ✅ Normalize data ONCE
  const checkoutItems = buyNowItem
    ? normalizeCheckoutItems(buyNowItem, "buyNow")
    : normalizeCheckoutItems(cart, "cart");

  const [selectedMethod, setSelectedMethod] = useState("card");
  const [isMobile, setIsMobile] = useState(false);

  // =========================
  // MOBILE DETECTION
  // =========================
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1050);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // =========================
  // PAYMENT RENDER
  // =========================
  const renderPaymentComponent = () => {
    const item = checkoutItems[0];
    const price = item?.price || 0;
    const qty = item?.quantity || 1;

    switch (selectedMethod) {
      case "card":
        return <CardPayment />;
      case "wallet":
        return <WalletPayment />;
      case "upi":
        return <UPIPayment />;
      case "netbanking":
        return <NetBankingPayment />;
      case "cod":
        return <CODPayment amount={price * qty} />;
      default:
        return <CardPayment />;
    }
  };

  // =========================
  // SAFETY CHECK
  // =========================
  if (!checkoutItems || checkoutItems.length === 0) {
    return (
      <div className="h-[60vh] flex items-center justify-center text-gray-600">
        Your checkout is empty
      </div>
    );
  }

  // =========================
  // UI
  // =========================
  return (
    <div className="max-w-[1550px] mx-auto px-3 sm:px-4 md:px-4 lg:px-10 py-10">
      {/* DESKTOP */}
      {!isMobile && (
        <>
          <h1 className="text-2xl font-semibold mb-6">
            Choose Your Payment Method
          </h1>

          <div className="flex gap-8">
            {/* PAYMENT */}
            <div className="w-full lg:w-2/3">
              <div className="bg-white border rounded-lg shadow-sm flex overflow-hidden">
                <PaymentTabs
                  selected={selectedMethod}
                  onChange={setSelectedMethod}
                />
                <div className="flex-1 p-6">{renderPaymentComponent()}</div>
              </div>
            </div>

            {/* ORDER SUMMARY */}
            <div className="w-full lg:w-1/3">
              <OrderSummary cart={checkoutItems} />
            </div>
          </div>
        </>
      )}

      {/* MOBILE */}
      {isMobile && (
        <MobileCheckout
          CardPayment={CardPayment}
          UPIPayment={UPIPayment}
          WalletPayment={WalletPayment}
          NetBankingPayment={NetBankingPayment}
          CODPayment={CODPayment}
          cart={checkoutItems}
        />
      )}
    </div>
  );
};

export default CheckoutPage;
