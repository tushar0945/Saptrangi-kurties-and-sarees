import {
  X,
  User,
  LogOut,
  Heart,
  Bell,
  Gift,
  Package,
  Tag,
  CreditCard,
} from "lucide-react";

import { Link } from "react-router-dom";

const profileItems = [
  { label: "Profile", icon: <User size={16} />, link: "/account" },
  { label: "Orders", icon: <Package size={16} />, link: "/account/orders" },
  {
    label: "Payments",
    icon: <CreditCard size={16} />,
    link: "account/payments",
  },
  { label: "Coupons", icon: <Tag size={16} />, link: "/coupons" },
  { label: "Gift Cards", icon: <Gift size={16} />, link: "/gift-cards" },
  // { label: "Notifications", icon: <Bell size={16} />, link: "/notifications" },
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
          {profileItems.map((item, index) => {
            // All other menu items — clickable links
            return (
              <Link
                key={index}
                to={item.link}
                onClick={onClose}
                className="flex items-center gap-3 py-3 border-b text-gray-700 hover:text-primary transition"
              >
                {item.icon}
                {item.label}
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ProfileOverlay;
