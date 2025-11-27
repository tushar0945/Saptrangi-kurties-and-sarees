// // // import React from "react";
// // // import { Link } from "react-router-dom";
// // // import {
// // //   FiMenu,
// // //   FiHeart,
// // //   FiShoppingCart,
// // //   FiChevronRight,
// // // } from "react-icons/fi";
// // // import { IoPersonCircle } from "react-icons/io5";
// // // import ProfileCard from "../components/ProfileCard";

// // // const AccountMobileLayout = () => {
// // //   const user = {
// // //     name: "Tushar",
// // //     email: "tp909580@gmail.com",
// // //     mobile: "8999197992",
// // //   };

// // //   const sections = [
// // //     { title: "My Addresses", link: "/myaccount/addresses" },
// // //     { title: "Help & Support", link: "/help" },
// // //     { title: "Feedback & Suggestion", link: "/feedback" },
// // //     { title: "Become a Seller", link: "/seller" },
// // //     { title: "Our Story", link: "/our-story" },
// // //     { title: "Fanbook", link: "/fanbook" },
// // //   ];

// // //   return (
// // //     <div className="w-full min-h-screen bg-[#f7f7f7] pb-20">
// // //       {/* <div className="bg-white mt-2 p-4 flex items-center justify-between shadow-sm">
// // //         <div className="flex items-center gap-3">
// // //           <IoPersonCircle className="text-5xl text-gray-600" />

// // //           <div>
// // //             <p className="font-semibold">{user.name}</p>
// // //             <p className="text-gray-500 text-sm">{user.email}</p>
// // //             <p className="text-gray-500 text-sm">{user.mobile}</p>
// // //           </div>
// // //         </div>

// // //         <Link className="text-blue-600 font-semibold text-sm">EDIT</Link>
// // //       </div> */}
// // //       <ProfileCard />

// // //       {/* ----------------- SHORTCUT ICONS ----------------- */}
// // //       <div className="bg-white mt-3 p-4 flex items-center justify-between shadow-sm">
// // //         <Link to="/myaccount/orders" className="flex flex-col items-center">
// // //           <img src="/icons/orders.png" className="w-8 h-8" />
// // //           <p className="text-sm mt-1">Orders</p>
// // //         </Link>

// // //         <Link to="/wallet" className="flex flex-col items-center">
// // //           <img src="/icons/wallet.png" className="w-8 h-8" />
// // //           <p className="text-sm mt-1">Wallet</p>
// // //         </Link>

// // //         <Link to="/payments" className="flex flex-col items-center">
// // //           <img src="/icons/payment.png" className="w-8 h-8" />
// // //           <p className="text-sm mt-1">Payments</p>
// // //         </Link>
// // //       </div>

// // //       {/* ----------------- SECTIONS ----------------- */}
// // //       <div className="bg-white mt-3 shadow-sm">
// // //         {sections.map((sec, i) => (
// // //           <Link
// // //             key={i}
// // //             to={sec.link}
// // //             className="flex items-center justify-between px-4 py-4 border-b text-[15px]"
// // //           >
// // //             <p>{sec.title}</p>
// // //             <FiChevronRight className="text-xl text-gray-400" />
// // //           </Link>
// // //         ))}
// // //       </div>

// // //       {/* ----------------- LOGOUT ----------------- */}
// // //       <div className="mt-4 px-4">
// // //         <button className="w-full bg-red-100 text-red-500 py-3 rounded-lg font-semibold">
// // //           Logout
// // //         </button>
// // //       </div>

// // //       {/* ----------------- BOTTOM NAV BAR ----------------- */}
// // //       <div className="fixed bottom-0 left-0 w-full bg-white border-t shadow-sm py-2 flex justify-around">
// // //         <Link className="flex flex-col items-center">
// // //           <img src="/icons/home.png" className="w-6" />
// // //           <p className="text-xs mt-1">Home</p>
// // //         </Link>

// // //         <Link className="flex flex-col items-center">
// // //           <img src="/icons/categories.png" className="w-6" />
// // //           <p className="text-xs mt-1">Categories</p>
// // //         </Link>

// // //         <Link className="flex flex-col items-center">
// // //           <img src="/icons/studio.png" className="w-6" />
// // //           <p className="text-xs mt-1">Studio</p>
// // //         </Link>

// // //         <Link className="flex flex-col items-center">
// // //           <img src="/icons/profile.png" className="w-6" />
// // //           <p className="text-xs mt-1">Profile</p>
// // //         </Link>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default AccountMobileLayout;

