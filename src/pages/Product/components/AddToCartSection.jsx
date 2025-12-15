// // // // import React, { useState, useEffect } from "react";
// // // // import SizeSelectModal from "./SizeSelectModal";
// // // // import { Link, useNavigate } from "react-router-dom";
// // // // import { useCart } from "../../../context/CartContext";
// // // // import { AuthService } from "../../../services/authService";
// // // // import api from "../../../api/axios";

// // // // const AddToCartSection = ({
// // // //   product,
// // // //   quantity,
// // // //   selectedSize,
// // // //   availableSizes,
// // // // }) => {
// // // //   const sizes = availableSizes;

// // // //   const { addToCart, buyNow } = useCart();
// // // //   const navigate = useNavigate();

// // // //   const [internalSize, setInternalSize] = useState(selectedSize);
// // // //   const [showSizeModal, setShowSizeModal] = useState(false);
// // // //   const [buttonState, setButtonState] = useState("default");
// // // //   const [loading, setLoading] = useState(false);

// // // //   useEffect(() => {
// // // //     setInternalSize(selectedSize);
// // // //   }, [selectedSize]);

// // // //   // 🎬 animation
// // // //   const startAddToCartAnimation = () => {
// // // //     setButtonState("added");
// // // //     setTimeout(() => setButtonState("goToBag"), 1500);
// // // //   };

// // // //   // 🧠 CORE ADD TO CART FLOW
// // // //   const handleAddToCart = async () => {
// // // //     // 1️⃣ Size check
// // // //     if (!internalSize) {
// // // //       setShowSizeModal(true);
// // // //       return;
// // // //     }

// // // //     // 2️⃣ Auth check
// // // //     if (!AuthService.isLoggedIn()) {
// // // //       navigate("/login", {
// // // //         state: { from: window.location.pathname },
// // // //       });
// // // //       return;
// // // //     }

// // // //     try {
// // // //       setLoading(true);

// // // //       // 3️⃣ Backend API call
// // // //       const res = await api.post("/cart/add", {
// // // //         productId: product.id,
// // // //         quantity,
// // // //       });
// // // //       // size: internalSize,
// // // //       console.log(res);
// // // //       // 4️⃣ Update local cart AFTER backend success
// // // //       addToCart(product, internalSize, quantity);

// // // //       // 5️⃣ Animate UI
// // // //       startAddToCartAnimation();
// // // //     } catch (err) {
// // // //       if (err.response?.status === 401) {
// // // //         navigate("/login");
// // // //       } else {
// // // //         alert("Failed to add product to cart");
// // // //       }
// // // //     } finally {
// // // //       setLoading(false);
// // // //     }
// // // //   };

// // // //   // 🛒 BUY NOW FLOW
// // // //   const handleBuyNow = async () => {
// // // //     if (!internalSize) {
// // // //       setShowSizeModal(true);
// // // //       return;
// // // //     }

// // // //     if (!AuthService.isLoggedIn()) {
// // // //       navigate("/login");
// // // //       return;
// // // //     }

// // // //     try {
// // // //       setLoading(true);

// // // //       await api.post("/cart/add", {
// // // //         product_id: product.id,
// // // //         quantity,
// // // //       });
// // // //       // size: internalSize,

// // // //       buyNow(product, internalSize, quantity);
// // // //       navigate("/checkout");
// // // //     } catch {
// // // //       alert("Buy Now failed");
// // // //     } finally {
// // // //       setLoading(false);
// // // //     }
// // // //   };

// // // //   // POPUP confirm
// // // //   const handlePopupConfirm = () => {
// // // //     setShowSizeModal(false);
// // // //     handleAddToCart();
// // // //   };

// // // //   return (
// // // //     <>
// // // //       <SizeSelectModal
// // // //         open={showSizeModal}
// // // //         sizes={sizes}
// // // //         selectedSize={internalSize}
// // // //         onSelectSize={setInternalSize}
// // // //         onConfirm={handlePopupConfirm}
// // // //         onClose={() => setShowSizeModal(false)}
// // // //       />

// // // //       <div className="mt-6 w-full max-w-md flex flex-col gap-4">
// // // //         {/* ADD TO BAG */}
// // // //         {buttonState === "default" && (
// // // //           <button
// // // //             onClick={handleAddToCart}
// // // //             disabled={loading}
// // // //             className="w-full py-3 rounded-xl font-semibold text-lg bg-primary text-white disabled:opacity-60"
// // // //           >
// // // //             {loading ? "ADDING..." : "ADD TO BAG"}
// // // //           </button>
// // // //         )}

