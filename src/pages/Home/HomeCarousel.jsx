// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination, Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// const HomeCarousel = () => {
//   const banners = [
//     "./../../../public/bannner1.png",
//     "./../../../public/banner2.png",
//     "./../../../public/bannner1.png",
//   ];

//   return (
//     <section className="w-full">
//       <Swiper
//         spaceBetween={30}
//         centeredSlides={true}
//         autoplay={{
//           delay: 3000,
//           disableOnInteraction: false,
//         }}
//         pagination={{ clickable: true }}
//         navigation={true}
//         modules={[Autoplay, Pagination, Navigation]}
//         className="w-full h-[500px]"
//       >
//         {banners.map((img, index) => (
//           <SwiperSlide key={index}>
//             <img
//               src={img}
//               alt={`Banner ${index + 1}`}
//               className="w-full h-[500px] object-cover"
//             />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </section>
//   );
// };

// export default HomeCarousel;

// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
// import "swiper/css";

// // ✅ Optional: Add some padding between slides if you want spacing effect
// // import "swiper/css/pagination";
// // import "swiper/css/navigation";

// const HomeCarousel = () => {
//   const banners = ["/bannner1.png", "/banner2.png", "/bannner1.png"];

//   return (
//     <section className="w-full overflow-hidden">
//       <Swiper
//         modules={[Autoplay]}
//         loop={true} // ✅ enables infinite loop
//         speed={1500} // ✅ smooth transition speed (ms)
//         autoplay={{
//           delay: 0, // ✅ continuous movement, no stop between slides
//           disableOnInteraction: false,
//         }}
//         allowTouchMove={false} // ✅ disables dragging for pure continuous motion
//         slidesPerView={1}
//         spaceBetween={0}
//         centeredSlides={true}
//         className="w-full h-[500px]"
//       >
//         {banners.map((img, index) => (
//           <SwiperSlide key={index}>
//             <img
//               src={img}
//               alt={`Banner ${index + 1}`}
//               className="w-full h-[500px] object-cover select-none"
//               draggable="false"
//             />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </section>
//   );
// };

// export default HomeCarousel;

// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";

// const HomeCarousel = () => {
//   const banners =["/bannner1.png", "/banner2.png", "/bannner1.png"];

//   return (
//     <section className="w-full overflow-hidden">
//       <Swiper
//         modules={[Autoplay, Pagination]}
//         loop={true}
//         speed={2500} // 🕊️ Smooth & slow transition speed
//         autoplay={{
//           delay: 5000, // ⏱️ Slide stays for 5 seconds
//           disableOnInteraction: false,
//         }}
//         pagination={{
//           clickable: true,
//           el: ".custom-pagination", // we'll create custom line indicators
//         }}
//         slidesPerView={1}
//         centeredSlides={true}
//         className="w-full h-[500px] relative"
//       >
//         {banners.map((img, index) => (
//           <SwiperSlide key={index}>
//             <img
//               src={img}
//               alt={`Banner ${index + 1}`}
//               className="w-full h-[500px] object-cover select-none"
//               draggable="false"
//             />
//           </SwiperSlide>
//         ))}

//         {/* Custom pagination (lines) */}
//         <div className="custom-pagination absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20"></div>
//       </Swiper>
//     </section>
//   );
// };

// export default HomeCarousel;

// import React, { useEffect, useRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";

// const HomeCarousel = () => {
//   const paginationRef = useRef(null);

//   const banners = ["/bannner1.png", "/banner2.png", "/bannner1.png"];

//   useEffect(() => {
//     // Start first line progress when mounted
//     setTimeout(() => {
//       const bullets = document.querySelectorAll(".swiper-pagination-bullet");
//       bullets.forEach((b) => b.classList.remove("active-progress"));
//       if (bullets[0]) bullets[0].classList.add("active-progress");
//     }, 1000);
//   }, []);

