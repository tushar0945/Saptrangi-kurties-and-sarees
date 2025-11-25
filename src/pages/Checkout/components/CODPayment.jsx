import React from "react";

const CODPayment = ({ amount, onCod }) => {
  const extra = 20; // cash collection charges

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border">
      <h3 className="text-lg font-semibold mb-3">Cash On Delivery</h3>

      <p className="text-sm text-gray-600 mb-4">
        Additional cash collection charges of ₹{extra} are applicable on this
        order.
      </p>

      <button
        onClick={() => onCod?.()}
        className="w-full py-3 rounded-lg font-semibold border text-gray-800"
      >
        PAY ₹{(amount || 0) + extra} ON DELIVERY
      </button>

      <div className="my-4 flex items-center">
        <hr className="flex-1" />
        <span className="px-3 text-sm text-gray-400">OR</span>
        <hr className="flex-1" />
      </div>

      <button
        onClick={() => onCod?.({ payNow: true })}
        className="w-full py-3 rounded-lg font-semibold bg-primary text-white"
      >
        Pay now and save ₹{extra}
      </button>
    </div>
  );
};

export default CODPayment;