// // // //         {/* ITEM ADDED */}
// // // //         {buttonState === "added" && (
// // // //           <button className="w-full py-3 rounded-xl font-semibold text-lg bg-secondary text-white">
// // // //             ITEM ADDED TO BAG
// // // //           </button>
// // // //         )}

// // // //         {/* GO TO BAG */}
// // // //         {buttonState === "goToBag" && (
// // // //           <Link
// // // //             to="/cart"
// // // //             className="w-full block text-center py-3 rounded-xl font-semibold text-lg bg-primary text-white"
// // // //           >
// // // //             GO TO BAG →
// // // //           </Link>
// // // //         )}

// // // //         {/* BUY NOW */}
// // // //         <button
// // // //           onClick={handleBuyNow}
// // // //           disabled={loading}
// // // //           className="w-full py-3 rounded-xl font-semibold text-lg bg-dark text-white disabled:opacity-60"
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
// // // import { Link, useNavigate, useLocation } from "react-router-dom";
// // // import { useCart } from "../../../context/CartContext";
// // // import api from "../../../api/axios";

// // // const AddToCartSection = ({
// // //   product,
// // //   quantity,
// // //   selectedSize,
// // //   availableSizes,
// // // }) => {
// // //   const sizes = availableSizes;

// // //   const { addToCart, buyNow } = useCart();
// // //   const navigate = useNavigate();
// // //   const location = useLocation();

// // //   const [internalSize, setInternalSize] = useState(selectedSize);
// // //   const [showSizeModal, setShowSizeModal] = useState(false);
// // //   const [buttonState, setButtonState] = useState("default");
// // //   const [loading, setLoading] = useState(false);

// // //   useEffect(() => {
// // //     setInternalSize(selectedSize);
// // //   }, [selectedSize]);

// // //   // 🎬 animation
// // //   const startAddToCartAnimation = () => {
// // //     setButtonState("added");
// // //     setTimeout(() => setButtonState("goToBag"), 1500);
// // //   };

// // //   // 🧠 ADD TO CART (NO MANUAL AUTH CHECK)
// // //   const handleAddToCart = async () => {
// // //     // 1️⃣ Size required
// // //     if (!internalSize) {
// // //       setShowSizeModal(true);
// // //       return;
// // //     }

// // //     try {
// // //       setLoading(true);

// // //       // 2️⃣ Backend decides auth
// // //       await api.post("orders/cart/add", {
// // //         product_id: product.id,
// // //         quantity,
// // //         // size: internalSize,
// // //       });

// // //       // 3️⃣ Update local cart
// // //       addToCart(product, internalSize, quantity);

// // //       // 4️⃣ UI animation
// // //       startAddToCartAnimation();
// // //     } catch (err) {
// // //       // 🔐 Redirect only when auth truly fails
// // //       if (err.response?.status === 401) {
// // //         navigate("/login", {
// // //           state: { from: location.pathname },
// // //           replace: true,
// // //         });
// // //       } else {
// // //         console.error("Add to cart error:", err);
// // //         alert("Failed to add product to cart");
// // //       }
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   // 🛒 BUY NOW
// // //   const handleBuyNow = async () => {
// // //     if (!internalSize) {
// // //       setShowSizeModal(true);
// // //       return;
// // //     }

// // //     try {
// // //       setLoading(true);

// // //       await api.post("/cart/add", {
// // //         product_id: product.id,
// // //         quantity,
// // //         size: internalSize,
// // //       });

// // //       buyNow(product, internalSize, quantity);
// // //       navigate("/checkout");
// // //     } catch (err) {
// // //       if (err.response?.status === 401) {
// // //         navigate("/login", {
// // //           state: { from: location.pathname },
// // //           replace: true,
// // //         });
// // //       } else {
// // //         alert("Buy Now failed");
// // //       }
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   // Modal confirm
// // //   const handlePopupConfirm = () => {
// // //     setShowSizeModal(false);
// // //     handleAddToCart();
// // //   };

// // //   return (
// // //     <>
// // //       <SizeSelectModal
// // //         open={showSizeModal}
// // //         sizes={sizes}
// // //         selectedSize={internalSize}
// // //         onSelectSize={setInternalSize}
// // //         onConfirm={handlePopupConfirm}
// // //         onClose={() => setShowSizeModal(false)}
// // //       />

