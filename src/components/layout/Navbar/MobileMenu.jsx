// import { ArrowRight, X } from "lucide-react";

// const menuItems = [
//   "Sarees",
//   "Suits",
//   "Lehengas",
//   "Indo Western",
//   "Mens Wear",
//   "Kids Wear",
//   "Jewellery",
//   "Investors",
// ];

// const MobileMenu = ({ open, onClose }) => {
//   return (
//     <div
//       className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-all duration-300 ${
//         open ? "visible opacity-100" : "invisible opacity-0"
//       }`}
//       onClick={onClose}
//     >
//       <div
//         className={`absolute top-0 left-0 h-full w-3/4 max-w-sm bg-white shadow-lg transition-transform duration-300 ${
//           open ? "translate-x-0" : "-translate-x-full"
//         }`}
//         onClick={(e) => e.stopPropagation()}
//       >
//         {/* Header */}
//         <div className="flex items-center justify-between px-5 py-4 border-b">
//           <h2 className="text-lg font-semibold tracking-wide">Menu</h2>
//           <button
//             onClick={onClose}
//             className="text-gray-500 hover:text-primary"
//           >
//             <X size={22} />
//           </button>
//         </div>

//         {/* Menu Items */}
//         <ul className="divide-y">
//           {menuItems.map((item) => (
//             <li
//               key={item}
//               className="flex items-center justify-between px-6 py-4 hover:bg-gray-100 cursor-pointer text-gray-700"
//             >
//               <span className="text-sm font-medium">{item}</span>
//               <ArrowRight size={18} className="text-gray-500" />
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default MobileMenu;

// import { useState } from "react";
// import { ArrowRight, ChevronDown, ChevronUp, X } from "lucide-react";

// const menuItems = [
//   { title: "HOME" },
//   { title: "WOMEN", dropdown: ["Kurtis", "Sarees", "Tops", "Lehengas"] },
//   { title: "MEN", dropdown: ["Shirts", "Jeans", "T-Shirts", "Kurtas"] },
//   { title: "KIDS", dropdown: ["Girls", "Boys", "Infants"] },
//   { title: "OFFERS" },
//   { title: "VMART" },
// ];

// const MobileMenu = ({ open, onClose }) => {
//   const [activeMenu, setActiveMenu] = useState(null);

//   const toggleDropdown = (title) => {
//     setActiveMenu(activeMenu === title ? null : title);
//   };

//   return (
//     <div
//       className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-all duration-300 ${
//         open ? "visible opacity-100" : "invisible opacity-0"
//       }`}
//       onClick={onClose}
//     >
//       <div
//         className={`absolute top-0 left-0 h-full w-3/4 max-w-sm bg-white shadow-lg transition-transform duration-300 ${
//           open ? "translate-x-0" : "-translate-x-full"
//         }`}
//         onClick={(e) => e.stopPropagation()}
//       >
//         {/* Header */}
//         <div className="flex items-center justify-between px-5 py-4 border-b">
//           <h2 className="text-lg font-semibold tracking-wide">Menu</h2>
//           <button
//             onClick={onClose}
//             className="text-gray-500 hover:text-primary transition"
//           >
//             <X size={22} />
//           </button>
//         </div>

//         {/* Menu Items */}
//         <ul className="divide-y">
//           {menuItems.map((item) => (
//             <li key={item.title || item}>
//               {/* Top-Level Item */}
//               <div
//                 className="flex items-center justify-between px-6 py-4 hover:bg-gray-100 cursor-pointer text-gray-700 transition"
//                 onClick={() =>
//                   item.dropdown ? toggleDropdown(item.title) : onClose()
//                 }
//               >
//                 <span className="text-sm font-medium">
//                   {item.title || item}
//                 </span>
//                 {item.dropdown ? (
//                   activeMenu === item.title ? (
//                     <ChevronUp size={18} className="text-gray-500" />
//                   ) : (
//                     <ChevronDown size={18} className="text-gray-500" />
//                   )
//                 ) : (
//                   <ArrowRight size={18} className="text-gray-400" />
//                 )}
//               </div>

//               {/* Dropdown (if any) */}
//               {item.dropdown && (
//                 <div
//                   className={`transition-all overflow-hidden bg-gray-50 ${
//                     activeMenu === item.title
//                       ? "max-h-40 opacity-100"
//                       : "max-h-0 opacity-0"
//                   }`}
//                 >
//                   <ul className="flex flex-col text-sm text-gray-700">
//                     {item.dropdown.map((subItem, i) => (
//                       <li
//                         key={i}
//                         onClick={onClose}
//                         className="px-8 py-2 hover:bg-gray-100 hover:text-primary cursor-pointer"
//                       >
//                         {subItem}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               )}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default MobileMenu;

import { useState } from "react";
import { ArrowRight, ChevronDown, ChevronUp, X } from "lucide-react";

const menuItems = [
  { title: "HOME" },
  { title: "WOMEN", dropdown: ["Kurtis", "Sarees", "Tops", "Lehengas"] },
  { title: "MEN", dropdown: ["Shirts", "Jeans", "T-Shirts", "Kurtas"] },
  { title: "KIDS", dropdown: ["Girls", "Boys", "Infants"] },
  { title: "OFFERS" },
  { title: "VMART" },
];

const MobileMenu = ({ open, onClose }) => {
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleDropdown = (title) => {
    setActiveMenu(activeMenu === title ? null : title);
  };

  return (
    <div
      className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-all duration-300 ${
        open ? "visible opacity-100" : "invisible opacity-0"
      }`}
      onClick={onClose}
    >
      <div
        className={`absolute top-0 left-0 h-full w-3/4 max-w-sm bg-white shadow-lg transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b bg-secondary text-white">
          <h2 className="text-lg font-semibold tracking-wide">Menu</h2>
          <button
            onClick={onClose}
            className="text-white hover:text-dark transition"
          >
            <X size={22} />
          </button>
        </div>

        {/* Menu Items */}
        <ul className="divide-y divide-neutral">
          {menuItems.map((item) => (
            <li key={item.title || item}>
              {/* Top-Level Item */}
              <div
                className={`flex items-center justify-between px-6 py-4 cursor-pointer transition-colors ${
                  activeMenu === item.title
                    ? "bg-secondary/20 text-primary"
                    : "text-dark hover:bg-neutral hover:text-primary"
                }`}
                onClick={() =>
                  item.dropdown ? toggleDropdown(item.title) : onClose()
                }
              >
                <span className="text-sm font-medium tracking-wide">
                  {item.title || item}
                </span>
                {item.dropdown ? (
                  activeMenu === item.title ? (
                    <ChevronUp size={18} className="text-primary" />
                  ) : (
                    <ChevronDown size={18} className="text-dark" />
                  )
                ) : (
                  <ArrowRight size={18} className="text-gray-400" />
                )}
              </div>

              {/* Dropdown (if any) */}
              {item.dropdown && (
                <div
                  className={`transition-all overflow-hidden bg-neutral/50 ${
                    activeMenu === item.title
                      ? "max-h-40 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <ul className="flex flex-col text-sm text-dark">
                    {item.dropdown.map((subItem, i) => (
                      <li
                        key={i}
                        onClick={onClose}
                        className="px-8 py-2 hover:bg-secondary/20 hover:text-primary cursor-pointer transition"
                      >
                        {subItem}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Footer / Branding */}
        <div className="absolute bottom-0 left-0 w-full bg-primary text-white text-center py-3 text-sm font-medium tracking-wide">
          Saptrangi Kurti & Sarees © 2025
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
