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

import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const HomeCarousel = () => {
  const paginationRef = useRef(null);

  const banners = ["/bannner1.png", "/banner2.png", "/bannner1.png"];

  // 🔁 Restart progress animation on first mount
  useEffect(() => {
    setTimeout(() => {
      const bullets = document.querySelectorAll(".swiper-pagination-bullet");
      bullets.forEach((b) => b.classList.remove("active-progress"));
      if (bullets[0]) bullets[0].classList.add("active-progress");
    }, 1000);
  }, []);

  return (
    <section className="relative w-full overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination]}
        loop={true}
        speed={1200}
        autoplay={{
          delay: 4000, // 4 seconds per slide
          disableOnInteraction: false,
        }}
        pagination={{
          el: paginationRef.current,
          clickable: true,
        }}
        onSwiper={(swiper) => {
          // ✅ Ensure Swiper connects pagination after render
          setTimeout(() => {
            swiper.params.pagination.el = paginationRef.current;
            swiper.pagination.init();
            swiper.pagination.render();
            swiper.pagination.update();

            // Trigger first line progress
            const bullets = document.querySelectorAll(
              ".swiper-pagination-bullet"
            );
            bullets.forEach((b) => b.classList.remove("active-progress"));
            if (bullets[0]) bullets[0].classList.add("active-progress");
          }, 0);
        }}
        onSlideChange={() => {
          const bullets = document.querySelectorAll(
            ".swiper-pagination-bullet"
          );
          bullets.forEach((b) => b.classList.remove("active-progress"));
          const active = document.querySelector(
            ".swiper-pagination-bullet-active"
          );
          if (active) active.classList.add("active-progress");
        }}
        className="w-full h-[500px]"
      >
        {banners.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`Banner ${index + 1}`}
              className="w-full h-[500px] object-cover select-none"
              draggable="false"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ✅ Custom pagination below the carousel */}
      <div
        ref={paginationRef}
        className="custom-pagination flex justify-center gap-3 mt-4 pt-4"
      ></div>
    </section>
  );
};

export default HomeCarousel;
