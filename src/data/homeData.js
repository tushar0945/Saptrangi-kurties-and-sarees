// import { slugify } from "../utils/slugify";

// // ---------------- CAROUSEL BANNERS ----------------
// import c1 from "/c1.webp";
// import c2 from "/c2.jpg";
// import sc1 from "/sc1.png";
// import sc2 from "/sc2.png";

// // ---------------- CATEGORY BANNERS ----------------
// import sareeBanner from "/b1.webp";
// import kurtisBanner from "/b2.webp";
// import lehengaBanner from "/b3.webp";

// // ---------------- PRODUCT IMAGES ----------------
// // Kurtis
// import k1 from "/k1.webp";
// import k2 from "/k2.webp";
// import k3 from "/k3.webp";
// import k4 from "/k4.webp";

// import k1h from "/k1h.webp";
// import k2h from "/k2h.webp";
// import k3h from "/k3h.webp";
// import k4h from "/K5h.webp";

// // Sarees
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

// // Lehengas
// import l1 from "/L1.webp";
// import l2 from "/L2.webp";
// import l3 from "/L3.webp";
// import l4 from "/L4.webp";
// import l5 from "/L5.webp";

// import l1h from "/L1h.webp";
// import l2h from "/L2h.webp";
// import l3h from "/L3h.webp";
// import l4h from "/L4h.webp";
// import l5h from "/L5h.webp";

// // -------------------------------------------------------
// // ⭐ BUILD PRODUCT LIST HELPERS
// // -------------------------------------------------------
// const addMeta = (list, prefix) =>
//   list.map((product, index) => ({
//     ...product,
//     id: `${prefix}-${index + 1}`,
//     slug: slugify(product.name),
//   }));

// // -------------------------------------------------------
// // ⭐ RAW PRODUCT LISTS
// // -------------------------------------------------------
// const rawKurtis = [
//   {
//     image: k1,
//     hoverImage: k1h,
//     name: "Peach Kurti",
//     price: 1299,
//     oldPrice: 1999,
//     rating: 4.6,
//   },
//   {
//     image: k2,
//     hoverImage: k2h,
//     name:
//       "Special panjab imported dashing stylish Grey Kurti dashing stylish Grey Kurti",
//     price: 1399,
//     oldPrice: 2199,
//     rating: 4.5,
//   },
//   {
//     image: k3,
//     hoverImage: k3h,
//     name: "Yellow Kurti",
//     price: 1199,
//     oldPrice: 1799,
//     rating: 4.7,
//   },
//   {
//     image: k4,
//     hoverImage: k4h, // No hover available
//     name: "Mint Kurti",
//     price: 1499,
//     oldPrice: 1899,
//     rating: 4.8,
//   },
//   {
//     image: k1,
//     hoverImage: k1h,
//     name: "Peach Kurti",
//     price: 1299,
//     oldPrice: 1999,
//     rating: 4.6,
//   },
//   {
//     image: k2,
//     hoverImage: k2h,
//     name: "Grey Kurti",
//     price: 1399,
//     oldPrice: 2199,
//     rating: 4.5,
//   },
//   {
//     image: k3,
//     hoverImage: k3h,
//     name: "Yellow Kurti",
//     price: 1199,
//     oldPrice: 1799,
//     rating: 4.7,
//   },
//   {
//     image: k4,
//     hoverImage: null,
//     name: "Mint Kurti",
//     price: 1499,
//     oldPrice: 1899,
//     rating: 4.8,
//   },
// ];

// const rawSarees = [
//   {
//     image: s1,
//     hoverImage: s11,
//     name: "Banarasi Saree",
//     price: 2499,
//     oldPrice: 3599,
//     rating: 4.7,
//   },
//   {
//     image: s2,
//     hoverImage: s22,
//     name: "Bridal Saree",
//     price: 2999,
//     oldPrice: 3999,
//     rating: 4.8,
//   },
//   {
//     image: s3,
//     hoverImage: s33,
//     name: "Printed Saree",
//     price: 1499,
//     oldPrice: 1999,
//     rating: 4.5,
//   },
//   {
//     image: s4,
//     hoverImage: s44,
//     name: "Silk Saree",
//     price: 3299,
//     oldPrice: 4599,
//     rating: 4.9,
//   },
//   {
//     image: s5,
//     hoverImage: s55,
//     name: "Banarasi Saree",
//     price: 2499,
//     oldPrice: 3599,
//     rating: 4.7,
//   },
//   {
//     image: s1,
//     hoverImage: s11,
//     name: "Bridal Saree",
//     price: 2999,
//     oldPrice: 3999,
//     rating: 4.8,
//   },
//   {
//     image: s2,
//     hoverImage: s22,
//     name: "Printed Saree",
//     price: 1499,
//     oldPrice: 1999,
//     rating: 4.5,
//   },
//   {
//     image: s3,
//     hoverImage: s33,
//     name: "Silk Saree",
//     price: 3299,
//     oldPrice: 4599,
//     rating: 4.9,
//   },
// ];

