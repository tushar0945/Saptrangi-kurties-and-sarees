// components/SuccessModal.jsx
import React from "react";
import { CheckCircle, X } from "lucide-react";

const SuccessModal = ({ open, message, onClose }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-[380px] p-6 rounded-xl shadow-xl border border-neutral relative">
        {/* close */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-dark/60 hover:text-dark"
        >
          <X size={20} />
        </button>

        <div className="flex flex-col items-center text-center">
          <CheckCircle size={60} className="text-primary mb-4" />

          <h2 className="text-xl font-semibold text-dark mb-2">
            {message || "Updated Successfully"}
          </h2>

          <button
            onClick={onClose}
            className="bg-primary hover:bg-secondary text-white font-semibold px-8 py-3 rounded-lg mt-4 transition"
          >
            DONE
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