// // //       <div className="mt-6 w-full max-w-md flex flex-col gap-4">
// // //         {/* ADD TO BAG */}
// // //         {buttonState === "default" && (
// // //           <button
// // //             type="button"
// // //             onClick={handleAddToCart}
// // //             disabled={loading}
// // //             className="w-full py-3 rounded-xl font-semibold text-lg bg-primary text-white disabled:opacity-60"
// // //           >
// // //             {loading ? "ADDING..." : "ADD TO BAG"}
// // //           </button>
// // //         )}

// // //         {/* ITEM ADDED */}
// // //         {buttonState === "added" && (
// // //           <button
// // //             type="button"
// // //             className="w-full py-3 rounded-xl font-semibold text-lg bg-secondary text-white"
// // //           >
// // //             ITEM ADDED TO BAG
// // //           </button>
// // //         )}

// // //         {/* GO TO BAG */}
// // //         {buttonState === "goToBag" && (
// // //           <Link
// // //             to="/cart"
// // //             className="w-full block text-center py-3 rounded-xl font-semibold text-lg bg-primary text-white"
// // //           >
// // //             GO TO BAG →
// // //           </Link>
// // //         )}

// // //         {/* BUY NOW */}
// // //         <button
// // //           type="button"
// // //           onClick={handleBuyNow}
// // //           disabled={loading}
// // //           className="w-full py-3 rounded-xl font-semibold text-lg bg-dark text-white disabled:opacity-60"
// // //         >
// // //           BUY NOW
// // //         </button>
// // //       </div>
// // //     </>
// // //   );
// // // };

// // // export default AddToCartSection;

// // import React, { useState, useEffect } from "react";
// // import SizeSelectModal from "./SizeSelectModal";
// // import { Link, useNavigate, useLocation } from "react-router-dom";
// // import { useCart } from "../../../context/CartContext";
// // import api from "../../../api/axios";

// // const AddToCartSection = ({
// //   product,
// //   quantity,
// //   selectedSize,
// //   availableSizes,
// // }) => {
// //   const sizes = availableSizes;

// //   const { addToCart, buyNow } = useCart();
// //   const navigate = useNavigate();
// //   const location = useLocation();

// //   const [internalSize, setInternalSize] = useState(selectedSize);
// //   const [showSizeModal, setShowSizeModal] = useState(false);
// //   const [buttonState, setButtonState] = useState("default");
// //   const [loading, setLoading] = useState(false);

// //   console.log("qntty :", quantity);
// //   useEffect(() => {
// //     setInternalSize(selectedSize);
// //   }, [selectedSize]);

// //   // 🎬 Add-to-cart animation
// //   const startAddToCartAnimation = () => {
// //     setButtonState("added");
// //     setTimeout(() => setButtonState("goToBag"), 1500);
// //   };

// //   // =========================
// //   // 🛒 ADD TO CART
// //   // =========================
// //   const handleAddToCart = async () => {
// //     if (!internalSize) {
// //       setShowSizeModal(true);
// //       return;
// //     }

// //     try {
// //       setLoading(true);

// //       // ✅ SINGLE SOURCE OF TRUTH
// //       const success = await addToCart(product.id, internalSize, quantity);

// //       if (success) {
// //         startAddToCartAnimation();
// //       } else {
// //         alert("Failed to add product to cart");
// //       }
// //     } catch (err) {
// //       if (err.response?.status === 401) {
// //         navigate("/login", {
// //           state: { from: location.pathname },
// //           replace: true,
// //         });
// //       } else {
// //         console.error("Add to cart error:", err);
// //       }
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   // =========================
// //   // ⚡ BUY NOW
// //   // =========================
// //   const handleBuyNow = async () => {
// //     if (!internalSize) {
// //       setShowSizeModal(true);
// //       return;
// //     }

// //     try {
// //       setLoading(true);
// //       // ✅ SAME BACKEND ENDPOINT
// //       await api.post("/orders/cart/add/", {
// //         product_id: product.id,
// //         quantity,
// //         // size: internalSize,
// //       });

// //       buyNow(product, internalSize, quantity);
// //       navigate("/checkout");
// //     } catch (err) {
// //       if (err.response?.status === 401) {
// //         navigate("/login", {
// //           state: { from: location.pathname },
// //           replace: true,
// //         });
// //       } else {
// //         console.error("Buy now error:", err);
// //         alert("Buy Now failed");
// //       }
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   // =========================
// //   // SIZE MODAL CONFIRM
// //   // =========================
// //   const handlePopupConfirm = () => {
// //     setShowSizeModal(false);
// //     handleAddToCart();
// //   };

