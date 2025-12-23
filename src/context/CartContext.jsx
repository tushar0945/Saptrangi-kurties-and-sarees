// // // // // import React, { createContext, useContext, useState } from "react";
// // // // // import api from "../api/axios";

// // // // // const CartContext = createContext();
// // // // // export const useCart = () => useContext(CartContext);

// // // // // export const CartProvider = ({ children }) => {
// // // // //   const [cart, setCart] = useState([]);
// // // // //   const [checkoutItem, setCheckoutItem] = useState(null);

// // // // //   // 🛒 ADD TO CART (BACKEND + LOCAL SYNC)
// // // // //   const addToCart = async (product, size, qty = 1) => {
// // // // //     try {
// // // // //       const res = await api.post("/orders/cart/add/", {
// // // // //         product_id: product.id,
// // // // //         size,
// // // // //         quantity: qty,
// // // // //       });

// // // // //       // backend should return updated cart
// // // // //       setCart(res.data.cart || []);
// // // // //       return true;
// // // // //     } catch (err) {
// // // // //       console.error("Add to cart failed", err);
// // // // //       return false;
// // // // //     }
// // // // //   };

// // // // //   // ❌ REMOVE ITEM
// // // // //   const removeItem = async (id, size) => {
// // // // //     try {
// // // // //       const res = await api.delete("/orders/cart/remove/", {
// // // // //         data: { product_id: id, size },
// // // // //       });

// // // // //       setCart(res.data.cart || []);
// // // // //     } catch (err) {
// // // // //       console.error("Remove item failed", err);
// // // // //     }
// // // // //   };

// // // // //   // 🔄 UPDATE ITEM
// // // // //   const updateItem = async (id, size, newQty) => {
// // // // //     try {
// // // // //       const res = await api.put("/orders/cart/update/", {
// // // // //         product_id: id,
// // // // //         size,
// // // // //         quantity: newQty,
// // // // //       });

// // // // //       setCart(res.data.cart || []);
// // // // //     } catch (err) {
// // // // //       console.error("Update cart failed", err);
// // // // //     }
// // // // //   };

// // // // //   // ⚡ BUY NOW
// // // // //   const buyNow = async (product, size, qty = 1) => {
// // // // //     await addToCart(product, size, qty);

// // // // //     setCheckoutItem({
// // // // //       id: product.id,
// // // // //       title: product.title,
// // // // //       brand: product.brand || "Saajnika",
// // // // //       price: product.price,
// // // // //       image: product.image || product.extraImages?.[0],
// // // // //       size,
// // // // //       qty,
// // // // //     });
// // // // //   };

// // // // //   const clearCheckoutItem = () => setCheckoutItem(null);

// // // // //   return (
// // // // //     <CartContext.Provider
// // // // //       value={{
// // // // //         cart,
// // // // //         addToCart,
// // // // //         removeItem,
// // // // //         updateItem,
// // // // //         checkoutItem,
// // // // //         buyNow,
// // // // //         clearCheckoutItem,
// // // // //       }}
// // // // //     >
// // // // //       {children}
// // // // //     </CartContext.Provider>
// // // // //   );
// // // // // };

// // // // import { createContext, useContext, useState } from "react";

// // // // const CartContext = createContext(null);

// // // // export const CartProvider = ({ children }) => {
// // // //   // ✅ cart is ALWAYS an array
// // // //   const [cart, setCart] = useState([]);

// // // //   // =========================
// // // //   // ADD TO CART
// // // //   // =========================
// // // //   const addToCart = (product, size, quantity = 1) => {
// // // //     setCart((prevCart) => {
// // // //       const existingItem = prevCart.find(
// // // //         (item) => item.id === product.id && item.size === size
// // // //       );

// // // //       // If item already exists → increase qty
// // // //       if (existingItem) {
// // // //         return prevCart.map((item) =>
// // // //           item.id === product.id && item.size === size
// // // //             ? { ...item, qty: item.qty + quantity }
// // // //             : item
// // // //         );
// // // //       }

