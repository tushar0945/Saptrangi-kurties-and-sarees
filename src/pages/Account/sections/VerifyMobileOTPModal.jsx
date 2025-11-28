// components/VerifyMobileOTPModal.jsx
import React, { useRef, useEffect } from "react";
import { X } from "lucide-react";

const OTP_INPUTS = 4;

const VerifyMobileOTPModal = ({
  open,
  mobile,
  onClose,
  onSubmitOtp,
  onResend,
}) => {
  const inputsRef = useRef([]);

  useEffect(() => {
    if (open) inputsRef.current[0]?.focus();
  }, [open]);

  if (!open) return null;

  const handleChange = (e, idx) => {
    const val = e.target.value.replace(/\D/g, "");
    e.target.value = val.slice(-1);
    if (idx < OTP_INPUTS - 1 && val) inputsRef.current[idx + 1]?.focus();
  };

  const collectOtp = () => {
    const code = inputsRef.current.map((el) => (el ? el.value : "")).join("");
    onSubmitOtp(code);
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl w-[480px] p-6 relative shadow-lg border border-neutral">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-dark/60 hover:text-dark"
        >
          <X size={20} />
        </button>

        {/* Heading */}
        <h3 className="text-xl font-semibold mb-4 text-dark">
          Verify Your OTP
        </h3>

        <div className="border-b border-neutral mb-4" />

        {/* Sent To */}
        <p className="text-sm text-dark/70 mb-2">Sent To</p>

        <input
          className="w-full border border-neutral rounded-md px-3 py-2 mb-4 text-dark bg-white outline-none"
          value={mobile}
          readOnly
        />

        {/* OTP Boxes */}
        <div className="flex gap-3 mb-4">
          {Array.from({ length: OTP_INPUTS }).map((_, i) => (
            <input
              key={i}
              ref={(el) => (inputsRef.current[i] = el)}
              onChange={(e) => handleChange(e, i)}
              maxLength={1}
              className="w-12 h-12 border border-neutral rounded-md text-center text-lg text-dark outline-none"
              inputMode="numeric"
            />
          ))}
        </div>

        {/* Resend Button */}
        <button
          onClick={onResend}
          className="text-sm text-primary hover:underline mb-4"
        >
          RESEND OTP
        </button>

        {/* Submit Button */}
        <button
          onClick={collectOtp}
          className="w-full bg-primary hover:bg-secondary py-3 rounded-lg font-semibold text-white transition"
        >
          SUBMIT OTP
        </button>
      </div>
    </div>
  );
};

export default VerifyMobileOTPModal;