// // import React from "react";
// // import { Link } from "react-router-dom";
// // import { FiChevronRight } from "react-icons/fi";
// // import ProfileCard from "../components/ProfileCard";

// // const AccountMobileLayout = () => {
// //   const sections = [
// //     { title: "My Addresses", link: "/myaccount/addresses" },
// //     { title: "Help & Support", link: "/help" },
// //     { title: "Feedback & Suggestion", link: "/feedback" },
// //     { title: "Become a Seller", link: "/seller" },
// //     { title: "Our Story", link: "/our-story" },
// //     { title: "Fanbook", link: "/fanbook" },
// //   ];

// //   return (
// //     <div className="w-full min-h-screen  pb-24 px-4 md:px-6 lg:px-8">
// //       {/* ----------- PROFILE CARD ----------- */}
// //       <div className="mt-4">
// //         <ProfileCard />
// //       </div>

// //       {/* ----------- SHORTCUT ICONS ----------- */}
// //       <div className="bg-white mt-4 p-4 rounded-lg shadow-sm flex items-center justify-between">
// //         <Link to="/myaccount/orders" className="flex flex-col items-center">
// //           <img src="/icons/orders.png" className="w-8 h-8" />
// //           <p className="text-sm mt-1">Orders</p>
// //         </Link>

// //         <Link to="/wallet" className="flex flex-col items-center">
// //           <img src="/icons/wallet.png" className="w-8 h-8" />
// //           <p className="text-sm mt-1">Wallet</p>
// //         </Link>

// //         <Link to="/payments" className="flex flex-col items-center">
// //           <img src="/icons/payment.png" className="w-8 h-8" />
// //           <p className="text-sm mt-1">Payments</p>
// //         </Link>
// //       </div>

// //       {/* ----------- SECTION LIST ----------- */}
// //       <div className="bg-white mt-4 rounded-lg overflow-hidden shadow-sm">
// //         {sections.map((sec, i) => (
// //           <Link
// //             key={i}
// //             to={sec.link}
// //             className="flex items-center justify-between px-4 py-4 text-[15px] border-b last:border-none"
// //           >
// //             <span>{sec.title}</span>
// //             <FiChevronRight className="text-xl text-gray-400" />
// //           </Link>
// //         ))}
// //       </div>

// //       {/* ----------- LOGOUT BUTTON ----------- */}
// //       <div className="mt-6">
// //         <button className="w-full bg-red-100 text-red-500 py-3 rounded-lg font-semibold">
// //           Logout
// //         </button>
// //       </div>

// //       {/* ----------- BOTTOM NAV ----------- */}
// //       <div className="fixed bottom-0 left-0 w-full bg-white border-t shadow-sm py-2 flex justify-around">
// //         <Link className="flex flex-col items-center">
// //           <img src="/icons/home.png" className="w-6" />
// //           <p className="text-xs mt-1">Home</p>
// //         </Link>

// //         <Link className="flex flex-col items-center">
// //           <img src="/icons/categories.png" className="w-6" />
// //           <p className="text-xs mt-1">Categories</p>
// //         </Link>

// //         <Link className="flex flex-col items-center">
// //           <img src="/icons/studio.png" className="w-6" />
// //           <p className="text-xs mt-1">Studio</p>
// //         </Link>

// //         <Link className="flex flex-col items-center">
// //           <img src="/icons/profile.png" className="w-6" />
// //           <p className="text-xs mt-1">Profile</p>
// //         </Link>
// //       </div>
// //     </div>
// //   );
// // };

// // export default AccountMobileLayout;

// import React from "react";
// import { Link } from "react-router-dom";
// import {
//   FiChevronRight,
//   FiPackage,
//   FiCreditCard,
//   FiBox,
//   FiBookmark,
//   FiHome,
//   FiGrid,
//   FiVideo,
//   FiUser,
// } from "react-icons/fi";
// import { RiWallet3Line } from "react-icons/ri";

// import ProfileCard from "../components/ProfileCard";

// const AccountMobileLayout = () => {
//   const sections = [
//     { title: "My Addresses", link: "/myaccount/addresses" },
//     { title: "Help & Support", link: "/help" },
//     { title: "Feedback & Suggestion", link: "/feedback" },
//     { title: "Become a Seller", link: "/seller" },
//     { title: "Our Story", link: "/our-story" },
//     { title: "Fanbook", link: "/fanbook" },
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

