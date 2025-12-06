// // // // // // // // // // // src/pages/Product/components/AddToCartSection.jsx

// // // // // // // // // // import React from "react";

// // // // // // // // // // const AddToCartSection = ({ product, quantity }) => {
// // // // // // // // // //   const handleAddToCart = () => {
// // // // // // // // // //     console.log("ADD TO CART:", { product, quantity });

// // // // // // // // // //     // 🔥 When backend/API is ready:
// // // // // // // // // //     // await addToCartAPI({ productId: product.id, quantity });
// // // // // // // // // //   };

// // // // // // // // // //   const handleBuyNow = () => {
// // // // // // // // // //     console.log("BUY NOW:", { product, quantity });

// // // // // // // // // //     // 🔥 Redirect to checkout page later
// // // // // // // // // //     // navigate("/checkout");
// // // // // // // // // //   };

// // // // // // // // // //   return (
// // // // // // // // // //     <div className="mt-6 flex flex-col gap-3 w-full max-w-md">
// // // // // // // // // //       {/* ADD TO CART BUTTON */}
// // // // // // // // // //       <button
// // // // // // // // // //         onClick={handleAddToCart}
// // // // // // // // // //         className="w-full py-3 bg-yellow-400 hover:bg-yellow-500
// // // // // // // // // //                    text-black font-bold text-lg rounded-lg transition-all"
// // // // // // // // // //       >
// // // // // // // // // //         Add to Cart
// // // // // // // // // //       </button>

// // // // // // // // // //       {/* BUY NOW BUTTON */}
// // // // // // // // // //       <button
// // // // // // // // // //         onClick={handleBuyNow}
// // // // // // // // // //         className="w-full py-3 bg-black hover:bg-gray-800
// // // // // // // // // //                    text-white font-bold text-lg rounded-lg transition-all"
// // // // // // // // // //       >
// // // // // // // // // //         Buy Now
// // // // // // // // // //       </button>
// // // // // // // // // //     </div>
// // // // // // // // // //   );
// // // // // // // // // // };

// // // // // // // // // // export default AddToCartSection;

// // // // // // // // // // src/pages/Product/components/AddToCartSection.jsx

// // // // // // // // // import React from "react";

// // // // // // // // // const AddToCartSection = ({ product, quantity }) => {
// // // // // // // // //   const handleAddToCart = () => {
// // // // // // // // //     console.log("ADD TO CART:", { product, quantity });
// // // // // // // // //   };

// // // // // // // // //   const handleBuyNow = () => {
// // // // // // // // //     console.log("BUY NOW:", { product, quantity });
// // // // // // // // //   };

// // // // // // // // //   return (
// // // // // // // // //     <div className="mt-6 flex flex-col gap-4 w-full max-w-md">
// // // // // // // // //       {/* ADD TO CART BUTTON */}
// // // // // // // // //       <button
// // // // // // // // //         onClick={handleAddToCart}
// // // // // // // // //         className="
// // // // // // // // //           w-full py-3 rounded-xl font-semibold text-lg
// // // // // // // // //           bg-primary text-white
// // // // // // // // //           hover:bg-secondary
// // // // // // // // //           transition-all duration-300
// // // // // // // // //           shadow-md hover:shadow-xl
// // // // // // // // //           transform hover:scale-[1.02] active:scale-[0.98]
// // // // // // // // //         "
// // // // // // // // //       >
// // // // // // // // //         Add to Cart
// // // // // // // // //       </button>

// // // // // // // // //       {/* BUY NOW BUTTON */}
// // // // // // // // //       <button
// // // // // // // // //         onClick={handleBuyNow}
// // // // // // // // //         className="
// // // // // // // // //           w-full py-3 rounded-xl font-semibold text-lg
// // // // // // // // //           bg-dark text-white
// // // // // // // // //           hover:bg-gray-800
// // // // // // // // //           transition-all duration-300
// // // // // // // // //           shadow-lg hover:shadow-xl
// // // // // // // // //           transform hover:scale-[1.02] active:scale-[0.98]
// // // // // // // // //         "
// // // // // // // // //       >
// // // // // // // // //         Buy Now
// // // // // // // // //       </button>
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export default AddToCartSection;

// // // // // // // // import React, { useState } from "react";
// // // // // // // // import SizeSelectModal from "./SizeSelectModal";

// // // // // // // // const AddToCartSection = ({ product, quantity }) => {
// // // // // // // //   const sizes = ["XS", "S", "M", "L", "XL", "2XL", "3XL"];

