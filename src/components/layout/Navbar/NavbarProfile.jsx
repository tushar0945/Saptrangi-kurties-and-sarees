// import { useState, useRef, useEffect } from "react";
// import {
//   User,
//   LogOut,
//   Heart,
//   Bell,
//   Gift,
//   Package,
//   Tag,
//   CreditCard,
// } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// const NavbarProfile = ({ onClick }) => {
//   const [open, setOpen] = useState(false);
//   const profileRef = useRef(null);
//   const closeTimer = useRef(null);
//   const navigate = useNavigate();

//   const profileItems = [
//     {
//       label: "My Account",
//       icon: <User size={16} />,
//       path: "/myaccount",
//     },
//     {
//       label: "Orders",
//       icon: <Package size={16} />,
//       path: "/myaccount/orders",
//     },
//     {
//       label: "My Payments",
//       icon: <CreditCard size={16} />,
//       path: "/myaccount/payments",
//     },
//     { label: "Coupons", icon: <Tag size={16} />, path: "/coupons" },
//     { label: "Gift Cards", icon: <Gift size={16} />, path: "/gift-cards" },
//     {
//       label: "Logout",
//       icon: <LogOut size={16} />,
//       danger: true,
//       logout: true,
//       path: "/logout",
//     },
//   ];

//   // Close when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (profileRef.current && !profileRef.current.contains(e.target)) {
//         setOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   // Hover close delay
//   const scheduleClose = () => {
//     clearTimeout(closeTimer.current);
//     closeTimer.current = setTimeout(() => setOpen(false), 150);
//   };
//   const cancelClose = () => clearTimeout(closeTimer.current);
//   const toggleMenu = () => setOpen((prev) => !prev);

//   return (
//     <div ref={profileRef} className="relative">
//       {/* Desktop */}
//       <div
//         className="hidden md:flex items-center gap-1 cursor-pointer border border-secondary px-3 py-1 rounded-md bg-white hover:bg-secondary hover:text-white hover:border-secondary transition-all"
//         onMouseEnter={() => setOpen(true)}
//         onMouseLeave={scheduleClose}
//         onClick={toggleMenu}
//       >
//         <User size={16} className="text-primary" />
//         <span className="text-sm font-semibold">Tushar</span>
//       </div>

//       {/* Mobile */}
//       <button
//         onClick={onClick}
//         className="block md:hidden p-2 rounded-md bg-secondary hover:bg-primary transition text-white"
//       >
//         <User size={22} />
//       </button>

//       {/* Dropdown */}
//       <div
//         onMouseEnter={cancelClose}
//         onMouseLeave={scheduleClose}
//         className={`absolute right-0 top-full mt-2 w-56 bg-white border shadow-md rounded-md z-30 transition-all duration-200 transform origin-top-right
//           ${
//             open
//               ? "opacity-100 visible translate-y-0"
//               : "opacity-0 invisible -translate-y-1"
//           }`}
//       >
//         {/* Header */}
//         <div className="px-4 py-2 bg-secondary text-white text-sm font-semibold uppercase rounded-t-md">
//           Welcome, Tushar
//         </div>

//         {/* Menu Items */}
//         <ul className="text-[13px] font-semibold text-dark uppercase py-2">
//           {profileItems.map((item, index) => (
//             <li
//               key={index}
//               onClick={() => {
//                 navigate(item.path);
//                 setOpen(false);
//               }}
//               className={`flex items-center gap-3 px-4 py-2 cursor-pointer transition-colors
//                 ${
//                   item.danger
//                     ? "text-red-600 hover:bg-red-50"
//                     : "hover:bg-neutral hover:text-primary"
//                 }`}
//             >
//               {item.icon}
//               {item.label}
//             </li>
//           ))}
//         </ul>

//         {/* Footer */}
//         <div className="border-t px-4 py-2 text-[11px] text-gray-500 uppercase">
//           © 2025 Saptrangi Kurti & Sarees
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NavbarProfile;

