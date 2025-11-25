// // // // // // // import React, { useState } from "react";
// // // // // // // import PaymentTabs from "./components/PaymentTabs";
// // // // // // // import OrderSummary from "./components/OrderSummary";

// // // // // // // const CheckoutPage = () => {
// // // // // // //   const [activeTab, setActiveTab] = useState("card");

// // // // // // //   return (
// // // // // // //     <div className="max-w-[1200px] mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
// // // // // // //       {/* LEFT SIDE — Payment Methods */}
// // // // // // //       <div className="lg:col-span-2">
// // // // // // //         <PaymentTabs activeTab={activeTab} setActiveTab={setActiveTab} />
// // // // // // //       </div>

// // // // // // //       {/* RIGHT SIDE — Order Summary */}
// // // // // // //       <div>
// // // // // // //         <OrderSummary />
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default CheckoutPage;

// // // // // // import React, { useState } from "react";
// // // // // // import { useCart } from "../../context/CartContext";

// // // // // // // Components
// // // // // // import PaymentTabs from "./components/PaymentTabs";
// // // // // // import CardPayment from "./components/CardPayment";
// // // // // // import WalletPayment from "./components/WalletPayment";
// // // // // // import UPIPayment from "./components/UPIPayment";
// // // // // // import NetBankingPayment from "./components/NetBankingPayment";
// // // // // // import CODPayment from "./components/CODPayment";
// // // // // // import OrderSummary from "./components/OrderSummary";

// // // // // // const CheckoutPage = () => {
// // // // // //   const { cart } = useCart();

// // // // // //   const [selectedMethod, setSelectedMethod] = useState("card");

// // // // // //   const renderPaymentComponent = () => {
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
// // // // // //         return <CODPayment />;
// // // // // //       default:
// // // // // //         return <CardPayment />;
// // // // // //     }
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className="max-w-[1200px] mx-auto px-4 py-10 flex gap-8">
// // // // // //       {/* LEFT: PAYMENT SECTION */}
// // // // // //       <div className="w-full lg:w-2/3">
// // // // // //         <h1 className="text-2xl font-semibold mb-6">
// // // // // //           Choose Your Payment Method
// // // // // //         </h1>

// // // // // //         {/* Tabs → Card, Wallet, UPI, NetBanking, COD */}
// // // // // //         <PaymentTabs selected={selectedMethod} onChange={setSelectedMethod} />

// // // // // //         <div className="mt-6">{renderPaymentComponent()}</div>
// // // // // //       </div>

// // // // // //       {/* RIGHT: ORDER SUMMARY */}
// // // // // //       <div className="w-full lg:w-1/3">
// // // // // //         <OrderSummary cart={cart} />
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default CheckoutPage;

// // // // // import React, { useState } from "react";
// // // // // import { useCart } from "../../context/CartContext";

// // // // // // Components
// // // // // import PaymentTabs from "./components/PaymentTabs";
// // // // // import CardPayment from "./components/CardPayment";
// // // // // import WalletPayment from "./components/WalletPayment";
// // // // // import UPIPayment from "./components/UPIPayment";
// // // // // import NetBankingPayment from "./components/NetBankingPayment";
// // // // // import CODPayment from "./components/CODPayment";
// // // // // import OrderSummary from "./components/OrderSummary";

// // // // // const CheckoutPage = () => {
// // // // //   const { cart } = useCart();

// // // // //   const [selectedMethod, setSelectedMethod] = useState("card");

