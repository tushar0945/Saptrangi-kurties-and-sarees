// import React from "react";
// import HomeProductCard from "./HomeProductCard";

// const products = [
//   {
//     id: 1,
//     name: "Elegant Blue Kurti Set",
//     price: 1199,
//     originalPrice: 1699,
//     discount: "30% OFF",
//     rating: 4.7,
//     image: "/Kurtie 1.webp", // ✅ fixed path
//   },
//   {
//     id: 2,
//     name: "Pink Embroidered Kurti",
//     price: 999,
//     originalPrice: 1499,
//     discount: "33% OFF",
//     rating: 4.5,
//     image: "/Kurtie 2.webp", // ✅ fixed path
//   },
//   {
//     id: 3,
//     name: "Stylish Floral Kurti",
//     price: 899,
//     originalPrice: 1299,
//     discount: "31% OFF",
//     rating: 4.6,
//     image: "/Kurtie 3.webp", // ✅ fixed path
//   },
//   {
//     id: 4,
//     name: "Elegant Embroidered Kurti",
//     price: 1099,
//     originalPrice: 1599,
//     discount: "31% OFF",
//     rating: 4.5,
//     image: "/Kurtie 4.webp", // ✅ fixed path
//   },
// ];

// const HomeProductList = () => {
//   return (
//     <section className="px-6 md:px-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pb-12">
//       {products.map((product) => (
//         <HomeProductCard key={product.id} product={product} />
//       ))}
//     </section>
//   );
// };

// export default HomeProductList;

// import React from "react";
// import HomeProductCard from "./HomeProductCard";

// const products = [
//   {
//     id: 1,
//     name: "Elegant Blue Kurti Set",
//     price: 1199,
//     originalPrice: 1699,
//     discount: "30% OFF",
//     rating: 4.7,
//     image: "/Kurtie 1.webp",
//     badge: "BESTSELLER",
//   },
//   {
//     id: 2,
//     name: "Pink Embroidered Kurti",
//     price: 999,
//     originalPrice: 1499,
//     discount: "33% OFF",
//     rating: 4.5,
//     image: "/Kurtie 2.webp",
//     badge: "NEW ARRIVAL",
//   },
//   {
//     id: 3,
//     name: "Stylish Floral Kurti",
//     price: 899,
//     originalPrice: 1299,
//     discount: "31% OFF",
//     rating: 4.6,
//     image: "/Kurtie 3.webp",
//   },
//   {
//     id: 4,
//     name: "Classic Embroidered Kurti",
//     price: 1099,
//     originalPrice: 1599,
//     discount: "31% OFF",
//     rating: 4.5,
//     image: "/Kurtie 1.webp",
//   },
//   {
//     id: 5,
//     name: "Premium Cotton Kurti",
//     price: 1299,
//     originalPrice: 1799,
//     discount: "28% OFF",
//     rating: 4.8,
//     image: "/Kurtie 2.webp",
//   },
//   {
//     id: 6,
//     name: "Elegant Beige Kurti",
//     price: 1399,
//     originalPrice: 1999,
//     discount: "30% OFF",
//     rating: 4.9,
//     image: "/Kurtie 3.webp",
//   },
//   {
//     id: 5,
//     name: "Premium Cotton Kurti",
//     price: 1299,
//     originalPrice: 1799,
//     discount: "28% OFF",
//     rating: 4.8,
//     image: "/Kurtie 2.webp",
//   },
//   {
//     id: 6,
//     name: "Elegant Beige Kurti",
//     price: 1399,
//     originalPrice: 1999,
//     discount: "30% OFF",
//     rating: 4.9,
//     image: "/Kurtie 3.webp",
//   },
// ];

// const HomeProductList = () => {
//   return (
//     <section className="px-4 md:px-8 lg:px-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-8 gap-y-6 justify-items-center pb-12">
//       {products.map((product) => (
//         <HomeProductCard key={product.id} product={product} />
//       ))}
//     </section>
//   );
// };

// export default HomeProductList;

// import React from "react";
// import KurtiCard from "./HomeProductCard";

// const HomeProductList = () => {
//   const kurtis = [
//     {
//       image: "/k1.webp",
//       title: "Peach Embroidered Kurti Set",
//       price: 1299,
//       oldPrice: 1999,
//       rating: 4.6,
//     },
//     {
//       image: "/k2.webp",
//       title: "Grey Embroidered Kurti Set",
//       price: 1299,
//       oldPrice: 1899,
//       rating: 4.5,
//     },
//     {
//       image: "/k3.webp",
//       title: "Yellow PartyWear Kurti Set",
//       price: 1199,
//       oldPrice: 1799,
//       rating: 4.7,
//     },
//     {
//       image: "/k4.webp",
//       title: "Mint Green Embroidered Kurti Set",
//       price: 1299,
//       oldPrice: 1899,
//       rating: 4.8,
//     },
//   ];

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//       {kurtis.map((item, index) => (
//         <HomeProductCard key={index} {...item} />
//       ))}
//     </div>
//   );
// };

// export default HomeProductList;

// import React, { useRef, useState, useEffect } from "react";
// import HomeProductCard from "./HomeProductCard";

