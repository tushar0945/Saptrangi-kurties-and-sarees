// import React from "react";
// import { Link } from "react-router-dom";
// import {
//   FiChevronRight,
//   FiCreditCard,
//   FiBox,
//   FiBookmark,
// } from "react-icons/fi";

// const AccountMobileLayout = () => {
//   const sections = [
//     { title: " Addresses", link: "/account/addresses" },
//     { title: "Help & Support", link: "/account/help" },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-100 p-4">
//       {/* Profile Card */}
//       <div className="bg-gradient-to-r from-yellow-100 to-yellow-200 rounded-2xl p-4 shadow-md mb-5">
//         <div className="flex items-center gap-4">
//           <div className="w-14 h-14 bg-yellow-400 text-white rounded-full flex items-center justify-center text-xl font-bold">
//             T
//           </div>
//           <div>
//             <h2 className="font-semibold text-lg">Tushar</h2>
//             <p className="text-sm text-gray-700">tp909580@gmail.com</p>
//             <p className="text-sm text-gray-700">8999197992</p>
//           </div>
//         </div>

//         {/* Edit Profile Link */}
//         <Link
//           to="/account/profile"
//           className="mt-4 w-full bg-yellow-500 text-white py-2 rounded-xl font-semibold
//                      hover:bg-yellow-600 active:scale-95 block text-center"
//         >
//           Edit Profile
//         </Link>
//       </div>

//       {/* Quick Actions */}
//       <div className="bg-white rounded-2xl shadow-sm p-4 mb-5">
//         <div className="grid grid-cols-3 text-center gap-3">
//           <Link
//             to="/account/orders"
//             className="flex flex-col items-center gap-2"
//           >
//             <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center">
//               <FiBox className="text-pink-600 text-xl" />
//             </div>
//             <span className="text-sm font-medium text-gray-700">Orders</span>
//           </Link>

//           <Link
//             to="/account/wallet"
//             className="flex flex-col items-center gap-2"
//           >
//             <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
//               <FiCreditCard className="text-blue-600 text-xl" />
//             </div>
//             <span className="text-sm font-medium text-gray-700">Wallet</span>
//           </Link>

//           <Link
//             to="/account/payments"
//             className="flex flex-col items-center gap-2"
//           >
//             <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
//               <FiBookmark className="text-green-600 text-xl" />
//             </div>
//             <span className="text-sm font-medium text-gray-700">Payments</span>
//           </Link>
//         </div>
//       </div>

//       {/* Settings menu */}
//       <div className="bg-white rounded-2xl shadow-sm divide-y">
//         {sections.map((item) => (
//           <Link
//             key={item.title}
//             to={item.link}
//             className="flex justify-between items-center p-4"
//           >
//             <span className="text-gray-800 font-medium">{item.title}</span>
//             <FiChevronRight className="text-gray-400 text-xl" />
//           </Link>
//         ))}
//       </div>

//       {/* Logout */}
//       <button className="w-full mt-6 bg-red-100 text-red-600 py-3 rounded-2xl font-semibold active:scale-95">
//         Logout
//       </button>
//     </div>
//   );
// };

// export default AccountMobileLayout;

import React from "react";
import { Link } from "react-router-dom";
import {
  FiChevronRight,
  FiCreditCard,
  FiBox,
  FiBookmark,
} from "react-icons/fi";

const AccountMobileLayout = () => {
  const sections = [
    { title: " Addresses", link: "/account/addresses" },
    { title: "Help & Support", link: "/account/help" },
  ];

  return (
    <div className="min-h-screen bg-neutral p-4">
      {/* Profile Card */}
      <div className="bg-gradient-to-r from-secondary to-primary rounded-2xl p-4 shadow-md mb-5 text-white">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold shadow-md">
            T
          </div>

          <div>
            <h2 className="font-semibold text-lg">Tushar</h2>
            <p className="text-sm opacity-90">tp909580@gmail.com</p>
            <p className="text-sm opacity-90">8999197992</p>
          </div>
        </div>

        {/* Edit Profile */}
        <Link
          to="/account/profile"
          className="mt-4 w-full bg-white text-dark py-2 rounded-xl font-semibold
          active:scale-95 block text-center shadow-sm"
        >
          Edit Profile
        </Link>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-2xl shadow-sm p-4 mb-5">
        <div className="grid grid-cols-3 text-center gap-3">
          {/* Orders */}
          <Link
            to="/account/orders"
            className="flex flex-col items-center gap-2"
          >
            <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
              <FiBox className="text-primary text-xl" />
            </div>
            <span className="text-sm font-medium text-dark">Orders</span>
          </Link>

          {/* Wallet */}
          <Link
            to="/account/wallet"
            className="flex flex-col items-center gap-2"
          >
            <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center">
              <FiCreditCard className="text-secondary text-xl" />
            </div>
            <span className="text-sm font-medium text-dark">Wallet</span>
          </Link>

          {/* Payments */}
          <Link
            to="/account/payments"
            className="flex flex-col items-center gap-2"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
              <FiBookmark className="text-primary text-xl" />
            </div>
            <span className="text-sm font-medium text-dark">Payments</span>
          </Link>
        </div>
      </div>

      {/* Settings */}
      <div className="bg-white rounded-2xl shadow-sm divide-y">
        {sections.map((item) => (
          <Link
            key={item.title}
            to={item.link}
            className="flex justify-between items-center p-4"
          >
            <span className="text-dark font-medium">{item.title}</span>
            <FiChevronRight className="text-gray-400 text-xl" />
          </Link>
        ))}
      </div>

      {/* Logout */}
      <Link to="/logout" className="block w-full mt-6">
        <button className="w-full bg-red-100 text-red-600 py-3 rounded-2xl font-semibold active:scale-95">
          Logout
        </button>
      </Link>
    </div>
  );
};

export default AccountMobileLayout;