// // // // // // // //   const [selectedSize, setSelectedSize] = useState(null);
// // // // // // // //   const [showSizeModal, setShowSizeModal] = useState(false);
// // // // // // // //   const [added, setAdded] = useState(false);

// // // // // // // //   const handleAddToCart = () => {
// // // // // // // //     if (!selectedSize) {
// // // // // // // //       setShowSizeModal(true);
// // // // // // // //       return;
// // // // // // // //     }

// // // // // // // //     setAdded(true);

// // // // // // // //     console.log("ADD TO CART:", {
// // // // // // // //       product,
// // // // // // // //       quantity,
// // // // // // // //       size: selectedSize,
// // // // // // // //     });

// // // // // // // //     // Optional: update your cart context or redux
// // // // // // // //     // addToCart(product, quantity, selectedSize);
// // // // // // // //   };

// // // // // // // //   const handleBuyNow = () => {
// // // // // // // //     console.log("BUY NOW:", {
// // // // // // // //       product,
// // // // // // // //       quantity,
// // // // // // // //       size: selectedSize,
// // // // // // // //     });
// // // // // // // //   };

// // // // // // // //   const handleSizeSelect = (size) => {
// // // // // // // //     setSelectedSize(size);
// // // // // // // //     setShowSizeModal(false);
// // // // // // // //   };

// // // // // // // //   return (
// // // // // // // //     <>
// // // // // // // //       {/* Size Modal */}
// // // // // // // //       <SizeSelectModal
// // // // // // // //         open={showSizeModal}
// // // // // // // //         sizes={sizes}
// // // // // // // //         onClose={() => setShowSizeModal(false)}
// // // // // // // //         onSelect={handleSizeSelect}
// // // // // // // //       />

// // // // // // // //       <div className="mt-6 flex flex-col gap-4 w-full max-w-md">
// // // // // // // //         {/* ADD TO CART LOGIC */}
// // // // // // // //         {!added ? (
// // // // // // // //           <button
// // // // // // // //             onClick={handleAddToCart}
// // // // // // // //             className="w-full py-3 rounded-xl font-semibold text-lg bg-yellow-400 hover:bg-yellow-500 transition-all shadow-md"
// // // // // // // //           >
// // // // // // // //             ADD TO BAG
// // // // // // // //           </button>
// // // // // // // //         ) : (
// // // // // // // //           <button className="w-full py-3 rounded-xl font-semibold text-lg bg-purple-600 text-white shadow-lg">
// // // // // // // //             ITEM ADDED TO BAG
// // // // // // // //           </button>
// // // // // // // //         )}

// // // // // // // //         {/* BUY NOW BUTTON */}
// // // // // // // //         <button
// // // // // // // //           onClick={handleBuyNow}
// // // // // // // //           className="w-full py-3 rounded-xl font-semibold text-lg bg-gray-900 text-white hover:bg-gray-800 transition-all shadow-md"
// // // // // // // //         >
// // // // // // // //           Buy Now
// // // // // // // //         </button>

// // // // // // // //         {/* GO TO BAG BUTTON */}
// // // // // // // //         {added && (
// // // // // // // //           <button
// // // // // // // //             className="w-full py-3 rounded-xl font-semibold text-lg bg-green-600 text-white mt-2"
// // // // // // // //             onClick={() => (window.location.href = "/cart")}
// // // // // // // //           >
// // // // // // // //             GO TO BAG →
// // // // // // // //           </button>
// // // // // // // //         )}
// // // // // // // //       </div>
// // // // // // // //     </>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default AddToCartSection;

// // // // // // // import React, { useState } from "react";
// // // // // // // import SizeSelectModal from "./SizeSelectModal";

// // // // // // // const AddToCartSection = ({ product, quantity }) => {
// // // // // // //   const sizes = ["XS", "S", "M", "L", "XL", "2XL", "3XL"];

// // // // // // //   const [selectedSize, setSelectedSize] = useState(null);
// // // // // // //   const [showSizeModal, setShowSizeModal] = useState(false);

// // // // // // //   // Button states: "default" → "added" → "goToBag"
// // // // // // //   const [buttonState, setButtonState] = useState("default");

// // // // // // //   const handleAddToCart = () => {
// // // // // // //     if (!selectedSize) {
// // // // // // //       setShowSizeModal(true);
// // // // // // //       return;
// // // // // // //     }

// // // // // // //     console.log("ADD TO CART:", { product, quantity, size: selectedSize });

