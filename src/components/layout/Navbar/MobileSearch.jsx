import { Search, X } from "lucide-react";

const MobileSearch = ({ open, onClose }) => {
  return (
    <div
      className={`fixed inset-0 bg-white z-50 flex flex-col transition-transform duration-300 ${
        open ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b shadow-sm">
        <h2 className="text-lg font-semibold">Search</h2>
        <button onClick={onClose} className="text-gray-600 hover:text-primary">
          <X size={22} />
        </button>
      </div>

      {/* Search Bar */}
      <div className="flex items-center gap-3 px-5 py-4">
        <Search size={20} className="text-gray-600" />
        <input
          type="text"
          placeholder="Search products, categories..."
          className="w-full border-none outline-none text-base text-gray-800"
          autoFocus
        />
      </div>
    </div>
  );
};

export default MobileSearch;
