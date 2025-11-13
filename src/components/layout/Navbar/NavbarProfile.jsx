// import { useState, useRef, useEffect } from "react";
// import {
//   User,
//   LogOut,
//   Heart,
//   Bell,
//   Gift,
//   Package,
//   Tag,
//   Zap,
//   Star,
// } from "lucide-react";

// const NavbarProfile = () => {
//   const [open, setOpen] = useState(false);
//   const profileRef = useRef(null);
//   const closeTimer = useRef(null);

//   const profileItems = [
//     { label: "My Profile", icon: <User size={16} /> },
//     { label: "SuperCoin Zone", icon: <Zap size={16} /> },
//     { label: "Flipkart Plus Zone", icon: <Star size={16} /> },
//     { label: "Orders", icon: <Package size={16} /> },
//     { label: "Wishlist (32)", icon: <Heart size={16} /> },
//     { label: "Coupons", icon: <Tag size={16} /> },
//     { label: "Gift Cards", icon: <Gift size={16} /> },
//     { label: "Notifications", icon: <Bell size={16} /> },
//     { label: "Logout", icon: <LogOut size={16} />, danger: true },
//   ];

//   // 🧠 Close when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (profileRef.current && !profileRef.current.contains(e.target)) {
//         setOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   // 🕓 Hover close delay to prevent flicker
//   const scheduleClose = () => {
//     clearTimeout(closeTimer.current);
//     closeTimer.current = setTimeout(() => setOpen(false), 150);
//   };

//   const cancelClose = () => {
//     clearTimeout(closeTimer.current);
//   };

//   const toggleMenu = () => setOpen((prev) => !prev);

//   return (
//     <div
//       ref={profileRef}
//       className="relative"
//       onMouseEnter={() => setOpen(true)}
//       onMouseLeave={scheduleClose}
//     >
//       {/* Profile Button */}
//       <button
//         onClick={toggleMenu}
//         className="flex items-center gap-1 cursor-pointer border px-3 py-1 rounded-md hover:border-gray-400 transition-colors"
//       >
//         <User size={16} />
//         <span className="text-sm font-medium">Tushar</span>
//       </button>

//       {/* Dropdown */}
//       <div
//         onMouseEnter={cancelClose}
//         onMouseLeave={scheduleClose}
//         className={`absolute right-0 top-full mt-2 w-56 bg-white border border-gray-200 shadow-md rounded-md z-30 transition-all duration-150 transform origin-top-right
//           ${
//             open
//               ? "opacity-100 visible translate-y-0"
//               : "opacity-0 invisible -translate-y-1"
//           }`}
//       >
//         <ul className="text-sm text-gray-700 py-2">
//           {profileItems.map((item, index) => (
//             <li
//               key={index}
//               className={`flex items-center gap-3 px-4 py-2 hover:bg-gray-100 transition ${
//                 item.danger ? "text-red-600 font-medium" : ""
//               }`}
//             >
//               {item.icon}
//               {item.label}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default NavbarProfile;

// import { useState, useRef, useEffect } from "react";
// import {
//   User,
//   LogOut,
//   Heart,
//   Bell,
//   Gift,
//   Package,
//   Tag,
//   Zap,
//   Star,
// } from "lucide-react";

// const NavbarProfile = ({ onClick }) => {
//   const [open, setOpen] = useState(false);
//   const profileRef = useRef(null);
//   const closeTimer = useRef(null);

//   const profileItems = [
//     { label: "My Profile", icon: <User size={16} /> },
//     { label: "SuperCoin Zone", icon: <Zap size={16} /> },
//     { label: "Flipkart Plus Zone", icon: <Star size={16} /> },
//     { label: "Orders", icon: <Package size={16} /> },
//     { label: "Wishlist (32)", icon: <Heart size={16} /> },
//     { label: "Coupons", icon: <Tag size={16} /> },
//     { label: "Gift Cards", icon: <Gift size={16} /> },
//     { label: "Notifications", icon: <Bell size={16} /> },
//     { label: "Logout", icon: <LogOut size={16} />, danger: true },
//   ];