// // // // //   const renderPaymentComponent = () => {
// // // // //     switch (selectedMethod) {
// // // // //       case "card":
// // // // //         return <CardPayment />;
// // // // //       case "wallet":
// // // // //         return <WalletPayment />;
// // // // //       case "upi":
// // // // //         return <UPIPayment />;
// // // // //       case "netbanking":
// // // // //         return <NetBankingPayment />;
// // // // //       case "cod":
// // // // //         return <CODPayment amount={cart?.[0]?.price || 0} />;
// // // // //       default:
// // // // //         return <CardPayment />;
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <div className="max-w-[1200px] mx-auto px-4 py-10 flex gap-8">
// // // // //       {/* LEFT: PAYMENT SECTION */}
// // // // //       <div className="w-full lg:w-2/3">
// // // // //         <h1 className="text-2xl font-semibold mb-6">
// // // // //           Choose Your Payment Method
// // // // //         </h1>

// // // // //         {/* TABS + PAYMENT DETAILS */}
// // // // //         <div className="bg-white border rounded-lg shadow-sm flex overflow-hidden">
// // // // //           <PaymentTabs selected={selectedMethod} onChange={setSelectedMethod} />

// // // // //           <div className="flex-1 p-6">{renderPaymentComponent()}</div>
// // // // //         </div>
// // // // //       </div>

// // // // //       {/* RIGHT: ORDER SUMMARY */}
// // // // //       <div className="w-full lg:w-1/3">
// // // // //         <OrderSummary cart={cart} />
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default CheckoutPage;

// // // // import React, { useState } from "react";
// // // // import { useCart } from "../../context/CartContext";

// // // // import PaymentTabs from "./components/PaymentTabs";
// // // // import CardPayment from "./components/CardPayment";
// // // // import WalletPayment from "./components/WalletPayment";
// // // // import UPIPayment from "./components/UPIPayment";
// // // // import NetBankingPayment from "./components/NetBankingPayment";
// // // // import CODPayment from "./components/CODPayment";
// // // // import OrderSummary from "./components/OrderSummary";

// // // // const CheckoutPage = () => {
// // // //   const { cart } = useCart();
// // // //   const [selectedMethod, setSelectedMethod] = useState("card");

// // // //   const renderPaymentComponent = () => {
// // // //     switch (selectedMethod) {
// // // //       case "card":
// // // //         return <CardPayment />;
// // // //       case "wallet":
// // // //         return <WalletPayment />;
// // // //       case "upi":
// // // //         return <UPIPayment />;
// // // //       case "netbanking":
// // // //         return <NetBankingPayment />;
// // // //       case "cod":
// // // //         return <CODPayment amount={cart?.[0]?.price || 0} />;
// // // //       default:
// // // //         return <CardPayment />;
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="max-w-[1200px] mx-auto px-4 py-10">
// // // //       <h1 className="text-2xl font-semibold mb-6">
// // // //         Choose Your Payment Method
// // // //       </h1>

// // // //       {/* MAIN LAYOUT */}
// // // //       <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
// // // //         {/* LEFT: PAYMENT SECTION */}
// // // //         <div className="w-full lg:w-2/3">
// // // //           <div className="bg-white border rounded-lg shadow-sm flex flex-col lg:flex-row overflow-hidden">
// // // //             {/* TABS */}
// // // //             <div className="w-full lg:w-[220px] border-b lg:border-b-0 lg:border-r">
// // // //               <PaymentTabs
// // // //                 selected={selectedMethod}
// // // //                 onChange={setSelectedMethod}
// // // //               />
// // // //             </div>

// // // //             {/* PAYMENT DETAILS */}
// // // //             <div className="flex-1 p-4 sm:p-6">{renderPaymentComponent()}</div>
// // // //           </div>
// // // //         </div>

// // // //         {/* RIGHT: ORDER SUMMARY */}
// // // //         <div className="w-full lg:w-1/3">
// // // //           <OrderSummary cart={cart} />
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default CheckoutPage;

// // // import React, { useState } from "react";
// // // import { useCart } from "../../context/CartContext";

// // // // Components
// // // import PaymentTabs from "./components/PaymentTabs";
// // // import CardPayment from "./components/CardPayment";
// // // import WalletPayment from "./components/WalletPayment";
// // // import UPIPayment from "./components/UPIPayment";
// // // import NetBankingPayment from "./components/NetBankingPayment";
// // // import CODPayment from "./components/CODPayment";
// // // import OrderSummary from "./components/OrderSummary";

