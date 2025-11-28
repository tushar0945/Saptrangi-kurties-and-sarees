// // // import { Outlet } from "react-router-dom";

// // // const AdminLayout = () => {
// // //   return (
// // //     <div className="min-h-screen flex bg-gray-100">
// // //       {/* SIDEBAR */}
// // //       <aside className="w-64 bg-white shadow-lg p-6 space-y-6 fixed h-full">
// // //         <h1 className="text-2xl font-bold text-teal-600">Admin Panel</h1>

// // //         <nav className="space-y-3 text-gray-700">
// // //           <a
// // //             href="/admin"
// // //             className="block py-2 px-3 rounded-lg hover:bg-gray-100"
// // //           >
// // //             Dashboard
// // //           </a>
// // //           <a
// // //             href="/admin/products"
// // //             className="block py-2 px-3 rounded-lg hover:bg-gray-100"
// // //           >
// // //             Products
// // //           </a>
// // //           <a
// // //             href="/admin/categories"
// // //             className="block py-2 px-3 rounded-lg hover:bg-gray-100"
// // //           >
// // //             Categories
// // //           </a>
// // //           <a
// // //             href="/admin/orders"
// // //             className="block py-2 px-3 rounded-lg hover:bg-gray-100"
// // //           >
// // //             Orders
// // //           </a>
// // //           <a
// // //             href="/admin/users"
// // //             className="block py-2 px-3 rounded-lg hover:bg-gray-100"
// // //           >
// // //             Users
// // //           </a>
// // //           <a
// // //             href="/admin/coupons"
// // //             className="block py-2 px-3 rounded-lg hover:bg-gray-100"
// // //           >
// // //             Coupons
// // //           </a>
// // //         </nav>
// // //       </aside>

// // //       {/* MAIN CONTENT */}
// // //       <main className="flex-1 ml-64 p-8">
// // //         <Outlet />
// // //       </main>
// // //     </div>
// // //   );
// // // };

// // // export default AdminLayout;

// // import { NavLink, Outlet } from "react-router-dom";
// // import {
// //   FiHome,
// //   FiBox,
// //   FiGrid,
// //   FiShoppingBag,
// //   FiUsers,
// //   FiTag,
// //   FiLogOut,
// // } from "react-icons/fi";

// // const menuItems = [
// //   { name: "Dashboard", icon: <FiHome size={18} />, path: "/admin" },
// //   { name: "Products", icon: <FiBox size={18} />, path: "/admin/products" },
// //   { name: "Categories", icon: <FiGrid size={18} />, path: "/admin/categories" },
// //   { name: "Orders", icon: <FiShoppingBag size={18} />, path: "/admin/orders" },
// //   { name: "Users", icon: <FiUsers size={18} />, path: "/admin/users" },
// //   { name: "Coupons", icon: <FiTag size={18} />, path: "/admin/coupons" },
// // ];

// // const AdminLayout = () => {
// //   return (
// //     <div className="min-h-screen flex bg-gray-100">
// //       {/* SIDEBAR */}
// //       <aside className="w-64 bg-white/90 backdrop-blur-md shadow-xl p-6 fixed h-full border-r border-gray-200">
// //         {/* Logo */}
// //         <div className="mb-8">
// //           <h1 className="text-3xl font-extrabold bg-gradient-to-r from-teal-600 to-blue-500 bg-clip-text text-transparent tracking-wide">
// //             Admin Panel
// //           </h1>
// //         </div>

// //         {/* Menu */}
// //         <nav className="space-y-2">
// //           {menuItems.map((item) => (
// //             <NavLink
// //               key={item.path}
// //               to={item.path}
// //               end
// //               className={({ isActive }) =>
// //                 `flex items-center gap-3 p-3 rounded-xl transition-all duration-200
// //                 ${
// //                   isActive
// //                     ? "bg-teal-600 text-white shadow-md scale-[1.02]"
// //                     : "text-gray-700 hover:bg-gray-100"
// //                 }`
// //               }
// //             >
// //               {item.icon}
// //               <span className="font-medium">{item.name}</span>
// //             </NavLink>
// //           ))}