//   return (
//     <section className="relative w-full overflow-hidden">
//       <Swiper
//         modules={[Autoplay, Pagination]}
//         loop={true}
//         speed={1200}
//         autoplay={{
//           delay: 4000,
//           disableOnInteraction: false,
//         }}
//         pagination={{
//           el: paginationRef.current, // ✅ use the ref
//           clickable: true,
//         }}
//         onSwiper={(swiper) => {
//           // ✅ ensure pagination is initialized *after* render
//           swiper.params.pagination.el = paginationRef.current;
//           swiper.pagination.init();
//           swiper.pagination.render();
//           swiper.pagination.update();
//         }}
//         onSlideChange={() => {
//           const bullets = document.querySelectorAll(
//             ".swiper-pagination-bullet"
//           );
//           bullets.forEach((b) => b.classList.remove("active-progress"));
//           const active = document.querySelector(
//             ".swiper-pagination-bullet-active"
//           );
//           if (active) active.classList.add("active-progress");
//         }}
//         className="w-full h-[500px]"
//       >
//         {banners.map((img, index) => (
//           <SwiperSlide key={index}>
//             <img
//               src={img}
//               alt={`Banner ${index + 1}`}
//               className="w-full h-[500px] object-cover select-none"
//               draggable="false"
//             />
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {/* ✅ Ref is attached to pagination container */}
//       <div
//         ref={paginationRef}
//         className="custom-pagination flex justify-center gap-3 mt-4 "
//       ></div>
//     </section>
//   );
// };

// export default HomeCarousel;

// import React, { useEffect, useRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";

// const HomeCarousel = () => {
//   const paginationRef = useRef(null);

//   const banners = ["/bannner1.png", "/banner2.png", "/bannner1.png"];

//   // 🔁 Restart progress animation on first mount
//   useEffect(() => {
//     setTimeout(() => {
//       const bullets = document.querySelectorAll(".swiper-pagination-bullet");
//       bullets.forEach((b) => b.classList.remove("active-progress"));
//       if (bullets[0]) bullets[0].classList.add("active-progress");
//     }, 1000);
//   }, []);

//   return (
//     <section className="relative w-full overflow-hidden">
//       <Swiper
//         modules={[Autoplay, Pagination]}
//         loop={true}
//         speed={1200}
//         autoplay={{
//           delay: 4000, // 4 seconds per slide
//           disableOnInteraction: false,
//         }}
//         pagination={{
//           el: paginationRef.current,
//           clickable: true,
//         }}
//         onSwiper={(swiper) => {
//           // ✅ Ensure Swiper connects pagination after render
//           setTimeout(() => {
//             swiper.params.pagination.el = paginationRef.current;
//             swiper.pagination.init();
//             swiper.pagination.render();
//             swiper.pagination.update();

//             // Trigger first line progress
//             const bullets = document.querySelectorAll(
//               ".swiper-pagination-bullet"
//             );
//             bullets.forEach((b) => b.classList.remove("active-progress"));
//             if (bullets[0]) bullets[0].classList.add("active-progress");
//           }, 0);
//         }}
//         onSlideChange={() => {
//           const bullets = document.querySelectorAll(
//             ".swiper-pagination-bullet"
//           );
//           bullets.forEach((b) => b.classList.remove("active-progress"));
//           const active = document.querySelector(
//             ".swiper-pagination-bullet-active"
//           );
//           if (active) active.classList.add("active-progress");
//         }}
//         className="w-full h-[500px]"
//       >
//         {banners.map((img, index) => (
//           <SwiperSlide key={index}>
//             <img
//               src={img}
//               alt={`Banner ${index + 1}`}
//               className="w-full h-[500px] object-cover select-none"
//               draggable="false"
//             />
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {/* ✅ Custom pagination below the carousel */}
//       <div
//         ref={paginationRef}
//         className="custom-pagination flex justify-center gap-3 mt-4 pt-4"
//       ></div>
//     </section>
//   );
// };

// export default HomeCarousel;

// import React, { useEffect, useRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";

// const HomeCarousel = () => {
//   const paginationRef = useRef(null);

//   const banners = ["/bannner1.png", "/banner2.png", "/bannner1.png"];

//   // 🔁 Restart progress animation on first mount
//   useEffect(() => {
//     setTimeout(() => {
//       const bullets = document.querySelectorAll(".swiper-pagination-bullet");
//       bullets.forEach((b) => b.classList.remove("active-progress"));
//       if (bullets[0]) bullets[0].classList.add("active-progress");
//     }, 1000);
//   }, []);

//   return (
//     <section className="relative w-full overflow-hidden">
//       <Swiper
//         modules={[Autoplay, Pagination]}
//         loop={true}
//         speed={1200}
//         autoplay={{
//           delay: 4000,
//           disableOnInteraction: false,
//         }}
//         pagination={{
//           el: paginationRef.current,
//           clickable: true,
//         }}
//         onSwiper={(swiper) => {
//           setTimeout(() => {
//             swiper.params.pagination.el = paginationRef.current;
//             swiper.pagination.init();
//             swiper.pagination.render();
//             swiper.pagination.update();

