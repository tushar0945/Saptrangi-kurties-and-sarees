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
      <div className="bg-white rounded-xl w-[480px] p-6 relative shadow-lg">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500"
        >
          <X size={20} />
        </button>

        <h3 className="text-xl font-semibold mb-4">Verify Your OTP</h3>
        <div className="border-b border-gray-200 mb-4" />

        <p className="text-sm text-gray-700 mb-2">Sent To</p>
        <input
          className="w-full border border-gray-200 rounded-md px-3 py-2 mb-4"
          value={mobile}
          readOnly
        />

        <div className="flex gap-3 mb-4">
          {Array.from({ length: OTP_INPUTS }).map((_, i) => (
            <input
              key={i}
              ref={(el) => (inputsRef.current[i] = el)}
              onChange={(e) => handleChange(e, i)}
              maxLength={1}
              className="w-12 h-12 border border-gray-300 rounded-md text-center text-lg"
              inputMode="numeric"
            />
          ))}
        </div>

        <button onClick={onResend} className="text-sm text-[#2874f0] mb-4">
          RESEND OTP
        </button>

        <button
          onClick={collectOtp}
          className="w-full bg-yellow-400 hover:bg-yellow-500 py-3 rounded-lg font-semibold"
        >
          SUBMIT OTP
        </button>
      </div>
    </div>
  );
};

export default VerifyMobileOTPModal;
