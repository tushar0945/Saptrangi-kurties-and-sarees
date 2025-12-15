// import React, { useState } from "react";
// import { IoChevronDown, IoChevronUp } from "react-icons/io5";
// import CartItemsList from "./CartItemsList";
// import DeliverToBox from "./DeliverToBox";

// const Section = ({ id, openId, setOpenId, title, children }) => {
//   const isOpen = openId === id;

//   return (
//     <div className="bg-white rounded-lg shadow-sm border">
//       {/* HEADER */}
//       <button
//         onClick={() => setOpenId(isOpen ? null : id)}
//         className="w-full flex items-center justify-between px-4 py-3 text-left"
//       >
//         {isOpen ? (
//           <span className="font-semibold text-[15px]"></span>
//         ) : (
//           <span className="font-semibold text-[15px]">{title}</span>
//         )}
//         {isOpen ? <IoChevronUp /> : <IoChevronDown />}
//       </button>

//       {/* CONTENT */}
//       <div
//         className={`overflow-hidden transition-all duration-200 ${
//           isOpen ? "max-h-[2000px] px-4 pb-4" : "max-h-0 px-4"
//         }`}
//       >
//         <div className="pt-2">{children}</div>
//       </div>
//     </div>
//   );
// };

// const MobileCheckout = ({
//   OrderSummary,
//   CardPayment,
//   UPIPayment,
//   WalletPayment,
//   NetBankingPayment,
//   CODPayment,
//   cart,
// }) => {
//   const [openId, setOpenId] = useState("upi");

//   return (
//     <div className="space-y-4">
//       {/* <Section id="order" title="My Item" openId={openId} setOpenId={setOpenId}>
//         <OrderSummary mobile cart={cart} />
//       </Section> */}

//       <DeliverToBox />

//       <CartItemsList mobile cart={cart} />

//       {/* CARD */}
//       <Section
//         id="card"
//         title="Debit & Credit Card"
//         openId={openId}
//         setOpenId={setOpenId}
//       >
//         <CardPayment />
//       </Section>

//       {/* UPI */}
//       <Section id="upi" title="UPI" openId={openId} setOpenId={setOpenId}>
//         <UPIPayment />
//       </Section>

//       {/* WALLET */}
//       <Section id="wallet" title="Wallet" openId={openId} setOpenId={setOpenId}>
//         <WalletPayment />
//       </Section>

//       {/* NETBANKING */}
//       <Section
//         id="netbanking"
//         title="Net banking"
//         openId={openId}
//         setOpenId={setOpenId}
//       >
//         <NetBankingPayment />
//       </Section>

//       {/* COD */}
//       <Section
//         id="cod"
//         title="Cash On Delivery"
//         openId={openId}
//         setOpenId={setOpenId}
//       >
//         <CODPayment amount={cart?.[0]?.price || 0} />
//       </Section>
//     </div>
//   );
// };

// export default MobileCheckout;

import React, { useState } from "react";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
import CartItemsList from "./CartItemsList";
import DeliverToBox from "./DeliverToBox";

const Section = ({ id, openId, setOpenId, title, children }) => {
  const isOpen = openId === id;

  return (
    <div className="bg-white rounded-lg shadow-sm border">
      {/* HEADER */}
      <button
        onClick={() => setOpenId(isOpen ? null : id)}
        className="w-full flex items-center justify-between px-4 py-3 text-left"
      >
        <span className="font-semibold text-[15px]">{isOpen ? "" : title}</span>
        {isOpen ? <IoChevronUp /> : <IoChevronDown />}
      </button>

      {/* CONTENT */}
      <div
        className={`overflow-hidden transition-all duration-200 ${
          isOpen ? "max-h-[2000px] px-4 pb-4" : "max-h-0 px-4"
        }`}
      >
        <div className="pt-2">{children}</div>
      </div>
    </div>
  );
};

const MobileCheckout = ({
  CardPayment,
  UPIPayment,
  WalletPayment,
  NetBankingPayment,
  CODPayment,
  cart,
}) => {
  const [openId, setOpenId] = useState("upi");

  // ✅ Safe COD calculation using backend shape
  const codAmount =
    (cart?.[0]?.product_details?.price || 0) * (cart?.[0]?.quantity || 1) || 0;

  return (
    <div className="space-y-4">
      {/* DELIVERY ADDRESS */}
      <DeliverToBox />

      {/* CART ITEMS */}
      <CartItemsList cart={cart} />

      {/* CARD */}
      <Section
        id="card"
        title="Debit & Credit Card"
        openId={openId}
        setOpenId={setOpenId}
      >
        <CardPayment />
      </Section>

      {/* UPI */}
      <Section id="upi" title="UPI" openId={openId} setOpenId={setOpenId}>
        <UPIPayment />
      </Section>

      {/* WALLET */}
      <Section id="wallet" title="Wallet" openId={openId} setOpenId={setOpenId}>
        <WalletPayment />
      </Section>

      {/* NET BANKING */}
      <Section
        id="netbanking"
        title="Net Banking"
        openId={openId}
        setOpenId={setOpenId}
      >
        <NetBankingPayment />
      </Section>

      {/* COD — ✅ FIXED */}
      <Section
        id="cod"
        title="Cash On Delivery"
        openId={openId}
        setOpenId={setOpenId}
      >
        <CODPayment amount={codAmount} />
      </Section>
    </div>
  );
};

export default MobileCheckout;