// // // const CheckoutPage = () => {
// // //   const { cart } = useCart();
// // //   const [selectedMethod, setSelectedMethod] = useState("card");

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
// // //     <div className="max-w-[1200px] mx-auto px-4 py-8">
// // //       <h1 className="text-2xl font-semibold mb-6">
// // //         Choose Your Payment Method
// // //       </h1>

// // //       {/* DESKTOP VIEW */}
// // //       <div className="hidden lg:flex gap-8">
// // //         {/* LEFT: Payment */}
// // //         <div className="w-2/3">
// // //           <div className="bg-white border rounded-lg shadow-sm flex overflow-hidden">
// // //             <PaymentTabs
// // //               selected={selectedMethod}
// // //               onChange={setSelectedMethod}
// // //             />

// // //             <div className="flex-1 p-6">{renderPaymentComponent()}</div>
// // //           </div>
// // //         </div>

// // //         {/* RIGHT: Summary */}
// // //         <div className="w-1/3">
// // //           <OrderSummary cart={cart} />
// // //         </div>
// // //       </div>

// // //       {/* MOBILE / TABLET VIEW — Bewakoof Style */}
// // //       <div className="lg:hidden flex flex-col gap-5">
// // //         {/* 1️⃣ Address */}
// // //         <div className="bg-white rounded-lg p-4 border shadow-sm">
// // //           <OrderSummary cart={cart} />
// // //         </div>

// // //         {/* 2️⃣ PAYMENT ACCORDION GROUP */}
// // //         <div className="bg-white rounded-lg border shadow-sm divide-y">
// // //           {/* Accordion Section */}
// // //           <details className="p-4">
// // //             <summary className="font-medium py-2 cursor-pointer">
// // //               Debit & Credit Card
// // //             </summary>
// // //             <div className="pt-4">
// // //               {selectedMethod === "card" && <CardPayment />}
// // //             </div>
// // //           </details>

// // //           <details className="p-4">
// // //             <summary className="font-medium py-2 cursor-pointer">
// // //               Wallet
// // //             </summary>
// // //             <div className="pt-4">
// // //               {selectedMethod === "wallet" && <WalletPayment />}
// // //             </div>
// // //           </details>

// // //           <details className="p-4">
// // //             <summary className="font-medium py-2 cursor-pointer">UPI</summary>
// // //             <div className="pt-4">
// // //               {selectedMethod === "upi" && <UPIPayment />}
// // //             </div>
// // //           </details>

// // //           <details className="p-4">
// // //             <summary className="font-medium py-2 cursor-pointer">
// // //               Net Banking
// // //             </summary>
// // //             <div className="pt-4">
// // //               {selectedMethod === "netbanking" && <NetBankingPayment />}
// // //             </div>
// // //           </details>

// // //           <details className="p-4">
// // //             <summary className="font-medium py-2 cursor-pointer">
// // //               Cash On Delivery
// // //             </summary>
// // //             <div className="pt-4">
// // //               {selectedMethod === "cod" && <CODPayment />}
// // //             </div>
// // //           </details>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default CheckoutPage;

// // // CheckoutPage.jsx
// // import React, { useState, useEffect } from "react";
// // import { useCart } from "../../context/CartContext";

// // // desktop components
// // import PaymentTabs from "./components/PaymentTabs";
// // import CardPayment from "./components/CardPayment";
// // import WalletPayment from "./components/WalletPayment";
// // import UPIPayment from "./components/UPIPayment";
// // import NetBankingPayment from "./components/NetBankingPayment";
// // import CODPayment from "./components/CODPayment";
// // import OrderSummary from "./components/OrderSummary";

// // // mobile accordion
// // import MobileAccordion from "./components/MobileAccordion";

