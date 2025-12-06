// // // // import Sidebar from "./components/Sidebar";
// // // // import ProfileCard from "./components/ProfileCard";
// // // // import SectionGrid from "./components/SectionGrid";
// // // // import { Outlet, useLocation } from "react-router-dom";

// // // // const AccountPage = () => {
// // // //   const { pathname } = useLocation();
// // // //   const isOverview = pathname === "/myaccount";

// // // //   return (
// // // //     <div className="w-full bg-[#F5F6FA] py-6">
// // // //       <div className="max-w-[1400px] mx-auto px-4 flex">
// // // //         {/* LEFT SIDEBAR */}
// // // //         <div className="w-[280px]">
// // // //           <Sidebar />
// // // //         </div>

// // // //         {/* RIGHT SIDE */}
// // // //         <div className="flex-1 pl-6">
// // // //           {/* ONLY OVERVIEW SHOWS PROFILE CARD */}
// // // //           {isOverview && <ProfileCard />}

// // // //           {/* CONTENT AREA */}
// // // //           {isOverview ? (
// // // //             <SectionGrid />
// // // //           ) : (
// // // //             <div className="mt-6">
// // // //               <Outlet />
// // // //             </div>
// // // //           )}
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default AccountPage;

// // // // import Sidebar from "./components/Sidebar";
// // // // import ProfileCard from "./components/ProfileCard";
// // // // import SectionGrid from "./components/SectionGrid";
// // // // import { Outlet, useLocation } from "react-router-dom";

// // // // const AccountPage = ({ children }) => {
// // // //   const { pathname } = useLocation();
// // // //   const isOverview = pathname === "/myaccount";

// // // //   return (
// // // //     <div className="w-full bg-[#F5F6FA] py-6">
// // // //       <div className="max-w-[1400px] mx-auto px-4 flex">
// // // //         {/* LEFT SIDEBAR */}
// // // //         <div className="w-[280px]">
// // // //           <Sidebar />
// // // //         </div>

// // // //         {/* RIGHT SIDE */}
// // // //         <div className="flex-1 pl-6">
// // // //           {/* If order-details page is rendered via children -> show children only */}
// // // //           {children ? (
// // // //             <div className="mt-6">{children}</div>
// // // //           ) : (
// // // //             <>
// // // //               {/* ONLY OVERVIEW SHOWS PROFILE CARD */}
// // // //               {isOverview && <ProfileCard />}

// // // //               {/* CONTENT AREA */}
// // // //               {isOverview ? (
// // // //                 <SectionGrid />
// // // //               ) : (
// // // //                 <div className="mt-6">
// // // //                   <Outlet />
// // // //                 </div>
// // // //               )}
// // // //             </>
// // // //           )}
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default AccountPage;

// // // import Sidebar from "./components/Sidebar";
// // // import ProfileCard from "./components/ProfileCard";
// // // import SectionGrid from "./components/SectionGrid";
// // // import AccountMobileLayout from "./sections/AccountMobileLayout";

// // // import { Outlet, useLocation } from "react-router-dom";
// // // import { useState, useEffect } from "react";

// // // const AccountPage = ({ children }) => {
// // //   const { pathname } = useLocation();

// // //   // Detect mobile view
// // //   const [isMobile, setIsMobile] = useState(window.innerWidth < 1025);

// // //   useEffect(() => {
// // //     const handleResize = () => setIsMobile(window.innerWidth < 1025);
// // //     window.addEventListener("resize", handleResize);
// // //     return () => window.removeEventListener("resize", handleResize);
// // //   }, []);

// // //   // If mobile, show mobile UI only
// // //   if (isMobile) {
// // //     return <AccountMobileLayout />;
// // //   }

// // //   // DESKTOP layout
// // //   const isOverview = pathname === "/myaccount";

// // //   return (
// // //     <div className="w-full bg-[#F5F6FA] py-6">
// // //       <div className="max-w-[1400px] mx-auto px-4 flex">
// // //         {/* LEFT SIDEBAR */}
// // //         <div className="w-[280px]">
// // //           <Sidebar />
// // //         </div>

// // //         {/* RIGHT CONTENT */}
// // //         <div className="flex-1 pl-6">
// // //           {children ? (
// // //             <div className="mt-6">{children}</div>
// // //           ) : (
// // //             <>
// // //               {isOverview && <ProfileCard />}

// // //               {isOverview ? (
// // //                 <SectionGrid />
// // //               ) : (
// // //                 <div className="mt-6">
// // //                   <Outlet />
// // //                 </div>
// // //               )}
// // //             </>
// // //           )}
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default AccountPage;

// // import Sidebar from "./components/Sidebar";
// // import ProfileCard from "./components/ProfileCard";
// // import SectionGrid from "./components/SectionGrid";
// // import AccountMobileLayout from "./sections/AccountMobileLayout";

// // import { Outlet, useLocation } from "react-router-dom";
// // import { useState, useEffect } from "react";

// // const AccountPage = ({ children }) => {
// //   const { pathname } = useLocation();

// //   // Detect mobile view
// //   const [isMobile, setIsMobile] = useState(window.innerWidth < 1025);

