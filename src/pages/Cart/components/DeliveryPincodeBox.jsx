import React from "react";
import { MapPin } from "lucide-react";

const DeliveryPincodeBox = ({ pincode = "425408", onChange }) => {
  return (
    <div className="w-full bg-[#f7fbff] border rounded-xl p-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <MapPin size={18} className="text-gray-700" />
        <span className="text-gray-700 font-medium">
          Deliver to: <span className="font-semibold">{pincode}</span>
        </span>
      </div>

      <button
        onClick={onChange}
        className="text-blue-600 font-medium hover:underline"
      >
        Change
      </button>
    </div>
  );
};

export default DeliveryPincodeBox;
