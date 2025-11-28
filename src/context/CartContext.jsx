import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [checkoutItem, setCheckoutItem] = useState(null); // item reserved for "Buy Now"

  // ADD TO CART
  const addToCart = (product, size, qty = 1) => {
    const newItem = {
      id: product.id,
      title: product.title,
      brand: product.brand || "Saptrangi",
      price: product.price,
      originalPrice: product.oldPrice,
      saved: product.oldPrice ? product.oldPrice - product.price : 0,
      deliveryDate: "3–5 days",
      image: product.image || product.extraImages?.[0],
      size,
      qty,
    };

    const exists = cart.find(
      (item) => item.id === product.id && item.size === size
    );

    if (exists) {
      setCart((prev) =>
        prev.map((item) =>
          item.id === product.id && item.size === size
            ? { ...item, qty: item.qty + qty }
            : item
        )
      );
    } else {
      setCart((prev) => [...prev, newItem]);
    }
  };

  // REMOVE ITEM
  const removeItem = (id, size) => {
    setCart((prev) =>
      prev.filter((item) => !(item.id === id && item.size === size))
    );
  };

  // UPDATE ITEM
  const updateItem = (id, size, newData) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id && item.size === size ? { ...item, ...newData } : item
      )
    );
  };

  // BUY NOW: store the single item to proceed to checkout immediately
  const buyNow = (product, size, qty = 1) => {
    const item = {
      id: product.id,
      title: product.title,
      brand: product.brand || "Saptrangi",
      price: product.price,
      originalPrice: product.oldPrice,
      saved: product.oldPrice ? product.oldPrice - product.price : 0,
      deliveryDate: "3–5 days",
      image: product.image || product.extraImages?.[0],
      size,
      qty,
    };

    setCheckoutItem(item);
  };

  // clear checkoutItem after order placed (external)
  const clearCheckoutItem = () => setCheckoutItem(null);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeItem,
        updateItem,
        checkoutItem,
        buyNow,
        clearCheckoutItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