// //           {/* Logout Button */}
// //           <button className="flex items-center gap-3 p-3 rounded-xl text-red-600 hover:bg-red-50 transition-all duration-200 w-full mt-4">
// //             <FiLogOut size={18} />
// //             <span className="font-medium">Logout</span>
// //           </button>
// //         </nav>
// //       </aside>

// //       {/* MAIN CONTENT */}
// //       <main className="flex-1 ml-64 p-8">
// //         <div className="bg-white rounded-2xl shadow-lg p-6 min-h-[85vh] border border-gray-200">
// //           <Outlet />
// //         </div>
// //       </main>
// //     </div>
// //   );
// // };

// // export default AdminLayout;

// import { NavLink, Outlet } from "react-router-dom";
// import {
//   FiHome,
//   FiBox,
//   FiGrid,
//   FiShoppingBag,
//   FiUsers,
//   FiTag,
//   FiLogOut,
// } from "react-icons/fi";

// const menuItems = [
//   { name: "Dashboard", icon: <FiHome size={20} />, path: "/admin" },
//   { name: "Products", icon: <FiBox size={20} />, path: "/admin/products" },
//   { name: "Categories", icon: <FiGrid size={20} />, path: "/admin/categories" },
//   { name: "Orders", icon: <FiShoppingBag size={20} />, path: "/admin/orders" },
//   { name: "Users", icon: <FiUsers size={20} />, path: "/admin/users" },
//   // { name: "Coupons", icon: <FiTag size={20} />, path: "/admin/coupons" },
// ];

// const AdminLayout = () => {
//   return (
//     <div className="min-h-screen flex bg-gradient-to-br from-gray-100 via-gray-50 to-white">
//       {/* SIDEBAR */}
//       <aside
//         className="
//           w-72 fixed h-full
//           bg-white/70 backdrop-blur-xl
//           border-r border-white/40
//           shadow-[0_8px_30px_rgb(0,0,0,0.06)]
//           p-6
//           flex flex-col
//           transition-all duration-300
//         "
//       >
//         {/* Logo */}
//         <div className="mb-10">
//           <h1 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-600 to-blue-600 text-transparent bg-clip-text">
//             Admin Panel
//           </h1>
//           <p className="text-sm text-gray-500 mt-1">Control & Analytics</p>
//         </div>

//         {/* Navigation Menu */}
//         <nav className="flex-1 space-y-1">
//           {menuItems.map((item) => (
//             <NavLink
//               key={item.path}
//               to={item.path}
//               end
//               className={({ isActive }) =>
//                 `
//                 flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm
//                 transition-all duration-200 cursor-pointer

//                 ${
//                   isActive
//                     ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/30 scale-[1.02]"
//                     : "text-gray-700 hover:bg-gray-100/70 hover:shadow-sm"
//                 }
//               `
//               }
//             >
//               <span>{item.icon}</span>
//               <span>{item.name}</span>
//             </NavLink>
//           ))}
//         </nav>

//         {/* Logout button */}
//         <button
//           className="
//             flex items-center gap-3 px-4 py-3 mt-5
//             text-red-600 hover:bg-red-50
//             rounded-xl transition-all duration-200
//           "
//         >
//           <FiLogOut size={20} />
//           <span className="font-medium">Logout</span>
//         </button>
//       </aside>

//       {/* MAIN CONTENT */}
//       <main className="flex-1 ml-72 p-10">
//         {/* Header */}
//         <div
//           className="
//             mb-8 p-6
//             bg-gradient-to-r from-blue-600 to-cyan-500
//             rounded-3xl shadow-lg text-white
//           "
//         >
//           <h2 className="text-2xl font-bold">Welcome, Admin 👋</h2>
//           <p className="text-sm opacity-90 mt-1">
//             Manage everything from your dashboard.
//           </p>
//         </div>

