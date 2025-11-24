// import React, { useState, useRef } from "react";
// import { IoChevronBack, IoChevronForward, IoClose } from "react-icons/io5";

// const ImageGallery = ({ product }) => {
//   const images = [
//     product.image,
//     product.hoverImage,
//     ...(product.extraImages || []),
//   ].filter(Boolean);

//   const [activeIndex, setActiveIndex] = useState(0);
//   const [zoomOpen, setZoomOpen] = useState(false);

//   const scrollRef = useRef(null);

//   const scrollThumbnails = (direction) => {
//     if (!scrollRef.current) return;
//     scrollRef.current.scrollBy({
//       top: direction === "up" ? -120 : 120,
//       behavior: "smooth",
//     });
//   };

//   const nextImage = () => {
//     setActiveIndex((prev) => (prev + 1) % images.length);
//   };

//   const prevImage = () => {
//     setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
//   };

//   return (
//     <>
//       {/* Wrapper */}
//       <div className="flex gap-4 sticky top-24 h-screen">
//         {/* Thumbnails */}
//         <div className="relative w-[85px]">
//           {/* Up arrow */}
//           <button
//             className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white shadow p-1 rounded-full z-10"
//             onClick={() => scrollThumbnails("up")}
//           >
//             <IoChevronBack className="rotate-90" />
//           </button>

//           {/* Scrollable thumbnails */}
//           <div
//             ref={scrollRef}
//             className="flex flex-col gap-3 h-[calc(100vh-80px)] overflow-y-auto no-scrollbar pr-2"
//           >
//             {images.map((img, idx) => (
//               <div
//                 key={idx}
//                 onClick={() => setActiveIndex(idx)}
//                 className={`border rounded-lg overflow-hidden cursor-pointer transition ${
//                   activeIndex === idx
//                     ? "border-black border-2"
//                     : "border-gray-300"
//                 }`}
//               >
//                 <img
//                   src={img}
//                   className="w-full h-20 object-cover"
//                   alt={`thumb-${idx}`}
//                 />
//               </div>
//             ))}
//           </div>

//           {/* Down Arrow */}
//           <button
//             className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white shadow p-1 rounded-full z-10"
//             onClick={() => scrollThumbnails("down")}
//           >
//             <IoChevronForward className="-rotate-90" />
//           </button>
//         </div>

//         {/* Main Image (Full Screen Height) */}
//         <div className="relative flex-1 h-full">
//           {/* Left arrow */}
//           <button
//             className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/70 shadow p-2 rounded-full z-20"
//             onClick={prevImage}
//           >
//             <IoChevronBack />
//           </button>

//           <div
//             className="rounded-xl overflow-hidden cursor-zoom-in h-full"
//             onClick={() => setZoomOpen(true)}
//           >
//             <img
//               src={images[activeIndex]}
//               alt={product.title}
//               className="w-full h-full object-contain"
//             />
//           </div>

//           {/* Right arrow */}
//           <button
//             className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/70 shadow p-2 rounded-full z-20"
//             onClick={nextImage}
//           >
//             <IoChevronForward />
//           </button>
//         </div>
//       </div>

//       {/* FULLSCREEN ZOOM MODAL */}
//       {zoomOpen && (
//         <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-[999]">
//           <button
//             className="absolute top-5 right-5 text-white text-3xl"
//             onClick={() => setZoomOpen(false)}
//           >
//             <IoClose />
//           </button>

//           <img
//             src={images[activeIndex]}
//             alt="zoom"
//             className="max-h-[90%] max-w-[90%] object-contain"
//           />
//         </div>
//       )}
//     </>
//   );
// };

// export default ImageGallery;

// import React, { useState, useRef } from "react";
// import { IoChevronBack, IoChevronForward, IoClose } from "react-icons/io5";

// const ImageGallery = ({ product }) => {
//   const images = [
//     product.image,
//     product.hoverImage,
//     ...(product.extraImages || []),
//   ].filter(Boolean);

//   const [activeIndex, setActiveIndex] = useState(0);
//   const [zoomOpen, setZoomOpen] = useState(false);

//   const scrollRef = useRef(null);

//   const scrollThumbnails = (direction) => {
//     if (!scrollRef.current) return;
//     scrollRef.current.scrollBy({
//       top: direction === "up" ? -120 : 120,
//       behavior: "smooth",
//     });
//   };

//   const nextImage = () => {
//     setActiveIndex((prev) => (prev + 1) % images.length);
//   };

//   const prevImage = () => {
//     setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
//   };

//   return (
//     <>
//       {/* Wrapper */}
//       <div className="flex gap-4 sticky top-24 h-[92vh]">
//         {/* Thumbnails */}
//         <div className="relative w-[85px]">
//           {/* Up button */}
//           <button
//             className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white shadow p-1 rounded-full z-10"
//             onClick={() => scrollThumbnails("up")}
//           >
//             <IoChevronBack className="rotate-90" />
//           </button>

