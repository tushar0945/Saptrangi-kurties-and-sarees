import React from "react";
import { CalendarDays } from "lucide-react";

const DeliveryEstimate = ({ dispatchHours = 48 }) => {
  return (
    <div className="flex items-center gap-2 border rounded-lg p-3 ">
      <CalendarDays size={18} className="text-gray-700" />

      <p className="text-sm text-gray-800 font-medium">
        Fast dispatch within{" "}
        <span className="font-semibold text-green-600">
          {dispatchHours} hours
        </span>
      </p>
    </div>
  );
};

export default DeliveryEstimate;
