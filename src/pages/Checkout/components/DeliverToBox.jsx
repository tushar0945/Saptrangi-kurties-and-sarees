// src/pages/Checkout/components/DeliverToBox.jsx
import React from "react";

const DeliverToBox = () => {
  return (
    <div className="bg-white border rounded-lg p-4">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm text-gray-600">Delivering order to</p>
          <p className="font-semibold">Your Address Label</p>
          <p className="text-sm text-gray-600">City, State, PIN</p>
        </div>
        <button className="text-sm text-primary">CHANGE</button>
      </div>
    </div>
  );
};

export default DeliverToBox;
