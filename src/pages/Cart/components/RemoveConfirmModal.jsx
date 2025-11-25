import { X } from "lucide-react";

const RemoveConfirmModal = ({ open, item, onClose, onConfirm }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-white w-[90%] max-w-lg rounded-xl shadow-xl p-6 relative animate-fadeIn">
        {/* Close button */}
        <button
          className="absolute right-4 top-4 text-gray-500 hover:text-black"
          onClick={onClose}
        >
          <X size={22} />
        </button>

        <h2 className="text-xl font-semibold mb-2">Clear From Bag</h2>
        <p className="text-gray-600 mb-4">
          Are you sure you want to remove this item from bag?
        </p>

        {/* Item preview */}
        <div className="flex gap-4 border p-3 rounded-lg mb-5">
          <div className="w-20 h-24 rounded-md overflow-hidden bg-gray-100">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex-1 flex flex-col">
            <h3 className="font-semibold text-[16px]">{item.brand}</h3>
            <p className="text-gray-600 text-sm">{item.title}</p>

            <div className="flex items-center gap-1 mt-1">
              <span className="text-green-600 text-lg">✔</span>
              <span className="text-gray-700 text-sm">
                Delivery by{" "}
                <span className="font-semibold">{item.deliveryDate}</span>
              </span>
            </div>
          </div>

          {/* Price */}
          <div className="text-right">
            <p className="font-semibold text-lg">
              ₹{item.price.toLocaleString("en-IN")}
            </p>
            <p className="line-through text-gray-400 text-sm">
              ₹{item.originalPrice.toLocaleString("en-IN")}
            </p>
            <p className="text-green-600 text-sm">
              You saved ₹{item.saved.toLocaleString("en-IN")}
            </p>
          </div>
        </div>

        {/* Remove Button */}
        <button
          onClick={onConfirm}
          className="w-full py-3 bg-primary text-white rounded-xl font-semibold hover:bg-secondary transition"
        >
          REMOVE & PROCEED
        </button>
      </div>
    </div>
  );
};

export default RemoveConfirmModal;