//           {/* Scrollable thumbnails */}
//           <div
//             ref={scrollRef}
//             className="flex flex-col gap-3 h-[calc(92vh-80px)] overflow-y-auto no-scrollbar pr-2"
//           >
//             {images.map((img, idx) => (
//               <div
//                 key={idx}
//                 onClick={() => setActiveIndex(idx)}
//                 className={`border rounded-lg overflow-hidden cursor-pointer transition ${
//                   activeIndex === idx
//                     ? "border-black border-2"
//                     : "border-gray-300"
//                 }`}
//               >
//                 <img
//                   src={img}
//                   className="w-full h-20 object-cover "
//                   alt={`thumb-${idx}`}
//                 />
//               </div>
//             ))}
//           </div>

//           {/* Down button */}
//           <button
//             className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white shadow p-1 rounded-full z-10"
//             onClick={() => scrollThumbnails("down")}
//           >
//             <IoChevronForward className="-rotate-90" />
//           </button>
//         </div>

//         {/* Main Image Area */}
//         <div className="relative flex-1 h-[calc(100vh-120px)]">
//           {/* Left arrow */}
//           <button
//             className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/70 shadow p-2 rounded-full z-20"
//             onClick={prevImage}
//           >
//             <IoChevronBack />
//           </button>

//           {/* Main Image */}
//           <div
//             className="h-full cursor-zoom-in rounded-2xl overflow-hidden  flex items-center justify-center"
//             onClick={() => setZoomOpen(true)}
//           >
//             <img
//               src={images[activeIndex]}
//               alt={product.title}
//               className="max-h-full max-w-full object-contain rounded-2xl"
//             />
//           </div>

//           {/* Right arrow */}
//           <button
//             className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/70 shadow p-2 rounded-full z-20"
//             onClick={nextImage}
//           >
//             <IoChevronForward />
//           </button>
//         </div>
//       </div>

//       {/* FULLSCREEN ZOOM MODAL */}
//       {zoomOpen && (
//         <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-[999]">
//           <button
//             className="absolute top-5 right-5 text-white text-3xl"
//             onClick={() => setZoomOpen(false)}
//           >
//             <IoClose />
//           </button>

//           <img
//             src={images[activeIndex]}
//             alt="zoom"
//             className="max-h-[90%] max-w-[90%] object-contain"
//           />
//         </div>
//       )}
//     </>
//   );
// };

// export default ImageGallery;

// import React, { useState, useRef } from "react";
// import { IoChevronBack, IoChevronForward, IoClose } from "react-icons/io5";

// const ImageGallery = ({ product }) => {
//   const images = [
//     product.image,
//     product.hoverImage,
//     ...(product.extraImages || []),
//   ].filter(Boolean);

//   const [activeIndex, setActiveIndex] = useState(0);
//   const [zoomOpen, setZoomOpen] = useState(false);

//   const scrollRef = useRef(null);

//   const scrollThumbnails = (direction) => {
//     if (!scrollRef.current) return;
//     scrollRef.current.scrollBy({
//       top: direction === "up" ? -120 : 120,
//       behavior: "smooth",
//     });
//   };

//   const nextImage = () => {
//     setActiveIndex((prev) => (prev + 1) % images.length);
//   };

//   const prevImage = () => {
//     setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
//   };

//   return (
//     <>
//       {/* DESKTOP VIEW */}
//       <div className="hidden md:flex gap-4 sticky top-24 h-[92vh]">
//         {/* Thumbnails */}
//         <div className="relative w-[85px]">
//           <button
//             className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white shadow p-1 rounded-full z-10"
//             onClick={() => scrollThumbnails("up")}
//           >
//             <IoChevronBack className="rotate-90" />
//           </button>

//           <div
//             ref={scrollRef}
//             className="flex flex-col gap-3 h-[calc(92vh-80px)] overflow-y-auto no-scrollbar pr-2"
//           >
//             {images.map((img, idx) => (
//               <div
//                 key={idx}
//                 onClick={() => setActiveIndex(idx)}
//                 className={`border rounded-lg overflow-hidden cursor-pointer transition ${
//                   activeIndex === idx
//                     ? "border-black border-2"
//                     : "border-gray-300"
//                 }`}
//               >
//                 <img
//                   src={img}
//                   className="w-full h-20 object-cover"
//                   alt={`thumb-${idx}`}
//                 />
//               </div>
//             ))}
//           </div>

//           <button
//             className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white shadow p-1 rounded-full z-10"
//             onClick={() => scrollThumbnails("down")}
//           >
//             <IoChevronForward className="-rotate-90" />
//           </button>
//         </div>

//         {/* Main Image */}
//         <div className="relative flex-1 h-[calc(100vh-120px)]">
//           <button
//             className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/70 shadow p-2 rounded-full z-20"
//             onClick={prevImage}
//           >
//             <IoChevronBack />
//           </button>

//           <div
//             className="h-full cursor-zoom-in rounded-2xl overflow-hidden  flex items-center justify-center"
//             onClick={() => setZoomOpen(true)}
//           >
//             <img
//               src={images[activeIndex]}
//               alt={product.title}
//               className="max-h-full max-w-full object-contain rounded-2xl"
//             />
//           </div>

//           <button
//             className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/70 shadow p-2 rounded-full z-20"
//             onClick={nextImage}
//           >
//             <IoChevronForward />
//           </button>
//         </div>
//       </div>