//             // Trigger first line progress
//             const bullets = document.querySelectorAll(
//               ".swiper-pagination-bullet"
//             );
//             bullets.forEach((b) => b.classList.remove("active-progress"));
//             if (bullets[0]) bullets[0].classList.add("active-progress");
//           }, 0);
//         }}
//         onSlideChange={() => {
//           const bullets = document.querySelectorAll(
//             ".swiper-pagination-bullet"
//           );
//           bullets.forEach((b) => b.classList.remove("active-progress"));

//           const active = document.querySelector(
//             ".swiper-pagination-bullet-active"
//           );
//           if (active) active.classList.add("active-progress");
//         }}
//         className="w-full h-[500px] carousel-mobile-height"
//       >
//         {banners.map((img, index) => (
//           <SwiperSlide key={index}>
//             <img
//               src={img}
//               alt={`Banner ${index + 1}`}
//               className="w-full h-[500px] carousel-mobile-height object-cover select-none"
//               draggable="false"
//             />
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {/* 🔽 Custom pagination (lower z-index added) */}
//       <div
//         ref={paginationRef}
//         className="custom-pagination carousel-pagination-fix flex justify-center gap-3 mt-4 pt-4"
//       ></div>
//     </section>
//   );
// };

// export default HomeCarousel;

// import React, { useEffect, useRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";

// const HomeCarousel = () => {
//   const paginationRef = useRef(null);

//   const banners = [
//     {
//       image: "/bannner1.png",
//       title: "UPTO 80% OFF",
//       subtitle: "$3 Stitching",
//       desc: "WORLDWIDE FREE SHIPPING on orders above USD 149",
//     },
//     {
//       image: "/banner2.png",
//       title: "FLAT 50% OFF",
//       subtitle: "Special Festive Deal",
//       desc: "Free shipping on all orders",
//     },
//     {
//       image: "/bannner1.png",
//       title: "NEW ARRIVALS",
//       subtitle: "Exclusive Collections",
//       desc: "Limited time only!",
//     },
//   ];

//   useEffect(() => {
//     setTimeout(() => {
//       const bullets = document.querySelectorAll(".swiper-pagination-bullet");
//       bullets.forEach((b) => b.classList.remove("active-progress"));
//       if (bullets[0]) bullets[0].classList.add("active-progress");
//     }, 1000);
//   }, []);

//   return (
//     <section className="relative w-full overflow-hidden">
//       <Swiper
//         modules={[Autoplay, Pagination]}
//         loop
//         speed={1200}
//         autoplay={{
//           delay: 4000,
//           disableOnInteraction: false,
//         }}
//         pagination={{
//           el: paginationRef.current,
//           clickable: true,
//         }}
//         onSwiper={(swiper) => {
//           setTimeout(() => {
//             swiper.params.pagination.el = paginationRef.current;
//             swiper.pagination.init();
//             swiper.pagination.render();
//             swiper.pagination.update();

//             const bullets = document.querySelectorAll(
//               ".swiper-pagination-bullet"
//             );
//             bullets.forEach((b) => b.classList.remove("active-progress"));
//             if (bullets[0]) bullets[0].classList.add("active-progress");
//           }, 0);
//         }}
//         onSlideChange={() => {
//           const bullets = document.querySelectorAll(
//             ".swiper-pagination-bullet"
//           );
//           bullets.forEach((b) => b.classList.remove("active-progress"));
//           const active = document.querySelector(
//             ".swiper-pagination-bullet-active"
//           );
//           if (active) active.classList.add("active-progress");
//         }}
//         className="w-full h-[500px] carousel-mobile-height"
//       >
//         {banners.map((item, index) => (
//           <SwiperSlide key={index}>
//             <div className="relative w-full h-[500px] carousel-mobile-height">
//               {/* Background Image */}
//               <img
//                 src={item.image}
//                 alt={item.title}
//                 className="w-full h-full object-cover"
//               />

//               {/* Overlay Box */}
//               <div
//                 className="
//                 absolute
//                 md:left-auto md:right-[8%] md:top-[20%]
//                 left-1/2 top-1/2
//                 transform -translate-x-1/2 -translate-y-1/2
//                 bg-white/90 backdrop-blur-md
//                 px-5 py-4 md:px-10 md:py-8
//                 rounded-lg shadow-xl
//                 max-w-xs md:max-w-md text-center
//               "
//               >
//                 <h2 className="text-3xl md:text-5xl font-bold text-[#0669A6]">
//                   {item.title}
//                 </h2>

