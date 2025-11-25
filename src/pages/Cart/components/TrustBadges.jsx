// // // import { ShieldCheck, CreditCard, RefreshCcw } from "lucide-react";

// // // const TrustBadges = () => {
// // //   const items = [
// // //     {
// // //       icon: <ShieldCheck size={40} className="text-primary" />,
// // //       title: "Quality Assurance",
// // //     },
// // //     {
// // //       icon: <CreditCard size={40} className="text-primary" />,
// // //       title: "100% Secure Payment",
// // //     },
// // //     {
// // //       icon: <RefreshCcw size={40} className="text-primary" />,
// // //       title: "Easy Returns",
// // //     },
// // //   ];

// // //   return (
// // //     <div className="w-full flex justify-center py-0">
// // //       <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
// // //         {items.map((item, i) => (
// // //           <div
// // //             key={i}
// // //             className="flex flex-col items-center gap-3 transition-all hover:scale-[1.05]"
// // //           >
// // //             <div className="p-4 rounded-full bg-neutral-100 shadow-sm">
// // //               {item.icon}
// // //             </div>
// // //             <p className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
// // //               {item.title}
// // //             </p>
// // //           </div>
// // //         ))}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default TrustBadges;

// // import { ShieldCheck, CreditCard, RefreshCcw } from "lucide-react";

// // const TrustBadges = () => {
// //   const items = [
// //     {
// //       icon: <ShieldCheck size={38} className="text-primary opacity-100" />,
// //       title: "QUALITY ASSURANCE",
// //     },
// //     {
// //       icon: <CreditCard size={38} className="text-primary opacity-100" />,
// //       title: "100% SECURE PAYMENT",
// //     },
// //     {
// //       icon: <RefreshCcw size={38} className="text-primary opacity-100" />,
// //       title: "EASY RETURNS",
// //     },
// //   ];

// //   return (
// //     <div className="w-full flex justify-center py-0">
// //       <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
// //         {items.map((item, i) => (
// //           <div
// //             key={i}
// //             className="
// //               flex flex-col items-center gap-3
// //               transition-all
// //               hover:opacity-100
// //               opacity-70
// //             "
// //           >
// //             <div className="p-4 rounded-full bg-neutral-100 shadow-sm opacity-80 hover:opacity-100 transition-all">
// //               {item.icon}
// //             </div>

// //             <p
// //               className="
// //               text-xs
// //               font-semibold
// //               text-gray-500
// //               tracking-wide
// //               uppercase
// //               opacity-70
// //               hover:opacity-100
// //               transition-all
// //             "
// //             >
// //               {item.title}
// //             </p>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default TrustBadges;

// import { ShieldCheck, CreditCard, RefreshCcw } from "lucide-react";

// const TrustBadges = () => {
//   const items = [
//     {
//       icon: <ShieldCheck className="text-primary opacity-100" />,
//       title: "QUALITY ASSURANCE",
//     },
//     {
//       icon: <CreditCard className="text-primary opacity-100" />,
//       title: "100% SECURE PAYMENT",
//     },
//     {
//       icon: <RefreshCcw className="text-primary opacity-100" />,
//       title: "EASY RETURNS",
//     },
//   ];

//   return (
//     <div className="w-full flex justify-center py-4 sm:py-8">
//       <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10 text-center w-full max-w-[600px]">
//         {items.map((item, i) => (
//           <div
//             key={i}
//             className="
//               flex flex-col items-center gap-3
//               transition-all
//               hover:opacity-100
//               opacity-80
//             "
//           >
//             {/* ICON WRAPPER */}
//             <div
//               className="
//                 p-3 sm:p-4
//                 rounded-full bg-neutral-100
//                 shadow-sm
//                 opacity-90
//                 hover:opacity-100
//                 transition-all
//               "
//             >
//               <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center">
//                 {item.icon}
//               </div>
//             </div>

//             {/* TITLE */}
//             <p
//               className="
//                 text-[10px] sm:text-xs
//                 font-semibold
//                 text-gray-600
//                 tracking-wide
//                 uppercase
//                 opacity-70
//                 hover:opacity-100
//                 transition-all
//               "
//             >
//               {item.title}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TrustBadges;

import { ShieldCheck, CreditCard, RefreshCcw } from "lucide-react";

const TrustBadges = () => {
  const items = [
    {
      icon: <ShieldCheck className="text-primary opacity-100" />,
      title: "QUALITY ASSURANCE",
    },
    {
      icon: <CreditCard className="text-primary opacity-100" />,
      title: "100% SECURE PAYMENT",
    },
    {
      icon: <RefreshCcw className="text-primary opacity-100" />,
      title: "EASY RETURNS",
    },
  ];

  return (
    <div className="w-full flex justify-center py-4 sm:py-8">
      <div className="grid grid-cols-3 gap-4 sm:gap-10 text-center w-full max-w-[600px]">
        {items.map((item, i) => (
          <div
            key={i}
            className="
              flex flex-col items-center gap-3
              transition-all 
              hover:opacity-100 
              opacity-80
            "
          >
            {/* ICON WRAPPER */}
            <div
              className="
                p-3 sm:p-4 
                rounded-full bg-neutral-100 
                shadow-sm 
                opacity-90 
                hover:opacity-100 
                transition-all
              "
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center">
                {item.icon}
              </div>
            </div>

            {/* TITLE */}
            <p
              className="
                text-[10px] sm:text-xs 
                font-semibold 
                text-gray-600 
                tracking-wide 
                uppercase 
                opacity-70 
                hover:opacity-100 
                transition-all
              "
            >
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustBadges;
