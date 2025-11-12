import React from "react";
import Navbar from "./Navbar/Navbar";

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-neutral">
      <Navbar />
      <main className="pt-16">{children}</main>
    </div>
  );
};

export default MainLayout;