//       {/* MOBILE VIEW — Bewakoof style */}
//       <div className="md:hidden w-full">
//         {/* MAIN SWIPE SLIDER */}
//         <div className="relative w-full h-[480px] overflow-hidden bg-white rounded-b-3xl">
//           <div
//             className="flex h-full transition-transform duration-300"
//             style={{ transform: `translateX(-${activeIndex * 100}%)` }}
//           >
//             {images.map((img, idx) => (
//               <div
//                 key={idx}
//                 className="min-w-full h-full flex items-center justify-center"
//                 onTouchStart={(e) => (touchStart = e.touches[0].clientX)}
//                 onTouchEnd={(e) => {
//                   const touchEnd = e.changedTouches[0].clientX;
//                   if (touchStart - touchEnd > 50) nextImage();
//                   if (touchEnd - touchStart > 50) prevImage();
//                 }}
//                 onClick={() => setZoomOpen(true)}
//               >
//                 <img
//                   src={img}
//                   className="h-full w-full object-cover"
//                   alt="product"
//                 />
//               </div>
//             ))}
//           </div>

//           {/* DOT INDICATORS */}
//           <div className="absolute bottom-3 w-full flex justify-center gap-2">
//             {images.map((_, idx) => (
//               <div
//                 key={idx}
//                 className={`h-2 w-2 rounded-full ${
//                   activeIndex === idx ? "bg-black" : "bg-gray-300"
//                 }`}
//               ></div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* FULLSCREEN ZOOM MODAL */}
//       {zoomOpen && (
//         <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-[999]">
//           <button
//             className="absolute top-5 right-5 text-white text-3xl"
//             onClick={() => setZoomOpen(false)}
//           >
//             <IoClose />
//           </button>

//           <img
//             src={images[activeIndex]}
//             className="max-h-[90%] max-w-[90%] object-contain"
//           />
//         </div>
//       )}
//     </>
//   );
// };

// export default ImageGallery;

// import React, { useState, useRef } from "react";
// import { IoChevronBack, IoChevronForward, IoClose } from "react-icons/io5";

// const ImageGallery = ({ product }) => {
//   const images = [
//     product.image,
//     product.hoverImage,
//     ...(product.extraImages || []),
//   ].filter(Boolean);

//   const [activeIndex, setActiveIndex] = useState(0);
//   const [zoomOpen, setZoomOpen] = useState(false);

//   // Touch start position for mobile swipe
//   const touchStartRef = useRef(0);

//   const scrollRef = useRef(null);

//   const scrollThumbnails = (direction) => {
//     if (!scrollRef.current) return;
//     scrollRef.current.scrollBy({
//       top: direction === "up" ? -120 : 120,
//       behavior: "smooth",
//     });
//   };

//   const nextImage = () => {
//     setActiveIndex((prev) => (prev + 1) % images.length);
//   };

//   const prevImage = () => {
//     setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
//   };

//   return (
//     <>
//       {/* ========== DESKTOP VIEW ========== */}
//       <div className="hidden md:flex gap-4 sticky top-24 h-[92vh]">
//         {/* Thumbnails */}
//         <div className="relative w-[85px]">
//           {/* Scroll Up */}
//           <button
//             className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white shadow p-1 rounded-full z-10"
//             onClick={() => scrollThumbnails("up")}
//           >
//             <IoChevronBack className="rotate-90" />
//           </button>

//           {/* Thumbnails list */}
//           <div
//             ref={scrollRef}
//             className="flex flex-col gap-3 h-[calc(92vh-80px)] overflow-y-auto no-scrollbar pr-2"
//           >
//             {images.map((img, idx) => (
//               <div
//                 key={idx}
//                 onClick={() => setActiveIndex(idx)}
//                 className={`border rounded-lg overflow-hidden cursor-pointer transition ${
//                   activeIndex === idx
//                     ? "border-black border-2"
//                     : "border-gray-300"
//                 }`}
//               >
//                 <img
//                   src={img}
//                   className="w-full h-20 object-cover"
//                   alt={`thumb-${idx}`}
//                 />
//               </div>
//             ))}
//           </div>

//           {/* Scroll Down */}
//           <button
//             className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white shadow p-1 rounded-full z-10"
//             onClick={() => scrollThumbnails("down")}
//           >
//             <IoChevronForward className="-rotate-90" />
//           </button>
//         </div>

//         {/* Main Image */}
//         <div className="relative flex-1 h-[calc(100vh-120px)]">
//           {/* Prev */}
//           <button
//             className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/70 shadow p-2 rounded-full z-20"
//             onClick={prevImage}
//           >
//             <IoChevronBack />
//           </button>

//           {/* Image */}
//           <div
//             className="h-full cursor-zoom-in rounded-2xl overflow-hidden flex items-center justify-center"
//             onClick={() => setZoomOpen(true)}
//           >
//             <img
//               src={images[activeIndex]}
//               alt={product.title}
//               className="max-h-full max-w-full object-contain rounded-2xl"
//             />
//           </div>

//           {/* Next */}
//           <button
//             className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/70 shadow p-2 rounded-full z-20"
//             onClick={nextImage}
//           >
//             <IoChevronForward />
//           </button>
//         </div>
//       </div>