// // // // // // //     // Flip 1: change ADD TO BAG → ITEM ADDED TO BAG
// // // // // // //     setButtonState("added");

// // // // // // //     // Flip 2: after 2 seconds change → GO TO BAG
// // // // // // //     setTimeout(() => {
// // // // // // //       setButtonState("goToBag");
// // // // // // //     }, 1500);
// // // // // // //   };

// // // // // // //   const handleSizeSelect = (size) => {
// // // // // // //     setSelectedSize(size);
// // // // // // //     setShowSizeModal(false);
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <>
// // // // // // //       {/* SIZE POPUP */}
// // // // // // //       <SizeSelectModal
// // // // // // //         open={showSizeModal}
// // // // // // //         sizes={sizes}
// // // // // // //         onClose={() => setShowSizeModal(false)}
// // // // // // //         onSelect={handleSizeSelect}
// // // // // // //       />

// // // // // // //       <div className="mt-6 w-full max-w-md">
// // // // // // //         {/* BUTTON STATES */}
// // // // // // //         {buttonState === "default" && (
// // // // // // //           <button
// // // // // // //             onClick={handleAddToCart}
// // // // // // //             className="w-full py-3 rounded-xl font-semibold text-lg bg-yellow-400 hover:bg-yellow-500 transition-all shadow-md"
// // // // // // //           >
// // // // // // //             ADD TO BAG
// // // // // // //           </button>
// // // // // // //         )}

// // // // // // //         {buttonState === "added" && (
// // // // // // //           <button className="w-full py-3 rounded-xl font-semibold text-lg bg-purple-600 text-white shadow-lg animate-[flip_0.4s]">
// // // // // // //             ITEM ADDED TO BAG
// // // // // // //           </button>
// // // // // // //         )}

// // // // // // //         {buttonState === "goToBag" && (
// // // // // // //           <button
// // // // // // //             onClick={() => (window.location.href = "/cart")}
// // // // // // //             className="w-full py-3 rounded-xl font-semibold text-lg bg-green-600 text-white shadow-lg"
// // // // // // //           >
// // // // // // //             GO TO BAG →
// // // // // // //           </button>
// // // // // // //         )}
// // // // // // //       </div>
// // // // // // //     </>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default AddToCartSection;

// // // // // // import React, { useState } from "react";
// // // // // // import SizeSelectModal from "./SizeSelectModal";

// // // // // // const AddToCartSection = ({ product, quantity }) => {
// // // // // //   const sizes = ["XS", "S", "M", "L", "XL", "2XL", "3XL"];

// // // // // //   const [selectedSize, setSelectedSize] = useState(null);
// // // // // //   const [showSizeModal, setShowSizeModal] = useState(false);

// // // // // //   const [buttonState, setButtonState] = useState("default");
// // // // // //   // default → added → goToBag

// // // // // //   const handleAddToCart = () => {
// // // // // //     // if size is not selected → open popup
// // // // // //     if (!selectedSize) {
// // // // // //       setShowSizeModal(true);
// // // // // //       return;
// // // // // //     }

// // // // // //     // Begin Bewakoof animation
// // // // // //     setButtonState("added");

// // // // // //     setTimeout(() => {
// // // // // //       setButtonState("goToBag");
// // // // // //     }, 1500);
// // // // // //   };

// // // // // //   // Called when user selects size inside popup
// // // // // //   const handleSizeSelect = (size) => {
// // // // // //     setSelectedSize(size); // only select size
// // // // // //   };

// // // // // //   // Called when user clicks Add to Bag inside popup
// // // // // //   const handleModalConfirm = () => {
// // // // // //     if (!selectedSize) return; // prevent close if no size selected

// // // // // //     setShowSizeModal(false);
// // // // // //     handleAddToCart();
// // // // // //   };

// // // // // //   return (
// // // // // //     <>
// // // // // //       {/* POPUP */}
// // // // // //       <SizeSelectModal
// // // // // //         open={showSizeModal}
// // // // // //         sizes={sizes}
// // // // // //         selectedSize={selectedSize}
// // // // // //         onSelectSize={handleSizeSelect}
// // // // // //         onConfirm={handleModalConfirm}
// // // // // //       />

// // // // // //       <div className="mt-6 w-full max-w-md">
// // // // // //         {/* Default State */}
// // // // // //         {buttonState === "default" && (
// // // // // //           <button
// // // // // //             onClick={handleAddToCart}
// // // // // //             className="w-full py-3 rounded-xl font-semibold text-lg bg-yellow-400 hover:bg-yellow-500 transition shadow-md"
// // // // // //           >
// // // // // //             ADD TO BAG
// // // // // //           </button>
// // // // // //         )}