// const rawLehengas = [
//   {
//     image: l1,
//     hoverImage: l1h,
//     name: "Black Hoodie",
//     price: 899,
//     oldPrice: 1899,
//     rating: 4.5,
//   },
//   {
//     image: l2,
//     hoverImage: l2h,
//     name: "Printed Hoodie",
//     price: 999,
//     oldPrice: 2099,
//     rating: 4.6,
//   },
//   {
//     image: l3,
//     hoverImage: l3h,
//     name: "Zipper Hoodie",
//     price: 1199,
//     oldPrice: 2499,
//     rating: 4.4,
//   },
//   {
//     image: l4,
//     hoverImage: l4h,
//     name: "Oversized Hoodie",
//     price: 1499,
//     oldPrice: 2999,
//     rating: 4.7,
//   },
//   {
//     image: l5,
//     hoverImage: l5h,
//     name: "Black Hoodie",
//     price: 899,
//     oldPrice: 1899,
//     rating: 4.5,
//   },
//   {
//     image: l1,
//     hoverImage: l1h,
//     name: "Printed Hoodie",
//     price: 999,
//     oldPrice: 2099,
//     rating: 4.6,
//   },
//   {
//     image: l3,
//     hoverImage: l3h,
//     name: "Zipper Hoodie",
//     price: 1199,
//     oldPrice: 2499,
//     rating: 4.4,
//   },
//   {
//     image: l4,
//     hoverImage: l4h,
//     name: "Oversized Hoodie",
//     price: 1499,
//     oldPrice: 2999,
//     rating: 4.7,
//   },
// ];

// // FINAL VERSION WITH SLUG + ID
// const kurtis = addMeta(rawKurtis, "kurti");
// const sarees = addMeta(rawSarees, "saree");
// const lehengas = addMeta(rawLehengas, "lehenga");

// // -------------------------------------------------------
// // ⭐ FINAL HOME DATA (Exact API structure)
// // -------------------------------------------------------
// export const homeData = {
//   carousel: {
//     desktop: [
//       { image: c1, alt: "Desktop Banner 1" },
//       { image: c2, alt: "Desktop Banner 2" },
//     ],
//     mobile: [
//       { image: sc1, alt: "Mobile Banner 1" },
//       { image: sc2, alt: "Mobile Banner 2" },
//     ],
//   },

//   topPicks: kurtis, // OR select based on top_pick flag

//   categories: [
//     {
//       name: "Designer Sarees",
//       categorySlug: "designer-sarees",
//       bannerImage: sareeBanner,
//       products: sarees,
//     },
//     {
//       name: "Designer Kurtis",
//       categorySlug: "designer-kurtis",
//       bannerImage: kurtisBanner,
//       products: kurtis,
//     },
//     {
//       name: "Stylish Lehengas",
//       categorySlug: "stylish-lehengas",
//       bannerImage: lehengaBanner,
//       products: lehengas,
//     },
//   ],
// };

import { slugify } from "../utils/slugify";

// ---------------- CAROUSEL BANNERS ----------------
import c1 from "/c1.webp";
import c2 from "/c2.jpg";
import sc1 from "/sc1.png";
import sc2 from "/sc2.png";

// ---------------- CATEGORY BANNERS ----------------
import sareeBanner from "/b1.webp";
import kurtisBanner from "/b2.webp";
import lehengaBanner from "/b3.webp";

// ---------------- PRODUCT IMAGES ----------------
// Kurtis
import k1 from "/k1.webp";
import k2 from "/k2.webp";
import k3 from "/k3.webp";
import k4 from "/k4.webp";

import k1h from "/k1h.webp";
import k2h from "/k2h.webp";
import k3h from "/k3h.webp";
import k4h from "/K5h.webp";

// Sarees
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

// Lehengas / Hoodies
import l1 from "/L1.webp";
import l2 from "/L2.webp";
import l3 from "/L3.webp";
import l4 from "/L4.webp";
import l5 from "/L5.webp";

import l1h from "/L1h.webp";
import l2h from "/L2h.webp";
import l3h from "/L3h.webp";
import l4h from "/L4h.webp";
import l5h from "/L5h.webp";

// -------------------------------------------------------
// ⭐ ADD META (ID + SLUG)
// -------------------------------------------------------
const addMeta = (list, prefix) =>
  list.map((product, index) => ({
    ...product,
    id: `${prefix}-${index + 1}`,
    slug: slugify(product.name),
  }));

