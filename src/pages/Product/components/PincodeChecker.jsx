import React, { useState } from "react";

const PincodeChecker = () => {
  const [pincode, setPincode] = useState("");
  const [message, setMessage] = useState("");

  const checkDelivery = () => {
    if (pincode.length !== 6) {
      setMessage("Please enter a valid 6-digit pincode");
      return;
    }

    setMessage("🎉 Delivery available to this location!");
  };

  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold mb-3">Check Delivery Details</h3>

      <div className="flex gap-2">
        <input
          type="text"
          value={pincode}
          onChange={(e) => setPincode(e.target.value)}
          className="border rounded-lg px-3 py-2 w-full outline-none"
          placeholder="Enter Pincode"
          maxLength={6}
        />
        <button
          onClick={checkDelivery}
          className="px-4 py-2 bg-black text-white rounded-lg"
        >
          Check
        </button>
      </div>

      {message && <p className="text-sm mt-2 text-gray-700">{message}</p>}
    </div>
  );
};

export default PincodeChecker;
