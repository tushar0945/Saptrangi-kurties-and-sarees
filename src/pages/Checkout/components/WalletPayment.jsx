import React, { useState } from "react";

const wallets = [
  { id: "phonepe", label: "PhonePe" },
  { id: "mobikwik", label: "Mobikwik" },
  { id: "freecharge", label: "Freecharge" },
];

const WalletPayment = ({ onPay }) => {
  const [selected, setSelected] = useState(wallets[0].id);

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border">
      <h3 className="text-lg font-semibold mb-4">Wallet</h3>

      <div className="space-y-3">
        {wallets.map((w) => (
          <label
            key={w.id}
            className="flex items-center gap-3 p-3 border rounded hover:bg-gray-50 cursor-pointer"
          >
            <input
              type="radio"
              name="wallet"
              checked={selected === w.id}
              onChange={() => setSelected(w.id)}
            />
            <span className="font-medium">{w.label}</span>
          </label>
        ))}

        <button
          onClick={() => onPay?.(selected)}
          className="mt-3 w-full py-3 rounded-lg font-semibold bg-primary text-white"
        >
          PAY WITH WALLET
        </button>
      </div>
    </div>
  );
};

export default WalletPayment;