// -------------------------------------------------------
// ⭐ FULL PRODUCT STRUCTURE (KURTIS)
// -------------------------------------------------------
const rawKurtis = [
  {
    image: k1,
    hoverImage: k1h,
    extraImages: [k1, k1h],

    categorySlug: "designer-kurtis",

    name: "Peach Kurti",
    price: 1299,
    oldPrice: 1999,
    rating: 4.6,

    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
    stock: { XS: 10, S: 12, M: 0, L: 6, XL: 8, "2XL": 5 },

    highlights: [
      { label: "Fabric", value: "Pure Cotton" },
      { label: "Sleeve", value: "3/4th Sleeve Design" },
      { label: "Comfort", value: "Soft & Breathable" },
      { label: "Occasion", value: "Daily & Casual Wear" },
    ],

    description: `This peach kurti is crafted from breathable cotton, offering comfort and elegance.`,
    details: `
      • Fabric: 100% Cotton  
      • Fit: Regular  
      • Neck: Round Neck  
      • Sleeve: 3/4th  
    `,
    returnPolicy: `7-day return or exchange`,

    reviews: [
      {
        name: "Golu Chauhan",
        stars: 4,
        name: "Good",
        comment: "Quality is good, delivery on time.",
        date: "3 months ago",
        likes: 2,
        dislikes: 1,
      },
      {
        name: "Nita Ambani",
        stars: 5,
        name: "Good",
        comment: "Quality is good, delivery on time.",
        date: "3 months ago",
        likes: 2,
        dislikes: 1,
      },
      {
        name: "Radha Ambani",
        stars: 2,
        name: "Good",
        comment: "Quality is good, delivery on time.",
        date: "3 months ago",
        likes: 2,
        dislikes: 1,
      },
    ],

    tags: ["Fabric Quality", "Style", "Comfort", "Stitching Quality"],

    related: ["grey-kurti", "yellow-kurti"],
  },

  {
    image: k2,
    hoverImage: k2h,
    extraImages: [k2, k2h],

    categorySlug: "designer-kurtis",

    name: "Grey Imported Kurti",
    price: 1399,
    oldPrice: 2199,
    rating: 4.5,

    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
    stock: { XS: 15, S: 7, M: 9, L: 3, XL: 0, "2XL": 2 },

    highlights: [
      { label: "Fabric", value: "Pure Cotton" },
      { label: "Sleeve", value: "3/4th Sleeve Design" },
      { label: "Comfort", value: "Soft & Breathable" },
      { label: "Occasion", value: "Daily & Casual Wear" },
    ],
    description: `Premium imported grey kurti suitable for office & party wear.`,
    details: `
      • Fabric: Imported Rayon  
      • Fit: Slim  
      • Neck: V-Neck  
    `,
    returnPolicy: `7-day return available`,

    reviews: [
      {
        name: "Riya",
        rating: 5,
        comment: "Loved the fabric.",
        date: "2024-02-10",
      },
    ],

    related: ["peach-kurti", "yellow-kurti"],
  },

  {
    image: k3,
    hoverImage: k3h,
    extraImages: [k3, k3h],

    categorySlug: "designer-kurtis",

    name: "Yellow Kurti",
    price: 1199,
    oldPrice: 1799,
    rating: 4.7,

    sizes: ["S", "M", "L", "XL"],
    stock: { S: 10, M: 15, L: 5, XL: 3 },

    highlights: [
      { label: "Fabric", value: "Pure Cotton" },
      { label: "Sleeve", value: "3/4th Sleeve Design" },
      { label: "Comfort", value: "Soft & Breathable" },
      { label: "Occasion", value: "Daily & Casual Wear" },
    ],
    description: `Bright yellow printed kurti for festive & casual wear.`,
    details: `
      • Fabric: Rayon Blend  
      • Fit: Regular  
      • Sleeve: Full Sleeve  
    `,
    returnPolicy: `7-day easy returns`,

    reviews: [],

    related: ["peach-kurti"],
  },

  {
    image: k4,
    hoverImage: k4h,
    extraImages: [k4],

    categorySlug: "designer-kurtis",

    name: "Mint Kurti",
    price: 1499,
    oldPrice: 1899,
    rating: 4.8,

    sizes: ["S", "M", "L", "XL", "2XL"],
    stock: { S: 8, M: 7, L: 1, XL: 0, "2XL": 6 },

    highlights: ["Pastel Shade", "Cotton Fabric", "Soft on Skin"],

    description: `Light pastel mint kurti crafted with premium cotton.`,
    details: `
      • Fabric: Cotton  
      • Fit: Regular  
    `,
    returnPolicy: `7-day return`,

    reviews: [],

    related: ["grey-kurti"],
  },
  {
    image: k1,
    hoverImage: k1h,
    extraImages: [k1, k1h],

    categorySlug: "designer-kurtis",

    name: "Peach Kurti",
    price: 1299,
    oldPrice: 1999,
    rating: 4.6,

    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
    stock: { XS: 10, S: 12, M: 0, L: 6, XL: 8, "2XL": 5 },

    highlights: [
      { label: "Fabric", value: "Pure Cotton" },
      { label: "Sleeve", value: "3/4th Sleeve Design" },
      { label: "Comfort", value: "Soft & Breathable" },
      { label: "Occasion", value: "Daily & Casual Wear" },
    ],

    description: `This peach kurti is crafted from breathable cotton, offering comfort and elegance.`,
    details: `
      • Fabric: 100% Cotton  
      • Fit: Regular  
      • Neck: Round Neck  
      • Sleeve: 3/4th  
    `,
    returnPolicy: `7-day return or exchange`,

    reviews: [
      {
        name: "Golu Chauhan",
        stars: 4,
        name: "Good",
        comment: "Quality is good, delivery on time.",
        date: "3 months ago",
        likes: 2,
        dislikes: 1,
      },
      {
        name: "Nita Ambani",
        stars: 5,
        name: "Good",
        comment: "Quality is good, delivery on time.",
        date: "3 months ago",
        likes: 2,
        dislikes: 1,
      },
      {
        name: "Radha Ambani",
        stars: 2,
        name: "Good",
        comment: "Quality is good, delivery on time.",
        date: "3 months ago",
        likes: 2,
        dislikes: 1,
      },
    ],

    tags: ["Fabric Quality", "Style", "Comfort", "Stitching Quality"],

    related: ["grey-kurti", "yellow-kurti"],
  },

  {
    image: k2,
    hoverImage: k2h,
    extraImages: [k2, k2h],

    categorySlug: "designer-kurtis",

    name: "Grey Imported Kurti",
    price: 1399,
    oldPrice: 2199,
    rating: 4.5,

    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
    stock: { XS: 15, S: 7, M: 9, L: 3, XL: 0, "2XL": 2 },

    highlights: [
      { label: "Fabric", value: "Pure Cotton" },
      { label: "Sleeve", value: "3/4th Sleeve Design" },
      { label: "Comfort", value: "Soft & Breathable" },
      { label: "Occasion", value: "Daily & Casual Wear" },
    ],
    description: `Premium imported grey kurti suitable for office & party wear.`,
    details: `
      • Fabric: Imported Rayon  
      • Fit: Slim  
      • Neck: V-Neck  
    `,
    returnPolicy: `7-day return available`,

    reviews: [
      {
        name: "Riya",
        rating: 5,
        comment: "Loved the fabric.",
        date: "2024-02-10",
      },
    ],

    related: ["peach-kurti", "yellow-kurti"],
  },

  {
    image: k3,
    hoverImage: k3h,
    extraImages: [k3, k3h],

    categorySlug: "designer-kurtis",

    name: "Yellow Kurti",
    price: 1199,
    oldPrice: 1799,
    rating: 4.7,

    sizes: ["S", "M", "L", "XL"],
    stock: { S: 10, M: 15, L: 5, XL: 3 },

    highlights: [
      { label: "Fabric", value: "Pure Cotton" },
      { label: "Sleeve", value: "3/4th Sleeve Design" },
      { label: "Comfort", value: "Soft & Breathable" },
      { label: "Occasion", value: "Daily & Casual Wear" },
    ],
    description: `Bright yellow printed kurti for festive & casual wear.`,
    details: `
      • Fabric: Rayon Blend  
      • Fit: Regular  
      • Sleeve: Full Sleeve  
    `,
    returnPolicy: `7-day easy returns`,

    reviews: [],

    related: ["peach-kurti"],
  },

  {
    image: k4,
    hoverImage: k4h,
    extraImages: [k4],

    categorySlug: "designer-kurtis",

    name: "Mint Kurti",
    price: 1499,
    oldPrice: 1899,
    rating: 4.8,

    sizes: ["S", "M", "L", "XL", "2XL"],
    stock: { S: 8, M: 7, L: 1, XL: 0, "2XL": 6 },

    highlights: ["Pastel Shade", "Cotton Fabric", "Soft on Skin"],

    description: `Light pastel mint kurti crafted with premium cotton.`,
    details: `
      • Fabric: Cotton  
      • Fit: Regular  
    `,
    returnPolicy: `7-day return`,

    reviews: [],

    related: ["grey-kurti"],
  },
  {
    image: k1,
    hoverImage: k1h,
    extraImages: [k1, k1h],

    categorySlug: "designer-kurtis",

    name: "Peach Kurti",
    price: 1299,
    oldPrice: 1999,
    rating: 4.6,

    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
    stock: { XS: 10, S: 12, M: 0, L: 6, XL: 8, "2XL": 5 },

    highlights: [
      { label: "Fabric", value: "Pure Cotton" },
      { label: "Sleeve", value: "3/4th Sleeve Design" },
      { label: "Comfort", value: "Soft & Breathable" },
      { label: "Occasion", value: "Daily & Casual Wear" },
    ],

    description: `This peach kurti is crafted from breathable cotton, offering comfort and elegance.`,
    details: `
      • Fabric: 100% Cotton  
      • Fit: Regular  
      • Neck: Round Neck  
      • Sleeve: 3/4th  
    `,
    returnPolicy: `7-day return or exchange`,

    reviews: [
      {
        name: "Golu Chauhan",
        stars: 4,
        name: "Good",
        comment: "Quality is good, delivery on time.",
        date: "3 months ago",
        likes: 2,
        dislikes: 1,
      },
      {
        name: "Nita Ambani",
        stars: 5,
        name: "Good",
        comment: "Quality is good, delivery on time.",
        date: "3 months ago",
        likes: 2,
        dislikes: 1,
      },
      {
        name: "Radha Ambani",
        stars: 2,
        name: "Good",
        comment: "Quality is good, delivery on time.",
        date: "3 months ago",
        likes: 2,
        dislikes: 1,
      },
    ],

    tags: ["Fabric Quality", "Style", "Comfort", "Stitching Quality"],

    related: ["grey-kurti", "yellow-kurti"],
  },

  {
    image: k2,
    hoverImage: k2h,
    extraImages: [k2, k2h],

    categorySlug: "designer-kurtis",

    name: "Grey Imported Kurti",
    price: 1399,
    oldPrice: 2199,
    rating: 4.5,

    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
    stock: { XS: 15, S: 7, M: 9, L: 3, XL: 0, "2XL": 2 },

    highlights: [
      { label: "Fabric", value: "Pure Cotton" },
      { label: "Sleeve", value: "3/4th Sleeve Design" },
      { label: "Comfort", value: "Soft & Breathable" },
      { label: "Occasion", value: "Daily & Casual Wear" },
    ],
    description: `Premium imported grey kurti suitable for office & party wear.`,
    details: `
      • Fabric: Imported Rayon  
      • Fit: Slim  
      • Neck: V-Neck  
    `,
    returnPolicy: `7-day return available`,

    reviews: [
      {
        name: "Riya",
        rating: 5,
        comment: "Loved the fabric.",
        date: "2024-02-10",
      },
    ],

    related: ["peach-kurti", "yellow-kurti"],
  },

  {
    image: k3,
    hoverImage: k3h,
    extraImages: [k3, k3h],

    categorySlug: "designer-kurtis",

    name: "Yellow Kurti",
    price: 1199,
    oldPrice: 1799,
    rating: 4.7,

    sizes: ["S", "M", "L", "XL"],
    stock: { S: 10, M: 15, L: 5, XL: 3 },

    highlights: [
      { label: "Fabric", value: "Pure Cotton" },
      { label: "Sleeve", value: "3/4th Sleeve Design" },
      { label: "Comfort", value: "Soft & Breathable" },
      { label: "Occasion", value: "Daily & Casual Wear" },
    ],
    description: `Bright yellow printed kurti for festive & casual wear.`,
    details: `
      • Fabric: Rayon Blend  
      • Fit: Regular  
      • Sleeve: Full Sleeve  
    `,
    returnPolicy: `7-day easy returns`,

    reviews: [],

    related: ["peach-kurti"],
  },

  {
    image: k4,
    hoverImage: k4h,
    extraImages: [k4],

    categorySlug: "designer-kurtis",

    name: "Mint Kurti",
    price: 1499,
    oldPrice: 1899,
    rating: 4.8,

    sizes: ["S", "M", "L", "XL", "2XL"],
    stock: { S: 8, M: 7, L: 1, XL: 0, "2XL": 6 },

    highlights: ["Pastel Shade", "Cotton Fabric", "Soft on Skin"],

    description: `Light pastel mint kurti crafted with premium cotton.`,
    details: `
      • Fabric: Cotton  
      • Fit: Regular  
    `,
    returnPolicy: `7-day return`,

    reviews: [],

    related: ["grey-kurti"],
  },
  {
    image: k1,
    hoverImage: k1h,
    extraImages: [k1, k1h],

    categorySlug: "designer-kurtis",

    name: "Peach Kurti",
    price: 1299,
    oldPrice: 1999,
    rating: 4.6,

    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
    stock: { XS: 10, S: 12, M: 0, L: 6, XL: 8, "2XL": 5 },

    highlights: [
      { label: "Fabric", value: "Pure Cotton" },
      { label: "Sleeve", value: "3/4th Sleeve Design" },
      { label: "Comfort", value: "Soft & Breathable" },
      { label: "Occasion", value: "Daily & Casual Wear" },
    ],

    description: `This peach kurti is crafted from breathable cotton, offering comfort and elegance.`,
    details: `
      • Fabric: 100% Cotton  
      • Fit: Regular  
      • Neck: Round Neck  
      • Sleeve: 3/4th  
    `,
    returnPolicy: `7-day return or exchange`,

    reviews: [
      {
        name: "Golu Chauhan",
        stars: 4,
        name: "Good",
        comment: "Quality is good, delivery on time.",
        date: "3 months ago",
        likes: 2,
        dislikes: 1,
      },
      {
        name: "Nita Ambani",
        stars: 5,
        name: "Good",
        comment: "Quality is good, delivery on time.",
        date: "3 months ago",
        likes: 2,
        dislikes: 1,
      },
      {
        name: "Radha Ambani",
        stars: 2,
        name: "Good",
        comment: "Quality is good, delivery on time.",
        date: "3 months ago",
        likes: 2,
        dislikes: 1,
      },
    ],

    tags: ["Fabric Quality", "Style", "Comfort", "Stitching Quality"],

    related: ["grey-kurti", "yellow-kurti"],
  },

  {
    image: k2,
    hoverImage: k2h,
    extraImages: [k2, k2h],

    categorySlug: "designer-kurtis",

    name: "Grey Imported Kurti",
    price: 1399,
    oldPrice: 2199,
    rating: 4.5,

    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
    stock: { XS: 15, S: 7, M: 9, L: 3, XL: 0, "2XL": 2 },

    highlights: [
      { label: "Fabric", value: "Pure Cotton" },
      { label: "Sleeve", value: "3/4th Sleeve Design" },
      { label: "Comfort", value: "Soft & Breathable" },
      { label: "Occasion", value: "Daily & Casual Wear" },
    ],
    description: `Premium imported grey kurti suitable for office & party wear.`,
    details: `
      • Fabric: Imported Rayon  
      • Fit: Slim  
      • Neck: V-Neck  
    `,
    returnPolicy: `7-day return available`,

    reviews: [
      {
        name: "Riya",
        rating: 5,
        comment: "Loved the fabric.",
        date: "2024-02-10",
      },
    ],

    related: ["peach-kurti", "yellow-kurti"],
  },

  {
    image: k3,
    hoverImage: k3h,
    extraImages: [k3, k3h],

    categorySlug: "designer-kurtis",

    name: "Yellow Kurti",
    price: 1199,
    oldPrice: 1799,
    rating: 4.7,

    sizes: ["S", "M", "L", "XL"],
    stock: { S: 10, M: 15, L: 5, XL: 3 },

    highlights: [
      { label: "Fabric", value: "Pure Cotton" },
      { label: "Sleeve", value: "3/4th Sleeve Design" },
      { label: "Comfort", value: "Soft & Breathable" },
      { label: "Occasion", value: "Daily & Casual Wear" },
    ],
    description: `Bright yellow printed kurti for festive & casual wear.`,
    details: `
      • Fabric: Rayon Blend  
      • Fit: Regular  
      • Sleeve: Full Sleeve  
    `,
    returnPolicy: `7-day easy returns`,

    reviews: [],

    related: ["peach-kurti"],
  },

  {
    image: k4,
    hoverImage: k4h,
    extraImages: [k4],

    categorySlug: "designer-kurtis",

    name: "Mint Kurti",
    price: 1499,
    oldPrice: 1899,
    rating: 4.8,

    sizes: ["S", "M", "L", "XL", "2XL"],
    stock: { S: 8, M: 7, L: 1, XL: 0, "2XL": 6 },

    highlights: ["Pastel Shade", "Cotton Fabric", "Soft on Skin"],

    description: `Light pastel mint kurti crafted with premium cotton.`,
    details: `
      • Fabric: Cotton  
      • Fit: Regular  
    `,
    returnPolicy: `7-day return`,

    reviews: [],

    related: ["grey-kurti"],
  },
  {
    image: k1,
    hoverImage: k1h,
    extraImages: [k1, k1h],

    categorySlug: "designer-kurtis",

    name: "Peach Kurti",
    price: 1299,
    oldPrice: 1999,
    rating: 4.6,

    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
    stock: { XS: 10, S: 12, M: 0, L: 6, XL: 8, "2XL": 5 },

    highlights: [
      { label: "Fabric", value: "Pure Cotton" },
      { label: "Sleeve", value: "3/4th Sleeve Design" },
      { label: "Comfort", value: "Soft & Breathable" },
      { label: "Occasion", value: "Daily & Casual Wear" },
    ],

    description: `This peach kurti is crafted from breathable cotton, offering comfort and elegance.`,
    details: `
      • Fabric: 100% Cotton  
      • Fit: Regular  
      • Neck: Round Neck  
      • Sleeve: 3/4th  
    `,
    returnPolicy: `7-day return or exchange`,

    reviews: [
      {
        name: "Golu Chauhan",
        stars: 4,
        name: "Good",
        comment: "Quality is good, delivery on time.",
        date: "3 months ago",
        likes: 2,
        dislikes: 1,
      },
      {
        name: "Nita Ambani",
        stars: 5,
        name: "Good",
        comment: "Quality is good, delivery on time.",
        date: "3 months ago",
        likes: 2,
        dislikes: 1,
      },
      {
        name: "Radha Ambani",
        stars: 2,
        name: "Good",
        comment: "Quality is good, delivery on time.",
        date: "3 months ago",
        likes: 2,
        dislikes: 1,
      },
    ],

    tags: ["Fabric Quality", "Style", "Comfort", "Stitching Quality"],

    related: ["grey-kurti", "yellow-kurti"],
  },

  {
    image: k2,
    hoverImage: k2h,
    extraImages: [k2, k2h],

    categorySlug: "designer-kurtis",

    name: "Grey Imported Kurti",
    price: 1399,
    oldPrice: 2199,
    rating: 4.5,

    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
    stock: { XS: 15, S: 7, M: 9, L: 3, XL: 0, "2XL": 2 },

    highlights: [
      { label: "Fabric", value: "Pure Cotton" },
      { label: "Sleeve", value: "3/4th Sleeve Design" },
      { label: "Comfort", value: "Soft & Breathable" },
      { label: "Occasion", value: "Daily & Casual Wear" },
    ],
    description: `Premium imported grey kurti suitable for office & party wear.`,
    details: `
      • Fabric: Imported Rayon  
      • Fit: Slim  
      • Neck: V-Neck  
    `,
    returnPolicy: `7-day return available`,

    reviews: [
      {
        name: "Riya",
        rating: 5,
        comment: "Loved the fabric.",
        date: "2024-02-10",
      },
    ],

    related: ["peach-kurti", "yellow-kurti"],
  },

  {
    image: k3,
    hoverImage: k3h,
    extraImages: [k3, k3h],

    categorySlug: "designer-kurtis",

    name: "Yellow Kurti",
    price: 1199,
    oldPrice: 1799,
    rating: 4.7,

    sizes: ["S", "M", "L", "XL"],
    stock: { S: 10, M: 15, L: 5, XL: 3 },

    highlights: [
      { label: "Fabric", value: "Pure Cotton" },
      { label: "Sleeve", value: "3/4th Sleeve Design" },
      { label: "Comfort", value: "Soft & Breathable" },
      { label: "Occasion", value: "Daily & Casual Wear" },
    ],
    description: `Bright yellow printed kurti for festive & casual wear.`,
    details: `
      • Fabric: Rayon Blend  
      • Fit: Regular  
      • Sleeve: Full Sleeve  
    `,
    returnPolicy: `7-day easy returns`,

    reviews: [],

    related: ["peach-kurti"],
  },

  {
    image: k4,
    hoverImage: k4h,
    extraImages: [k4],

    categorySlug: "designer-kurtis",

    name: "Mint Kurti",
    price: 1499,
    oldPrice: 1899,
    rating: 4.8,

    sizes: ["S", "M", "L", "XL", "2XL"],
    stock: { S: 8, M: 7, L: 1, XL: 0, "2XL": 6 },

    highlights: ["Pastel Shade", "Cotton Fabric", "Soft on Skin"],

    description: `Light pastel mint kurti crafted with premium cotton.`,
    details: `
      • Fabric: Cotton  
      • Fit: Regular  
    `,
    returnPolicy: `7-day return`,

    reviews: [],

    related: ["grey-kurti"],
  },
  {
    image: k1,
    hoverImage: k1h,
    extraImages: [k1, k1h],

    categorySlug: "designer-kurtis",

    name: "Peach Kurti",
    price: 1299,
    oldPrice: 1999,
    rating: 4.6,

    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
    stock: { XS: 10, S: 12, M: 0, L: 6, XL: 8, "2XL": 5 },

    highlights: [
      { label: "Fabric", value: "Pure Cotton" },
      { label: "Sleeve", value: "3/4th Sleeve Design" },
      { label: "Comfort", value: "Soft & Breathable" },
      { label: "Occasion", value: "Daily & Casual Wear" },
    ],

    description: `This peach kurti is crafted from breathable cotton, offering comfort and elegance.`,
    details: `
      • Fabric: 100% Cotton  
      • Fit: Regular  
      • Neck: Round Neck  
      • Sleeve: 3/4th  
    `,
    returnPolicy: `7-day return or exchange`,

    reviews: [
      {
        name: "Golu Chauhan",
        stars: 4,
        name: "Good",
        comment: "Quality is good, delivery on time.",
        date: "3 months ago",
        likes: 2,
        dislikes: 1,
      },
      {
        name: "Nita Ambani",
        stars: 5,
        name: "Good",
        comment: "Quality is good, delivery on time.",
        date: "3 months ago",
        likes: 2,
        dislikes: 1,
      },
      {
        name: "Radha Ambani",
        stars: 2,
        name: "Good",
        comment: "Quality is good, delivery on time.",
        date: "3 months ago",
        likes: 2,
        dislikes: 1,
      },
    ],

    tags: ["Fabric Quality", "Style", "Comfort", "Stitching Quality"],

    related: ["grey-kurti", "yellow-kurti"],
  },

  {
    image: k2,
    hoverImage: k2h,
    extraImages: [k2, k2h],

    categorySlug: "designer-kurtis",

    name: "Grey Imported Kurti",
    price: 1399,
    oldPrice: 2199,
    rating: 4.5,

    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
    stock: { XS: 15, S: 7, M: 9, L: 3, XL: 0, "2XL": 2 },

    highlights: [
      { label: "Fabric", value: "Pure Cotton" },
      { label: "Sleeve", value: "3/4th Sleeve Design" },
      { label: "Comfort", value: "Soft & Breathable" },
      { label: "Occasion", value: "Daily & Casual Wear" },
    ],
    description: `Premium imported grey kurti suitable for office & party wear.`,
    details: `
      • Fabric: Imported Rayon  
      • Fit: Slim  
      • Neck: V-Neck  
    `,
    returnPolicy: `7-day return available`,

    reviews: [
      {
        name: "Riya",
        rating: 5,
        comment: "Loved the fabric.",
        date: "2024-02-10",
      },
    ],

    related: ["peach-kurti", "yellow-kurti"],
  },

  {
    image: k3,
    hoverImage: k3h,
    extraImages: [k3, k3h],

    categorySlug: "designer-kurtis",

    name: "Yellow Kurti",
    price: 1199,
    oldPrice: 1799,
    rating: 4.7,

    sizes: ["S", "M", "L", "XL"],
    stock: { S: 10, M: 15, L: 5, XL: 3 },

    highlights: [
      { label: "Fabric", value: "Pure Cotton" },
      { label: "Sleeve", value: "3/4th Sleeve Design" },
      { label: "Comfort", value: "Soft & Breathable" },
      { label: "Occasion", value: "Daily & Casual Wear" },
    ],
    description: `Bright yellow printed kurti for festive & casual wear.`,
    details: `
      • Fabric: Rayon Blend  
      • Fit: Regular  
      • Sleeve: Full Sleeve  
    `,
    returnPolicy: `7-day easy returns`,

    reviews: [],

    related: ["peach-kurti"],
  },

  {
    image: k4,
    hoverImage: k4h,
    extraImages: [k4],

    categorySlug: "designer-kurtis",

    name: "Mint Kurti",
    price: 1499,
    oldPrice: 1899,
    rating: 4.8,

    sizes: ["S", "M", "L", "XL", "2XL"],
    stock: { S: 8, M: 7, L: 1, XL: 0, "2XL": 6 },

    highlights: ["Pastel Shade", "Cotton Fabric", "Soft on Skin"],

    description: `Light pastel mint kurti crafted with premium cotton.`,
    details: `
      • Fabric: Cotton  
      • Fit: Regular  
    `,
    returnPolicy: `7-day return`,

    reviews: [],

    related: ["grey-kurti"],
  },
];

