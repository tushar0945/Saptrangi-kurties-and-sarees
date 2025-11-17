// import React from "react";
// import HomeCarousel from "./HomeCarousel";
// import HomeHeading from "./HomeHeading";
// import HomeProductList from "./HomeProductList";

// const Home = () => {
//   return (
//     <div className="bg-neutral min-h-screen w-full">
//       <HomeCarousel />

//       <div className="max-w-[1400px] mx-auto px-2 sm:px-4 md:px-6 lg:px-10">
//         <HomeHeading title="Top Picks" />
//         <HomeProductList />
//       </div>
//     </div>
//   );
// };

// export default Home;

import React from "react";
import HomeCarousel from "./HomeCarousel";
import HomeHeading from "./HomeHeading";
import HomeTopPicList from "./HomeTopPicList";
import HomeCategorySection from "./HomeCategorySection";

// Banners
import sareeBanner from "/b1.webp";
import kurtisBanner from "/b2.webp";
import hoodiesBanner from "/b3.webp";

// Products (demo)
import k1 from "/k1.webp";
import k2 from "/k2.webp";
import k3 from "/k3.webp";
import k4 from "/k4.webp";
import k5 from "/k1.webp";
import k6 from "/k2.webp";
import k7 from "/k3.webp";
import k8 from "/k4.webp";
import k9 from "/k4.webp";

import s1 from "/s1.webp";
import s2 from "/s2.webp";
import s3 from "/s3.webp";
import s4 from "/s4.webp";
import s5 from "/s5.webp";

import l1 from "/L1.webp";
import l2 from "/L2.webp";
import l3 from "/L3.webp";
import l4 from "/L4.webp";
import l5 from "/L5.webp";

const Home = () => {
  return (
    <div className="bg-neutral min-h-screen w-full">
      {/* ------- Top Main Carousel ------- */}
      <HomeCarousel />

      {/* ------- Page Container ------- */}
      <div className="max-w-[1400px] mx-auto px-3 sm:px-4 md:px-4 lg:px-10">
        {/* ------- Top Picks Section ------- */}
        <HomeHeading title="Top Picks" />
        <HomeTopPicList />

        {/* ------- Space Between Sections ------- */}
        {/* <div className="h-10"></div> */}

        {/* ------- Category Section 1: Sarees ------- */}
        <HomeCategorySection
          bannerImage={sareeBanner}
          title="Designer Sarees"
          products={[
            {
              image: s1,
              title: "Banarasi Saree",
              price: 2499,
              oldPrice: 3599,
              rating: 4.7,
            },
            {
              image: s2,
              title: "Bridal Saree",
              price: 2999,
              oldPrice: 3999,
              rating: 4.8,
            },
            {
              image: s3,
              title: "Printed Saree",
              price: 1499,
              oldPrice: 1999,
              rating: 4.5,
            },
            {
              image: s4,
              title: "Silk Saree",
              price: 3299,
              oldPrice: 4599,
              rating: 4.9,
            },
            {
              image: s5,
              title: "Banarasi Saree",
              price: 2499,
              oldPrice: 3599,
              rating: 4.7,
            },
            {
              image: s1,
              title: "Bridal Saree",
              price: 2999,
              oldPrice: 3999,
              rating: 4.8,
            },
            {
              image: s2,
              title: "Printed Saree",
              price: 1499,
              oldPrice: 1999,
              rating: 4.5,
            },
            {
              image: s3,
              title: "Silk Saree",
              price: 3299,
              oldPrice: 4599,
              rating: 4.9,
            },
          ]}
        />

        {/* ------- Category Section 2: Kurtis ------- */}
        <HomeCategorySection
          bannerImage={kurtisBanner}
          title="Designer Kurtis"
          products={[
            {
              image: k5,
              title: "Peach Kurti",
              price: 1299,
              oldPrice: 1999,
              rating: 4.6,
            },
            {
              image: k6,
              title: "Grey Kurti",
              price: 1399,
              oldPrice: 2199,
              rating: 4.5,
            },
            {
              image: k7,
              title: "Yellow Kurti",
              price: 1199,
              oldPrice: 1799,
              rating: 4.7,
            },
            {
              image: k8,
              title: "Mint Kurti",
              price: 1499,
              oldPrice: 1899,
              rating: 4.8,
            },
            {
              image: k9,
              title: "Peach Kurti",
              price: 1299,
              oldPrice: 1999,
              rating: 4.6,
            },
            {
              image: k2,
              title: "Grey Kurti",
              price: 1399,
              oldPrice: 2199,
              rating: 4.5,
            },
            {
              image: k3,
              title: "Yellow Kurti",
              price: 1199,
              oldPrice: 1799,
              rating: 4.7,
            },
            {
              image: k4,
              title: "Mint Kurti",
              price: 1499,
              oldPrice: 1899,
              rating: 4.8,
            },
          ]}
        />

        {/* ------- Category Section 3: Hoodies ------- */}
        <HomeCategorySection
          bannerImage={hoodiesBanner}
          title="Stylish Lehengas"
          products={[
            {
              image: l1,
              title: "Black Hoodie",
              price: 899,
              oldPrice: 1899,
              rating: 4.5,
            },
            {
              image: l2,
              title: "Printed Hoodie",
              price: 999,
              oldPrice: 2099,
              rating: 4.6,
            },
            {
              image: l3,
              title: "Zipper Hoodie",
              price: 1199,
              oldPrice: 2499,
              rating: 4.4,
            },
            {
              image: l4,
              title: "Oversized Hoodie",
              price: 1499,
              oldPrice: 2999,
              rating: 4.7,
            },
            {
              image: l5,
              title: "Black Hoodie",
              price: 899,
              oldPrice: 1899,
              rating: 4.5,
            },
            {
              image: l1,
              title: "Printed Hoodie",
              price: 999,
              oldPrice: 2099,
              rating: 4.6,
            },
            {
              image: l3,
              title: "Zipper Hoodie",
              price: 1199,
              oldPrice: 2499,
              rating: 4.4,
            },
            {
              image: l4,
              title: "Oversized Hoodie",
              price: 1499,
              oldPrice: 2999,
              rating: 4.7,
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Home;