//       {/* ========== MOBILE VIEW (FIXED NO-CROP VERSION) ========== */}
//       <div className="md:hidden w-full">
//         {/* MAIN IMAGE SWIPER */}
//         <div className="relative w-full h-[520px] overflow-hidden rounded-2xl ">
//           <div
//             className="flex h-full transition-transform duration-300"
//             style={{ transform: `translateX(-${activeIndex * 100}%)` }}
//           >
//             {images.map((img, idx) => (
//               <div
//                 key={idx}
//                 className="min-w-full h-full flex items-center justify-center"
//                 onTouchStart={(e) => {
//                   touchStartRef.current = e.touches[0].clientX;
//                 }}
//                 onTouchEnd={(e) => {
//                   const touchEnd = e.changedTouches[0].clientX;
//                   if (touchStartRef.current - touchEnd > 50) nextImage();
//                   if (touchEnd - touchStartRef.current > 50) prevImage();
//                 }}
//                 onClick={() => setZoomOpen(true)}
//               >
//                 <img
//                   src={img}
//                   className="
//               max-h-full
//               max-w-full
//               object-contain
//               rounded-2xl
//             "
//                   alt="product"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* DOTS BELOW IMAGE */}
//         <div className="flex justify-center gap-2 mt-3">
//           {images.map((_, idx) => (
//             <div
//               key={idx}
//               className={`h-2 w-2 rounded-full ${
//                 activeIndex === idx ? "bg-black" : "bg-gray-300"
//               }`}
//             ></div>
//           ))}
//         </div>
//       </div>

//       {/* ========== FULLSCREEN ZOOM MODAL ========== */}
//       {zoomOpen && (
//         <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-[999]">
//           <button
//             className="absolute top-5 right-5 text-white text-3xl"
//             onClick={() => setZoomOpen(false)}
//           >
//             <IoClose />
//           </button>

//           <img
//             src={images[activeIndex]}
//             className="max-h-[90%] max-w-[90%] object-contain"
//             alt="zoom"
//           />
//         </div>
//       )}
//     </>
//   );
// };

// export default ImageGallery;

// src/pages/Product/components/ImageGallery.jsx

// import React, { useState, useRef } from "react";
// import { IoChevronBack, IoChevronForward, IoClose } from "react-icons/io5";

// const ImageGallery = ({ product }) => {
//   const images = [
//     product.image,
//     product.hoverImage,
//     ...(product.extraImages || []),
//   ].filter(Boolean);

//   const [activeIndex, setActiveIndex] = useState(0);
//   const [zoomOpen, setZoomOpen] = useState(false);

//   // Touch start position for mobile swipe
//   const touchStartRef = useRef(0);
//   const thumbnailScrollRef = useRef(null);

//   const scrollThumbnails = (direction) => {
//     if (!thumbnailScrollRef.current) return;
//     thumbnailScrollRef.current.scrollBy({
//       top: direction === "up" ? -120 : 120,
//       behavior: "smooth",
//     });
//   };

//   const nextImage = () => {
//     setActiveIndex((prev) => (prev + 1) % images.length);
//   };

//   const prevImage = () => {
//     setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
//   };

//   return (
//     <>
//       {/* ========== DESKTOP VIEW ========== */}
//       <div className="hidden md:flex gap-4 sticky top-24 h-[92vh]">
//         {/* Thumbnails column: make its height equal to full (so arrows align to top/bottom) */}
//         <div className="relative w-[85px] h-full">
//           {/* Up arrow — aligned to top of thumbnails column */}
//           <button
//             onClick={() => scrollThumbnails("up")}
//             className="absolute top-3 left-1/2 -translate-x-1/2 bg-white shadow p-1 rounded-full z-10"
//             aria-label="scroll-thumbs-up"
//           >
//             <IoChevronBack className="rotate-90" />
//           </button>

//           {/* Scrollable thumbnails list (fills available height) */}
//           <div
//             ref={thumbnailScrollRef}
//             className="flex flex-col gap-3 h-[calc(100%_-_72px)] overflow-y-auto no-scrollbar pr-2 pt-2"
//             // note: subtract approx 72px to leave room for the two arrows (top+bottom).
//           >
//             {images.map((img, idx) => (
//               <div
//                 key={idx}
//                 onClick={() => setActiveIndex(idx)}
//                 className={`border rounded-lg overflow-hidden cursor-pointer transition ${
//                   activeIndex === idx
//                     ? "border-black border-2"
//                     : "border-gray-300"
//                 }`}
//               >
//                 <img
//                   src={img}
//                   className="w-full h-20 object-cover"
//                   alt={`thumb-${idx}`}
//                 />
//               </div>
//             ))}
//           </div>

//           {/* Down arrow — aligned to bottom of thumbnails column */}
//           <button
//             onClick={() => scrollThumbnails("down")}
//             className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-white shadow p-1 rounded-full z-10"
//             aria-label="scroll-thumbs-down"
//           >
//             <IoChevronForward className="-rotate-90" />
//           </button>
//         </div>

//         {/* Main Image */}
//         <div className="relative flex-1 h-[calc(100vh-120px)] flex items-center justify-center">
//           {/* Prev button INSIDE the image */}
//           <button
//             className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/80 shadow p-2 rounded-full z-20"
//             onClick={prevImage}
//           >
//             <IoChevronBack />
//           </button>