// //   return (
// //     <>
// //       <SizeSelectModal
// //         open={showSizeModal}
// //         sizes={sizes}
// //         selectedSize={internalSize}
// //         onSelectSize={setInternalSize}
// //         onConfirm={handlePopupConfirm}
// //         onClose={() => setShowSizeModal(false)}
// //       />

// //       <div className="mt-6 w-full max-w-md flex flex-col gap-4">
// //         {/* ADD TO BAG */}
// //         {buttonState === "default" && (
// //           <button
// //             type="button"
// //             onClick={handleAddToCart}
// //             disabled={loading}
// //             className="w-full py-3 rounded-xl font-semibold text-lg bg-primary text-white disabled:opacity-60"
// //           >
// //             {loading ? "ADDING..." : "ADD TO BAG"}
// //           </button>
// //         )}

// //         {/* ITEM ADDED */}
// //         {buttonState === "added" && (
// //           <button
// //             type="button"
// //             className="w-full py-3 rounded-xl font-semibold text-lg bg-secondary text-white"
// //           >
// //             ITEM ADDED TO BAG
// //           </button>
// //         )}

// //         {/* GO TO BAG */}
// //         {buttonState === "goToBag" && (
// //           <Link
// //             to="/cart"
// //             className="w-full block text-center py-3 rounded-xl font-semibold text-lg bg-primary text-white"
// //           >
// //             GO TO BAG →
// //           </Link>
// //         )}

// //         {/* BUY NOW */}
// //         <button
// //           type="button"
// //           onClick={handleBuyNow}
// //           disabled={loading}
// //           className="w-full py-3 rounded-xl font-semibold text-lg bg-dark text-white disabled:opacity-60"
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
// import { Link, useNavigate, useLocation } from "react-router-dom";
// import { useCart } from "../../../context/CartContext";

// const AddToCartSection = ({
//   product,
//   quantity,
//   selectedSize,
//   availableSizes,
// }) => {
//   const sizes = availableSizes;

//   const { addToCart, setBuyNow } = useCart(); // ✅ UPDATED
//   const navigate = useNavigate();
//   const location = useLocation();

//   const [internalSize, setInternalSize] = useState(selectedSize);
//   const [showSizeModal, setShowSizeModal] = useState(false);
//   const [buttonState, setButtonState] = useState("default");
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     setInternalSize(selectedSize);
//   }, [selectedSize]);

//   // 🎬 Add-to-cart animation
//   const startAddToCartAnimation = () => {
//     setButtonState("added");
//     setTimeout(() => setButtonState("goToBag"), 1500);
//   };

//   // =========================
//   // 🛒 ADD TO CART
//   // =========================
//   const handleAddToCart = async () => {
//     if (!internalSize) {
//       setShowSizeModal(true);
//       return;
//     }

//     try {
//       setLoading(true);

//       const success = await addToCart(product.id, internalSize, quantity);

//       if (success) {
//         startAddToCartAnimation();
//       } else {
//         alert("Failed to add product to cart");
//       }
//     } catch (err) {
//       if (err.response?.status === 401) {
//         navigate("/login", {
//           state: { from: location.pathname },
//           replace: true,
//         });
//       } else {
//         console.error("Add to cart error:", err);
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   // =========================
//   // ⚡ BUY NOW (NO API CALL)
//   // =========================
//   const handleBuyNow = () => {
//     if (!internalSize) {
//       setShowSizeModal(true);
//       return;
//     }

//     // ✅ TEMP STORE BUY NOW ITEM
//     setBuyNow({
//       id: product.id,
//       title: product.title || product.name,
//       image: product.image || product.main_image,
//       price: product.price,
//       size: internalSize,
//       qty: quantity,
//       deliveryDate: "3–5 days",
//     });

//     navigate("/checkout");
//   };

//   // =========================
//   // SIZE MODAL CONFIRM
//   // =========================
//   const handlePopupConfirm = () => {
//     setShowSizeModal(false);
//     handleAddToCart();
//   };

//   return (
//     <>
//       <SizeSelectModal
//         open={showSizeModal}
//         sizes={sizes}
//         selectedSize={internalSize}
//         onSelectSize={setInternalSize}
//         onConfirm={handlePopupConfirm}
//         onClose={() => setShowSizeModal(false)}
//       />

