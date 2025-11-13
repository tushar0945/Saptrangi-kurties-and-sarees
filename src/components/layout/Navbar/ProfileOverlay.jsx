import { X, User, Heart, Package, LogOut } from "lucide-react";

const profileItems = [
  { label: "My Profile", icon: <User size={16} /> },
  { label: "Orders", icon: <Package size={16} /> },
  { label: "Wishlist (32)", icon: <Heart size={16} /> },
  { label: "Coupons", icon: <Tag size={16} /> },
  { label: "Gift Cards", icon: <Gift size={16} /> },
  { label: "Notifications", icon: <Bell size={16} /> },
  { label: "Logout", icon: <LogOut size={16} />, danger: true },
];

const ProfileOverlay = ({ open, onClose }) => {
  return (
    <div
      className={`fixed inset-0 bg-black/30 z-40 flex justify-center items-end transition-all duration-300 ${
        open ? "visible opacity-100" : "invisible opacity-0"
      }`}
      onClick={onClose}
    >
      <div
        className={`w-full bg-white rounded-t-2xl p-5 shadow-xl transform transition-transform duration-300 ${
          open ? "translate-y-0" : "translate-y-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center border-b pb-3">
          <h2 className="text-lg font-semibold">Your Account</h2>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-primary"
          >
            <X size={22} />
          </button>
        </div>

        {/* Profile Items */}
        <ul className="mt-4">
          {profileItems.map((item, index) => (
            <li
              key={index}
              className={`flex items-center gap-3 py-3 border-b cursor-pointer hover:text-primary transition ${
                item.danger ? "text-red-600 font-medium" : "text-gray-700"
              }`}
            >
              {item.icon}
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProfileOverlay;