// // // //       // Else add new item
// // // //       return [
// // // //         ...prevCart,
// // // //         {
// // // //           id: product.id,
// // // //           name: product.name,
// // // //           price: product.price,
// // // //           image: product.image,
// // // //           size,
// // // //           qty: quantity,
// // // //         },
// // // //       ];
// // // //     });
// // // //   };

// // // //   // =========================
// // // //   // BUY NOW (OPTIONAL)
// // // //   // =========================
// // // //   const buyNow = (product, size, quantity = 1) => {
// // // //     setCart([
// // // //       {
// // // //         id: product.id,
// // // //         name: product.name,
// // // //         price: product.price,
// // // //         image: product.image,
// // // //         size,
// // // //         qty: quantity,
// // // //       },
// // // //     ]);
// // // //   };

// // // //   return (
// // // //     <CartContext.Provider
// // // //       value={{
// // // //         cart,
// // // //         addToCart,
// // // //         buyNow,
// // // //       }}
// // // //     >
// // // //       {children}
// // // //     </CartContext.Provider>
// // // //   );
// // // // };

// // // // export const useCart = () => useContext(CartContext);

// // // import { createContext, useContext, useEffect, useState } from "react";
// // // import api from "../api/axios";

// // // const CartContext = createContext(null);

// // // export const CartProvider = ({ children }) => {
// // //   // 🛒 Cart state always array
// // //   const [cart, setCart] = useState([]);
// // //   const [loading, setLoading] = useState(false);

// // //   // =========================
// // //   // FETCH CART (INITIAL LOAD)
// // //   // =========================
// // //   const fetchCart = async () => {
// // //     try {
// // //       setLoading(true);
// // //       const res = await api.get("/orders/cart/");
// // //       setCart(res.data?.cart || []);
// // //     } catch (err) {
// // //       console.error("Fetch cart failed:", err);
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   // Load cart on app start
// // //   useEffect(() => {
// // //     fetchCart();
// // //   }, []);

// // //   // =========================
// // //   // ADD TO CART
// // //   // =========================
// // //   const addToCart = async (productId, size, quantity = 1) => {
// // //     try {
// // //       await api.post("/orders/cart/add/", {
// // //         product_id: productId,
// // //         size,
// // //         quantity,
// // //       });

// // //       // refresh cart
// // //       await fetchCart();
// // //     } catch (err) {
// // //       console.error("Add to cart failed:", err);
// // //     }
// // //   };

// // //   // =========================
// // //   // BUY NOW
// // //   // =========================
// // //   const buyNow = async (productId, size, quantity = 1) => {
// // //     try {
// // //       await api.post("/orders/cart/add/", {
// // //         product_id: productId,
// // //         size,
// // //         quantity,
// // //       });

// // //       await fetchCart();
// // //     } catch (err) {
// // //       console.error("Buy now failed:", err);
// // //     }
// // //   };

// // //   // =========================
// // //   // UPDATE QUANTITY
// // //   // =========================
// // //   const updateQuantity = async (cartItemId, quantity) => {
// // //     try {
// // //       await api.post("/orders/cart/update/quantity", {
// // //         cart_item_id: cartItemId,
// // //         quantity,
// // //       });

// // //       setCart((prev) =>
// // //         prev.map((item) =>
// // //           item.id === cartItemId ? { ...item, quantity } : item
// // //         )
// // //       );
// // //     } catch (err) {
// // //       console.error("Update quantity failed:", err);
// // //     }
// // //   };

// // //   // =========================
// // //   // UPDATE SIZE
// // //   // =========================
// // //   const updateSize = async (cartItemId, size) => {
// // //     try {
// // //       await api.post("/orders/cart/size", {
// // //         cart_item_id: cartItemId,
// // //         size,
// // //       });

// // //       setCart((prev) =>
// // //         prev.map((item) => (item.id === cartItemId ? { ...item, size } : item))
// // //       );
// // //     } catch (err) {
// // //       console.error("Update size failed:", err);
// // //     }
// // //   };