//           {/* Image */}
//           <div
//             className="h-full cursor-zoom-in rounded-2xl overflow-hidden flex items-center justify-center"
//             onClick={() => setZoomOpen(true)}
//           >
//             <img
//               src={images[activeIndex]}
//               alt={product.title}
//               className="max-h-full max-w-full object-contain rounded-2xl"
//             />
//           </div>

//           {/* Next button INSIDE the image */}
//           <button
//             className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/80 shadow p-2 rounded-full z-20"
//             onClick={nextImage}
//           >
//             <IoChevronForward />
//           </button>
//         </div>
//       </div>

//       {/* ========== MOBILE VIEW (unchanged) ========== */}
//       <div className="md:hidden w-full">
//         {/* MAIN IMAGE SWIPER */}
//         <div className="relative w-full h-[520px] overflow-hidden rounded-2xl">
//           <div
//             className="flex h-full transition-transform duration-300"
//             style={{ transform: `translateX(-${activeIndex * 100}%)` }}
//           >
//             {images.map((img, idx) => (
//               <div
//                 key={idx}
//                 className="min-w-full h-full flex items-center justify-center"
//                 onTouchStart={(e) => {
//                   touchStartRef.current = e.touches[0].clientX;
//                 }}
//                 onTouchEnd={(e) => {
//                   const touchEnd = e.changedTouches[0].clientX;
//                   if (touchStartRef.current - touchEnd > 50) nextImage();
//                   if (touchEnd - touchStartRef.current > 50) prevImage();
//                 }}
//                 onClick={() => setZoomOpen(true)}
//               >
//                 <img
//                   src={img}
//                   className="max-h-full max-w-full object-contain rounded-2xl"
//                   alt="product"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* DOTS BELOW IMAGE */}
//         <div className="flex justify-center gap-2 mt-3">
//           {images.map((_, idx) => (
//             <div
//               key={idx}
//               className={`h-2 w-2 rounded-full ${
//                 activeIndex === idx ? "bg-black" : "bg-gray-300"
//               }`}
//             />
//           ))}
//         </div>
//       </div>

//       {/* ========== FULLSCREEN ZOOM ========== */}
//       {zoomOpen && (
//         <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-[999]">
//           <button
//             className="absolute top-5 right-5 text-white text-3xl"
//             onClick={() => setZoomOpen(false)}
//           >
//             <IoClose />
//           </button>

//           <img
//             src={images[activeIndex]}
//             className="max-h-[90%] max-w-[90%] object-contain"
//             alt="zoom"
//           />
//         </div>
//       )}
//     </>
//   );
// };

// export default ImageGallery;

// import React, { useState, useRef, useEffect } from "react";
// import { IoChevronBack, IoChevronForward, IoClose } from "react-icons/io5";

// const ImageGallery = ({ product }) => {
//   const images = [
//     product.image,
//     product.hoverImage,
//     ...(product.extraImages || []),
//   ].filter(Boolean);

//   const [activeIndex, setActiveIndex] = useState(0);
//   const [zoomOpen, setZoomOpen] = useState(false);

//   // Touch start position for mobile swipe
//   const touchStartRef = useRef(0);
//   const thumbnailScrollRef = useRef(null);

//   // NEW: Detect if thumbnails overflow
//   const [showThumbArrows, setShowThumbArrows] = useState(false);

//   useEffect(() => {
//     const checkOverflow = () => {
//       if (thumbnailScrollRef.current) {
//         const el = thumbnailScrollRef.current;
//         setShowThumbArrows(el.scrollHeight > el.clientHeight);
//       }
//     };

//     checkOverflow();
//     window.addEventListener("resize", checkOverflow);
//     return () => window.removeEventListener("resize", checkOverflow);
//   }, [images.length]);

//   const scrollThumbnails = (direction) => {
//     if (!thumbnailScrollRef.current) return;
//     thumbnailScrollRef.current.scrollBy({
//       top: direction === "up" ? -120 : 120,
//       behavior: "smooth",
//     });
//   };

//   const nextImage = () => {
//     setActiveIndex((prev) => (prev + 1) % images.length);
//   };

//   const prevImage = () => {
//     setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
//   };

//   return (
//     <>
//       {/* ========== DESKTOP VIEW ========== */}
//       <div className="hidden md:flex gap-4 sticky top-24 h-[92vh]">
//         {/* Thumbnails column */}
//         <div className="relative w-[85px] h-full">
//           {/* Up arrow — ONLY IF OVERFLOW */}
//           {showThumbArrows && (
//             <button
//               onClick={() => scrollThumbnails("up")}
//               className="absolute top-3 left-1/2 -translate-x-1/2 bg-white shadow p-1 rounded-full z-10"
//               aria-label="scroll-thumbs-up"
//             >
//               <IoChevronBack className="rotate-90" />
//             </button>
//           )}

//           {/* Scrollable thumbnails */}
//           <div
//             ref={thumbnailScrollRef}
//             className="flex flex-col gap-3 h-[calc(100%_-_72px)] overflow-y-auto no-scrollbar pr-2 pt-2"
//           >
//             {images.map((img, idx) => (
//               <div
//                 key={idx}
//                 onClick={() => setActiveIndex(idx)}
//                 className={`border rounded-lg overflow-hidden cursor-pointer transition ${
//                   activeIndex === idx
//                     ? "border-black border-2"
//                     : "border-gray-300"
//                 }`}
//               >
//                 <img
//                   src={img}
//                   className="w-full h-20 object-cover"
//                   alt={`thumb-${idx}`}
//                 />
//               </div>
//             ))}
//           </div>

