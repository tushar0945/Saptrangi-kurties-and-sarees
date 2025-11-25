// // // // // import React from "react";
// // // // // import CardPayment from "./CardPayment";
// // // // // import WalletPayment from "./WalletPayment";
// // // // // import UPIPayment from "./UPIPayment";
// // // // // import NetBankingPayment from "./NetBankingPayment";
// // // // // import CODPayment from "./CODPayment";

// // // // // const tabs = [
// // // // //   { id: "card", label: "Debit & Credit Card" },
// // // // //   { id: "wallet", label: "Wallet" },
// // // // //   { id: "upi", label: "UPI" },
// // // // //   { id: "netbanking", label: "Net banking" },
// // // // //   { id: "cod", label: "Cash On Delivery" },
// // // // // ];

// // // // // const PaymentTabs = ({ activeTab, setActiveTab }) => {
// // // // //   return (
// // // // //     <div className="flex">
// // // // //       {/* LEFT TABS */}
// // // // //       <div className="w-[200px] border-r">
// // // // //         {tabs.map((t) => (
// // // // //           <button
// // // // //             key={t.id}
// // // // //             onClick={() => setActiveTab(t.id)}
// // // // //             className={`block w-full text-left px-4 py-4 border-b hover:bg-gray-100
// // // // //               ${activeTab === t.id ? "bg-gray-100 font-bold" : ""}`}
// // // // //           >
// // // // //             {t.label}
// // // // //           </button>
// // // // //         ))}
// // // // //       </div>

// // // // //       {/* RIGHT CONTENT — Load component dynamically */}
// // // // //       <div className="flex-1 p-6">
// // // // //         {activeTab === "card" && <CardPayment />}
// // // // //         {activeTab === "wallet" && <WalletPayment />}
// // // // //         {activeTab === "upi" && <UPIPayment />}
// // // // //         {activeTab === "netbanking" && <NetBankingPayment />}
// // // // //         {activeTab === "cod" && <CODPayment />}
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default PaymentTabs;

// // // // import React from "react";

// // // // /**
// // // //  * Props:
// // // //  *  - selected: string (active tab key)
// // // //  *  - onChange: fn(newKey)
// // // //  *
// // // //  * Tabs keys: card, wallet, upi, netbanking, cod
// // // //  */
// // // // const tabs = [
// // // //   { key: "card", label: "Debit & Credit Card", icon: "💳" },
// // // //   { key: "wallet", label: "Wallet", icon: "👛" },
// // // //   { key: "upi", label: "UPI", icon: "🔗" },
// // // //   { key: "netbanking", label: "Net banking", icon: "🏦" },
// // // //   { key: "cod", label: "Cash On Delivery", icon: "💵" },
// // // // ];

// // // // const PaymentTabs = ({ selected = "cod", onChange = () => {} }) => {
// // // //   return (
// // // //     <div className="flex bg-white rounded-lg shadow-sm overflow-hidden border">
// // // //       {/* left tabs */}
// // // //       <div className="w-56 border-r">
// // // //         {tabs.map((t) => (
// // // //           <button
// // // //             key={t.key}
// // // //             onClick={() => onChange(t.key)}
// // // //             className={`w-full text-left px-4 py-4 flex items-center gap-3 text-sm transition ${
// // // //               selected === t.key
// // // //                 ? "bg-pink-50 font-semibold border-l-4 border-primary"
// // // //                 : "hover:bg-gray-50"
// // // //             }`}
// // // //           >
// // // //             <span className="text-lg">{t.icon}</span>
// // // //             <span>{t.label}</span>
// // // //           </button>
// // // //         ))}
// // // //       </div>

// // // //       {/* right content area (slot) */}
// // // //       <div className="flex-1 p-6">
// // // //         {/* parent will render the active payment method component here */}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default PaymentTabs;

// // // import React from "react";

// // // const tabs = [
// // //   { key: "card", label: "Debit & Credit Card", icon: "💳" },
// // //   { key: "wallet", label: "Wallet", icon: "👛" },
// // //   { key: "upi", label: "UPI", icon: "🔗" },
// // //   { key: "netbanking", label: "Net banking", icon: "🏦" },
// // //   { key: "cod", label: "Cash On Delivery", icon: "💵" },
// // // ];

// // // const PaymentTabs = ({ selected, onChange }) => {
// // //   return (
// // //     <div className="bg-white rounded-lg shadow-sm overflow-hidden border w-full flex">
// // //       {/* LEFT TABS */}
// // //       <div className="w-56 border-r">
// // //         {tabs.map((t) => (
// // //           <button
// // //             key={t.key}
// // //             onClick={() => onChange(t.key)}
// // //             className={`w-full text-left px-4 py-4 flex items-center gap-3 text-sm transition
// // //               ${
// // //                 selected === t.key
// // //                   ? "bg-pink-50 font-semibold border-l-4 border-primary"
// // //                   : "hover:bg-gray-50"
// // //               }`}
// // //           >
// // //             <span className="text-lg">{t.icon}</span>
// // //             <span>{t.label}</span>
// // //           </button>
// // //         ))}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default PaymentTabs;