// // // // // //         {/* After Added */}
// // // // // //         {buttonState === "added" && (
// // // // // //           <button className="w-full py-3 rounded-xl font-semibold text-lg bg-purple-600 text-white shadow-lg">
// // // // // //             ITEM ADDED TO BAG
// // // // // //           </button>
// // // // // //         )}

// // // // // //         {/* Final Step */}
// // // // // //         {buttonState === "goToBag" && (
// // // // // //           <button
// // // // // //             onClick={() => (window.location.href = "/cart")}
// // // // // //             className="w-full py-3 rounded-xl font-semibold text-lg bg-green-600 text-white shadow-lg"
// // // // // //           >
// // // // // //             GO TO BAG →
// // // // // //           </button>
// // // // // //         )}
// // // // // //       </div>
// // // // // //     </>
// // // // // //   );
// // // // // // };

// // // // // // export default AddToCartSection;

// // // // // import React, { useState } from "react";
// // // // // import SizeSelectModal from "./SizeSelectModal";

// // // // // const AddToCartSection = ({ product, quantity }) => {
// // // // //   const sizes = ["XS", "S", "M", "L", "XL", "2XL", "3XL"];

// // // // //   const [selectedSize, setSelectedSize] = useState(null);
// // // // //   const [showSizeModal, setShowSizeModal] = useState(false);

// // // // //   const [buttonState, setButtonState] = useState("default");
// // // // //   // default → added → goToBag

// // // // //   // --------------------------------------------------------
// // // // //   // ADD TO BAG LOGIC
// // // // //   // --------------------------------------------------------
// // // // //   const handleAddToCart = () => {
// // // // //     if (!selectedSize) {
// // // // //       setShowSizeModal(true);
// // // // //       return;
// // // // //     }

// // // // //     // Bewakoof Flip Animation
// // // // //     setButtonState("added");

// // // // //     setTimeout(() => {
// // // // //       setButtonState("goToBag");
// // // // //     }, 1500);
// // // // //   };

// // // // //   // --------------------------------------------------------
// // // // //   // BUY NOW LOGIC
// // // // //   // --------------------------------------------------------
// // // // //   const handleBuyNow = () => {
// // // // //     if (!selectedSize) {
// // // // //       setShowSizeModal(true);
// // // // //       return;
// // // // //     }

// // // // //     // Your Buy Now navigation
// // // // //     console.log("BUY NOW:", {
// // // // //       product,
// // // // //       quantity,
// // // // //       size: selectedSize,
// // // // //     });

// // // // //     window.location.href = "/checkout";
// // // // //   };

// // // // //   // --------------------------------------------------------
// // // // //   // POPUP EVENTS
// // // // //   // --------------------------------------------------------
// // // // //   const handleSizeSelect = (size) => {
// // // // //     setSelectedSize(size);
// // // // //   };

// // // // //   const handleModalConfirm = () => {
// // // // //     if (!selectedSize) return;
// // // // //     setShowSizeModal(false);
// // // // //     handleAddToCart(); // Continue add-to-cart flow
// // // // //   };

// // // // //   return (
// // // // //     <>
// // // // //       {/* POPUP */}
// // // // //       <SizeSelectModal
// // // // //         open={showSizeModal}
// // // // //         sizes={sizes}
// // // // //         selectedSize={selectedSize}
// // // // //         onSelectSize={handleSizeSelect}
// // // // //         onConfirm={handleModalConfirm}
// // // // //       />

// // // // //       <div className="mt-6 w-full max-w-md flex flex-col gap-4">
// // // // //         {/* ADD TO BAG FLOW */}
// // // // //         {buttonState === "default" && (
// // // // //           <button
// // // // //             onClick={handleAddToCart}
// // // // //             className="w-full py-3 rounded-xl font-semibold text-lg bg-yellow-400 hover:bg-yellow-500 transition shadow-md"
// // // // //           >
// // // // //             ADD TO BAG
// // // // //           </button>
// // // // //         )}

// // // // //         {buttonState === "added" && (
// // // // //           <button className="w-full py-3 rounded-xl font-semibold text-lg bg-purple-600 text-white shadow-lg">
// // // // //             ITEM ADDED TO BAG
// // // // //           </button>
// // // // //         )}

