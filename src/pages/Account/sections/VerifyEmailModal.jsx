// components/VerifyEmailModal.jsx
import React from "react";
import { X } from "lucide-react";

const VerifyEmailModal = ({ open, email, onClose, onGetOtp }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl w-[420px] p-6 relative shadow-lg border border-neutral">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-dark/60 hover:text-dark"
        >
          <X size={20} />
        </button>

        <h3 className="text-xl font-semibold mb-4 text-dark">
          Verify Your Email
        </h3>

        <div className="border-b border-neutral mb-4" />

        <p className="text-sm text-dark/70 mb-2">
          OTP will be sent to your Email
        </p>

        <input
          className="w-full border border-neutral rounded-md px-3 py-2 mb-6 text-dark bg-white outline-none"
          value={email}
          readOnly
        />

        <button
          onClick={() => onGetOtp(email)}
          className="w-full bg-primary hover:bg-secondary py-3 rounded-lg font-semibold text-white transition"
        >
          GET OTP
        </button>
      </div>
    </div>
  );
};

export default VerifyEmailModal;
