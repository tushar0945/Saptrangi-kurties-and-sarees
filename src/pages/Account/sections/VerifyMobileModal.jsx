// components/VerifyMobileModal.jsx
import React, { useState } from "react";
import { X } from "lucide-react";

const VerifyMobileModal = ({ open, onClose, onGetOtp }) => {
  const [mobile, setMobile] = useState("");

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl w-[420px] p-6 relative shadow-lg border border-neutral">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-dark/60 hover:text-dark"
        >
          <X size={20} />
        </button>

        {/* Title */}
        <h3 className="text-xl font-semibold mb-4 text-dark">
          Verify Your Mobile Number
        </h3>

        <div className="border-b border-neutral mb-4" />

        <p className="text-sm text-dark/70 mb-2">Enter new mobile number</p>

        {/* Input */}
        <input
          type="tel"
          value={mobile}
          onChange={(e) =>
            setMobile(e.target.value.replace(/\D/g, "").slice(0, 10))
          }
          className={`w-full rounded-md px-3 py-2 mb-2 outline-none text-dark bg-white
            ${mobile ? "border border-neutral" : "border border-red-500"}
          `}
          placeholder="Enter 10 digit mobile"
        />

        {/* Validation Message */}
        {!mobile && (
          <p className="text-sm text-red-500 mb-3">Mobile number is required</p>
        )}

        {/* GET OTP Button */}
        <button
          disabled={!mobile || mobile.length !== 10}
          onClick={() => onGetOtp(mobile)}
          className={`
            w-full py-3 rounded-lg font-semibold transition
            ${
              mobile && mobile.length === 10
                ? "bg-primary hover:bg-secondary text-white"
                : "bg-neutral text-dark/40 cursor-not-allowed"
            }
          `}
        >
          GET OTP
        </button>
      </div>
    </div>
  );
};

export default VerifyMobileModal;