//         {/* Content Container */}
//         <div
//           className="
//             bg-white/80 backdrop-blur-xl
//             rounded-3xl shadow-xl border border-gray-200
//             p-8
//             min-h-[70vh]
//           "
//         >
//           <Outlet />
//         </div>
//       </main>
//     </div>
//   );
// };

// export default AdminLayout;

// import { NavLink, Outlet } from "react-router-dom";
// import {
//   FiHome,
//   FiBox,
//   FiGrid,
//   FiShoppingBag,
//   FiUsers,
//   FiLogOut,
// } from "react-icons/fi";

// const menuItems = [
//   { name: "Dashboard", icon: <FiHome size={20} />, path: "/admin" },
//   { name: "Products", icon: <FiBox size={20} />, path: "/admin/products" },
//   { name: "Categories", icon: <FiGrid size={20} />, path: "/admin/categories" },
//   { name: "Orders", icon: <FiShoppingBag size={20} />, path: "/admin/orders" },
//   { name: "Users", icon: <FiUsers size={20} />, path: "/admin/users" },
// ];

// const AdminLayout = () => {
//   return (
//     <div className="min-h-screen flex bg-gradient-to-br from-gray-50 via-white to-gray-100">
//       {/* SIDEBAR */}
//       <aside
//         className="
//           w-72 fixed h-full
//           bg-white/30 backdrop-blur-2xl
//           border-r border-white/40
//           shadow-[0_8px_30px_rgba(0,0,0,0.12)]
//           p-6 flex flex-col z-40
//         "
//       >
//         {/* Logo Area */}
//         <div className="mb-12">
//           <h1 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-blue-700 to-cyan-500 text-transparent bg-clip-text drop-shadow-sm">
//             Admin Panel
//           </h1>
//           <p className="text-sm text-gray-600 tracking-wide mt-1">
//             Manage Everything Beautifully
//           </p>
//         </div>

//         {/* NAVIGATION */}
//         <nav className="flex-1 space-y-2">
//           {menuItems.map((item) => (
//             <NavLink
//               key={item.path}
//               to={item.path}
//               end
//               className={({ isActive }) =>
//                 `
//                 group flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm
//                 transition-all duration-300 cursor-pointer relative

//                 ${
//                   isActive
//                     ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/40 scale-[1.03]"
//                     : "text-gray-700 hover:bg-gray-200/60 hover:shadow-sm"
//                 }
//               `
//               }
//             >
//               <span>{item.icon}</span>
//               <span>{item.name}</span>

//               {/* Active Neon Indicator */}
//               <span className="absolute right-3 w-2 h-2 bg-white rounded-full opacity-0 group-[.active]:opacity-100"></span>
//             </NavLink>
//           ))}
//         </nav>

//         {/* LOGOUT */}
//         <NavLink
//           to="/admin-login"
//           className="
//             mt-6 flex items-center gap-3 px-4 py-3
//             text-red-600 hover:text-red-700
//             hover:bg-red-50 rounded-xl
//             font-semibold transition-all duration-300
//             group
//           "
//         >
//           <FiLogOut size={20} className="group-hover:rotate-12 transition" />
//           <span>Logout</span>
//         </NavLink>
//       </aside>

//       {/* MAIN CONTENT */}
//       <main className="flex-1 ml-72 p-10">
//         {/* HEADER BAR */}
//         <div
//           className="
//           mb-10 p-7 rounded-3xl
//           bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500
//           shadow-xl text-white relative overflow-hidden
//         "
//         >
//           <div className="absolute top-0 right-0 opacity-20 scale-110">
//             <svg width="180" height="180">
//               <circle cx="90" cy="90" r="90" fill="white" />
//             </svg>
//           </div>

//           <h2 className="text-2xl font-bold drop-shadow-sm">
//             Welcome, Admin 👋
//           </h2>
//           <p className="text-sm opacity-90 mt-1">
//             Quickly manage analytics, products, orders & users.
//           </p>
//         </div>

