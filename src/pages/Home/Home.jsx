// // import React from "react";
// // import HomeCarousel from "./HomeCarousel";
// // import HomeHeading from "./HomeHeading";
// // import HomeProductList from "./HomeProductList";

// // const Home = () => {
// //   return (
// //     <div className="bg-neutral min-h-screen w-full">
// //       <HomeCarousel />

// //       <div className="max-w-[1400px] mx-auto px-2 sm:px-4 md:px-6 lg:px-10">
// //         <HomeHeading title="Top Picks" />
// //         <HomeProductList />
// //       </div>
// //     </div>
// //   );
// // };

// // export default Home;

// // import React from "react";
// // import HomeCarousel from "./HomeCarousel";
// // import HomeHeading from "./HomeHeading";
// // import HomeTopPicList from "./HomeTopPicList";
// // import HomeCategorySection from "./HomeCategorySection";

// // // Banners
// // import sareeBanner from "/b1.webp";
// // import kurtisBanner from "/b2.webp";
// // import hoodiesBanner from "/b3.webp";

// // //corosol banners
// // import { desktopBanners, mobileBanners } from "../../data/banners";

// // // Product Data
// // import { sarees } from "../../data/sarees";
// // import { kurtis } from "../../data/kurtis";
// // import { lehengas } from "../../data/lehenga";

// // const Home = () => {
// //   return (
// //     <div className="bg-neutral min-h-screen w-full">
// //       {/* ------- Top Main Carousel ------- */}
// //       <HomeCarousel
// //         desktopBanners={desktopBanners}
// //         mobileBanners={mobileBanners}
// //       />

// //       {/* ------- Page Container ------- */}
// //       <div className="max-w-[1400px] mx-auto px-3 sm:px-4 md:px-4 lg:px-10">
// //         {/* ------- Top Picks Section ------- */}
// //         <HomeHeading title="Top Picks" />
// //         <HomeTopPicList products={kurtis} />

// //         {/* ------- Space Between Sections ------- */}
// //         {/* <div className="h-10"></div> */}

// //         {/* ------- Category Section 1: Sarees ------- */}
// //         <HomeCategorySection
// //           bannerImage={sareeBanner}
// //           title="Designer Sarees"
// //           products={sarees}
// //         />

// //         {/* ------- Category Section 2: Kurtis ------- */}
// //         <HomeCategorySection
// //           bannerImage={kurtisBanner}
// //           title="Designer Kurtis"
// //           products={kurtis}
// //         />

// //         {/* ------- Category Section 3: Hoodies ------- */}
// //         <HomeCategorySection
// //           bannerImage={hoodiesBanner}
// //           title="Stylish Lehengas"
// //           products={lehengas}
// //         />
// //       </div>
// //     </div>
// //   );
// // };

// // export default Home;

// import React from "react";
// import HomeCarousel from "./HomeCarousel";
// import HomeHeading from "./HomeHeading";
// import HomeTopPicList from "./HomeTopPicList";
// import HomeCategorySection from "./HomeCategorySection";

// import { homeData } from "../../data/homeData";

// const Home = () => {
//   const { carousel, topPicks, categories } = homeData;

//   return (
//     <div className="bg-neutral min-h-screen w-full">
//       <HomeCarousel
//         desktopBanners={carousel.desktop}
//         mobileBanners={carousel.mobile}
//       />

//       <div className="max-w-[1400px] mx-auto px-3 sm:px-4 md:px-4 lg:px-10">
//         <HomeHeading title="Top Picks" />
//         <HomeTopPicList products={topPicks} />

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

// import React, { useEffect, useState } from "react";
// import HomeCarousel from "./HomeCarousel";
// import HomeHeading from "./HomeHeading";
// import HomeTopPicList from "./HomeTopPicList";
// import HomeCategorySection from "./HomeCategorySection";

// const Home = () => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // 🔥 Fetch API
//   useEffect(() => {
//     const fetchHomeData = async () => {
//       try {
//         const res = await fetch(
//           "https://saptrangi-backend.onrender.com/products/home/"
//         ); // <--- replace with your API link
//         const json = await res.json();
//         setData(json);
//       } catch (err) {
//         setError("Failed to load data");
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchHomeData();
//   }, []);