// // import React from "react";
// // import {
// //   CreditCard,
// //   Wallet,
// //   Landmark,
// //   SmartphoneNfc,
// //   HandCoins,
// // } from "lucide-react";

// // const PaymentTabs = ({ selected, onChange }) => {
// //   const tabs = [
// //     {
// //       id: "card",
// //       label: "Debit & Credit Card",
// //       icon: <CreditCard size={20} />,
// //     },
// //     { id: "wallet", label: "Wallet", icon: <Wallet size={20} /> },
// //     { id: "upi", label: "UPI", icon: <SmartphoneNfc size={20} /> },
// //     { id: "netbanking", label: "Net banking", icon: <Landmark size={20} /> },
// //     { id: "cod", label: "Cash On Delivery", icon: <HandCoins size={20} /> },
// //   ];

// //   return (
// //     <div className="bg-white border rounded-lg shadow-sm">
// //       {tabs.map((tab) => (
// //         <button
// //           key={tab.id}
// //           onClick={() => onChange(tab.id)}
// //           className={`w-full flex items-center gap-3 px-5 py-4 text-left
// //           border-b last:border-b-0 transition
// //           ${
// //             selected === tab.id
// //               ? "bg-pink-100 border-l-4 border-pink-500"
// //               : "bg-white"
// //           }
// //         `}
// //         >
// //           {tab.icon}
// //           <span className="font-medium">{tab.label}</span>
// //         </button>
// //       ))}
// //     </div>
// //   );
// // };

// // export default PaymentTabs;

// // components/PaymentTabs.jsx
// import React from "react";
// import { FaRegCreditCard } from "react-icons/fa";
// import { FaWallet } from "react-icons/fa6";
// import { PiLinkBold } from "react-icons/pi";
// import { FaUniversity } from "react-icons/fa";
// import { FaMoneyBillAlt } from "react-icons/fa";

// const tabs = [
//   { id: "card", label: "Debit & Credit Card", icon: "card" },
//   { id: "wallet", label: "Wallet", icon: "wallet" },
//   { id: "upi", label: "UPI", icon: "upi" },
//   { id: "netbanking", label: "Net banking", icon: "bank" },
//   { id: "cod", label: "Cash On Delivery", icon: "cash" },
// ];

// const PaymentTabs = ({ selected, onChange }) => {
//   return (
//     <div className="w-56 bg-white border-r">
//       <ul className="divide-y">
//         {tabs.map((t) => (
//           <li key={t.id}>
//             <button
//               onClick={() => onChange(t.id)}
//               className={`w-full text-left flex items-center gap-3 px-5 py-4 hover:bg-pink-50
//                 ${
//                   selected === t.id
//                     ? "bg-pink-50 border-l-4 border-pink-400"
//                     : ""
//                 }
//               `}
//             >
//               {/* replace with your icons or simple emoji */}
//               <span className="text-xl">
//                 {t.icon === "card" && "💳"}
//                 {t.icon === "wallet" && "👛"}
//                 {t.icon === "upi" && "🔗"}
//                 {t.icon === "bank" && "🏦"}
//                 {t.icon === "cash" && "💵"}
//               </span>
//               <span className="text-sm font-medium">{t.label}</span>
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default PaymentTabs;

// src/pages/Checkout/components/PaymentTabs.jsx
import React from "react";

const tabs = [
  { id: "card", label: "Debit & Credit Card", icon: "card" },
  { id: "wallet", label: "Wallet", icon: "wallet" },
  { id: "upi", label: "UPI", icon: "upi" },
  { id: "netbanking", label: "Net banking", icon: "bank" },
  { id: "cod", label: "Cash On Delivery", icon: "cash" },
];

const PaymentTabs = ({ selected, onChange }) => {
  return (
    <div className="w-56 bg-white border-r">
      <ul className="divide-y">
        {tabs.map((t) => (
          <li key={t.id}>
            <button
              onClick={() => onChange(t.id)}
              className={`w-full text-left flex items-center gap-3 px-5 py-4 hover:bg-pink-50
                ${
                  selected === t.id
                    ? "bg-pink-50 border-l-4 border-pink-400"
                    : ""
                }
              `}
            >
              <span className="text-xl">
                {t.icon === "card" && "💳"}
                {t.icon === "wallet" && "👛"}
                {t.icon === "upi" && "🔗"}
                {t.icon === "bank" && "🏦"}
                {t.icon === "cash" && "💵"}
              </span>
              <span className="text-sm font-medium">{t.label}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PaymentTabs;
