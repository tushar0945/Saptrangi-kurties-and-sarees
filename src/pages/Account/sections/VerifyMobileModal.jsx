// components/VerifyMobileModal.jsx
import React, { useState } from "react";
import { X } from "lucide-react";

const VerifyMobileModal = ({ open, onClose, onGetOtp }) => {
  const [mobile, setMobile] = useState("");

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl w-[420px] p-6 relative shadow-lg">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500"
        >
          <X size={20} />
        </button>

        <h3 className="text-xl font-semibold mb-4">
          Verify Your Mobile Number
        </h3>
        <div className="border-b border-gray-200 mb-4" />

        <p className="text-sm text-gray-700 mb-2">Enter new mobile number</p>

        <input
          type="tel"
          value={mobile}
          onChange={(e) =>
            setMobile(e.target.value.replace(/\D/g, "").slice(0, 10))
          }
          className={`w-full border rounded-md px-3 py-2 mb-2 ${
            mobile ? "border-gray-300" : "border-red-300"
          }`}
          placeholder="Enter 10 digit mobile"
        />
        {!mobile && (
          <p className="text-sm text-red-500 mb-3">Mobile number is Required</p>
        )}

        <button
          disabled={!mobile || mobile.length !== 10}
          onClick={() => onGetOtp(mobile)}
          className={`w-full py-3 rounded-lg font-semibold ${
            mobile && mobile.length === 10
              ? "bg-yellow-400 hover:bg-yellow-500"
              : "bg-gray-200 text-gray-500 cursor-not-allowed"
          }`}
        >
          GET OTP
        </button>
      </div>
    </div>
  );
};

export default VerifyMobileModal;
