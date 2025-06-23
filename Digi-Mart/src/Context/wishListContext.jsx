import React, { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const getInitialWishlist = () => {
    const cookie = Cookies.get("auth");
    try {
      const parsed = cookie ? JSON.parse(cookie) : {};
      return parsed.wishlistItems || [];
    } catch {
      return [];
    }
  };

  const [wishlistItems, setWishlistItems] = useState(getInitialWishlist());

  const updateWishlistInCookie = (items) => {
    const cookie = Cookies.get("auth");
    try {
      const parsed = cookie ? JSON.parse(cookie) : {};
      parsed.wishlistItems = items;
      Cookies.set("auth", JSON.stringify(parsed), { expires: 365 });
    } catch (err) {
      console.error("Failed to update wishlist in cookie:", err);
    }
  };

  const addToWishlist = (product) => {
    if (!wishlistItems.find((item) => item.id === product.id)) {
      const updated = [...wishlistItems, product];
      setWishlistItems(updated);
      updateWishlistInCookie(updated);
    }
  };

  const removeFromWishlist = (id) => {
    const updated = wishlistItems.filter((item) => item.id !== id);
    setWishlistItems(updated);
    updateWishlistInCookie(updated);
  };

  const checkIfInWishlist = (id) => {
    return wishlistItems.some((item) => item.id === id);
  };

  // Re-read cookie on mount (in case it changed outside React)
  useEffect(() => {
    setWishlistItems(getInitialWishlist());
  }, []);

  return (
    <WishlistContext.Provider
      value={{
        wishlistItems,
        addToWishlist,
        removeFromWishlist,
        checkIfInWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);
