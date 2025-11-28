import React from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="pt-20">{children}</div>
      <Footer className="lg:block hidden" />
    </>
  );
};

export default MainLayout;
