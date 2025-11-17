import React, { useRef, useState, useEffect } from "react";
import HomeProductCard from "./HomeProductCard";

import k1 from "/k1.webp";
import k2 from "/k2.webp";
import k3 from "/k3.webp";
import k4 from "/k4.webp";

const HomeTopPicList = () => {
  const scrollRef = useRef(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  const kurtis = [
    {
      image: k1,
      title: "Peach Embroidered Kurti Set",
      price: 1299,
      oldPrice: 1999,
      rating: 4.6,
    },
    {
      image: k2,
      title: "Grey Embroidered Kurti Set",
      price: 1299,
      oldPrice: 1899,
      rating: 4.5,
    },
    {
      image: k3,
      title: "Yellow PartyWear Kurti Set",
      price: 1199,
      oldPrice: 1799,
      rating: 4.7,
    },
    {
      image: k4,
      title: "Mint Green Embroidered Kurti Set",
      price: 1299,
      oldPrice: 1899,
      rating: 4.8,
    },
    {
      image: k1,
      title: "Peach Embroidered Kurti Set",
      price: 1299,
      oldPrice: 1999,
      rating: 4.6,
    },
    {
      image: k2,
      title: "Grey Embroidered Kurti Set",
      price: 1299,
      oldPrice: 1899,
      rating: 4.5,
    },
    {
      image: k3,
      title: "Yellow PartyWear Kurti Set",
      price: 1199,
      oldPrice: 1799,
      rating: 4.7,
    },
    {
      image: k4,
      title: "Mint Green Embroidered Kurti Set",
      price: 1299,
      oldPrice: 1899,
      rating: 4.8,
    },
  ];

  const checkScroll = () => {
    const scrollEl = scrollRef.current;
    if (!scrollEl) return;

    const atLeft = scrollEl.scrollLeft === 0;
    const atRight =
      scrollEl.scrollLeft + scrollEl.clientWidth >= scrollEl.scrollWidth - 5;

    setShowLeft(!atLeft);
    setShowRight(!atRight);
  };

  useEffect(() => {
    checkScroll();
  }, []);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    setTimeout(checkScroll, 300);
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    setTimeout(checkScroll, 300);
  };

  return (
    <div className="relative w-full">
      {/* LEFT ARROW */}
      {showLeft && (
        <button
          onClick={scrollLeft}
          className="absolute left-2 top-1/2 -translate-y-1/2
             bg-white/70 backdrop-blur-md
             shadow-lg hover:shadow-xl
             border border-gray-200
             rounded-full p-3 z-20
             transition-all duration-200
             hover:bg-white hidden md:flex
             items-center justify-center"
        >
          <span className="text-gray-700 text-lg">❮</span>
        </button>
      )}

      {/* HORIZONTAL SCROLL */}
      <div
        ref={scrollRef}
        onScroll={checkScroll}
        className="flex gap-4 sm:gap-5
    overflow-x-auto scroll-smooth
    px-3 sm:px-4 md:px-6
    py-1
    no-scrollbar"
      >
        {kurtis.map((item, index) => (
          <div key={index} className="flex-shrink-0">
            <HomeProductCard {...item} />
          </div>
        ))}
      </div>

      {/* RIGHT ARROW */}
      {showRight && (
        <button
          onClick={scrollRight}
          className="absolute right-2 top-1/2 -translate-y-1/2
             bg-white/70 backdrop-blur-md
             shadow-lg hover:shadow-xl
             border border-gray-200
             rounded-full p-3 z-20
             transition-all duration-200
             hover:bg-white hidden md:flex
             items-center justify-center"
        >
          <span className="text-gray-700 text-lg">❯</span>
        </button>
      )}
    </div>
  );
};

export default HomeTopPicList;