//                 <p className="text-lg md:text-2xl mt-2 font-medium">
//                   {item.subtitle}
//                 </p>

//                 <p className="text-sm md:text-lg text-gray-700 mt-2">
//                   {item.desc}
//                 </p>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {/* Pagination */}
//       <div
//         ref={paginationRef}
//         className="custom-pagination carousel-pagination-fix flex justify-center gap-3 mt-4 pt-4"
//       ></div>
//     </section>
//   );
// };

// export default HomeCarousel;

// import React, { useEffect, useRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";

// const HomeCarousel = () => {
//   const paginationRef = useRef(null);

//   const banners = [
//     {
//       image: "/b1.png",
//       title: "UPTO 80% OFF",
//       subtitle: "$3 Stitching",
//       desc: "WORLDWIDE FREE SHIPPING on orders above USD 149",
//     },
//     {
//       image: "/b2.png",
//       title: "FREE STITCHING",
//       subtitle: "SITEWIDE",
//       desc: "Exclusive Festive Collection",
//     },
//     {
//       image: "/b1.png",
//       title: "NEW ARRIVALS",
//       subtitle: "PREMIUM COLLECTION",
//       desc: "Shop the latest styles",
//     },
//   ];

//   // Reset progress
//   useEffect(() => {
//     setTimeout(() => {
//       const bullets = document.querySelectorAll(".swiper-pagination-bullet");
//       bullets.forEach((b) => b.classList.remove("active-progress"));
//       if (bullets[0]) bullets[0].classList.add("active-progress");
//     }, 800);
//   }, []);

//   return (
//     <section className="relative w-full overflow-hidden">
//       <Swiper
//         modules={[Autoplay, Pagination]}
//         loop
//         speed={1100}
//         autoplay={{ delay: 4000, disableOnInteraction: false }}
//         pagination={{ el: paginationRef.current, clickable: true }}
//         onSwiper={(swiper) =>
//           setTimeout(() => {
//             swiper.params.pagination.el = paginationRef.current;
//             swiper.pagination.init();
//             swiper.pagination.render();
//             swiper.pagination.update();
//           }, 0)
//         }
//         className="w-full h-[500px] md:h-[600px]"
//       >
//         {banners.map((item, index) => (
//           <SwiperSlide key={index}>
//             <div className="w-full h-full flex flex-col md:flex-row">
//               {/* LEFT SIDE IMAGE (Desktop: 50%) */}
//               <div className="w-full md:w-1/2 h-[300px] md:h-full relative">
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   className="w-full h-full object-cover"
//                 />

//                 {/* Mobile Overlay (centered) */}
//                 <div
//                   className="
//                     absolute md:hidden
//                     inset-0 flex flex-col items-center justify-center
//                     bg-black/30 text-white p-4 text-center
//                   "
//                 >
//                   <h2 className="text-3xl font-bold drop-shadow">
//                     {item.title}
//                   </h2>
//                   <p className="text-xl mt-2 font-semibold drop-shadow">
//                     {item.subtitle}
//                   </p>
//                   <p className="text-sm mt-3 drop-shadow">{item.desc}</p>
//                 </div>
//               </div>

//               {/* RIGHT SIDE OVERLAY (Desktop: 50%) */}
//               <div
//                 className="
//                   hidden md:flex
//                   w-1/2 h-full
//                   flex-col justify-center
//                   px-16
//                   bg-white/80 backdrop-blur-xl
//                 "
//               >
//                 <h2 className="text-5xl font-bold text-[#0669A6]">
//                   {item.title}
//                 </h2>
//                 <p className="text-3xl font-semibold mt-4">{item.subtitle}</p>
//                 <p className="text-lg mt-4 text-gray-700">{item.desc}</p>

//                 <button className="mt-6 px-6 py-3 bg-[#0669A6] text-white rounded shadow hover:bg-[#05598c] transition">
//                   SHOP NOW
//                 </button>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {/* Pagination */}
{
  /* <div
  ref={paginationRef}
  className="custom-pagination flex justify-center gap-3 mt-4 pt-4"
></div> */
}
//     </section>
//   );
// };

// export default HomeCarousel;

// import React, { useEffect, useRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";

// const HomeCarousel = () => {
//   const paginationRef = useRef(null);

