// import React from "react";
// import Navbar from "./Navbar/Navbar";
// import Footer from "./Footer/Footer";

// const MainLayout = ({ children }) => {
//   return (
//     // <div className="min-h-screen bg-neutral">
//     //   <Navbar />
//     //   <main className="pt-16">{children}</main>
//     //   <Footer />
//     // </div>
//     <div className="bg-neutral">
//       <Navbar />

//       {/* Remove min-h-screen, remove scroll separation */}
//       <main className="pt-20">{children}</main>

//       <Footer />
//     </div>
//   );
// };

// export default MainLayout;

import React from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

const MainLayout = ({ children }) => {
  return (
    // <div className="bg-neutral">
    //   <Navbar />
    //   {/* Space for fixed navbar */}
    //   <main className="pt-20">{children}</main>
    //   <Footer />
    // </div>
    <>
      <Navbar />
      <div className="pt-20">{children}</div>
      <Footer className="lg:block hidden" />
    </>
  );
};

export default MainLayout;