//   // 🧠 Close when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (profileRef.current && !profileRef.current.contains(e.target)) {
//         setOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   // 🕓 Hover close delay to prevent flicker
//   const scheduleClose = () => {
//     clearTimeout(closeTimer.current);
//     closeTimer.current = setTimeout(() => setOpen(false), 150);
//   };
//   const cancelClose = () => clearTimeout(closeTimer.current);
//   const toggleMenu = () => setOpen((prev) => !prev);

//   return (
//     <div ref={profileRef} className="relative">
//       {/* 👤 Desktop Version (with name) */}
//       <div
//         className="hidden md:flex items-center gap-1 cursor-pointer border px-3 py-1 rounded-md hover:border-gray-400 transition-colors"
//         onMouseEnter={() => setOpen(true)}
//         onMouseLeave={scheduleClose}
//         onClick={toggleMenu}
//       >
//         <User size={16} />
//         <span className="text-sm font-medium">Tushar</span>
//       </div>

//       {/* 👤 Mobile Version (icon only) */}
//       <button
//         onClick={onClick}
//         className="block md:hidden p-2 rounded-md hover:bg-gray-100 transition"
//       >
//         <User size={22} className="text-gray-700" />
//       </button>

//       {/* Dropdown (desktop only) */}
//       <div
//         onMouseEnter={cancelClose}
//         onMouseLeave={scheduleClose}
//         className={`absolute right-0 top-full mt-2 w-56 bg-white border border-gray-200 shadow-md rounded-md z-30 transition-all duration-150 transform origin-top-right
//           ${
//             open
//               ? "opacity-100 visible translate-y-0"
//               : "opacity-0 invisible -translate-y-1"
//           }`}
//       >
//         <ul className="text-sm text-gray-700 py-2">
//           {profileItems.map((item, index) => (
//             <li
//               key={index}
//               className={`flex items-center gap-3 px-4 py-2 hover:bg-gray-100 transition ${
//                 item.danger ? "text-red-600 font-medium" : ""
//               }`}
//             >
//               {item.icon}
//               {item.label}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default NavbarProfile;

// import { useState, useRef, useEffect } from "react";
// import {
//   User,
//   LogOut,
//   Heart,
//   Bell,
//   Gift,
//   Package,
//   Tag,
//   Zap,
//   Star,
// } from "lucide-react";

// const NavbarProfile = ({ onClick }) => {
//   const [open, setOpen] = useState(false);
//   const profileRef = useRef(null);
//   const closeTimer = useRef(null);

//   const profileItems = [
//     { label: "My Profile", icon: <User size={16} /> },
//     { label: "SuperCoin Zone", icon: <Zap size={16} /> },
//     { label: "Flipkart Plus Zone", icon: <Star size={16} /> },
//     { label: "Orders", icon: <Package size={16} /> },
//     { label: "Wishlist (32)", icon: <Heart size={16} /> },
//     { label: "Coupons", icon: <Tag size={16} /> },
//     { label: "Gift Cards", icon: <Gift size={16} /> },
//     { label: "Notifications", icon: <Bell size={16} /> },
//     { label: "Logout", icon: <LogOut size={16} />, danger: true },
//   ];

//   // 🧠 Close when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (profileRef.current && !profileRef.current.contains(e.target)) {
//         setOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   // 🕓 Hover close delay to prevent flicker
//   const scheduleClose = () => {
//     clearTimeout(closeTimer.current);
//     closeTimer.current = setTimeout(() => setOpen(false), 150);
//   };
//   const cancelClose = () => clearTimeout(closeTimer.current);
//   const toggleMenu = () => setOpen((prev) => !prev);

//   return (
//     <div ref={profileRef} className="relative">
//       {/* 👤 Desktop Version (with name) */}
//       <div
//         className="hidden md:flex items-center gap-1 cursor-pointer border border-secondary px-3 py-1 rounded-md bg-white hover:bg-secondary hover:text-white hover:border-secondary transition-all"
//         onMouseEnter={() => setOpen(true)}
//         onMouseLeave={scheduleClose}
//         onClick={toggleMenu}
//       >
//         <User size={16} className="text-primary" />
//         <span className="text-sm font-medium">Tushar</span>
//       </div>