// // //   // =========================
// // //   // REMOVE ITEM
// // //   // =========================
// // //   const removeItem = async (cartItemId) => {
// // //     try {
// // //       await api.post("/orders/cart/remove/", {
// // //         cart_item_id: cartItemId,
// // //       });

// // //       setCart((prev) => prev.filter((item) => item.id !== cartItemId));
// // //     } catch (err) {
// // //       console.error("Remove item failed:", err);
// // //     }
// // //   };

// // //   return (
// // //     <CartContext.Provider
// // //       value={{
// // //         cart,
// // //         loading,
// // //         fetchCart,
// // //         addToCart,
// // //         buyNow,
// // //         updateQuantity,
// // //         updateSize,
// // //         removeItem,
// // //       }}
// // //     >
// // //       {children}
// // //     </CartContext.Provider>
// // //   );
// // // };

// // // export const useCart = () => useContext(CartContext);

// // import { createContext, useContext, useEffect, useState } from "react";
// // import api from "../api/axios";

// // const CartContext = createContext(null);

// // export const CartProvider = ({ children }) => {
// //   const [cart, setCart] = useState([]);
// //   const [loading, setLoading] = useState(false);

// //   // =========================
// //   // FETCH CART
// //   // =========================
// //   const fetchCart = async () => {
// //     try {
// //       setLoading(true);
// //       const res = await api.get("/orders/cart/");
// //       setCart(res.data?.cart || []);
// //       return true;
// //     } catch (err) {
// //       console.error("Fetch cart failed:", err);
// //       return false;
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchCart();
// //   }, []);

// //   // =========================
// //   // ADD TO CART
// //   // =========================
// //   const addToCart = async (productId, size, quantity = 1) => {
// //     try {
// //       await api.post("/orders/cart/add/", {
// //         product_id: productId,
// //         size,
// //         quantity,
// //       });
// //       await fetchCart();
// //       return true;
// //     } catch (err) {
// //       console.error("Add to cart failed:", err);
// //       return false;
// //     }
// //   };

// //   // =========================
// //   // BUY NOW
// //   // =========================
// //   const buyNow = async (productId, size, quantity = 1) => {
// //     try {
// //       await api.post("/orders/order/buy/", {
// //         product_id: productId,
// //         size,
// //         quantity,
// //       });
// //       await fetchCart();
// //       return true;
// //     } catch (err) {
// //       console.error("Buy now failed:", err);
// //       return false;
// //     }
// //   };

// //   // =========================
// //   // UPDATE QUANTITY
// //   // =========================
// //   const updateQuantity = async (cartItemId, quantity) => {
// //     const prevCart = [...cart];

// //     try {
// //       await api.post("/orders/cart/update/quantity", {
// //         cart_item_id: cartItemId,
// //         quantity,
// //       });

// //       setCart((prev) =>
// //         prev.map((item) =>
// //           item.id === cartItemId ? { ...item, quantity } : item
// //         )
// //       );

// //       return true;
// //     } catch (err) {
// //       console.error("Update quantity failed:", err);
// //       setCart(prevCart); // rollback
// //       return false;
// //     }
// //   };

// //   // =========================
// //   // UPDATE SIZE
// //   // =========================
// //   const updateSize = async (cartItemId, size) => {
// //     const prevCart = [...cart];

// //     try {
// //       await api.post("/orders/cart/size", {
// //         cart_item_id: cartItemId,
// //         size,
// //       });

// //       setCart((prev) =>
// //         prev.map((item) => (item.id === cartItemId ? { ...item, size } : item))
// //       );

// //       return true;
// //     } catch (err) {
// //       console.error("Update size failed:", err);
// //       setCart(prevCart); // rollback
// //       return false;
// //     }
// //   };

// //   // =========================
// //   // REMOVE ITEM
// //   // =========================
// //   // const removeItem = async (cartItemId) => {
// //   //   const prevCart = [...cart];
// //   //   console.log("cart id", cartItemId);
// //   //   try {
// //   //     await api.delete("/orders/cart/remove/", {
// //   //       cart_id: cartItemId,
// //   //     });

