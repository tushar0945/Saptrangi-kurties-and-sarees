import React, { useRef, useState, useEffect } from "react";
import HomeProductCard from "./HomeProductCard";

const HomeTopPicList = ({ products }) => {
  // console.log("Products", products);
  const scrollRef = useRef(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

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

  // console.log(products);

  return (
    <div className="relative w-full">
      {/* LEFT ARROW */}
      {/* {showLeft && (
        <button
          onClick={scrollLeft}
          className="absolute left-2 top-1/2 -translate-y-[110%]
      bg-white/80 backdrop-blur-md
      shadow-lg hover:shadow-xl
      border border-gray-200
      rounded-full p-3 z-20
      transition-all duration-200
      hover:bg-white hidden md:flex
      items-center justify-center"
        >
          <span className="text-gray-700 text-lg">❮</span>
        </button>
      )} */}

      {showLeft && (
        <button
          onClick={scrollLeft}
          className="absolute left-2 top-1/2 -translate-y-[110%]
      bg-white/80 backdrop-blur-md
      shadow-lg hover:shadow-xl
      border border-gray-200
      w-10 h-10 rounded-full 
      z-20 flex items-center justify-center
      transition-all duration-200 hover:bg-white hidden md:flex"
        >
          <span className="text-gray-700 text-lg">❮</span>
        </button>
      )}

      {/* HORIZONTAL SCROLL */}
      <div
        ref={scrollRef}
        onScroll={checkScroll}
        className="flex gap-4 sm:gap-5 overflow-x-auto scroll-smooth
                   px-3 sm:px-4 md:px-6 py-1 no-scrollbar"
      >
        {products.map((item, index) => (
          <div key={index} className="flex-shrink-0">
            <HomeProductCard {...item} />
          </div>
        ))}
      </div>

      {/* RIGHT ARROW */}
      {/* {showRight && (
        <button
          onClick={scrollRight}
          className="absolute right-2 top-1/2 -translate-y-[110%]
      bg-white/80 backdrop-blur-md
      shadow-lg hover:shadow-xl
      border border-gray-200
      rounded-full p-3 z-20
      transition-all duration-200
      hover:bg-white hidden md:flex
      items-center justify-center"
        >
          <span className="text-gray-700 text-lg">❯</span>
        </button>
      )} */}
      {showRight && (
        <button
          onClick={scrollRight}
          className="absolute right-2 top-1/2 -translate-y-[110%]
      bg-white/80 backdrop-blur-md
      shadow-lg hover:shadow-xl
      border border-gray-200
      w-10 h-10 rounded-full
      z-20 flex items-center justify-center
      transition-all duration-200 hover:bg-white hidden md:flex"
        >
          <span className="text-gray-700 text-lg">❯</span>
        </button>
      )}
    </div>
  );
};

export default HomeTopPicList;
