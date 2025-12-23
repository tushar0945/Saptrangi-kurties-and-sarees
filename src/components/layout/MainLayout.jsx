// import React from "react";
// import Navbar from "./Navbar/Navbar";
// import Footer from "./Footer/Footer";

// const MainLayout = ({ children }) => {
//   return (
//     <>
//       <Navbar />
//       <div className="pt-20">{children}</div>
//       <Footer className="lg:block hidden" />
//     </>
//   );
// };

// export default MainLayout;

import React from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* NAVBAR */}
      <Navbar />

      {/* PAGE CONTENT */}
      <main className="flex-grow pt-20">{children}</main>

      {/* FOOTER */}
      <Footer className="lg:block hidden" />
    </div>
  );
};

export default MainLayout;