// import k1 from "/k1.webp";
// import k2 from "/k2.webp";
// import k3 from "/k3.webp";
// import k4 from "/k4.webp";

// const HomeProductList = () => {
//   const scrollRef = useRef(null);
//   const [showLeft, setShowLeft] = useState(false);
//   const [showRight, setShowRight] = useState(true);

//   const kurtis = [
//     {
//       image: k1,
//       title: "Peach Embroidered Kurti Set",
//       price: 1299,
//       oldPrice: 1999,
//       rating: 4.6,
//     },
//     {
//       image: k2,
//       title: "Grey Embroidered Kurti Set",
//       price: 1299,
//       oldPrice: 1899,
//       rating: 4.5,
//     },
//     {
//       image: k3,
//       title: "Yellow PartyWear Kurti Set",
//       price: 1199,
//       oldPrice: 1799,
//       rating: 4.7,
//     },
//     {
//       image: k4,
//       title: "Mint Green Embroidered Kurti Set",
//       price: 1299,
//       oldPrice: 1899,
//       rating: 4.8,
//     },
//     {
//       image: k1,
//       title: "Peach Embroidered Kurti Set",
//       price: 1299,
//       oldPrice: 1999,
//       rating: 4.6,
//     },
//     {
//       image: k2,
//       title: "Grey Embroidered Kurti Set",
//       price: 1299,
//       oldPrice: 1899,
//       rating: 4.5,
//     },
//     {
//       image: k3,
//       title: "Yellow PartyWear Kurti Set",
//       price: 1199,
//       oldPrice: 1799,
//       rating: 4.7,
//     },
//     {
//       image: k4,
//       title: "Mint Green Embroidered Kurti Set",
//       price: 1299,
//       oldPrice: 1899,
//       rating: 4.8,
//     },
//   ];

//   const checkScroll = () => {
//     const scrollEl = scrollRef.current;
//     if (!scrollEl) return;

//     const atLeft = scrollEl.scrollLeft === 0;
//     const atRight =
//       scrollEl.scrollLeft + scrollEl.clientWidth >= scrollEl.scrollWidth - 5;

//     setShowLeft(!atLeft);
//     setShowRight(!atRight);
//   };

//   useEffect(() => {
//     checkScroll();
//   }, []);

//   const scrollLeft = () => {
//     scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
//     setTimeout(checkScroll, 300);
//   };

//   const scrollRight = () => {
//     scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
//     setTimeout(checkScroll, 300);
//   };

//   return (
//     <div className="relative w-full">
//       {/* LEFT ARROW */}
//       {showLeft && (
//         <button
//           onClick={scrollLeft}
//           className="absolute left-2 top-1/2 -translate-y-1/2
//              bg-white/70 backdrop-blur-md
//              shadow-lg hover:shadow-xl
//              border border-gray-200
//              rounded-full p-3 z-20
//              transition-all duration-200
//              hover:bg-white hidden md:flex
//              items-center justify-center"
//         >
//           <span className="text-gray-700 text-lg">❮</span>
//         </button>
//       )}

//       {/* HORIZONTAL SCROLL */}
//       <div
//         ref={scrollRef}
//         onScroll={checkScroll}
//         className="flex gap-4 sm:gap-5
//     overflow-x-auto scroll-smooth
//     px-3 sm:px-4 md:px-6
//     py-3
//     no-scrollbar"
//       >
//         {kurtis.map((item, index) => (
//           <div key={index} className="flex-shrink-0">
//             <HomeProductCard {...item} />
//           </div>
//         ))}
//       </div>

//       {/* RIGHT ARROW */}
//       {showRight && (
//         <button
//           onClick={scrollRight}
//           className="absolute right-2 top-1/2 -translate-y-1/2
//              bg-white/70 backdrop-blur-md
//              shadow-lg hover:shadow-xl
//              border border-gray-200
//              rounded-full p-3 z-20
//              transition-all duration-200
//              hover:bg-white hidden md:flex
//              items-center justify-center"
//         >
//           <span className="text-gray-700 text-lg">❯</span>
//         </button>
//       )}
//     </div>
//   );
// };

// export default HomeProductList;

import React, { useRef, useState, useEffect } from "react";
import HomeProductCard from "./HomeProductCard";

const HomeProductList = ({ products = [] }) => {
  const scrollRef = useRef(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;

    const atLeft = el.scrollLeft === 0;
    const atRight = el.scrollLeft + el.clientWidth >= el.scrollWidth - 5;

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
    <div className="relative w-full py-1 sm:py-2">
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
      z-20 
      transition-all duration-200 
      hover:bg-white hidden md:flex 
      items-center justify-center"
        >
          <span className="text-gray-700 text-lg">❮</span>
        </button>
      )}

      {/* SCROLL LIST */}
      <div
        ref={scrollRef}
        onScroll={checkScroll}
        className="flex gap-4 sm:gap-5 overflow-x-auto scroll-smooth 
        px-3 sm:px-4 md:px-6 py-3 no-scrollbar"
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
      z-20 
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

export default HomeProductList;
