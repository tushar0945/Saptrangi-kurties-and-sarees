import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const HomeCarousel = ({ desktopBanners = [], mobileBanners = [] }) => {
  const desktopPaginationRef = useRef(null);
  const mobilePaginationRef = useRef(null);

  // 🔥 Handles both: string OR object
  const getImage = (item) => (typeof item === "string" ? item : item?.image);

  const getAlt = (item) =>
    typeof item === "string" ? "banner" : item?.alt || "banner";

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
      {/* --------------------------- DESKTOP --------------------------- */}
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
                src={getImage(item)}
                alt={getAlt(item)}
                loading="lazy"
                className="w-full h-auto object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div
          ref={desktopPaginationRef}
          className="custom-pagination flex justify-center gap-3 mt-4"
        ></div>
      </div>

      {/* --------------------------- MOBILE --------------------------- */}
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
                src={getImage(item)}
                alt={getAlt(item)}
                loading="lazy"
                className="w-full h-auto object-cover"
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
