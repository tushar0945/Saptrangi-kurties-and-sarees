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