//   const banners = [
//     {
//       image: "/b1.png",
//       title: "UPTO 80% OFF",
//       subtitle: "$3 Stitching",
//       desc: "WORLDWIDE FREE SHIPPING above $149",
//     },
//     {
//       image: "/b2.png",
//       title: "NEW ARRIVALS",
//       subtitle: "PREMIUM COLLECTION",
//       desc: "Shop the latest styles",
//     },
//   ];

//   return (
//     <section className="relative w-full overflow-hidden m-0 p-0">
//       <Swiper
//         modules={[Autoplay, Pagination]}
//         loop
//         speed={1100}
//         autoplay={{ delay: 4000, disableOnInteraction: false }}
//         pagination={{ el: paginationRef.current, clickable: true }}
//         autoHeight={true}
//         className="w-full h-auto md:h-[620px]"
//       >
//         {banners.map((item, i) => (
//           <SwiperSlide key={i}>
//             {/* MAIN SLIDE WRAPPER */}
//             <div className="w-full flex flex-col md:flex-row">
//               {/* LEFT SIDE IMAGE (Full width on mobile, half on desktop) */}
//               <div className="relative w-full md:w-1/2 h-auto md:h-full">
//                 <img
//                   src={item.image}
//                   className="w-full h-auto md:h-full object-cover block"
//                   alt="banner"
//                 />

//                 {/* MOBILE OVERLAY (Only visible on mobile) */}
//                 <div
//                   className="
//                   absolute inset-0
//                   md:hidden
//                   flex flex-col items-center justify-center
//                   text-center px-4 py-8
//                   bg-black/40 text-white
//                 "
//                 >
//                   <h2 className="text-3xl font-bold">{item.title}</h2>
//                   <p className="text-xl mt-1">{item.subtitle}</p>
//                   <p className="text-sm mt-2">{item.desc}</p>

//                   <button className="mt-4 px-6 py-2 bg-[#005B95] rounded-md shadow">
//                     SHOP NOW
//                   </button>
//                 </div>
//               </div>

//               {/* RIGHT SIDE OVERLAY (Desktop only) */}
//               <div
//                 className="
//                 hidden md:flex
//                 w-1/2 flex-col justify-center
//                 px-16 bg-white
//               "
//               >
//                 <h2 className="text-5xl font-bold text-[#005B95]">
//                   {item.title}
//                 </h2>
//                 <p className="text-3xl font-semibold mt-4">{item.subtitle}</p>
//                 <p className="text-lg mt-4 text-gray-700">{item.desc}</p>

//                 <button
//                   className="
//                   mt-8 px-8 py-3
//                   bg-[#005B95] text-white rounded-md shadow-md
//                   hover:bg-[#004973] transition w-fit
//                 "
//                 >
//                   SHOP NOW
//                 </button>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {/* PAGINATION */}
//       <div
//         ref={paginationRef}
//         className="custom-pagination flex justify-center gap-3 mt-4 pt-4"
//       ></div>
//     </section>
//   );
// };

// export default HomeCarousel;

// import React, { useRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";

// const HomeCarousel = () => {
//   const paginationRef = useRef(null);

//   const banners = [{ image: "/c1.webp" }, { image: "/c2.jpg" }];

//   return (
//     <section className="relative w-full overflow-hidden m-0 p-0">
//       <Swiper
//         modules={[Autoplay, Pagination]}
//         loop
//         speed={1000}
//         autoplay={{ delay: 3000, disableOnInteraction: false }}
//         pagination={{ clickable: true }}
//         onSwiper={(swiper) => {
//           setTimeout(() => {
//             if (!paginationRef.current) return;

//             swiper.params.pagination.el = paginationRef.current;
//             swiper.pagination.init();
//             swiper.pagination.render();
//             swiper.pagination.update();
//           }, 50);
//         }}
//         className="w-full h-auto md:h-[620px]"
//       >
//         {banners.map((item, i) => (
//           <SwiperSlide key={i}>
//             <div
//               className="relative w-full overflow-hidden"
//               style={{ paddingTop: "28%" }} // Banner height ratio
//             >
//               <img
//                 src={item.image}
//                 alt="banner"
//                 className="absolute inset-0 w-full h-full object-cover"
//               />
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {/* PAGINATION */}
//       <div
//         ref={paginationRef}
//         className="custom-pagination flex justify-center gap-3 mt-4 pt-4"
//       ></div>
//     </section>
//   );
// };

// export default HomeCarousel;

// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";

// const HomeCarousel = () => {
//   const banners = [
//     {
//       image: "/c1.webp", // replace with actual banner path
//       alt: "Banner 1",
//     },
//     {
//       image: "/c2.jpg",
//       alt: "Banner 2",
//     },
//   ];

//   return (
//     <div className="w-full overflow-hidden">
//       <Swiper
//         modules={[Autoplay, Pagination]}
//         slidesPerView={1}
//         loop={true}
//         pagination={{
//           clickable: true,
//         }}
//         autoplay={{
//           delay: 3000,
//           disableOnInteraction: false,
//         }}
//         className="w-full"
//       >
//         {banners.map((banner, i) => (
//           <SwiperSlide key={i}>
//             <img
//               src={banner.image}
//               alt={banner.alt}
//               className="w-full h-auto object-cover md:object-fill"
//               style={{ maxHeight: "620px" }} // optional: match screenshot
//             />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default HomeCarousel;

// import React, { useRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";

// const HomeCarousel = () => {
//   const paginationRef = useRef(null);

//   const banners = [
//     { image: "/c1.webp", alt: "Banner 1" },
//     { image: "/c2.jpg", alt: "Banner 2" },
//   ];

//   return (
//     <section className="relative w-full overflow-hidden m-0 p-0">
//       <Swiper
//         modules={[Autoplay, Pagination]}
//         loop
//         speed={1000}
//         slidesPerView={1}
//         autoplay={{ delay: 3000, disableOnInteraction: false }}
//         pagination={{ clickable: true }}
//         onSwiper={(swiper) => {
//           setTimeout(() => {
//             if (!paginationRef.current) return;

//             swiper.params.pagination.el = paginationRef.current;
//             swiper.pagination.init();
//             swiper.pagination.render();
//             swiper.pagination.update();
//           }, 50);
//         }}
//         className="w-full"
//       >
//         {banners.map((item, i) => (
//           <SwiperSlide key={i}>
//             <div className="relative w-full">
//               <img
//                 src={item.image}
//                 alt={item.alt}
//                 className="w-full h-auto object-fill block"
//               />
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {/* Custom Pagination */}
//       <div
//         ref={paginationRef}
//         className="custom-pagination flex justify-center gap-3 mt-4"
//       ></div>
//     </section>
//   );
// };

// export default HomeCarousel;

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const HomeCarousel = () => {
  const desktopPaginationRef = useRef(null);
  const mobilePaginationRef = useRef(null);

  // Desktop banners
  const desktopBanners = [
    { image: "/c1.webp", alt: "Desktop Banner 1" },
    { image: "/c2.jpg", alt: "Desktop Banner 2" },
  ];

  // Mobile banners
  const mobileBanners = [
    { image: "/sc1.png", alt: "Mobile Banner 1" },
    { image: "/sc2.png", alt: "Mobile Banner 2" },
  ];

  // Pagination initializer (same for both)
  const initPagination = (swiper, ref) => {
    setTimeout(() => {
      if (!ref.current) return;
      swiper.params.pagination.el = ref.current;
      swiper.pagination.init();
      swiper.pagination.render();
      swiper.pagination.update();
    }, 50);
  };

  return (
    <section className="relative w-full overflow-hidden m-0 p-0">
      {/* --------------------------- DESKTOP CAROUSEL --------------------------- */}
      <div className="hidden md:block">
        <Swiper
          modules={[Autoplay, Pagination]}
          loop
          speed={1000}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => initPagination(swiper, desktopPaginationRef)}
          className="w-full"
        >
          {desktopBanners.map((item, i) => (
            <SwiperSlide key={i}>
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-auto object-fill"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div
          ref={desktopPaginationRef}
          className="custom-pagination flex justify-center gap-3 mt-4"
        ></div>
      </div>

      {/* --------------------------- MOBILE CAROUSEL --------------------------- */}
      <div className="block md:hidden">
        <Swiper
          modules={[Autoplay, Pagination]}
          loop
          speed={900}
          slidesPerView={1}
          autoplay={{ delay: 2800, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => initPagination(swiper, mobilePaginationRef)}
          className="w-full"
        >
          {mobileBanners.map((item, i) => (
            <SwiperSlide key={i}>
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-auto object-fill"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div
          ref={mobilePaginationRef}
          className="custom-pagination flex justify-center gap-3 mt-4"
        ></div>
      </div>
    </section>
  );
};

export default HomeCarousel;