//           {/* Down arrow — ONLY IF OVERFLOW */}
//           {showThumbArrows && (
//             <button
//               onClick={() => scrollThumbnails("down")}
//               className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-white shadow p-1 rounded-full z-10"
//               aria-label="scroll-thumbs-down"
//             >
//               <IoChevronForward className="-rotate-90" />
//             </button>
//           )}
//         </div>

//         {/* Main Image */}
//         <div className="relative flex-1 h-[calc(100vh-120px)] flex items-center justify-center">
//           {/* Prev button inside image */}
//           <button
//             className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/80 shadow p-2 rounded-full z-20"
//             onClick={prevImage}
//           >
//             <IoChevronBack />
//           </button>

//           {/* Main Image */}
//           <div
//             className="h-full cursor-zoom-in rounded-2xl overflow-hidden flex items-center justify-center"
//             onClick={() => setZoomOpen(true)}
//           >
//             <img
//               src={images[activeIndex]}
//               alt={product.title}
//               className="max-h-full max-w-full object-contain rounded-2xl"
//             />
//           </div>

//           {/* Next button inside image */}
//           <button
//             className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/80 shadow p-2 rounded-full z-20"
//             onClick={nextImage}
//           >
//             <IoChevronForward />
//           </button>
//         </div>
//       </div>

//       {/* ========== MOBILE VIEW ========== */}
//       <div className="md:hidden w-full">
//         {/* MAIN IMAGE SWIPER */}
//         <div className="relative w-full h-[520px] overflow-hidden rounded-2xl">
//           <div
//             className="flex h-full transition-transform duration-300"
//             style={{ transform: `translateX(-${activeIndex * 100}%)` }}
//           >
//             {images.map((img, idx) => (
//               <div
//                 key={idx}
//                 className="min-w-full h-full flex items-center justify-center"
//                 onTouchStart={(e) => {
//                   touchStartRef.current = e.touches[0].clientX;
//                 }}
//                 onTouchEnd={(e) => {
//                   const touchEnd = e.changedTouches[0].clientX;
//                   if (touchStartRef.current - touchEnd > 50) nextImage();
//                   if (touchEnd - touchStartRef.current > 50) prevImage();
//                 }}
//                 onClick={() => setZoomOpen(true)}
//               >
//                 <img
//                   src={img}
//                   className="max-h-full max-w-full object-contain rounded-2xl"
//                   alt="product"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* DOT INDICATORS */}
//         <div className="flex justify-center gap-2 mt-3">
//           {images.map((_, idx) => (
//             <div
//               key={idx}
//               className={`h-2 w-2 rounded-full ${
//                 activeIndex === idx ? "bg-black" : "bg-gray-300"
//               }`}
//             />
//           ))}
//         </div>
//       </div>

//       {/* ========== FULLSCREEN ZOOM MODAL ========== */}
//       {zoomOpen && (
//         <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-[999]">
//           <button
//             className="absolute top-5 right-5 text-white text-3xl"
//             onClick={() => setZoomOpen(false)}
//           >
//             <IoClose />
//           </button>

//           <img
//             src={images[activeIndex]}
//             className="max-h-[90%] max-w-[90%] object-contain"
//             alt="zoom"
//           />
//         </div>
//       )}
//     </>
//   );
// };

// export default ImageGallery;

// import React, { useState, useRef } from "react";
// import { IoChevronBack, IoChevronForward, IoClose } from "react-icons/io5";

// const ImageGallery = ({ product }) => {
//   const images = [
//     product.image,
//     product.hoverImage,
//     ...(product.extraImages || []),
//   ].filter(Boolean);

//   const [activeIndex, setActiveIndex] = useState(0);
//   const [zoomOpen, setZoomOpen] = useState(false);

//   const touchStartRef = useRef(0);
//   const thumbnailScrollRef = useRef(null);

//   const scrollThumbnails = (direction) => {
//     if (!thumbnailScrollRef.current) return;
//     thumbnailScrollRef.current.scrollBy({
//       top: direction === "up" ? -120 : 120,
//       behavior: "smooth",
//     });
//   };

//   const nextImage = () => setActiveIndex((prev) => (prev + 1) % images.length);

//   const prevImage = () =>
//     setActiveIndex((prev) => (prev - 1 + images.length) % images.length);

//   return (
//     <>
//       {/* ========== DESKTOP VIEW ========== */}
//       <div className="hidden md:flex gap-4 sticky top-20 min-h-screen">
//         {/* Thumbnails Section */}
//         <div className="relative w-[85px] h-full">
//           {/* Up arrow — only show if scrollable */}
//           {images.length > 3 && (
//             <button
//               onClick={() => scrollThumbnails("up")}
//               className="absolute top-2 left-1/2 -translate-x-1/2 bg-white shadow p-1 rounded-full z-10"
//             >
//               <IoChevronBack className="rotate-90" />
//             </button>
//           )}