// // const CheckoutPage = () => {
// //   const { cart } = useCart();
// //   const [selectedMethod, setSelectedMethod] = useState("card");

// //   // responsive state
// //   const [isMobile, setIsMobile] = useState(false);

// //   useEffect(() => {
// //     const onResize = () => setIsMobile(window.innerWidth < 768);
// //     onResize();
// //     window.addEventListener("resize", onResize);
// //     return () => window.removeEventListener("resize", onResize);
// //   }, []);

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
// //         return <CODPayment amount={cart?.[0]?.price || 0} />;
// //       default:
// //         return <CardPayment />;
// //     }
// //   };

// //   return (
// //     <div className="max-w-[1200px] mx-auto px-4 py-10">
// //       <h1 className="text-2xl font-semibold mb-6">
// //         Choose Your Payment Method
// //       </h1>

// //       {/* ---------- MOBILE: Accordion style ---------- */}
// //       {isMobile && (
// //         <div className="space-y-4">
// //           {/* Keep order summary first (like your reference mobile) */}
// //           <OrderSummary cart={cart} mobile />

// //           {/* Mobile accordion component will contain each payment pane */}
// //           <MobileAccordion>
// //             {/* Pass components as children — MobileAccordion will render them as panels */}
// //             <MobileAccordion.Panel id="card" title="Debit & Credit Card">
// //               <CardPayment />
// //             </MobileAccordion.Panel>

// //             <MobileAccordion.Panel id="upi" title="UPI">
// //               <UPIPayment />
// //             </MobileAccordion.Panel>

// //             <MobileAccordion.Panel id="wallet" title="Wallet">
// //               <WalletPayment />
// //             </MobileAccordion.Panel>

// //             <MobileAccordion.Panel id="netbanking" title="Net banking">
// //               <NetBankingPayment />
// //             </MobileAccordion.Panel>

// //             <MobileAccordion.Panel id="cod" title="Cash On Delivery">
// //               <CODPayment amount={cart?.[0]?.price || 0} />
// //             </MobileAccordion.Panel>
// //           </MobileAccordion>
// //         </div>
// //       )}

// //       {/* ---------- DESKTOP/LARGE: original two column layout ---------- */}
// //       {!isMobile && (
// //         <div className="flex gap-8">
// //           {/* LEFT: Payment tabs + content */}
// //           <div className="w-full lg:w-2/3">
// //             <div className="bg-white border rounded-lg shadow-sm flex overflow-hidden">
// //               <PaymentTabs
// //                 selected={selectedMethod}
// //                 onChange={setSelectedMethod}
// //               />
// //               <div className="flex-1 p-6">{renderPaymentComponent()}</div>
// //             </div>
// //           </div>

// //           {/* RIGHT: Order summary */}
// //           <div className="w-full lg:w-1/3">
// //             <OrderSummary cart={cart} />
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default CheckoutPage;

// // src/pages/Checkout/CheckoutPage.jsx
// import React, { useState, useEffect } from "react";
// import { useCart } from "../../context/CartContext";

// // desktop components
// import PaymentTabs from "./components/PaymentTabs";
// import CardPayment from "./components/CardPayment";
// import WalletPayment from "./components/WalletPayment";
// import UPIPayment from "./components/UPIPayment";
// import NetBankingPayment from "./components/NetBankingPayment";
// import CODPayment from "./components/CODPayment";
// import OrderSummary from "./components/OrderSummary";

// // mobile accordion
// import MobileAccordion from "./components/MobileAccordion";

// const CheckoutPage = () => {
//   const { cart } = useCart();
//   const [selectedMethod, setSelectedMethod] = useState("card");

//   // responsive state
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const onResize = () => setIsMobile(window.innerWidth < 768);
//     onResize();
//     window.addEventListener("resize", onResize);
//     return () => window.removeEventListener("resize", onResize);
//   }, []);

