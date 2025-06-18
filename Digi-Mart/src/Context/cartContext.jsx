import { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";

const CartContext = createContext();

const getCartFromCookie = () => {
  const cookie = Cookies.get("auth");
  try {
    if (cookie) {
      const parsed = JSON.parse(cookie);
      return parsed.cartItems || [];
    }
  } catch (err) {
    console.error("Invalid auth cookie", err);
  }
  return [];
};

const updateCartInCookie = (cartItems) => {
  const cookie = Cookies.get("auth");
  if (!cookie) return;

  try {
    const parsed = JSON.parse(cookie);
    const updated = { ...parsed, cartItems };
    Cookies.set("auth", JSON.stringify(updated), { expires: 365 });
  } catch (err) {
    console.error("Failed to update cart in cookie", err);
  }
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(getCartFromCookie());

  const syncCart = (newCart) => {
    setCartItems(newCart);
    updateCartInCookie(newCart);
  };

  const addToCart = (product, quantity) => {
    const existing = cartItems.find((item) => item.id === product.id);
    let updatedCart;
    if (existing) {
      updatedCart = cartItems.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + parseInt(quantity) }
          : item
      );
    } else {
      updatedCart = [
        ...cartItems,
        { ...product, quantity: parseInt(quantity) },
      ];
    }
    syncCart(updatedCart);
  };

  const updateQuantity = (productId, deltaQty) => {
    const updatedCart = cartItems.map((item) =>
      item.id === productId
        ? {
            ...item,
            quantity: Math.max(1, item.quantity + deltaQty), // prevents 0 or negative qty
          }
        : item
    );
    syncCart(updatedCart);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    syncCart(updatedCart);
  };

  const clearCart = () => {
    syncCart([]);
  };

  const checkIfInCart = (id) => {
    return cartItems.some((item) => item.id === id);
  };

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // Keep state in sync with cookie (optional on reload)
  useEffect(() => {
    setCartItems(getCartFromCookie());
  }, []);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        checkIfInCart,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
