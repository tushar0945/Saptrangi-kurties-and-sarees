import React from "react";
import HomeCarousel from "./HomeCarousel";
import HomeHeading from "./HomeHeading";
import HomeProductList from "./HomeProductList";

const Home = () => {
  return (
    <div className="bg-neutral min-h-screen">
      {/* Carousel */}
      <HomeCarousel />

      {/* Section heading */}
      <HomeHeading title="Top Picks" />

      {/* Product listings */}
      <HomeProductList />
    </div>
  );
};

export default Home;
