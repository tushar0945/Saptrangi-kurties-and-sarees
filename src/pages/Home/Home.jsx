// import React, { useEffect, useState } from "react";
// import HomeCarousel from "./HomeCarousel";
// import HomeHeading from "./HomeHeading";
// import HomeTopPicList from "./HomeTopPicList";
// import HomeCategorySection from "./HomeCategorySection";
// import api from "../../api/axios"; // <-- import axios instance

// const Home = () => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // 🔥 Fetch API using Axios
//   useEffect(() => {
//     const fetchHomeData = async () => {
//       try {
//         const response = await api.get("/products/home/");
//         setData(response.data);
//       } catch (err) {
//         setError("Failed to load data");
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchHomeData();
//   }, []);

//   // if (loading) {
//   //   return (
//   //     <div className="h-screen flex flex-col gap-4 justify-center items-center bg-white">
//   //       <div className="w-12 h-12 border-4 border-pink-400 border-t-transparent rounded-full animate-spin"></div>

//   //       <p className="text-lg font-semibold text-gray-700 animate-pulse">
//   //         Loading, please wait...
//   //       </p>
//   //     </div>
//   //   );
//   // }

//   if (loading) {
//     return (
//       <div className="h-screen flex flex-col items-center justify-center bg-neutral-50">
//         <h1 className="text-3xl font-bold text-pink-600 tracking-widest animate-pulse">
//           SAAJNIKA
//         </h1>

//         <div className="mt-4 w-40 h-1 bg-pink-200 overflow-hidden rounded-full">
//           <div className="h-full w-full bg-pink-500 animate-[loadingBar_1.4s_ease-in-out_infinite]"></div>
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="text-center py-10 text-red-500 text-lg font-semibold">
//         {error}
//       </div>
//     );
//   }

//   // const { carousel, top_picks, banners, product_by_banner } = data;
//   const {
//     carousel = [],
//     top_picks = [],
//     banners = [],
//     product_by_banner = {},
//   } = data || {};

//   const desktopBanners = carousel.map((c) => c.desktop_image);
//   const mobileBanners = carousel.map((c) => c.mobile_image);

//   const categories = banners.map((b) => ({
//     bannerImage: b.banner_image,
//     title: b.name,
//     categorySlug: b.category,
//     products: product_by_banner?.[b.category] || [],
//   }));

//   return (
//     <div className="bg-neutral min-h-screen w-full">
//       <HomeCarousel
//         desktopBanners={desktopBanners}
//         mobileBanners={mobileBanners}
//       />

//       <div className="max-w-[1550px] mx-auto px-3 sm:px-4 md:px-4 lg:px-10">
//         <HomeHeading title="Top Picks" />
//         <HomeTopPicList products={top_picks} />

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
import api from "../../api/axios";
import { publicApi } from "../../api/publicApi";

const Home = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 🔥 Fetch Home API
  useEffect(() => {
    const fetchHomeData = async () => {
      try {
        const response = await api.get("/products/home/");
        // console.log(response);
        setData(response.data);
      } catch (err) {
        console.error("Home API Error:", err);
        setError("Failed to load data");
      } finally {
        setLoading(false);
      }
    };

    fetchHomeData();
  }, []);

  // 🔄 Loading UI
  if (loading) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-neutral-50">
        <h1 className="text-3xl font-bold text-pink-600 tracking-widest animate-pulse">
          SAAJNIKA
        </h1>

        <div className="mt-4 w-40 h-1 bg-pink-200 overflow-hidden rounded-full">
          <div className="h-full w-full bg-pink-500 animate-[loadingBar_1.4s_ease-in-out_infinite]"></div>
        </div>
      </div>
    );
  }

  // ❌ Error UI
  if (error) {
    return (
      <div className="text-center py-10 text-red-500 text-lg font-semibold">
        {error}
      </div>
    );
  }

  // ✅ Correct destructuring (MATCHES API RESPONSE)
  const {
    carousel = [],
    top_picks = [],
    banners = [],
    products_by_category = {}, // 🔥 FIXED KEY
  } = data || {};

  // Carousel images
  const desktopBanners = carousel.map((c) => c.desktop_image);
  const mobileBanners = carousel.map((c) => c.mobile_image);

  // Category sections
  const categories = banners.map((b) => ({
    bannerImage: b.banner_image,
    title: b.name,
    categorySlug: b.category,
    products: products_by_category[b.category] || [],
  }));

  return (
    <div className="bg-neutral min-h-screen w-full">
      {/* 🔥 Hero Carousel */}
      <HomeCarousel
        desktopBanners={desktopBanners}
        mobileBanners={mobileBanners}
      />

      <div className="max-w-[1550px] mx-auto px-3 sm:px-4 md:px-4 lg:px-10">
        {/* ⭐ Top Picks */}
        <HomeHeading title="Top Picks" />
        <HomeTopPicList products={top_picks} />

        {/* ⭐ Category Sections */}
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
