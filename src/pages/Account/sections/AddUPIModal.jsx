import { X } from "lucide-react";

const AddUPIModal = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white w-[400px] rounded-xl shadow-lg p-6 relative">
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X size={22} />
        </button>

        {/* TITLE */}
        <h2 className="text-center text-[20px] font-semibold mb-6">
          Add UPI ID
        </h2>

        {/* INPUT FIELD */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Enter UPI Id"
            className="w-full border-b border-gray-300 pb-2 outline-none text-[15px]"
          />
        </div>

        {/* HINT TEXT */}
        <p className="text-[13px] text-gray-600 mb-6 leading-tight">
          UPI ID is in the format of yourname@bankname or yourmobile@bankname
        </p>

        {/* VERIFY BUTTON (disabled style) */}
        <button className="w-full bg-[#e8eaf0] text-gray-500 font-semibold py-3 rounded-lg cursor-not-allowed">
          VERIFY
        </button>
      </div>
    </div>
  );
};

export default AddUPIModal;