//   const renderPaymentComponent = () => {
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
//         return <CODPayment amount={cart?.[0]?.price || 0} />;
//       default:
//         return <CardPayment />;
//     }
//   };

//   return (
//     <div className="max-w-[1200px] mx-auto px-4 py-10">
//       <h1 className="text-2xl font-semibold mb-6">
//         Choose Your Payment Method
//       </h1>

//       {/* ---------- MOBILE: Accordion style ---------- */}
//       {isMobile && (
//         <div className="space-y-4">
//           {/* Order summary first (like the reference) */}
//           <OrderSummary cart={cart} mobile />

//           {/* Payment accordion */}
//           <MobileAccordion>
//             <MobileAccordion.Panel id="card" title="Debit & Credit Card">
//               <CardPayment />
//             </MobileAccordion.Panel>

//             <MobileAccordion.Panel id="upi" title="UPI">
//               <UPIPayment />
//             </MobileAccordion.Panel>

//             <MobileAccordion.Panel id="wallet" title="Wallet">
//               <WalletPayment />
//             </MobileAccordion.Panel>

//             <MobileAccordion.Panel id="netbanking" title="Net banking">
//               <NetBankingPayment />
//             </MobileAccordion.Panel>

//             <MobileAccordion.Panel id="cod" title="Cash On Delivery">
//               <CODPayment amount={cart?.[0]?.price || 0} />
//             </MobileAccordion.Panel>
//           </MobileAccordion>
//         </div>
//       )}

//       {/* ---------- DESKTOP/LARGE: original two column layout ---------- */}
//       {!isMobile && (
//         <div className="flex gap-8">
//           <div className="w-full lg:w-2/3">
//             <div className="bg-white border rounded-lg shadow-sm flex overflow-hidden">
//               <PaymentTabs
//                 selected={selectedMethod}
//                 onChange={setSelectedMethod}
//               />
//               <div className="flex-1 p-6">{renderPaymentComponent()}</div>
//             </div>
//           </div>

//           <div className="w-full lg:w-1/3">
//             <OrderSummary cart={cart} />
//           </div>
//         </div>
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

// Mobile full custom flow component
import MobileCheckout from "./components/MobileCheckout";

const CheckoutPage = () => {
  const { cart } = useCart();
  //   console.log(cart);
  const [selectedMethod, setSelectedMethod] = useState("card");

  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile screen
  useEffect(() => {
    const handle = () => setIsMobile(window.innerWidth < 1050);
    handle();
    window.addEventListener("resize", handle);
    return () => window.removeEventListener("resize", handle);
  }, []);

  // Desktop tab switching content
  const renderPaymentComponent = () => {
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
        return <CODPayment amount={cart?.[0]?.price || 0} />;
      default:
        return <CardPayment />;
    }
  };

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-10">
      {/* DESKTOP VIEW */}
      {!isMobile && (
        <>
          <h1 className="text-2xl font-semibold mb-6">
            Choose Your Payment Method
          </h1>

          <div className="flex gap-8">
            {/* Payment Tabs */}
            <div className="w-full lg:w-2/3">
              <div className="bg-white border rounded-lg shadow-sm flex overflow-hidden">
                <PaymentTabs
                  selected={selectedMethod}
                  onChange={setSelectedMethod}
                />
                <div className="flex-1 p-6">{renderPaymentComponent()}</div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="w-full lg:w-1/3">
              <OrderSummary cart={cart} />
            </div>
          </div>
        </>
      )}

      {/* MOBILE VIEW */}
      {isMobile && (
        <MobileCheckout
          OrderSummary={OrderSummary}
          CardPayment={CardPayment}
          UPIPayment={UPIPayment}
          WalletPayment={WalletPayment}
          NetBankingPayment={NetBankingPayment}
          CODPayment={CODPayment}
          cart={cart}
        />
      )}
    </div>
  );
};

export default CheckoutPage;