import { useState, useRef, useEffect } from "react";
import { User, LogOut, Gift, Package, Tag, CreditCard } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";

const NavbarProfile = ({ onClick }) => {
  const [open, setOpen] = useState(false);
  const profileRef = useRef(null);
  const closeTimer = useRef(null);
  const navigate = useNavigate();
  const { user, token } = useAuth(); // <-- CHECK LOGIN STATUS

  const profileItems = [
    {
      label: "Account",
      icon: <User size={16} />,
      path: "/account",
    },
    {
      label: "Orders",
      icon: <Package size={16} />,
      path: "/account/orders",
    },
    {
      label: "Payments",
      icon: <CreditCard size={16} />,
      path: "/account/payments",
    },
    { label: "Coupons", icon: <Tag size={16} />, path: "/coupons" },
    { label: "Gift Cards", icon: <Gift size={16} />, path: "/gift-cards" },
    {
      label: "Logout",
      icon: <LogOut size={16} />,
      danger: true,
      logout: true,
      path: "/logout",
    },
  ];

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const scheduleClose = () => {
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpen(false), 150);
  };

  const cancelClose = () => clearTimeout(closeTimer.current);
  const toggleMenu = () => setOpen((prev) => !prev);

  return (
    <div ref={profileRef} className="relative">
      {/* ===========================
          IF USER NOT LOGGED IN
      =========================== */}
      {!token && (
        <div
          className="hidden md:flex items-center gap-1 cursor-pointer border border-secondary px-3 py-1 rounded-md bg-white hover:bg-secondary hover:text-white hover:border-secondary transition-all"
          onClick={() => navigate("/login")}
        >
          <User size={16} className="text-primary" />
        </div>
      )}

      {/* ===========================
          IF USER LOGGED IN
      =========================== */}
      {token && (
        <div
          className="hidden md:flex items-center gap-1 cursor-pointer border border-secondary px-3 py-1 rounded-md bg-white hover:bg-secondary hover:text-white hover:border-secondary transition-all"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={scheduleClose}
          onClick={toggleMenu}
        >
          <User size={16} className="text-primary" />
          <span className="text-sm font-semibold">{user?.firstName || ""}</span>
        </div>
      )}

      {/* Mobile */}
      <button
        onClick={() => navigate(token ? "/account" : "/login")}
        className="block md:hidden p-2 rounded-md bg-secondary hover:bg-primary transition text-white"
      >
        <User size={22} />
      </button>

      {/* Dropdown WHEN LOGGED IN */}
      {token && (
        <div
          onMouseEnter={cancelClose}
          onMouseLeave={scheduleClose}
          className={`absolute right-0 top-full mt-2 w-56 bg-white border shadow-md rounded-md z-30 transition-all duration-200 transform origin-top-right
          ${
            open
              ? "opacity-100 visible translate-y-0"
              : "opacity-0 invisible -translate-y-1"
          }`}
        >
          <div className="px-4 py-2 bg-secondary text-white text-sm font-semibold uppercase rounded-t-md">
            {user?.firstName ? `Welcome, ${user.firstName}` : "WELCOME"}
          </div>

          {/* Menu Items */}
          <ul className="text-[13px] font-semibold text-dark uppercase py-2">
            {profileItems.map((item, index) => (
              <li
                key={index}
                onClick={() => {
                  navigate(item.path);
                  setOpen(false);
                }}
                className={`flex items-center gap-3 px-4 py-2 cursor-pointer transition-colors
                ${
                  item.danger
                    ? "text-red-600 hover:bg-red-50"
                    : "hover:bg-neutral hover:text-primary"
                }`}
              >
                {item.icon}
                {item.label}
              </li>
            ))}
          </ul>

          {/* Footer */}
          <div className="border-t px-4 py-2 text-[11px] text-gray-500 uppercase">
            © 2025 Saptrangi Kurti & Sarees
          </div>
        </div>
      )}
    </div>
  );
};

export default NavbarProfile;
