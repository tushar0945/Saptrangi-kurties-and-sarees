// // // // // import { NavLink } from "react-router-dom";

// // // // // const Sidebar = () => {
// // // // //   const menu = [
// // // // //     { label: "Overview", path: "/account" },
// // // // //     { label: "My Orders", path: "/account/orders" },
// // // // //     { label: "My Payments", path: "/account/payments" },
// // // // //     { label: "My Wallet", path: "/account/wallet" },
// // // // //     { label: "My Addresses", path: "/account/addresses" },
// // // // //     { label: "My Profile", path: "/account/profile" },
// // // // //   ];

// // // // //   return (
// // // // //     <div className="w-64 bg-white shadow-md p-6 hidden md:block">
// // // // //       <h2 className="font-semibold text-lg mb-4">Account</h2>

// // // // //       {menu.map((item, i) => (
// // // // //         <NavLink
// // // // //           key={i}
// // // // //           to={item.path}
// // // // //           className={({ isActive }) =>
// // // // //             `block py-2 px-3 rounded-lg mb-2 text-sm font-medium ${
// // // // //               isActive
// // // // //                 ? "bg-yellow-400 text-black"
// // // // //                 : "text-gray-700 hover:bg-gray-100"
// // // // //             }`
// // // // //           }
// // // // //         >
// // // // //           {item.label}
// // // // //         </NavLink>
// // // // //       ))}

// // // // //       <button className="mt-6 text-red-500 font-semibold">Logout</button>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default Sidebar;

// // // // import { NavLink } from "react-router-dom";
// // // // import {
// // // //   User,
// // // //   MapPin,
// // // //   CreditCard,
// // // //   Wallet,
// // // //   Package,
// // // //   LogOut,
// // // // } from "lucide-react";

// // // // const Sidebar = () => {
// // // //   const menu = [
// // // //     { label: "Overview", path: "/account", icon: <User size={18} /> },
// // // //     {
// // // //       label: "My Orders",
// // // //       path: "/account/orders",
// // // //       icon: <Package size={18} />,
// // // //     },
// // // //     {
// // // //       label: "My Payments",
// // // //       path: "/account/payments",
// // // //       icon: <CreditCard size={18} />,
// // // //     },
// // // //     { label: "My Wallet", path: "/account/wallet", icon: <Wallet size={18} /> },
// // // //     {
// // // //       label: "My Addresses",
// // // //       path: "/account/addresses",
// // // //       icon: <MapPin size={18} />,
// // // //     },
// // // //     { label: "My Profile", path: "/account/profile", icon: <User size={18} /> },
// // // //   ];

// // // //   return (
// // // //     <div className="h-full p-6">
// // // //       <div className="flex flex-col gap-3">
// // // //         {menu.map((item, i) => (
// // // //           <NavLink
// // // //             key={i}
// // // //             to={item.path}
// // // //             className={({ isActive }) =>
// // // //               `flex items-center gap-3 text-[15px] py-2 px-2 rounded-md border border-transparent
// // // //               ${isActive ? "bg-[#FDD835] font-semibold" : "hover:bg-gray-100"}`
// // // //             }
// // // //           >
// // // //             {item.icon}
// // // //             <span>{item.label}</span>
// // // //           </NavLink>
// // // //         ))}

// // // //         <button className="flex items-center gap-3 mt-6 text-red-500 hover:bg-red-50 py-2 px-2 rounded-md">
// // // //           <LogOut size={18} />
// // // //           Logout
// // // //         </button>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Sidebar;

// // // // import { NavLink } from "react-router-dom";
// // // // import {
// // // //   LayoutGrid,
// // // //   Package,
// // // //   CreditCard,
// // // //   Wallet,
// // // //   MapPin,
// // // //   User,
// // // //   LogOut,
// // // // } from "lucide-react";

// // // // const Sidebar = () => {
// // // //   const menu = [
// // // //     { label: "Overview", path: "/account", icon: <LayoutGrid size={20} /> },
// // // //     {
// // // //       label: "My Orders",
// // // //       path: "/account/orders",
// // // //       icon: <Package size={20} />,
// // // //     },
// // // //     {
// // // //       label: "My Payments",
// // // //       path: "/account/payments",
// // // //       icon: <CreditCard size={20} />,
// // // //     },
// // // //     { label: "My Wallet", path: "/account/wallet", icon: <Wallet size={20} /> },
// // // //     {
// // // //       label: "My Addresses",
// // // //       path: "/account/addresses",
// // // //       icon: <MapPin size={20} />,
// // // //     },
// // // //     { label: "My Profile", path: "/account/profile", icon: <User size={20} /> },
// // // //   ];

