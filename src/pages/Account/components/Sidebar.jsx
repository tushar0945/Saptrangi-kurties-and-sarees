import { NavLink, Link } from "react-router-dom";

import {
  LayoutGrid,
  Package,
  CreditCard,
  Wallet,
  MapPin,
  User,
  LogOut,
} from "lucide-react";

const Sidebar = () => {
  const menu = [
    { label: "Overview", path: "/account", icon: LayoutGrid },
    { label: "Orders", path: "/account/orders", icon: Package },
    { label: "Payments", path: "/account/payments", icon: CreditCard },
    { label: "Addresses", path: "/account/addresses", icon: MapPin },
    { label: "Profile", path: "/account/profile", icon: User },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-[#E5E5E5] p-6 w-full">
      <div className="flex flex-col gap-4">
        {menu.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === "/account"}
            className={({ isActive }) =>
              `
              relative flex items-center gap-3 py-2 text-[16px] font-medium
              ${
                isActive ? "text-[#FF1481]" : "text-[#444] hover:text-[#FF1481]"
              }
              `
            }
          >
            {({ isActive }) => (
              <>
                <item.icon
                  size={20}
                  className={isActive ? "text-[#FF1481]" : "text-[#444]"}
                />

                <span>{item.label}</span>
              </>
            )}
          </NavLink>
        ))}

        <Link
          to="/logout"
          className="flex items-center gap-3 text-[16px] font-semibold text-[#E53935] hover:text-[#C62828] mt-3"
        >
          <LogOut size={20} />
          Logout
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