// -------------------------------------------------------
// ⭐ SAREES (FULL STRUCTURE)
// -------------------------------------------------------
const rawSarees = [
  {
    image: s1,
    hoverImage: s11,
    extraImages: [s1, s11],

    categorySlug: "designer-sarees",

    name: "Banarasi Saree",
    price: 2499,
    oldPrice: 3599,
    rating: 4.7,

    sizes: ["Free Size"],
    stock: { "Free Size": 24 },

    highlights: [
      "Zari Woven Border",
      "Silk Blend Material",
      "Festive & Bridal Wear",
    ],

    description: `Traditional Banarasi saree with intricate zari detailing.`,
    details: `• Fabric: Silk Blend`,

    returnPolicy: `7-day replacement`,
    reviews: [],
    related: ["bridal-saree"],
  },

  {
    image: s2,
    hoverImage: s22,
    extraImages: [s2, s22],

    categorySlug: "designer-sarees",

    name: "Bridal Saree",
    price: 2999,
    oldPrice: 3999,
    rating: 4.8,

    sizes: ["Free Size"],
    stock: { "Free Size": 12 },

    highlights: ["Heavy Embroidery", "Rich Silk Look"],
    description: `Beautiful bridal saree for special occasions.`,
    details: `• Fabric: Art Silk`,
    returnPolicy: `7-day return`,
    reviews: [],
    related: ["banarasi-saree"],
  },

  {
    image: s3,
    hoverImage: s33,
    extraImages: [s3, s33],

    categorySlug: "designer-sarees",

    name: "Printed Saree",
    price: 1499,
    oldPrice: 1999,
    rating: 4.5,

    sizes: ["Free Size"],
    stock: { "Free Size": 30 },

    highlights: ["Lightweight", "Daily Wear", "Printed Pattern"],
    description: "Soft and lightweight printed saree.",
    details: `• Fabric: Georgette`,
    returnPolicy: `7-day return`,
    reviews: [],
    related: [],
  },
];

