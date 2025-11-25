import React, { useState } from "react";
import { X } from "lucide-react";

const QtyModal = ({ open, currentQty, onClose, onUpdate }) => {
  if (!open) return null;

  const qtyList = Array.from({ length: 10 }, (_, i) => i + 1);
  const [selected, setSelected] = useState(currentQty);

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-white w-[90%] max-w-md rounded-xl p-6 relative shadow-xl">
        {/* Close Button */}
        <button
          className="absolute right-4 top-4 text-gray-500 hover:text-black transition"
          onClick={onClose}
        >
          <X size={22} />
        </button>

        <h2 className="text-lg font-semibold mb-4">Select Quantity</h2>

        {/* Quantity Buttons */}
        <div className="grid grid-cols-5 gap-3 mb-6">
          {qtyList.map((q) => (
            <button
              key={q}
              onClick={() => setSelected(q)}
              className={`py-2 rounded-lg border text-sm font-medium transition
                ${
                  selected === q
                    ? "bg-primary text-white border-primary"
                    : "border-gray-300 hover:bg-neutral"
                }
              `}
            >
              {q}
            </button>
          ))}
        </div>

        {/* Update Button */}
        <button
          disabled={!selected}
          onClick={() => {
            onUpdate(selected);
            onClose();
          }}
          className={`w-full py-3 rounded-xl text-lg font-semibold transition
            ${
              selected
                ? "bg-primary text-white hover:bg-secondary"
                : "bg-neutral cursor-not-allowed"
            }
          `}
        >
          UPDATE
        </button>
      </div>
    </div>
  );
};

export default QtyModal;