//           {/* Thumbnails List */}
//           <div
//             ref={thumbnailScrollRef}
//             className={`flex flex-col gap-3 overflow-y-auto no-scrollbar pr-2 pt-2
//               ${images.length > 3 ? "h-[calc(100%_-_70px)]" : "h-auto"}`}
//           >
//             {images.map((img, idx) => (
//               <div
//                 key={idx}
//                 onClick={() => setActiveIndex(idx)}
//                 className={`border rounded-lg overflow-hidden cursor-pointer transition ${
//                   activeIndex === idx
//                     ? "border-black border-2"
//                     : "border-gray-300"
//                 }`}
//               >
//                 <img
//                   src={img}
//                   className="w-full h-20 object-cover"
//                   alt={`thumb-${idx}`}
//                 />
//               </div>
//             ))}
//           </div>

//           {/* Down arrow — only show if scrollable */}
//           {images.length > 3 && (
//             <button
//               onClick={() => scrollThumbnails("down")}
//               className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-white shadow p-1 rounded-full z-10"
//             >
//               <IoChevronForward className="-rotate-90" />
//             </button>
//           )}
//         </div>

//         {/* MAIN IMAGE */}
//         <div className="relative flex-1 min-h-[85vh] flex items-center justify-center">
//           {/* Prev Button */}
//           <button
//             className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/80 shadow p-2 rounded-full z-20"
//             onClick={prevImage}
//           >
//             <IoChevronBack />
//           </button>

//           {/* Image Container */}
//           <div
//             className="cursor-zoom-in rounded-2xl overflow-hidden max-h-[85vh] flex items-center justify-center bg-white"
//             onClick={() => setZoomOpen(true)}
//           >
//             <img
//               src={images[activeIndex]}
//               alt={product.title}
//               className="max-h-[85vh] max-w-full object-contain rounded-2xl"
//             />
//           </div>

//           {/* Next Button */}
//           <button
//             className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/80 shadow p-2 rounded-full z-20"
//             onClick={nextImage}
//           >
//             <IoChevronForward />
//           </button>
//         </div>
//       </div>

//       {/* ========== MOBILE VIEW (slider) ========== */}
//       <div className="md:hidden w-full">
//         <div className="relative w-full h-[520px] overflow-hidden rounded-2xl">
//           <div
//             className="flex h-full transition-transform duration-300"
//             style={{ transform: `translateX(-${activeIndex * 100}%)` }}
//           >
//             {images.map((img, idx) => (
//               <div
//                 key={idx}
//                 className="min-w-full h-full flex items-center justify-center"
//                 onTouchStart={(e) =>
//                   (touchStartRef.current = e.touches[0].clientX)
//                 }
//                 onTouchEnd={(e) => {
//                   const end = e.changedTouches[0].clientX;
//                   if (touchStartRef.current - end > 50) nextImage();
//                   if (end - touchStartRef.current > 50) prevImage();
//                 }}
//                 onClick={() => setZoomOpen(true)}
//               >
//                 <img
//                   src={img}
//                   className="max-h-full max-w-full object-contain rounded-2xl"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Dots */}
//         <div className="flex justify-center gap-2 mt-3">
//           {images.map((_, idx) => (
//             <div
//               key={idx}
//               className={`h-2 w-2 rounded-full ${
//                 activeIndex === idx ? "bg-black" : "bg-gray-300"
//               }`}
//             ></div>
//           ))}
//         </div>
//       </div>

//       {/* ========== ZOOM VIEW ========== */}
//       {zoomOpen && (
//         <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-[999]">
//           <button
//             className="absolute top-5 right-5 text-white text-3xl"
//             onClick={() => setZoomOpen(false)}
//           >
//             <IoClose />
//           </button>

//           <img
//             src={images[activeIndex]}
//             className="max-h-[90%] max-w-[90%] object-contain"
//           />
//         </div>
//       )}
//     </>
//   );
// };

// export default ImageGallery;

// import React, { useState, useRef } from "react";
// import { IoChevronBack, IoChevronForward, IoClose } from "react-icons/io5";

// const ImageGallery = ({ product }) => {
//   const images = [
//     product.image,
//     product.hoverImage,
//     ...(product.extraImages || []),
//   ].filter(Boolean);

//   const [activeIndex, setActiveIndex] = useState(0);
//   const [zoomOpen, setZoomOpen] = useState(false);

//   const touchStartRef = useRef(0);
//   const thumbnailScrollRef = useRef(null);

//   const scrollThumbnails = (direction) => {
//     if (!thumbnailScrollRef.current) return;
//     thumbnailScrollRef.current.scrollBy({
//       top: direction === "up" ? -120 : 120,
//       behavior: "smooth",
//     });
//   };

//   const nextImage = () => setActiveIndex((prev) => (prev + 1) % images.length);
//   const prevImage = () =>
//     setActiveIndex((prev) => (prev - 1 + images.length) % images.length);

//   return (
//     <>
//       {/* ========== DESKTOP VIEW ========== */}
//       <div className="hidden md:flex gap-4 min-h-[88vh] -mt-2">
//         {/* Thumbnails */}
//         <div className="relative w-[85px] h-full pt-4">
//           {images.length > 3 && (
//             <button
//               onClick={() => scrollThumbnails("up")}
//               className="absolute top-2 left-1/2 -translate-x-1/2 bg-white shadow p-1 rounded-full z-10"
//             >
//               <IoChevronBack className="rotate-90" />
//             </button>
//           )}

