// import k1 from "/k1.webp";
// import k2 from "/k2.webp";
// import k3 from "/k3.webp";
// import k4 from "/k4.webp";

// import k1h from "/k1h.webp";
// import k2h from "/k2h.webp";
// import k3h from "/k3h.webp";
// import k4h from "/K5h.webp";

// export const kurtis = [
//   {
//     image: k1,
//     hoverImage: k1h,
//     title: "Peach Kurti",
//     price: 1299,
//     oldPrice: 1999,
//     rating: 4.6,
//   },
//   {
//     image: k2,
//     hoverImage: k2h,
//     title: "Grey Kurti",
//     price: 1399,
//     oldPrice: 2199,
//     rating: 4.5,
//   },
//   {
//     image: k3,
//     hoverImage: k3h,
//     title: "Yellow Kurti",
//     price: 1199,
//     oldPrice: 1799,
//     rating: 4.7,
//   },
//   {
//     image: k4,
//     hoverImage: k4h,
//     title: "Mint Kurti",
//     price: 1499,
//     oldPrice: 1899,
//     rating: 4.8,
//   },
//   {
//     image: k1,
//     hoverImage: k1h,
//     title: "Peach Kurti",
//     price: 1299,
//     oldPrice: 1999,
//     rating: 4.6,
//   },
//   {
//     image: k2,
//     hoverImage: k2h,
//     title: "Grey Kurti",
//     price: 1399,
//     oldPrice: 2199,
//     rating: 4.5,
//   },
//   {
//     image: k3,
//     hoverImage: k3h,
//     title: "Yellow Kurti",
//     price: 1199,
//     oldPrice: 1799,
//     rating: 4.7,
//   },
//   {
//     image: k4,
//     hoverImage: k4h,
//     title: "Mint Kurti",
//     price: 1499,
//     oldPrice: 1899,
//     rating: 4.8,
//   },
// ];

import { slugify } from "../utils/slugify";

import k1 from "/k1.webp";
import k2 from "/k2.webp";
import k3 from "/k3.webp";
import k4 from "/k4.webp";

import k1h from "/k1h.webp";
import k2h from "/k2h.webp";
import k3h from "/k3h.webp";
import k4h from "/K5h.webp";

// ✔ Keep hoverImage null for k4 (you have no hover image)
const rawKurtis = [
  {
    image: k1,
    hoverImage: k1h,
    title: "Peach Kurti",
    price: 1299,
    oldPrice: 1999,
    rating: 4.6,
  },
  {
    image: k2,
    hoverImage: k2h,
    title: "Grey Kurti",
    price: 1399,
    oldPrice: 2199,
    rating: 4.5,
  },
  {
    image: k3,
    hoverImage: k3h,
    title: "Yellow Kurti",
    price: 1199,
    oldPrice: 1799,
    rating: 4.7,
  },
  {
    image: k4,
    hoverImage: k4h, // No hover available
    title: "Mint Kurti",
    price: 1499,
    oldPrice: 1899,
    rating: 4.8,
  },
  {
    image: k1,
    hoverImage: k1h,
    title: "Peach Kurti",
    price: 1299,
    oldPrice: 1999,
    rating: 4.6,
  },
  {
    image: k2,
    hoverImage: k2h,
    title: "Grey Kurti",
    price: 1399,
    oldPrice: 2199,
    rating: 4.5,
  },
  {
    image: k3,
    hoverImage: k3h,
    title: "Yellow Kurti",
    price: 1199,
    oldPrice: 1799,
    rating: 4.7,
  },
  {
    image: k4,
    hoverImage: null,
    title: "Mint Kurti",
    price: 1499,
    oldPrice: 1899,
    rating: 4.8,
  },
];

// ⭐ Auto-Generate slug + id for all items
export const kurtis = rawKurtis.map((product, index) => ({
  ...product,
  id: `kurti-${index + 1}`,
  slug: slugify(product.title),
}));