// -------------------------------------------------------
// ⭐ LEHENGAS / HOODIES (FULL STRUCTURE)
// -------------------------------------------------------
const rawLehengas = [
  {
    image: l1,
    hoverImage: l1h,
    extraImages: [l1, l1h],

    name: "Black Hoodie",
    price: 899,
    oldPrice: 1899,
    rating: 4.5,

    sizes: ["S", "M", "L", "XL"],
    stock: { S: 12, M: 8, L: 0, XL: 6 },

    highlights: ["Fleece Fabric", "Warm & Soft", "Winter Wear"],
    description: `Cozy black hoodie ideal for winters.`,
    details: `• Fabric: Cotton Fleece`,
    returnPolicy: `7-day return`,
    reviews: [],
    related: ["printed-hoodie"],
  },

  {
    image: l2,
    hoverImage: l2h,
    extraImages: [l2, l2h],

    name: "Printed Hoodie",
    price: 999,
    oldPrice: 2099,
    rating: 4.6,

    sizes: ["S", "M", "L", "XL"],
    stock: { S: 14, M: 10, L: 3, XL: 7 },

    highlights: ["Premium Print", "Soft Fabric"],
    description: "Trendy printed hoodie.",
    details: `• Fabric: Cotton`,
    returnPolicy: `7-day return`,
    reviews: [],
    related: ["black-hoodie"],
  },
];

