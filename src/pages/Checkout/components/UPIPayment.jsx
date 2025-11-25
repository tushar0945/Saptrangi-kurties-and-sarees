import React, { useState } from "react";

const UPIPayment = ({ onVerify }) => {
  const [upiId, setUpiId] = useState("");

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border">
      <h3 className="text-lg font-semibold mb-4">UPI</h3>

      <p className="text-sm text-gray-600 mb-3">
        Enter your UPI ID (eg: yourname@bank)
      </p>

      <input
        value={upiId}
        onChange={(e) => setUpiId(e.target.value)}
        placeholder="yourname@bank"
        className="w-full border p-3 rounded text-sm"
      />

      <div className="mt-4 flex gap-3">
        <button
          onClick={() => onVerify?.(upiId)}
          className="flex-1 py-3 rounded-lg font-semibold bg-primary text-white"
        >
          VERIFY & PAY
        </button>
        <button
          onClick={() => navigator.clipboard?.writeText("upi://pay")}
          className="py-3 px-4 rounded-lg border"
        >
          Scan
        </button>
      </div>
    </div>
  );
};

export default UPIPayment;
