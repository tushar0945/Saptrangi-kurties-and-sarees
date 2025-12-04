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

// import React from "react";
// import HomeCarousel from "./HomeCarousel";
// import HomeHeading from "./HomeHeading";
// import HomeTopPicList from "./HomeTopPicList";
// import HomeCategorySection from "./HomeCategorySection";

// // Banners
// import sareeBanner from "/b1.webp";
// import kurtisBanner from "/b2.webp";
// import hoodiesBanner from "/b3.webp";

// //corosol banners
// import { desktopBanners, mobileBanners } from "../../data/banners";

// // Product Data
// import { sarees } from "../../data/sarees";
// import { kurtis } from "../../data/kurtis";
// import { lehengas } from "../../data/lehenga";

// const Home = () => {
//   return (
//     <div className="bg-neutral min-h-screen w-full">
//       {/* ------- Top Main Carousel ------- */}
//       <HomeCarousel
//         desktopBanners={desktopBanners}
//         mobileBanners={mobileBanners}
//       />

//       {/* ------- Page Container ------- */}
//       <div className="max-w-[1400px] mx-auto px-3 sm:px-4 md:px-4 lg:px-10">
//         {/* ------- Top Picks Section ------- */}
//         <HomeHeading title="Top Picks" />
//         <HomeTopPicList products={kurtis} />

//         {/* ------- Space Between Sections ------- */}
//         {/* <div className="h-10"></div> */}

//         {/* ------- Category Section 1: Sarees ------- */}
//         <HomeCategorySection
//           bannerImage={sareeBanner}
//           title="Designer Sarees"
//           products={sarees}
//         />

//         {/* ------- Category Section 2: Kurtis ------- */}
//         <HomeCategorySection
//           bannerImage={kurtisBanner}
//           title="Designer Kurtis"
//           products={kurtis}
//         />

//         {/* ------- Category Section 3: Hoodies ------- */}
//         <HomeCategorySection
//           bannerImage={hoodiesBanner}
//           title="Stylish Lehengas"
//           products={lehengas}
//         />
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

import { homeData } from "../../data/homeData";

const Home = () => {
  const { carousel, topPicks, categories } = homeData;

  return (
    <div className="bg-neutral min-h-screen w-full">
      <HomeCarousel
        desktopBanners={carousel.desktop}
        mobileBanners={carousel.mobile}
      />

      <div className="max-w-[1400px] mx-auto px-3 sm:px-4 md:px-4 lg:px-10">
        <HomeHeading title="Top Picks" />
        <HomeTopPicList products={topPicks} />

        {categories.map((cat, index) => (
          <HomeCategorySection
            key={index}
            bannerImage={cat.bannerImage}
            title={cat.title}
            products={cat.products}
            categorySlug={cat.categorySlug}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;

// import React, { useEffect, useState } from "react";
// import HomeCarousel from "./HomeCarousel";
// import HomeHeading from "./HomeHeading";
// import HomeTopPicList from "./HomeTopPicList";
// import HomeCategorySection from "./HomeCategorySection";

// const Home = () => {
//   const [carousel, setCarousel] = useState([]);
//   const [topPicks, setTopPicks] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch("https://saptrangi-backend.onrender.com/products/overall/") // Replace with your API URL
//       .then((res) => res.json())
//       .then((data) => {
//         console.log("API DATA:", data);

//         // Carousel (your current API has empty array)
//         setCarousel(data.carousel || []);

//         // Top Picks → filter products
//         const top = data.product.filter((p) => p.top_picks === true);
//         setTopPicks(top);

//         // Category-wise groups
//         const grouped = {};

//         data.product.forEach((p) => {
//           console.log(p);
//           if (!grouped[p.category]) {
//             grouped[p.category] = {
//               title: p.name,
//               categorySlug: p.category.toLowerCase(),
//               bannerImage: p.product_images[0], // You can customize
//               products: [],
//             };
//           }
//           grouped[p.category].products.push(p);
//         });

//         setCategories(Object.values(grouped));

//         setLoading(false);
//       })
//       .catch((err) => {
//         console.log("Error fetching home data:", err);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center text-xl">
//         Loading...
//       </div>
//     );
//   }

//   return (
//     <div className="bg-neutral min-h-screen w-full">
//       {/* Carousel */}
//       <HomeCarousel
//         desktopBanners={carousel} // API does not provide mobile/desktop separation
//         mobileBanners={carousel}
//       />

//       <div className="max-w-[1400px] mx-auto px-3 sm:px-4 md:px-4 lg:px-10">
//         {/* Top Picks */}
//         <HomeHeading title="Top Picks" />
//         <HomeTopPicList products={topPicks} />

//         {/* Categories */}
//         {categories.map((cat, index) => (
//           <HomeCategorySection
//             key={index}
//             bannerImage={cat.bannerImage}
//             title={cat.title}
//             products={cat.products}
//             categorySlug={cat.categorySlug}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home;