// // // // //         {buttonState === "goToBag" && (
// // // // //           <button
// // // // //             onClick={() => (window.location.href = "/cart")}
// // // // //             className="w-full py-3 rounded-xl font-semibold text-lg bg-green-600 text-white shadow-lg"
// // // // //           >
// // // // //             GO TO BAG →
// // // // //           </button>
// // // // //         )}

// // // // //         {/* BUY NOW BUTTON — Always visible */}
// // // // //         <button
// // // // //           onClick={handleBuyNow}
// // // // //           className="w-full py-3 rounded-xl font-semibold text-lg bg-black text-white hover:bg-gray-800 transition shadow-md"
// // // // //         >
// // // // //           BUY NOW
// // // // //         </button>
// // // // //       </div>
// // // // //     </>
// // // // //   );
// // // // // };

// // // // // export default AddToCartSection;

// // // // import React, { useState } from "react";
// // // // import SizeSelectModal from "./SizeSelectModal";

// // // // const AddToCartSection = ({ product, quantity }) => {
// // // //   const sizes = ["XS", "S", "M", "L", "XL", "2XL", "3XL"];

// // // //   const [selectedSize, setSelectedSize] = useState(null);
// // // //   const [showSizeModal, setShowSizeModal] = useState(false);

// // // //   const [buttonState, setButtonState] = useState("default");

// // // //   const handleAddToCart = () => {
// // // //     if (!selectedSize) {
// // // //       setShowSizeModal(true);
// // // //       return;
// // // //     }

// // // //     setButtonState("added");

// // // //     setTimeout(() => {
// // // //       setButtonState("goToBag");
// // // //     }, 1500);
// // // //   };

// // // //   const handleBuyNow = () => {
// // // //     if (!selectedSize) {
// // // //       setShowSizeModal(true);
// // // //       return;
// // // //     }
// // // //     window.location.href = "/checkout";
// // // //   };

// // // //   const handleSizeSelect = (size) => {
// // // //     setSelectedSize(size);
// // // //   };

// // // //   const handleModalConfirm = () => {
// // // //     if (!selectedSize) return;
// // // //     setShowSizeModal(false);
// // // //     handleAddToCart();
// // // //   };

// // // //   return (
// // // //     <>
// // // //       <SizeSelectModal
// // // //         open={showSizeModal}
// // // //         sizes={sizes}
// // // //         selectedSize={selectedSize}
// // // //         onSelectSize={handleSizeSelect}
// // // //         onConfirm={handleModalConfirm}
// // // //       />

// // // //       <div className="mt-6 w-full max-w-md flex flex-col gap-4">
// // // //         {/* Default Add to Bag */}
// // // //         {buttonState === "default" && (
// // // //           <button
// // // //             onClick={handleAddToCart}
// // // //             className="w-full py-3 rounded-xl font-semibold text-lg bg-primary text-white hover:bg-secondary transition shadow-md"
// // // //           >
// // // //             ADD TO BAG
// // // //           </button>
// // // //         )}

// // // //         {/* Added State */}
// // // //         {buttonState === "added" && (
// // // //           <button className="w-full py-3 rounded-xl font-semibold text-lg bg-secondary text-white shadow-lg">
// // // //             ITEM ADDED TO BAG
// // // //           </button>
// // // //         )}

// // // //         {/* Go to Bag */}
// // // //         {buttonState === "goToBag" && (
// // // //           <button
// // // //             onClick={() => (window.location.href = "/cart")}
// // // //             className="w-full py-3 rounded-xl font-semibold text-lg bg-primary text-white shadow-lg"
// // // //           >
// // // //             GO TO BAG →
// // // //           </button>
// // // //         )}

// // // //         {/* Buy Now */}
// // // //         <button
// // // //           onClick={handleBuyNow}
// // // //           className="w-full py-3 rounded-xl font-semibold text-lg bg-dark text-white hover:bg-black transition shadow-md"
// // // //         >
// // // //           BUY NOW
// // // //         </button>
// // // //       </div>
// // // //     </>
// // // //   );
// // // // };

// // // // export default AddToCartSection;

// // // import React, { useState, useEffect } from "react";
// // // import SizeSelectModal from "./SizeSelectModal";
// // // import { Link } from "react-router-dom";

// // // const AddToCartSection = ({ product, quantity, selectedSize }) => {
// // //   const sizes = ["XS", "S", "M", "L", "XL", "2XL", "3XL"];

// // //   // sync with main-page size
// // //   const [internalSize, setInternalSize] = useState(selectedSize);