//         {/* CONTENT CONTAINER */}
//         <div
//           className="
//             bg-white/80 backdrop-blur-xl
//             rounded-3xl shadow-2xl
//             border border-gray-200
//             p-8 min-h-[70vh]
//             transition-all duration-300
//           "
//         >
//           <Outlet />
//         </div>
//       </main>
//     </div>
//   );
// };

// export default AdminLayout;

import { NavLink, Outlet, useNavigate } from "react-router-dom";
import {
  FiHome,
  FiBox,
  FiGrid,
  FiShoppingBag,
  FiUsers,
  FiLogOut,
} from "react-icons/fi";

import { useAdminAuth } from "../../context/AdminAuthContext";

const menuItems = [
  { name: "Dashboard", icon: <FiHome size={20} />, path: "/admin" },
  { name: "Products", icon: <FiBox size={20} />, path: "/admin/products" },
  { name: "Categories", icon: <FiGrid size={20} />, path: "/admin/categories" },
  { name: "Orders", icon: <FiShoppingBag size={20} />, path: "/admin/orders" },
  { name: "Users", icon: <FiUsers size={20} />, path: "/admin/users" },
];

const AdminLayout = () => {
  const navigate = useNavigate();
  const { logout } = useAdminAuth();

  const handleLogout = () => {
    logout(); // remove localStorage + clear admin state
    navigate("/admin-login"); // redirect to login page
  };

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* SIDEBAR */}
      <aside
        className="
          w-72 fixed h-full 
          bg-white/30 backdrop-blur-2xl 
          border-r border-white/40
          shadow-[0_8px_30px_rgba(0,0,0,0.12)]
          p-6 flex flex-col z-40
        "
      >
        {/* Logo Area */}
        <div className="mb-12">
          <h1 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-blue-700 to-cyan-500 text-transparent bg-clip-text drop-shadow-sm">
            Admin Panel
          </h1>
          <p className="text-sm text-gray-600 tracking-wide mt-1">
            Manage Everything Beautifully
          </p>
        </div>

        {/* NAVIGATION */}
        <nav className="flex-1 space-y-2">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end
              className={({ isActive }) =>
                `
                group flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm
                transition-all duration-300 cursor-pointer relative
                ${
                  isActive
                    ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/40 scale-[1.03]"
                    : "text-gray-700 hover:bg-gray-200/60 hover:shadow-sm"
                }
              `
              }
            >
              <span>{item.icon}</span>
              <span>{item.name}</span>

              {/* Active Neon Indicator */}
              <span className="absolute right-3 w-2 h-2 bg-white rounded-full opacity-0 group-[.active]:opacity-100"></span>
            </NavLink>
          ))}
        </nav>

        {/* LOGOUT BUTTON — updated with context logout */}
        <button
          onClick={handleLogout}
          className="
            mt-6 flex items-center gap-3 px-4 py-3
            text-red-600 hover:text-red-700 
            hover:bg-red-50 rounded-xl
            font-semibold transition-all duration-300
            group
          "
        >
          <FiLogOut size={20} className="group-hover:rotate-12 transition" />
          <span>Logout</span>
        </button>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 ml-72 p-10">
        {/* HEADER BAR */}
        <div
          className="
            mb-10 p-7 rounded-3xl 
            bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 
            shadow-xl text-white relative overflow-hidden
          "
        >
          <div className="absolute top-0 right-0 opacity-20 scale-110">
            <svg width="180" height="180">
              <circle cx="90" cy="90" r="90" fill="white" />
            </svg>
          </div>

          <h2 className="text-2xl font-bold drop-shadow-sm">
            Welcome, Admin 👋
          </h2>
          <p className="text-sm opacity-90 mt-1">
            Quickly manage analytics, products, orders & users.
          </p>
        </div>

        {/* CONTENT WRAPPER */}
        <div
          className="
            bg-white/80 backdrop-blur-xl
            rounded-3xl shadow-2xl 
            border border-gray-200 
            p-8 min-h-[70vh]
            transition-all duration-300
          "
        >
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
