import React from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-neutral">
      <Navbar />
      <main className="pt-16">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