// // //   useEffect(() => {
// // //     setInternalSize(selectedSize);
// // //   }, [selectedSize]);

// // //   const [showSizeModal, setShowSizeModal] = useState(false);
// // //   const [buttonState, setButtonState] = useState("default");

// // //   const startAddToCartAnimation = () => {
// // //     setButtonState("added");
// // //     setTimeout(() => setButtonState("goToBag"), 1500);
// // //   };

// // //   const handleAddToCart = () => {
// // //     // ⭐ Main page size already selected → Don't open popup!
// // //     if (internalSize) {
// // //       startAddToCartAnimation();
// // //       return;
// // //     }

// // //     // No size selected → show popup
// // //     setShowSizeModal(true);
// // //   };

// // //   const handleBuyNow = () => {
// // //     if (!internalSize) {
// // //       setShowSizeModal(true);
// // //       return;
// // //     }
// // //     window.location.href = "/checkout";
// // //   };

// // //   const handleSizeSelectInsidePopup = (size) => {
// // //     setInternalSize(size);
// // //   };

// // //   const handlePopupConfirm = () => {
// // //     if (!internalSize) return;
// // //     setShowSizeModal(false);
// // //     startAddToCartAnimation();
// // //   };

// // //   return (
// // //     <>
// // //       {/* <SizeSelectModal
// // //         open={showSizeModal}
// // //         sizes={sizes}
// // //         selectedSize={internalSize}
// // //         onSelectSize={handleSizeSelectInsidePopup}
// // //         onConfirm={handlePopupConfirm}
// // //       /> */}
// // //       <SizeSelectModal
// // //         open={showSizeModal}
// // //         sizes={sizes}
// // //         selectedSize={internalSize}
// // //         onSelectSize={handleSizeSelectInsidePopup}
// // //         onConfirm={handlePopupConfirm}
// // //         onClose={() => setShowSizeModal(false)} // <-- FIX
// // //       />

// // // <div className="mt-6 w-full max-w-md flex flex-col gap-4">
// // //   {buttonState === "default" && (
// // //     <button
// // //       onClick={handleAddToCart}
// // //       className="w-full py-3 rounded-xl font-semibold text-lg bg-primary text-white"
// // //     >
// // //       ADD TO BAG
// // //     </button>
// // //   )}

// // //   {buttonState === "added" && (
// // //     <button className="w-full py-3 rounded-xl font-semibold text-lg bg-secondary text-white">
// // //       ITEM ADDED TO BAG
// // //     </button>
// // //   )}

// // //   {buttonState === "goToBag" && (
// // //     <Link
// // //       to="/cart"
// // //       className="w-full block text-center py-3 rounded-xl font-semibold text-lg bg-primary text-white"
// // //     >
// // //       GO TO BAG →
// // //     </Link>
// // //   )}

// // //   <button
// // //     onClick={handleBuyNow}
// // //     className="w-full py-3 rounded-xl font-semibold text-lg bg-dark text-white"
// // //   >
// // //     BUY NOW
// // //   </button>
// // // </div>
// // //     </>
// // //   );
// // // };

// // // export default AddToCartSection;

// // import React, { useState, useEffect } from "react";
// // import SizeSelectModal from "./SizeSelectModal";
// // import { Link } from "react-router-dom";
// // import { useCart } from "../../../context/CartContext"; // ⭐ import

// // const AddToCartSection = ({ product, quantity, selectedSize }) => {
// //   const sizes = ["XS", "S", "M", "L", "XL", "2XL", "3XL"];

// //   const { addToCart } = useCart(); // ⭐ get cart function

// //   const [internalSize, setInternalSize] = useState(selectedSize);

// //   useEffect(() => {
// //     setInternalSize(selectedSize);
// //   }, [selectedSize]);

// //   const [showSizeModal, setShowSizeModal] = useState(false);
// //   const [buttonState, setButtonState] = useState("default");

// //   const startAddToCartAnimation = () => {
// //     setButtonState("added");
// //     setTimeout(() => setButtonState("goToBag"), 1500);
// //   };

// //   const handleAddToCart = () => {
// //     if (!internalSize) {
// //       setShowSizeModal(true);
// //       return;
// //     }

// //     // ⭐ REAL CART LOGIC
// //     addToCart(product, internalSize, quantity);

// //     startAddToCartAnimation();
// //   };

// //   const handleBuyNow = () => {
// //     if (!internalSize) {
// //       setShowSizeModal(true);
// //       return;
// //     }

// //     window.location.href = "/checkout";
// //   };

