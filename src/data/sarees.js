// import s1 from "/s1.webp";
// import s2 from "/s2.webp";
// import s3 from "/s3.webp";
// import s4 from "/s4.webp";
// import s5 from "/s5.webp";

// import s11 from "/s1[1].webp";
// import s22 from "/s2[2].webp";
// import s33 from "/s3[3].webp";
// import s44 from "/s4[4].webp";
// import s55 from "/s5[5].webp";

// export const sarees = [
//   {
//     image: s1,
//     hoverImage: s11,
//     title: "Banarasi Saree",
//     price: 2499,
//     oldPrice: 3599,
//     rating: 4.7,
//   },
//   {
//     image: s2,
//     hoverImage: s22,
//     title: "Bridal Saree",
//     price: 2999,
//     oldPrice: 3999,
//     rating: 4.8,
//   },
//   {
//     image: s3,
//     hoverImage: s33,
//     title: "Printed Saree",
//     price: 1499,
//     oldPrice: 1999,
//     rating: 4.5,
//   },
//   {
//     image: s4,
//     hoverImage: s44,
//     title: "Silk Saree",
//     price: 3299,
//     oldPrice: 4599,
//     rating: 4.9,
//   },
//   {
//     image: s5,
//     hoverImage: s55,
//     title: "Banarasi Saree",
//     price: 2499,
//     oldPrice: 3599,
//     rating: 4.7,
//   },
//   {
//     image: s1,
//     hoverImage: s11,
//     title: "Bridal Saree",
//     price: 2999,
//     oldPrice: 3999,
//     rating: 4.8,
//   },
//   {
//     image: s2,
//     hoverImage: s22,
//     title: "Printed Saree",
//     price: 1499,
//     oldPrice: 1999,
//     rating: 4.5,
//   },
//   {
//     image: s3,
//     hoverImage: s33,
//     title: "Silk Saree",
//     price: 3299,
//     oldPrice: 4599,
//     rating: 4.9,
//   },
// ];

import { slugify } from "../utils/slugify";

import s1 from "/s1.webp";
import s2 from "/s2.webp";
import s3 from "/s3.webp";
import s4 from "/s4.webp";
import s5 from "/s5.webp";

import s11 from "/s1[1].webp";
import s22 from "/s2[2].webp";
import s33 from "/s3[3].webp";
import s44 from "/s4[4].webp";
import s55 from "/s5[5].webp";

// Raw data (without slug, without id)
const rawSarees = [
  {
    image: s1,
    hoverImage: s11,
    title: "Banarasi Saree",
    price: 2499,
    oldPrice: 3599,
    rating: 4.7,
  },
  {
    image: s2,
    hoverImage: s22,
    title: "Bridal Saree",
    price: 2999,
    oldPrice: 3999,
    rating: 4.8,
  },
  {
    image: s3,
    hoverImage: s33,
    title: "Printed Saree",
    price: 1499,
    oldPrice: 1999,
    rating: 4.5,
  },
  {
    image: s4,
    hoverImage: s44,
    title: "Silk Saree",
    price: 3299,
    oldPrice: 4599,
    rating: 4.9,
  },
  {
    image: s5,
    hoverImage: s55,
    title: "Banarasi Saree",
    price: 2499,
    oldPrice: 3599,
    rating: 4.7,
  },
  {
    image: s1,
    hoverImage: s11,
    title: "Bridal Saree",
    price: 2999,
    oldPrice: 3999,
    rating: 4.8,
  },
  {
    image: s2,
    hoverImage: s22,
    title: "Printed Saree",
    price: 1499,
    oldPrice: 1999,
    rating: 4.5,
  },
  {
    image: s3,
    hoverImage: s33,
    title: "Silk Saree",
    price: 3299,
    oldPrice: 4599,
    rating: 4.9,
  },
];

// ⭐ Auto-add slug + ID for all sarees
export const sarees = rawSarees.map((product, index) => ({
  ...product,
  id: `saree-${index + 1}`,
  slug: slugify(product.title),
}));
