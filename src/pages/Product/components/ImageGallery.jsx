import React, { useState, useRef } from "react";
import { IoChevronBack, IoChevronForward, IoClose } from "react-icons/io5";

import ShareButton from "./ShareButton";

const ImageGallery = ({ product }) => {
  const images = [
    product.main_image,
    product.hover_image,
    ...(product.extraImages || []),
  ].filter(Boolean);

  const [activeIndex, setActiveIndex] = useState(0);
  const [zoomOpen, setZoomOpen] = useState(false);

  const touchStartRef = useRef(0);
  const thumbnailScrollRef = useRef(null);

  const scrollThumbnails = (direction) => {
    if (!thumbnailScrollRef.current) return;
    thumbnailScrollRef.current.scrollBy({
      top: direction === "up" ? -120 : 120,
      behavior: "smooth",
    });
  };

  const nextImage = () => setActiveIndex((prev) => (prev + 1) % images.length);

  const prevImage = () =>
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <>
      {/* ================= DESKTOP VIEW ================= */}
      <div className="hidden md:flex gap-4 min-h-[88vh] -mt-2">
        {/* ---------- Thumbnails ---------- */}
        <div className="relative w-[85px] h-full pt-4">
          {images.length > 3 && (
            <button
              onClick={() => scrollThumbnails("up")}
              className="absolute top-2 left-1/2 -translate-x-1/2 bg-white shadow p-1 rounded-full z-10"
            >
              <IoChevronBack className="rotate-90" />
            </button>
          )}

          <div
            ref={thumbnailScrollRef}
            className={`flex flex-col gap-3 overflow-y-auto no-scrollbar pr-2 pt-1 ${
              images.length > 3 ? "h-[calc(100%_-_70px)]" : "h-auto"
            }`}
          >
            {images.map((img, idx) => (
              <div
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`border rounded-lg overflow-hidden cursor-pointer transition ${
                  activeIndex === idx
                    ? "border-black border-2"
                    : "border-gray-300"
                }`}
              >
                <img
                  src={img}
                  className="w-full h-20 object-cover"
                  alt={`thumb-${idx}`}
                />
              </div>
            ))}
          </div>

          {images.length > 3 && (
            <button
              onClick={() => scrollThumbnails("down")}
              className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-white shadow p-1 rounded-full z-10"
            >
              <IoChevronForward className="-rotate-90" />
            </button>
          )}
        </div>

        {/* ---------- Main Image ---------- */}
        <div className="relative flex-1 flex items-start justify-center pt-2">
          {/* 🔗 SHARE BUTTON */}
          <div className="absolute top-4 right-4 z-30 bg-white/90 backdrop-blur rounded-full shadow-lg">
            <ShareButton product={product} />
          </div>

          {/* Left Arrow */}
          <button
            className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/80 shadow p-2 rounded-full z-20"
            onClick={prevImage}
          >
            <IoChevronBack />
          </button>

          {/* Image */}
          <div
            className="cursor-zoom-in rounded-2xl overflow-hidden bg-white flex items-center justify-center h-[82vh]"
            onClick={() => setZoomOpen(true)}
          >
            <img
              src={images[activeIndex]}
              alt={product.title}
              className="h-full w-auto object-contain rounded-2xl"
            />
          </div>

          {/* Right Arrow */}
          <button
            className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/80 shadow p-2 rounded-full z-20"
            onClick={nextImage}
          >
            <IoChevronForward />
          </button>
        </div>
      </div>

      {/* ================= MOBILE VIEW ================= */}
      <div className="md:hidden w-full mt-4">
        <div className="relative w-full h-[480px] overflow-hidden rounded-2xl flex items-center justify-center">
          {/* 🔗 SHARE BUTTON (MOBILE) */}
          <div className="absolute top-3 right-3 z-30 bg-white/90 backdrop-blur rounded-full shadow-md">
            <ShareButton product={product} />
          </div>

          <div
            className="flex h-full transition-transform duration-300"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {images.map((img, idx) => (
              <div
                key={idx}
                className="min-w-full h-full flex items-center justify-center"
                onTouchStart={(e) =>
                  (touchStartRef.current = e.touches[0].clientX)
                }
                onTouchEnd={(e) => {
                  const end = e.changedTouches[0].clientX;
                  if (touchStartRef.current - end > 50) nextImage();
                  if (end - touchStartRef.current > 50) prevImage();
                }}
                onClick={() => setZoomOpen(true)}
              >
                <img
                  src={img}
                  className="max-h-full max-w-full object-contain rounded-2xl"
                  alt={`mobile-${idx}`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-3">
          {images.map((_, idx) => (
            <div
              key={idx}
              className={`h-2 w-2 rounded-full ${
                activeIndex === idx ? "bg-black" : "bg-gray-300"
              }`}
            ></div>
          ))}
        </div>
      </div>

      {/* ================= ZOOM VIEW ================= */}
      {zoomOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-[999]">
          <button
            className="absolute top-5 right-5 text-white text-3xl"
            onClick={() => setZoomOpen(false)}
          >
            <IoClose />
          </button>

          <img
            src={images[activeIndex]}
            className="max-h-[90%] max-w-[90%] object-contain"
            alt="zoom"
          />
        </div>
      )}
    </>
  );
};

export default ImageGallery;