// // // //   return (
// // // //     <div className="bg-white rounded-xl shadow-sm border border-[#e5e5e5] p-6 w-full">
// // // //       {/* MENU LIST */}
// // // //       <div className="flex flex-col gap-4">
// // // //         {menu.map((item, i) => (
// // // //           <div key={i}>
// // // //             <NavLink
// // // //               to={item.path}
// // // //               className={({ isActive }) =>
// // // //                 `flex items-center gap-3 text-[16px] font-medium py-2
// // // //                 ${isActive ? "text-[#0086FF]" : "text-[#333] hover:text-black"}`
// // // //               }
// // // //             >
// // // //               {item.icon}
// // // //               {item.label}
// // // //             </NavLink>

// // // //             {/* LINE SEPARATOR (same as Bewakoof) */}
// // // //             <div className="w-full border-b border-[#e5e5e5] mt-2"></div>
// // // //           </div>
// // // //         ))}

// // // //         {/* LOGOUT */}
// // // //         <div className="pt-2">
// // // //           <button className="flex items-center gap-3 text-[16px] font-medium py-2 text-[#E53935] hover:text-[#C62828]">
// // // //             <LogOut size={20} />
// // // //             Logout
// // // //           </button>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Sidebar;

// // // import { NavLink } from "react-router-dom";
// // // import {
// // //   LayoutGrid,
// // //   Package,
// // //   CreditCard,
// // //   Wallet,
// // //   MapPin,
// // //   User,
// // //   LogOut,
// // // } from "lucide-react";

// // // const Sidebar = () => {
// // //   const menu = [
// // //     { label: "Overview", path: "/account", icon: <LayoutGrid size={20} /> },
// // //     {
// // //       label: "My Orders",
// // //       path: "/account/orders",
// // //       icon: <Package size={20} />,
// // //     },
// // //     {
// // //       label: "My Payments",
// // //       path: "/account/payments",
// // //       icon: <CreditCard size={20} />,
// // //     },
// // //     { label: "My Wallet", path: "/account/wallet", icon: <Wallet size={20} /> },
// // //     {
// // //       label: "My Addresses",
// // //       path: "/account/addresses",
// // //       icon: <MapPin size={20} />,
// // //     },
// // //     { label: "My Profile", path: "/account/profile", icon: <User size={20} /> },
// // //   ];

// // //   return (
// // //     <div className="bg-white rounded-xl shadow-sm border border-[#E5E5E5] p-6 w-full">
// // //       <div className="flex flex-col gap-4">
// // //         {menu.map((item, i) => (
// // //           <div key={i}>
// // //             <NavLink
// // //               to={item.path}
// // //               className={({ isActive }) =>
// // //                 `flex items-center gap-3 text-[16px] font-medium py-2 transition-all
// // //                 ${
// // //                   isActive
// // //                     ? "text-[#FF1481]" // Saptrangi Pink ACTIVE
// // //                     : "text-[#333] hover:text-[#FF1481]" // Hover Pink
// // //                 }`
// // //               }
// // //             >
// // //               {/* Icon with dynamic theme color */}
// // //               <span
// // //                 className={({ isActive }) =>
// // //                   isActive ? "text-[#FF1481]" : "text-[#333]"
// // //                 }
// // //               >
// // //                 {item.icon}
// // //               </span>

// // //               {item.label}
// // //             </NavLink>

// // //             {/* Separator line */}
// // //             <div className="w-full border-b border-[#E5E5E5] mt-2"></div>
// // //           </div>
// // //         ))}

// // //         {/* Logout */}
// // //         <button className="flex items-center gap-3 text-[16px] font-medium py-2 text-[#E53935] hover:text-[#C62828]">
// // //           <LogOut size={20} />
// // //           Logout
// // //         </button>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Sidebar;

// // import { NavLink } from "react-router-dom";
// // import {
// //   LayoutGrid,
// //   Package,
// //   CreditCard,
// //   Wallet,
// //   MapPin,
// //   User,
// //   LogOut,
// // } from "lucide-react";

