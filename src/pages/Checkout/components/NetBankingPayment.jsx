import React, { useState } from "react";

const banks = ["ICICI", "Axis", "SBI", "HDFC", "KOTAK"];

const NetBankingPayment = ({ onPay }) => {
  const [selected, setSelected] = useState("");

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border">
      <h3 className="text-lg font-semibold mb-4">Net banking</h3>

      <div className="space-y-3">
        {banks.map((b) => (
          <label
            key={b}
            className="flex items-center justify-between p-3 border rounded hover:bg-gray-50 cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm">
                {b[0]}
              </div>
              <span>{b}</span>
            </div>

            <input
              type="radio"
              name="bank"
              checked={selected === b}
              onChange={() => setSelected(b)}
            />
          </label>
        ))}

        <div className="mt-4 flex gap-2">
          <button
            onClick={() => onPay?.(selected)}
            className="flex-1 py-3 rounded-lg font-semibold bg-primary text-white"
          >
            PAY NOW
          </button>
          <button
            onClick={() => setSelected("")}
            className="py-3 px-4 rounded-lg border"
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default NetBankingPayment;
