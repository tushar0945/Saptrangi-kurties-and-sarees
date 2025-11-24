// src/pages/Product/components/QuantitySelector.jsx

import React from "react";

const QuantitySelector = ({ quantity, setQuantity }) => {
  const decrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const increase = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="flex items-center gap-4 my-4">
      <span className="text-gray-700 font-medium">Quantity</span>

      <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
        {/* Decrease Button */}
        <button
          onClick={decrease}
          className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-lg"
        >
          –
        </button>

        {/* Quantity Display */}
        <div className="px-6 py-2 text-lg font-medium text-gray-900">
          {quantity}
        </div>

        {/* Increase Button */}
        <button
          onClick={increase}
          className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-lg"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default QuantitySelector;