// //   const handleSizeSelectInsidePopup = (size) => {
// //     setInternalSize(size);
// //   };

// //   const handlePopupConfirm = () => {
// //     if (!internalSize) return;

// //     // ⭐ REAL CART LOGIC
// //     addToCart(product, internalSize, quantity);

// //     setShowSizeModal(false);
// //     startAddToCartAnimation();
// //   };

// //   return (
// //     <>
// //       <SizeSelectModal
// //         open={showSizeModal}
// //         sizes={sizes}
// //         selectedSize={internalSize}
// //         onSelectSize={handleSizeSelectInsidePopup}
// //         onConfirm={handlePopupConfirm}
// //         onClose={() => setShowSizeModal(false)}
// //       />

// //       <div className="mt-6 w-full max-w-md flex flex-col gap-4">
// //         {buttonState === "default" && (
// //           <button
// //             onClick={handleAddToCart}
// //             className="w-full py-3 rounded-xl font-semibold text-lg bg-primary text-white"
// //           >
// //             ADD TO BAG
// //           </button>
// //         )}

// //         {buttonState === "added" && (
// //           <button className="w-full py-3 rounded-xl font-semibold text-lg bg-secondary text-white">
// //             ITEM ADDED TO BAG
// //           </button>
// //         )}

// //         {buttonState === "goToBag" && (
// //           <Link
// //             to="/cart"
// //             className="w-full block text-center py-3 rounded-xl font-semibold text-lg bg-primary text-white"
// //           >
// //             GO TO BAG →
// //           </Link>
// //         )}

// //         <button
// //           onClick={handleBuyNow}
// //           className="w-full py-3 rounded-xl font-semibold text-lg bg-dark text-white"
// //         >
// //           BUY NOW
// //         </button>
// //       </div>
// //     </>
// //   );
// // };

// // export default AddToCartSection;

// import React, { useState, useEffect } from "react";
// import SizeSelectModal from "./SizeSelectModal";
// import { Link, useNavigate } from "react-router-dom";
// import { useCart } from "../../../context/CartContext";

// const AddToCartSection = ({ product, quantity, selectedSize }) => {
//   const sizes = ["XS", "S", "M", "L", "XL", "2XL", "3XL"];

//   const { addToCart, buyNow } = useCart(); // ⭐ buyNow added
//   const navigate = useNavigate();

//   const [internalSize, setInternalSize] = useState(selectedSize);

//   useEffect(() => {
//     setInternalSize(selectedSize);
//   }, [selectedSize]);

//   const [showSizeModal, setShowSizeModal] = useState(false);
//   const [buttonState, setButtonState] = useState("default");

//   const startAddToCartAnimation = () => {
//     setButtonState("added");
//     setTimeout(() => setButtonState("goToBag"), 1500);
//   };

//   // ADD TO CART
//   const handleAddToCart = () => {
//     if (!internalSize) {
//       setShowSizeModal(true);
//       return;
//     }

//     addToCart(product, internalSize, quantity);
//     startAddToCartAnimation();
//   };

//   // BUY NOW (MAIN FIX)
//   const handleBuyNow = () => {
//     if (!internalSize) {
//       setShowSizeModal(true);
//       return;
//     }

//     buyNow(product, internalSize, quantity); // ⭐ store item for checkout
//     navigate("/checkout"); // ⭐ go to checkout
//   };

//   const handleSizeSelectInsidePopup = (size) => {
//     setInternalSize(size);
//   };

//   const handlePopupConfirm = () => {
//     if (!internalSize) return;

//     // If popup came from ADD TO CART
//     if (buttonState === "default") {
//       addToCart(product, internalSize, quantity);
//       startAddToCartAnimation();
//     }

//     // If popup came from BUY NOW
//     if (buttonState === "buy") {
//       buyNow(product, internalSize, quantity);
//       navigate("/checkout");
//     }

//     setShowSizeModal(false);
//   };

//   return (
//     <>
//       {/* SIZE POPUP */}
//       <SizeSelectModal
//         open={showSizeModal}
//         sizes={sizes}
//         selectedSize={internalSize}
//         onSelectSize={handleSizeSelectInsidePopup}
//         onConfirm={handlePopupConfirm}
//         onClose={() => setShowSizeModal(false)}
//       />

//       <div className="mt-6 w-full max-w-md flex flex-col gap-4">
//         {/* Add to Bag */}
//         {buttonState === "default" && (
//           <button
//             onClick={handleAddToCart}
//             className="w-full py-3 rounded-xl font-semibold text-lg bg-primary text-white"
//           >
//             ADD TO BAG
//           </button>
//         )}