// // const Sidebar = () => {
// //   const menu = [
// //     { label: "Overview", path: "/account", icon: LayoutGrid },
// //     { label: "My Orders", path: "/account/orders", icon: Package },
// //     { label: "My Payments", path: "/account/payments", icon: CreditCard },
// //     { label: "My Wallet", path: "/account/wallet", icon: Wallet },
// //     { label: "My Addresses", path: "/account/addresses", icon: MapPin },
// //     { label: "My Profile", path: "/account/profile", icon: User },
// //   ];

// //   return (
// //     <div className="bg-white rounded-xl shadow-sm border border-[#E5E5E5] p-6 w-full">
// //       <div className="flex flex-col gap-4">
// //         {menu.map((item, i) => (
// //           <div key={i}>
// //             <NavLink
// //               to={item.path}
// //               end={item.path === "/account"}
// //               className={({ isActive }) =>
// //                 `flex items-center gap-3 text-[16px] font-medium py-2 transition-all
// //                  ${
// //                    isActive
// //                      ? "text-[#FF1481]"
// //                      : "text-[#333] hover:text-[#FF1481]"
// //                  }`
// //               }
// //             >
// //               {({ isActive }) => (
// //                 <>
// //                   <item.icon
// //                     size={20}
// //                     className={isActive ? "text-[#FF1481]" : "text-[#333]"}
// //                   />
// //                   {item.label}
// //                 </>
// //               )}
// //             </NavLink>

// //             <div className="w-full border-b border-[#E5E5E5] mt-2"></div>
// //           </div>
// //         ))}

// //         <button className="flex items-center gap-3 text-[16px] font-medium py-2 text-[#E53935] hover:text-[#C62828]">
// //           <LogOut size={20} />
// //           Logout
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Sidebar;

// import { NavLink } from "react-router-dom";
// import {
//   LayoutGrid,
//   Package,
//   CreditCard,
//   Wallet,
//   MapPin,
//   User,
//   LogOut,
// } from "lucide-react";

// const Sidebar = () => {
//   const menu = [
//     { label: "Overview", path: "/myaccount", icon: LayoutGrid },
//     { label: "My Orders", path: "/myaccount/orders", icon: Package },
//     { label: "My Payments", path: "/myaccount/payments", icon: CreditCard },
//     { label: "My Wallet", path: "/myaccount/wallet", icon: Wallet },
//     { label: "My Addresses", path: "/myaccount/addresses", icon: MapPin },
//     { label: "My Profile", path: "/myaccount/profile", icon: User },
//   ];

//   return (
//     <div className="bg-white rounded-xl shadow-sm border border-[#E5E5E5] p-6 w-full">
//       <div className="flex flex-col gap-4">
//         {menu.map((item) => (
//           <NavLink
//             key={item.path}
//             to={item.path}
//             end={item.path === "/account"}
//             className={({ isActive }) =>
//               `
//               group flex items-center gap-3 py-2 text-[16px] font-medium
//               ${
//                 isActive ? "text-[#FF1481]" : "text-[#444] hover:text-[#FF1481]"
//               }
//               `
//             }
//           >
//             {({ isActive }) => (
//               <>
//                 <item.icon
//                   size={20}
//                   className={isActive ? "text-[#FF1481]" : "text-[#444]"}
//                 />

//                 <span>{item.label}</span>

//                 {/* ACTIVE LINE (Bewakoof style) */}
//                 {isActive && (
//                   <span className="absolute left-6 bottom-0 w-[85%] border-b-2 "></span>
//                 )}
//               </>
//             )}
//           </NavLink>
//         ))}

//         <button className="flex items-center gap-3 text-[16px] font-semibold text-[#E53935] hover:text-[#C62828] mt-3">
//           <LogOut size={20} />
//           Logout
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;

import { NavLink } from "react-router-dom";
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
    { label: "Overview", path: "/myaccount", icon: LayoutGrid },
    { label: "My Orders", path: "/myaccount/orders", icon: Package },
    { label: "My Payments", path: "/myaccount/payments", icon: CreditCard },
    { label: "My Addresses", path: "/myaccount/addresses", icon: MapPin },
    { label: "My Profile", path: "/myaccount/profile", icon: User },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-[#E5E5E5] p-6 w-full">
      <div className="flex flex-col gap-4">
        {menu.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === "/myaccount"}
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

        <button className="flex items-center gap-3 text-[16px] font-semibold text-[#E53935] hover:text-[#C62828] mt-3">
          <LogOut size={20} />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