//           <div
//             ref={thumbnailScrollRef}
//             className={`flex flex-col gap-3 overflow-y-auto no-scrollbar pr-2 pt-1 ${
//               images.length > 3 ? "h-[calc(100%_-_70px)]" : "h-auto"
//             }`}
//           >
//             {images.map((img, idx) => (
//               <div
//                 key={idx}
//                 onClick={() => setActiveIndex(idx)}
//                 className={`border rounded-lg overflow-hidden cursor-pointer transition ${
//                   activeIndex === idx
//                     ? "border-black border-2"
//                     : "border-gray-300"
//                 }`}
//               >
//                 <img
//                   src={img}
//                   className="w-full h-20 object-cover"
//                   alt={`thumb-${idx}`}
//                 />
//               </div>
//             ))}
//           </div>

//           {images.length > 3 && (
//             <button
//               onClick={() => scrollThumbnails("down")}
//               className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-white shadow p-1 rounded-full z-10"
//             >
//               <IoChevronForward className="-rotate-90" />
//             </button>
//           )}
//         </div>

//         {/* MAIN IMAGE */}
//         <div className="relative flex-1 flex items-start justify-center pt-2">
//           {/* Prev */}
//           <button
//             className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/80 shadow p-2 rounded-full z-20"
//             onClick={prevImage}
//           >
//             <IoChevronBack />
//           </button>

//           {/* Main Image */}
//           <div
//             className="cursor-zoom-in rounded-2xl overflow-hidden bg-white flex items-center justify-center h-[82vh]"
//             onClick={() => setZoomOpen(true)}
//           >
//             <img
//               src={images[activeIndex]}
//               alt={product.title}
//               className="h-full w-auto object-cover rounded-2xl"
//             />
//           </div>

//           {/* Next */}
//           <button
//             className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/80 shadow p-2 rounded-full z-20"
//             onClick={nextImage}
//           >
//             <IoChevronForward />
//           </button>
//         </div>
//       </div>

//       {/* ========== MOBILE VIEW ========== */}
//       <div className="md:hidden w-full mt-3">
//         <div className="relative w-full h-[480px] overflow-hidden rounded-2xl flex items-center justify-center">
//           <div
//             className="flex h-full transition-transform duration-300"
//             style={{ transform: `translateX(-${activeIndex * 100}%)` }}
//           >
//             {images.map((img, idx) => (
//               <div
//                 key={idx}
//                 className="min-w-full h-full flex items-center justify-center"
//                 onTouchStart={(e) =>
//                   (touchStartRef.current = e.touches[0].clientX)
//                 }
//                 onTouchEnd={(e) => {
//                   const end = e.changedTouches[0].clientX;
//                   if (touchStartRef.current - end > 50) nextImage();
//                   if (end - touchStartRef.current > 50) prevImage();
//                 }}
//                 onClick={() => setZoomOpen(true)}
//               >
//                 <img
//                   src={img}
//                   className="max-h-full max-w-full object-contain rounded-2xl"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Dots */}
//         <div className="flex justify-center gap-2 mt-3">
//           {images.map((_, idx) => (
//             <div
//               key={idx}
//               className={`h-2 w-2 rounded-full ${
//                 activeIndex === idx ? "bg-black" : "bg-gray-300"
//               }`}
//             ></div>
//           ))}
//         </div>
//       </div>

//       {/* ========== ZOOM VIEW ========== */}
//       {zoomOpen && (
//         <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-[999]">
//           <button
//             className="absolute top-5 right-5 text-white text-3xl"
//             onClick={() => setZoomOpen(false)}
//           >
//             <IoClose />
//           </button>

//           <img
//             src={images[activeIndex]}
//             className="max-h-[90%] max-w-[90%] object-contain"
//           />
//         </div>
//       )}
//     </>
//   );
// };

// export default ImageGallery;

import React, { useState, useRef } from "react";
import { IoChevronBack, IoChevronForward, IoClose } from "react-icons/io5";

const ImageGallery = ({ product }) => {
  const images = [
    product.image,
    product.hoverImage,
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
      {/* ========== DESKTOP VIEW ========== */}
      <div className="hidden md:flex gap-4 min-h-[88vh] -mt-2">
        {/* Thumbnails */}
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

        {/* MAIN IMAGE */}
        <div className="relative flex-1 flex items-start justify-center pt-2">
          <button
            className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/80 shadow p-2 rounded-full z-20"
            onClick={prevImage}
          >
            <IoChevronBack />
          </button>

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

          <button
            className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/80 shadow p-2 rounded-full z-20"
            onClick={nextImage}
          >
            <IoChevronForward />
          </button>
        </div>
      </div>

      {/* ========== MOBILE VIEW ========== */}
      <div className="md:hidden w-full mt-4">
        <div className="relative w-full h-[480px] overflow-hidden rounded-2xl flex items-center justify-center ">
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

      {/* ========== ZOOM VIEW ========== */}
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
          />
        </div>
      )}
    </>
  );
};

export default ImageGallery;
