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

import React from "react";
import HomeProductCard from "./HomeProductCard";

const products = [
  {
    id: 1,
    name: "Elegant Blue Kurti Set",
    price: 1199,
    originalPrice: 1699,
    discount: "30% OFF",
    rating: 4.7,
    image: "/Kurtie 1.webp",
    badge: "BESTSELLER",
  },
  {
    id: 2,
    name: "Pink Embroidered Kurti",
    price: 999,
    originalPrice: 1499,
    discount: "33% OFF",
    rating: 4.5,
    image: "/Kurtie 2.webp",
    badge: "NEW ARRIVAL",
  },
  {
    id: 3,
    name: "Stylish Floral Kurti",
    price: 899,
    originalPrice: 1299,
    discount: "31% OFF",
    rating: 4.6,
    image: "/Kurtie 3.webp",
  },
  {
    id: 4,
    name: "Classic Embroidered Kurti",
    price: 1099,
    originalPrice: 1599,
    discount: "31% OFF",
    rating: 4.5,
    image: "/Kurtie 1.webp",
  },
  {
    id: 5,
    name: "Premium Cotton Kurti",
    price: 1299,
    originalPrice: 1799,
    discount: "28% OFF",
    rating: 4.8,
    image: "/Kurtie 2.webp",
  },
  {
    id: 6,
    name: "Elegant Beige Kurti",
    price: 1399,
    originalPrice: 1999,
    discount: "30% OFF",
    rating: 4.9,
    image: "/Kurtie 3.webp",
  },
  {
    id: 5,
    name: "Premium Cotton Kurti",
    price: 1299,
    originalPrice: 1799,
    discount: "28% OFF",
    rating: 4.8,
    image: "/Kurtie 2.webp",
  },
  {
    id: 6,
    name: "Elegant Beige Kurti",
    price: 1399,
    originalPrice: 1999,
    discount: "30% OFF",
    rating: 4.9,
    image: "/Kurtie 3.webp",
  },
];

const HomeProductList = () => {
  return (
    <section className="px-4 md:px-8 lg:px-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-8 gap-y-6 justify-items-center pb-12">
      {products.map((product) => (
        <HomeProductCard key={product.id} product={product} />
      ))}
    </section>
  );
};

export default HomeProductList;