// -------------------------------------------------------
// ⭐ FINAL PRODUCTS WITH ID + SLUG
// -------------------------------------------------------
export const kurtis = addMeta(rawKurtis, "kurti");
export const sarees = addMeta(rawSarees, "saree");
export const lehengas = addMeta(rawLehengas, "lehenga");

// -------------------------------------------------------
// ⭐ HOME DATA EXPORT
// -------------------------------------------------------
export const homeData = {
  carousel: {
    desktop: [
      { image: c1, alt: "Banner 1" },
      { image: c2, alt: "Banner 2" },
    ],
    mobile: [
      { image: sc1, alt: "Banner M1" },
      { image: sc2, alt: "Banner M2" },
    ],
  },

  topPicks: kurtis,

  categories: [
    {
      name: "Designer Sarees",
      categorySlug: "designer-sarees",
      bannerImage: sareeBanner,
      products: sarees,
    },
    {
      name: "Designer Kurtis",
      categorySlug: "designer-kurtis",
      bannerImage: kurtisBanner,
      products: kurtis,
    },
    {
      name: "Stylish Lehengas",
      categorySlug: "stylish-lehengas",
      bannerImage: lehengaBanner,
      products: lehengas,
    },
  ],
};

// -------------------------------------------------------
// ⭐ EXPORT ALL PRODUCTS TO USE IN PRODUCT DETAILS
// -------------------------------------------------------
export const allProducts = [...kurtis, ...sarees, ...lehengas];