//       {/* 👤 Mobile Version (icon only) */}
//       <button
//         onClick={onClick}
//         className="block md:hidden p-2 rounded-md bg-secondary hover:bg-primary transition text-white"
//       >
//         <User size={22} />
//       </button>

//       {/* Dropdown (desktop only) */}
//       <div
//         onMouseEnter={cancelClose}
//         onMouseLeave={scheduleClose}
//         className={`absolute right-0 top-full mt-2 w-56 bg-white border border-neutral shadow-md rounded-md z-30 transition-all duration-200 transform origin-top-right
//           ${
//             open
//               ? "opacity-100 visible translate-y-0"
//               : "opacity-0 invisible -translate-y-1"
//           }`}
//       >
//         {/* Header */}
//         <div className="px-4 py-2 bg-secondary text-white text-sm font-semibold rounded-t-md">
//           Welcome, Tushar
//         </div>

//         {/* Dropdown Items */}
//         <ul className="text-sm text-dark py-2">
//           {profileItems.map((item, index) => (
//             <li
//               key={index}
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

//         {/* Footer (optional) */}
//         <div className="border-t border-neutral px-4 py-2 text-xs text-gray-500">
//           © 2025 Saptrangi Kurti & Sarees
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NavbarProfile;

import { useState, useRef, useEffect } from "react";
import {
  User,
  LogOut,
  Heart,
  Bell,
  Gift,
  Package,
  Tag,
  Zap,
  Star,
} from "lucide-react";

const NavbarProfile = ({ onClick }) => {
  const [open, setOpen] = useState(false);
  const profileRef = useRef(null);
  const closeTimer = useRef(null);

  const profileItems = [
    { label: "My Profile", icon: <User size={16} /> },
    { label: "Orders", icon: <Package size={16} /> },
    { label: "Wishlist (32)", icon: <Heart size={16} /> },
    { label: "Coupons", icon: <Tag size={16} /> },
    { label: "Gift Cards", icon: <Gift size={16} /> },
    { label: "Notifications", icon: <Bell size={16} /> },
    { label: "Logout", icon: <LogOut size={16} />, danger: true },
  ];

  // 🧠 Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // 🕓 Hover close delay to prevent flicker
  const scheduleClose = () => {
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpen(false), 150);
  };
  const cancelClose = () => clearTimeout(closeTimer.current);
  const toggleMenu = () => setOpen((prev) => !prev);

  return (
    <div ref={profileRef} className="relative">
      {/* 👤 Desktop Version (with name) */}
      <div
        className="hidden md:flex items-center gap-1 cursor-pointer border border-secondary px-3 py-1 rounded-md bg-white hover:bg-secondary hover:text-white hover:border-secondary transition-all"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={scheduleClose}
        onClick={toggleMenu}
      >
        <User size={16} className="text-primary" />
        <span className="text-sm font-semibold font-sans tracking-wide ">
          Tushar
        </span>
      </div>

      {/* 👤 Mobile Version (icon only) */}
      <button
        onClick={onClick}
        className="block md:hidden p-2 rounded-md bg-secondary hover:bg-primary transition text-white"
      >
        <User size={22} />
      </button>

      {/* Dropdown (desktop only) */}
      <div
        onMouseEnter={cancelClose}
        onMouseLeave={scheduleClose}
        className={`absolute right-0 top-full mt-2 w-56 bg-white border border-neutral shadow-md rounded-md z-30 transition-all duration-200 transform origin-top-right
          ${
            open
              ? "opacity-100 visible translate-y-0"
              : "opacity-0 invisible -translate-y-1"
          }`}
      >
        {/* Header */}
        <div className="px-4 py-2 bg-secondary text-white text-sm font-semibold font-sans tracking-wide uppercase rounded-t-md">
          Welcome, Tushar
        </div>

        {/* Dropdown Items */}
        <ul className="text-[13px] font-semibold font-sans text-dark tracking-wide uppercase py-2">
          {profileItems.map((item, index) => (
            <li
              key={index}
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
        <div className="border-t border-neutral px-4 py-2 text-[11px] font-sans tracking-wide text-gray-500 uppercase">
          © 2025 Saptrangi Kurti & Sarees
        </div>
      </div>
    </div>
  );
};

export default NavbarProfile;