//   // 🌐 Loading UI
//   if (loading) {
//     return (
//       <div className="text-center py-10 text-lg font-semibold">Loading...</div>
//     );
//   }

//   // ❌ Error UI
//   if (error) {
//     return (
//       <div className="text-center py-10 text-red-500 text-lg font-semibold">
//         {error}
//       </div>
//     );
//   }

//   // console.log("data", data);
//   // Now use fetched data
//   const { carousel, top_picks, banners, product_by_banner } = data;
//   // console.log(top_picks);
//   // 🖼 Convert carousel array → desktop[] + mobile[]
//   const desktopBanners = carousel.map((c) => c.desktop_image);
//   const mobileBanners = carousel.map((c) => c.mobile_image);
//   // console.log("corousel:", carousel);

//   // 🎯 Convert banners + product_by_banner into category sections
//   const categories = banners.map((b) => ({
//     bannerImage: b.banner_image,
//     title: b.name,
//     categorySlug: b.category,
//     products: product_by_banner[b.category] || [],
//   }));
//   // console.log(banners);
//   return (
//     <div className="bg-neutral min-h-screen w-full">
//       {/* 🔥 Hero Carousel */}
//       <HomeCarousel
//         desktopBanners={desktopBanners}
//         mobileBanners={mobileBanners}
//       />

//       <div className="max-w-[1400px] mx-auto px-3 sm:px-4 md:px-4 lg:px-10">
//         {/* ⭐ Top Picks */}
//         <HomeHeading title="Top Picks" />
//         <HomeTopPicList products={top_picks} />

//         {/* 🏷 Category Sections */}
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

import React, { useEffect, useState } from "react";
import HomeCarousel from "./HomeCarousel";
import HomeHeading from "./HomeHeading";
import HomeTopPicList from "./HomeTopPicList";
import HomeCategorySection from "./HomeCategorySection";
import api from "../../api/axios"; // <-- import axios instance

const Home = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 🔥 Fetch API using Axios
  useEffect(() => {
    const fetchHomeData = async () => {
      try {
        const response = await api.get("/products/home/");
        setData(response.data);
      } catch (err) {
        setError("Failed to load data");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchHomeData();
  }, []);

  // if (loading) {
  //   return (
  //     <div className="h-screen flex flex-col gap-4 justify-center items-center bg-white">
  //       <div className="w-12 h-12 border-4 border-pink-400 border-t-transparent rounded-full animate-spin"></div>

  //       <p className="text-lg font-semibold text-gray-700 animate-pulse">
  //         Loading, please wait...
  //       </p>
  //     </div>
  //   );
  // }

  if (loading) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-neutral-50">
        <h1 className="text-3xl font-bold text-pink-600 tracking-widest animate-pulse">
          SAPTRANGI
        </h1>

        <div className="mt-4 w-40 h-1 bg-pink-200 overflow-hidden rounded-full">
          <div className="h-full w-full bg-pink-500 animate-[loadingBar_1.4s_ease-in-out_infinite]"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-10 text-red-500 text-lg font-semibold">
        {error}
      </div>
    );
  }

  const { carousel, top_picks, banners, product_by_banner } = data;

  const desktopBanners = carousel.map((c) => c.desktop_image);
  const mobileBanners = carousel.map((c) => c.mobile_image);

  const categories = banners.map((b) => ({
    bannerImage: b.banner_image,
    title: b.name,
    categorySlug: b.category,
    products: product_by_banner[b.category] || [],
  }));

  return (
    <div className="bg-neutral min-h-screen w-full">
      <HomeCarousel
        desktopBanners={desktopBanners}
        mobileBanners={mobileBanners}
      />

      <div className="max-w-[1550px] mx-auto px-3 sm:px-4 md:px-4 lg:px-10">
        <HomeHeading title="Top Picks" />
        <HomeTopPicList products={top_picks} />

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