// //   //     setCart((prev) => prev.filter((item) => item.id !== cartItemId));
// //   //     return true;
// //   //   } catch (err) {
// //   //     console.error("Remove item failed:", err);
// //   //     setCart(prevCart); // rollback
// //   //     return false;
// //   //   }
// //   // };

// //   // const removeItem = async (cartItemId) => {
// //   //   const prevCart = [...cart];

// //   //   try {
// //   //     await api.delete("/orders/cart/remove/", {
// //   //       data: {
// //   //         cart_item_id: cartItemId,
// //   //       },
// //   //     });

// //   //     // Optimistic UI update
// //   //     setCart((prev) => prev.filter((item) => item.id !== cartItemId));

// //   //     return true;
// //   //   } catch (err) {
// //   //     console.error("Remove item failed:", err);

// //   //     // Rollback on failure
// //   //     setCart(prevCart);

// //   //     return false;
// //   //   }
// //   // };
// //   const removeItem = async (cartItemId) => {
// //     const prevCart = [...cart];

// //     try {
// //       await api.delete(`/orders/cart/remove/${cartItemId}/`);

// //       setCart((prev) => prev.filter((item) => item.id !== cartItemId));
// //       return true;
// //     } catch (err) {
// //       console.error("Remove item failed:", err);
// //       setCart(prevCart);
// //       return false;
// //     }
// //   };

// //   return (
// //     <CartContext.Provider
// //       value={{
// //         cart,
// //         loading,
// //         fetchCart,
// //         addToCart,
// //         buyNow,
// //         updateQuantity,
// //         updateSize,
// //         removeItem,
// //       }}
// //     >
// //       {children}
// //     </CartContext.Provider>
// //   );
// // };

// // export const useCart = () => useContext(CartContext);

// import { createContext, useContext, useEffect, useState } from "react";
// import api from "../api/axios";

// const CartContext = createContext(null);

// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);
//   const [buyNowItem, setBuyNowItem] = useState(null); // ✅ NEW
//   const [loading, setLoading] = useState(false);

//   // =========================
//   // FETCH CART
//   // =========================
//   const fetchCart = async () => {
//     try {
//       setLoading(true);
//       const res = await api.get("/orders/cart/");
//       console.log(res);
//       setCart(res.data?.cart || []);
//       return true;
//     } catch (err) {
//       console.error("Fetch cart failed:", err);
//       return false;
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchCart();
//   }, []);

//   // =========================
//   // ADD TO CART
//   // =========================
//   const addToCart = async (productId, size, quantity = 1) => {
//     try {
//       await api.post("/orders/cart/add/", {
//         product_id: productId,
//         size,
//         quantity,
//       });
//       await fetchCart();
//       return true;
//     } catch (err) {
//       console.error("Add to cart failed:", err);
//       return false;
//     }
//   };

//   // =========================
//   // BUY NOW (TEMP STATE ONLY)
//   // =========================
//   const setBuyNow = (item) => {
//     setBuyNowItem([item]); // array to match cart structure
//   };

//   const clearBuyNow = () => {
//     setBuyNowItem(null);
//   };

//   // =========================
//   // UPDATE QUANTITY
//   // =========================
//   const updateQuantity = async (cartItemId, quantity) => {
//     const prevCart = [...cart];

//     try {
//       await api.post("/orders/cart/update/quantity", {
//         cart_item_id: cartItemId,
//         quantity,
//       });

//       setCart((prev) =>
//         prev.map((item) =>
//           item.id === cartItemId ? { ...item, quantity } : item
//         )
//       );

//       return true;
//     } catch (err) {
//       console.error("Update quantity failed:", err);
//       setCart(prevCart);
//       return false;
//     }
//   };

//   // =========================
//   // UPDATE SIZE
//   // =========================
//   const updateSize = async (cartItemId, size) => {
//     const prevCart = [...cart];

//     try {
//       await api.post("/orders/cart/size", {
//         cart_item_id: cartItemId,
//         size,
//       });