//       <div className="mt-6 w-full max-w-md flex flex-col gap-4">
//         {/* ADD TO BAG */}
//         {buttonState === "default" && (
//           <button
//             type="button"
//             onClick={handleAddToCart}
//             disabled={loading}
//             className="w-full py-3 rounded-xl font-semibold text-lg bg-primary text-white disabled:opacity-60"
//           >
//             {loading ? "ADDING..." : "ADD TO BAG"}
//           </button>
//         )}

//         {/* ITEM ADDED */}
//         {buttonState === "added" && (
//           <button
//             type="button"
//             className="w-full py-3 rounded-xl font-semibold text-lg bg-secondary text-white"
//           >
//             ITEM ADDED TO BAG
//           </button>
//         )}

//         {/* GO TO BAG */}
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
//           type="button"
//           onClick={handleBuyNow}
//           disabled={loading}
//           className="w-full py-3 rounded-xl font-semibold text-lg bg-dark text-white disabled:opacity-60"
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
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useCart } from "../../../context/CartContext";

const AddToCartSection = ({
  product,
  quantity,
  selectedSize,
  availableSizes,
}) => {
  const sizes = availableSizes;

  const { addToCart, setBuyNow } = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  const [internalSize, setInternalSize] = useState(selectedSize);
  const [showSizeModal, setShowSizeModal] = useState(false);
  const [buttonState, setButtonState] = useState("default");
  const [loading, setLoading] = useState(false);
  const [actionType, setActionType] = useState(null); // ✅ NEW

  useEffect(() => {
    setInternalSize(selectedSize);
  }, [selectedSize]);

  // 🎬 Add-to-cart animation
  const startAddToCartAnimation = () => {
    setButtonState("added");
    setTimeout(() => setButtonState("goToBag"), 1500);
  };

  // =========================
  // 🛒 ADD TO CART
  // =========================
  const handleAddToCart = async () => {
    if (!internalSize) {
      setActionType("add"); // ✅ mark intent
      setShowSizeModal(true);
      return;
    }

    try {
      setLoading(true);
      const success = await addToCart(product.id, internalSize, quantity);

      if (success) {
        startAddToCartAnimation();
      }
    } catch (err) {
      if (err.response?.status === 401) {
        navigate("/login", {
          state: { from: location.pathname },
          replace: true,
        });
      } else {
        console.error("Add to cart error:", err);
      }
    } finally {
      setLoading(false);
    }
  };

  // =========================
  // ⚡ BUY NOW (NO CART ADD)
  // =========================
  const handleBuyNow = () => {
    if (!internalSize) {
      setActionType("buy"); // ✅ mark intent
      setShowSizeModal(true);
      return;
    }

    setBuyNow({
      id: product.id,
      title: product.title || product.name,
      image: product.image || product.main_image,
      price: product.price,
      size: internalSize,
      qty: quantity,
      deliveryDate: "3–5 days",
    });

    navigate("/checkout");
  };

  // =========================
  // SIZE MODAL CONFIRM (FIX)
  // =========================
  const handlePopupConfirm = () => {
    setShowSizeModal(false);

    if (actionType === "add") {
      handleAddToCart();
    }

    if (actionType === "buy") {
      handleBuyNow();
    }

    setActionType(null);
  };

  return (
    <>
      <SizeSelectModal
        open={showSizeModal}
        sizes={sizes}
        selectedSize={internalSize}
        onSelectSize={setInternalSize}
        onConfirm={handlePopupConfirm}
        onClose={() => setShowSizeModal(false)}
      />

      <div className="mt-6 w-full max-w-md flex flex-col gap-4">
        {/* ADD TO BAG */}
        {buttonState === "default" && (
          <button
            type="button"
            onClick={handleAddToCart}
            disabled={loading}
            className="w-full py-3 rounded-xl font-semibold text-lg bg-primary text-white disabled:opacity-60"
          >
            {loading ? "ADDING..." : "ADD TO BAG"}
          </button>
        )}

        {/* ITEM ADDED */}
        {buttonState === "added" && (
          <button
            type="button"
            className="w-full py-3 rounded-xl font-semibold text-lg bg-secondary text-white"
          >
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

        {/* BUY NOW */}
        <button
          type="button"
          onClick={handleBuyNow}
          disabled={loading}
          className="w-full py-3 rounded-xl font-semibold text-lg bg-dark text-white disabled:opacity-60"
        >
          BUY NOW
        </button>
      </div>
    </>
  );
};

export default AddToCartSection;