// //   useEffect(() => {
// //     const handleResize = () => setIsMobile(window.innerWidth < 1025);
// //     window.addEventListener("resize", handleResize);
// //     return () => window.removeEventListener("resize", handleResize);
// //   }, []);

// //   const isOverview = pathname === "/myaccount";

// //   /* ------------------------------------------------------------------
// //      📱 MOBILE LAYOUT — now supports nested routes with <Outlet />
// //      ------------------------------------------------------------------ */
// //   if (isMobile) {
// //     return (
// //       <div className="min-h-screen bg-gray-100">
// //         <AccountMobileLayout />

// //         {/* If NOT on /myaccount, show the nested screen under layout */}
// //         {!isOverview && (
// //           <div className="p-4">
// //             <Outlet />
// //           </div>
// //         )}
// //       </div>
// //     );
// //   }

// //   /* ------------------------------------------------------------------
// //      🖥 DESKTOP LAYOUT (unchanged)
// //      ------------------------------------------------------------------ */
// //   return (
// //     <div className="w-full bg-[#F5F6FA] py-6">
// //       <div className="max-w-[1400px] mx-auto px-4 flex">
// //         {/* LEFT SIDEBAR */}
// //         <div className="w-[280px]">
// //           <Sidebar />
// //         </div>

// //         {/* RIGHT CONTENT */}
// //         <div className="flex-1 pl-6">
// //           {children ? (
// //             <div className="mt-6">{children}</div>
// //           ) : (
// //             <>
// //               {isOverview && <ProfileCard />}

// //               {isOverview ? (
// //                 <SectionGrid />
// //               ) : (
// //                 <div className="mt-6">
// //                   <Outlet />
// //                 </div>
// //               )}
// //             </>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default AccountPage;

// import Sidebar from "./components/Sidebar";
// import ProfileCard from "./components/ProfileCard";
// import SectionGrid from "./components/SectionGrid";
// import AccountMobileLayout from "./sections/AccountMobileLayout";

// import { Outlet, useLocation } from "react-router-dom";
// import { useState, useEffect } from "react";

// const AccountPage = ({ children }) => {
//   const { pathname } = useLocation();

//   // Detect mobile view
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 1025);

//   useEffect(() => {
//     const handleResize = () => setIsMobile(window.innerWidth < 1025);
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const isOverview = pathname === "/account";

//   /* ------------------------------------------------------------------
//      📱 MOBILE LAYOUT — open subpages as FULL SEPARATE PAGES
//      ------------------------------------------------------------------ */
//   if (isMobile) {
//     // Overview page → show main dashboard layout
//     if (isOverview) {
//       return <AccountMobileLayout />;
//     }

//     // Any sub-page → show ONLY the nested page (full screen)
//     return (
//       <div className="min-h-screen bg-gray-100 p-4">
//         <Outlet />
//       </div>
//     );
//   }

//   /* ------------------------------------------------------------------
//      🖥 DESKTOP LAYOUT (unchanged)
//      ------------------------------------------------------------------ */
//   return (
//     <div className="w-full  py-6">
//       <div className="max-w-[1550px] mx-auto px-4 flex">
//         {/* LEFT SIDEBAR */}
//         <div className="w-[280px]">
//           <Sidebar />
//         </div>

//         {/* RIGHT CONTENT */}
//         <div className="flex-1 pl-6">
//           {children ? (
//             <div className="">{children}</div>
//           ) : (
//             <>
//               {isOverview && <ProfileCard />}

//               {isOverview ? (
//                 <SectionGrid />
//               ) : (
//                 <div className="">
//                   <Outlet />
//                 </div>
//               )}
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AccountPage;

import Sidebar from "./components/Sidebar";
import ProfileCard from "./components/ProfileCard";
import SectionGrid from "./components/SectionGrid";
import AccountMobileLayout from "./sections/AccountMobileLayout";

import { Outlet, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const AccountPage = ({ children }) => {
  const { pathname } = useLocation();

  // Detect mobile view
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1025);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1025);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isOverview = pathname === "/account";

  /* ------------------------------------------------------------------
     📱 MOBILE LAYOUT
     ------------------------------------------------------------------ */
  if (isMobile) {
    if (isOverview) {
      return <AccountMobileLayout />;
    }

    return (
      <div className="min-h-screen bg-gray-100 p-4">
        <Outlet />
      </div>
    );
  }

  /* ------------------------------------------------------------------
     🖥 DESKTOP LAYOUT
     ------------------------------------------------------------------ */
  return (
    <div className="w-full py-6">
      <div
        className="
        max-w-[1550px] mx-auto
        px-3 sm:px-4 md:px-4 lg:px-10
        flex
      "
      >
        {/* LEFT SIDEBAR */}
        <div className="w-[280px]">
          <Sidebar />
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex-1 pl-6">
          {children ? (
            <div>{children}</div>
          ) : (
            <>
              {isOverview && <ProfileCard />}

              {isOverview ? (
                <SectionGrid />
              ) : (
                <div>
                  <Outlet />
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