//       setCart((prev) =>
//         prev.map((item) => (item.id === cartItemId ? { ...item, size } : item))
//       );

//       return true;
//     } catch (err) {
//       console.error("Update size failed:", err);
//       setCart(prevCart);
//       return false;
//     }
//   };

//   // =========================
//   // REMOVE ITEM
//   // =========================
//   const removeItem = async (cartItemId) => {
//     const prevCart = [...cart];

//     try {
//       await api.delete(`/orders/cart/remove/`, { cart_id: cartItemId });
//       setCart((prev) => prev.filter((item) => item.id !== cartItemId));
//       return true;
//     } catch (err) {
//       console.error("Remove item failed:", err);
//       setCart(prevCart);
//       return false;
//     }
//   };

//   return (
//     <CartContext.Provider
//       value={{
//         cart,
//         buyNowItem, // ✅ exposed
//         setBuyNow, // ✅ exposed
//         clearBuyNow, // ✅ exposed
//         loading,
//         fetchCart,
//         addToCart,
//         updateQuantity,
//         updateSize,
//         removeItem,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => useContext(CartContext);

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";
import api from "../api/axios";

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [buyNowItem, setBuyNowItem] = useState(null);
  const [loading, setLoading] = useState(false);

  // =========================
  // 🛒 FETCH CART
  // =========================
  const fetchCart = useCallback(async () => {
    try {
      setLoading(true);
      const res = await api.get("/cart/items");
      setCart(res.data?.cart || []);
      return true;
    } catch (err) {
      console.error("Fetch cart failed:", err);
      return false;
    } finally {
      setLoading(false);
    }
  }, []);

  // Fetch cart ONCE on app load
  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  // =========================
  // ➕ ADD TO CART
  // =========================
  const addToCart = async (productId, size, quantity = 1) => {
    try {
      await api.post("/cart/add/", {
        product_id: productId,
        size,
        quantity,
      });
      await fetchCart();
      return true;
    } catch (err) {
      console.error("Add to cart failed:", err);
      return false;
    }
  };

  // =========================
  // ⚡ BUY NOW (TEMP ONLY)
  // =========================
  const setBuyNow = (item) => {
    setBuyNowItem([item]); // keep array structure
  };

  const clearBuyNow = () => {
    setBuyNowItem(null);
  };

  // =========================
  // 🔢 UPDATE QUANTITY
  // =========================
  const updateQuantity = async (cartItemId, quantity) => {
    const prevCart = [...cart];

    try {
      await api.put("/cart/update/quantity/", {
        cart_id: cartItemId,
        quantity,
      });

      // optimistic update
      setCart((prev) =>
        prev.map((item) =>
          item.id === cartItemId ? { ...item, quantity } : item
        )
      );

      return true;
    } catch (err) {
      console.error("Update quantity failed:", err);
      setCart(prevCart);
      return false;
    }
  };

  // =========================
  // 📏 UPDATE SIZE
  // =========================
  const updateSize = async (cartItemId, size) => {
    const prevCart = [...cart];

    try {
      await api.put("cart/update/size/", {
        cart_id: cartItemId,
        size,
      });

      setCart((prev) =>
        prev.map((item) => (item.id === cartItemId ? { ...item, size } : item))
      );

      return true;
    } catch (err) {
      console.error("Update size failed:", err);
      setCart(prevCart);
      return false;
    }
  };

  // =========================
  // ❌ REMOVE ITEM
  // =========================
  const removeItem = async (cartItemId) => {
    const prevCart = [...cart];

    try {
      await api.delete(`/cart/remove/${cartItemId}`);

      setCart((prev) => prev.filter((item) => item.id !== cartItemId));
      return true;
    } catch (err) {
      console.error("Remove item failed:", err);
      setCart(prevCart);
      return false;
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        buyNowItem,
        loading,

        // actions
        fetchCart,
        addToCart,
        updateQuantity,
        updateSize,
        removeItem,
        setBuyNow,
        clearBuyNow,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
