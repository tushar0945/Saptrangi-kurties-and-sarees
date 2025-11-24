// // src/pages/Product/components/AddToCartSection.jsx

// import React from "react";

// const AddToCartSection = ({ product, quantity }) => {
//   const handleAddToCart = () => {
//     console.log("ADD TO CART:", { product, quantity });

//     // 🔥 When backend/API is ready:
//     // await addToCartAPI({ productId: product.id, quantity });
//   };

//   const handleBuyNow = () => {
//     console.log("BUY NOW:", { product, quantity });

//     // 🔥 Redirect to checkout page later
//     // navigate("/checkout");
//   };

//   return (
//     <div className="mt-6 flex flex-col gap-3 w-full max-w-md">
//       {/* ADD TO CART BUTTON */}
//       <button
//         onClick={handleAddToCart}
//         className="w-full py-3 bg-yellow-400 hover:bg-yellow-500
//                    text-black font-bold text-lg rounded-lg transition-all"
//       >
//         Add to Cart
//       </button>

//       {/* BUY NOW BUTTON */}
//       <button
//         onClick={handleBuyNow}
//         className="w-full py-3 bg-black hover:bg-gray-800
//                    text-white font-bold text-lg rounded-lg transition-all"
//       >
//         Buy Now
//       </button>
//     </div>
//   );
// };

// export default AddToCartSection;

// src/pages/Product/components/AddToCartSection.jsx

import React from "react";

const AddToCartSection = ({ product, quantity }) => {
  const handleAddToCart = () => {
    console.log("ADD TO CART:", { product, quantity });
  };

  const handleBuyNow = () => {
    console.log("BUY NOW:", { product, quantity });
  };

  return (
    <div className="mt-6 flex flex-col gap-4 w-full max-w-md">
      {/* ADD TO CART BUTTON */}
      <button
        onClick={handleAddToCart}
        className="
          w-full py-3 rounded-xl font-semibold text-lg
          bg-primary text-white 
          hover:bg-secondary 
          transition-all duration-300
          shadow-md hover:shadow-xl
          transform hover:scale-[1.02] active:scale-[0.98]
        "
      >
        Add to Cart
      </button>

      {/* BUY NOW BUTTON */}
      <button
        onClick={handleBuyNow}
        className="
          w-full py-3 rounded-xl font-semibold text-lg
          bg-dark text-white
          hover:bg-gray-800
          transition-all duration-300
          shadow-lg hover:shadow-xl
          transform hover:scale-[1.02] active:scale-[0.98]
        "
      >
        Buy Now
      </button>
    </div>
  );
};

export default AddToCartSection;
