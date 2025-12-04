// const ProductNotFound = () => {
//   return (
//     <div className="min-h-screen flex justify-center items-start pt-14 px-5 py-6 ">
//       <div className="bg-white w-full max-w-md rounded-3xl shadow-lg p-8 text-center animate-fadeIn relative overflow-hidden">
//         {/* Decorative Soft Blobs */}
//         <div className="absolute -top-10 -left-10 w-36 h-36 bg-pink-200/30 rounded-full blur-xl"></div>
//         <div className="absolute -bottom-14 -right-10 w-40 h-40 bg-orange-200/20 rounded-full blur-xl"></div>

//         {/* Illustration */}
//         <img
//           src="https://cdn-icons-png.flaticon.com/512/7076/7076885.png"
//           alt="product-not-found"
//           className="w-32 mx-auto mb-4 drop-shadow"
//         />

//         {/* Heading */}
//         <h1 className="text-2xl font-bold text-gray-800 mb-2">
//           Product Not Found 💗
//         </h1>

//         {/* Description */}
//         <p className="text-gray-500 text-sm leading-relaxed px-4">
//           Oops! The product you're looking for isn’t available. It may have been
//           removed, sold out, or the link may be incorrect.
//         </p>

//         {/* CTA Button */}
//         <button
//           onClick={() => window.history.back()}
//           className="mt-6 w-full bg-gradient-to-r from-pink-500 to-orange-400 text-white py-3 rounded-2xl font-semibold shadow-md hover:shadow-lg active:scale-95 transition-all"
//         >
//           Go Back ✨
//         </button>

//         <p className="text-xs text-gray-400 mt-4">
//           Try exploring our latest collections 💕
//         </p>
//       </div>
//     </div>
//   );
// };

// export default ProductNotFound;

// const ProductNotFound = () => {
//   return (
//     <div className="min-h-screen flex justify-center items-start pt-6 px-5 py-6">
//       <div className="bg-white w-full max-w-md rounded-3xl shadow-lg p-8 text-center animate-fadeIn relative overflow-hidden">
//         {/* Decorative Soft Blobs */}
//         <div className="absolute -top-10 -left-10 w-36 h-36 bg-pink-200/30 rounded-full blur-xl"></div>
//         <div className="absolute -bottom-14 -right-10 w-40 h-40 bg-orange-200/20 rounded-full blur-xl"></div>

//         {/* Illustration */}
//         <img
//           src="https://cdn-icons-png.flaticon.com/512/7076/7076885.png"
//           alt="product-not-found"
//           className="w-32 mx-auto mb-4 drop-shadow"
//         />

//         {/* Heading */}
//         <h1 className="text-2xl font-bold text-gray-800 mb-2">
//           Product Not Found 💗
//         </h1>

//         {/* Description */}
//         <p className="text-gray-500 text-sm leading-relaxed px-4">
//           Oops! The product you're looking for isn’t available. It may have been
//           removed, sold out, or the link may be incorrect.
//         </p>

//         {/* CTA Button */}
//         <button
//           onClick={() => window.history.back()}
//           className="mt-6 w-full bg-gradient-to-r from-pink-500 to-orange-400 text-white py-3 rounded-2xl font-semibold shadow-md hover:shadow-lg active:scale-95 transition-all"
//         >
//           Go Back ✨
//         </button>

//         <p className="text-xs text-gray-400 mt-4">
//           Try exploring our latest collections 💕
//         </p>
//       </div>
//     </div>
//   );
// };

// export default ProductNotFound;

const ProductNotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center px-6 pt-1 pb-10 relative bg-neutral-50 overflow-hidden">
      {/* Soft Pastel Background Blobs */}
      {/* <div className="absolute -top-20 -left-20 w-60 h-60 bg-pink-200/40 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -right-20 w-64 h-64 bg-orange-200/40 rounded-full blur-3xl"></div> */}

      {/* Illustration */}
      <img
        src="https://cdn-icons-png.flaticon.com/512/7076/7076885.png"
        alt="product-not-found"
        className="w-32 mb-6 drop-shadow"
      />

      {/* Title */}
      <h1 className="text-3xl font-bold text-gray-800 mb-3 text-center">
        Product Not Found
      </h1>

      {/* Description */}
      <p className="text-gray-500 text-base max-w-md text-center leading-relaxed mb-8">
        Oops! The product you're looking for isn’t available. It may have been
        removed, sold out, or the link may be incorrect.
      </p>

      {/* CTA Button */}
      <button
        onClick={() => window.history.back()}
        className="
          px-10 py-3 
          bg-gradient-to-r from-pink-500 to-orange-400 
          text-white font-semibold 
          rounded-xl 
          shadow-md 
          hover:shadow-lg 
          active:scale-95 
          transition-all
        "
      >
        Go Back
      </button>

      {/* Extra Note */}
      <p className="text-xs text-gray-400 mt-6">
        Try exploring our latest collections.
      </p>
    </div>
  );
};

export default ProductNotFound;
