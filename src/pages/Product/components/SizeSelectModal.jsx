import React from "react";

const SizeSelectModal = ({
  open,
  sizes,
  selectedSize,
  onSelectSize,
  onConfirm,
  onClose,
}) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-[90%] max-w-md shadow-xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Choose your perfect fit!</h2>
          <button onClick={onClose}>✖</button>
        </div>

        <h3 className="mb-3 text-gray-700 font-medium">Select Size</h3>

        <div className="grid grid-cols-4 gap-3 mb-5">
          {sizes.map((s) => (
            <button
              key={s}
              onClick={() => onSelectSize(s)}
              className={`py-2 border rounded-lg font-medium transition ${
                selectedSize === s
                  ? "bg-primary text-white border-primary"
                  : "border-gray-300 hover:bg-neutral-100"
              }`}
            >
              {s}
            </button>
          ))}
        </div>

        <button
          onClick={onConfirm}
          className="w-full py-3 bg-primary text-white rounded-xl font-semibold hover:bg-secondary transition"
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default SizeSelectModal;