//         {/* Added animation */}
//         {buttonState === "added" && (
//           <button className="w-full py-3 rounded-xl font-semibold text-lg bg-secondary text-white">
//             ITEM ADDED TO BAG
//           </button>
//         )}

//         {/* Go to Bag */}
//         {buttonState === "goToBag" && (
//           <Link
//             to="/cart"
//             className="w-full block text-center py-3 rounded-xl font-semibold text-lg bg-primary text-white"
//           >
//             GO TO BAG →
//           </Link>
//         )}

//         {/* BUY NOW */}
//         <button
//           onClick={() => {
//             setButtonState("buy");
//             handleBuyNow();
//           }}
//           className="w-full py-3 rounded-xl font-semibold text-lg bg-dark text-white"
//         >
//           BUY NOW
//         </button>
//       </div>
//     </>
//   );
// };

// export default AddToCartSection;

import React, { useState, useEffect } from "react";
import SizeSelectModal from "./SizeSelectModal";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../../context/CartContext";

const AddToCartSection = ({
  product,
  quantity,
  selectedSize,
  availableSizes,
}) => {
  const sizes = availableSizes; // << use backend sizes only

  const { addToCart, buyNow } = useCart(); // ⭐ includes buyNow
  const navigate = useNavigate();

  const [internalSize, setInternalSize] = useState(selectedSize);
  const [showSizeModal, setShowSizeModal] = useState(false);
  const [buttonState, setButtonState] = useState("default");

  useEffect(() => {
    setInternalSize(selectedSize);
  }, [selectedSize]);

  // ADD TO CART animation
  const startAddToCartAnimation = () => {
    setButtonState("added");
    setTimeout(() => setButtonState("goToBag"), 1500);
  };

  // ADD TO CART FLOW
  const handleAddToCart = () => {
    if (!internalSize) {
      setButtonState("default");
      setShowSizeModal(true);
      return;
    }

    addToCart(product, internalSize, quantity);
    startAddToCartAnimation();
  };

  // BUY NOW FLOW
  const handleBuyNow = () => {
    if (!internalSize) {
      setButtonState("buy");
      setShowSizeModal(true);
      return;
    }

    buyNow(product, internalSize, quantity); // ⭐ store item for checkout
    navigate("/checkout");
  };

  // POPUP → Select Size
  const handleSizeSelectInsidePopup = (size) => {
    setInternalSize(size);
  };

  // POPUP CONFIRM BUTTON
  const handlePopupConfirm = () => {
    if (!internalSize) return;

    // came from ADD TO CART
    if (buttonState === "default") {
      addToCart(product, internalSize, quantity);
      startAddToCartAnimation();
    }

    // came from BUY NOW
    if (buttonState === "buy") {
      buyNow(product, internalSize, quantity);
      navigate("/checkout");
    }

    setShowSizeModal(false);
  };

  return (
    <>
      {/* SIZE SELECT POPUP */}
      <SizeSelectModal
        open={showSizeModal}
        sizes={sizes}
        selectedSize={internalSize}
        onSelectSize={handleSizeSelectInsidePopup}
        onConfirm={handlePopupConfirm}
        onClose={() => setShowSizeModal(false)}
      />

      <div className="mt-6 w-full max-w-md flex flex-col gap-4">
        {/* ADD TO BAG BUTTON */}
        {buttonState === "default" && (
          <button
            onClick={handleAddToCart}
            className="w-full py-3 rounded-xl font-semibold text-lg bg-primary text-white"
          >
            ADD TO BAG
          </button>
        )}

        {/* ITEM ADDED */}
        {buttonState === "added" && (
          <button className="w-full py-3 rounded-xl font-semibold text-lg bg-secondary text-white">
            ITEM ADDED TO BAG
          </button>
        )}

        {/* GO TO BAG */}
        {buttonState === "goToBag" && (
          <Link
            to="/cart"
            className="w-full block text-center py-3 rounded-xl font-semibold text-lg bg-primary text-white"
          >
            GO TO BAG →
          </Link>
        )}

        {/* BUY NOW BUTTON */}
        <button
          onClick={() => {
            setButtonState("buy");
            handleBuyNow();
          }}
          className="w-full py-3 rounded-xl font-semibold text-lg bg-dark text-white"
        >
          BUY NOW
        </button>
      </div>
    </>
  );
};

export default AddToCartSection;