//         <button className="mt-4 w-full bg-yellow-500 text-white py-2 rounded-xl font-semibold hover:bg-yellow-600 active:scale-95">
//           Edit Profile
//         </button>
//       </div>

//       {/* Quick Actions */}
//       <div className="bg-white rounded-2xl shadow-sm p-4 mb-5">
//         <div className="grid grid-cols-3 text-center gap-3">
//           <div className="flex flex-col items-center gap-2">
//             <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center">
//               <FiBox className="text-pink-600 text-xl" />
//             </div>
//             <span className="text-sm font-medium text-gray-700">Orders</span>
//           </div>

//           <div className="flex flex-col items-center gap-2">
//             <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
//               <FiCreditCard className="text-blue-600 text-xl" />
//             </div>
//             <span className="text-sm font-medium text-gray-700">Wallet</span>
//           </div>

//           <div className="flex flex-col items-center gap-2">
//             <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
//               <FiBookmark className="text-green-600 text-xl" />
//             </div>
//             <span className="text-sm font-medium text-gray-700">Payments</span>
//           </div>
//         </div>
//       </div>

//       {/* Menu List */}
//       <div className="bg-white rounded-2xl shadow-sm divide-y">
//         {[
//           "My Addresses",
//           "Help & Support",
//           "Feedback & Suggestion",
//           "Become a Seller",
//           "Our Story",
//           "Fanbook",
//         ].map((item) => (
//           <div key={item} className="flex justify-between items-center p-4">
//             <span className="text-gray-800 font-medium">{item}</span>
//             <FiChevronRight className="text-gray-400 text-xl" />
//           </div>
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
    { title: "My Addresses", link: "/myaccount/addresses" },
    { title: "Help & Support", link: "/myaccount/help" },
    { title: "Feedback & Suggestion", link: "/myaccount/feedback" },
    { title: "Become a Seller", link: "/myaccount/seller" },
    { title: "Our Story", link: "/myaccount/our-story" },
    { title: "Fanbook", link: "/myaccount/fanbook" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* Profile Card */}
      <div className="bg-gradient-to-r from-yellow-100 to-yellow-200 rounded-2xl p-4 shadow-md mb-5">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-yellow-400 text-white rounded-full flex items-center justify-center text-xl font-bold">
            T
          </div>
          <div>
            <h2 className="font-semibold text-lg">Tushar</h2>
            <p className="text-sm text-gray-700">tp909580@gmail.com</p>
            <p className="text-sm text-gray-700">8999197992</p>
          </div>
        </div>

        {/* Edit Profile Link */}
        <Link
          to="/myaccount/profile"
          className="mt-4 w-full bg-yellow-500 text-white py-2 rounded-xl font-semibold
                     hover:bg-yellow-600 active:scale-95 block text-center"
        >
          Edit Profile
        </Link>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-2xl shadow-sm p-4 mb-5">
        <div className="grid grid-cols-3 text-center gap-3">
          <Link
            to="/myaccount/orders"
            className="flex flex-col items-center gap-2"
          >
            <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center">
              <FiBox className="text-pink-600 text-xl" />
            </div>
            <span className="text-sm font-medium text-gray-700">Orders</span>
          </Link>

          <Link
            to="/myaccount/wallet"
            className="flex flex-col items-center gap-2"
          >
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <FiCreditCard className="text-blue-600 text-xl" />
            </div>
            <span className="text-sm font-medium text-gray-700">Wallet</span>
          </Link>

          <Link
            to="/myaccount/payments"
            className="flex flex-col items-center gap-2"
          >
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
              <FiBookmark className="text-green-600 text-xl" />
            </div>
            <span className="text-sm font-medium text-gray-700">Payments</span>
          </Link>
        </div>
      </div>

      {/* Settings menu */}
      <div className="bg-white rounded-2xl shadow-sm divide-y">
        {sections.map((item) => (
          <Link
            key={item.title}
            to={item.link}
            className="flex justify-between items-center p-4"
          >
            <span className="text-gray-800 font-medium">{item.title}</span>
            <FiChevronRight className="text-gray-400 text-xl" />
          </Link>
        ))}
      </div>

      {/* Logout */}
      <button className="w-full mt-6 bg-red-100 text-red-600 py-3 rounded-2xl font-semibold active:scale-95">
        Logout
      </button>
    </div>
  );
};

export default AccountMobileLayout;
