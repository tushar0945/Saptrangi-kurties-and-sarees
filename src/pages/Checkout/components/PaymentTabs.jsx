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
