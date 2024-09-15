import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({
  cart: [],
  addItem: () => {},
  removeItem: () => {},
  buyNow: () => {},
});

export default function CartProvider({ children }) {
  const [cart, setCart] = useState({});

  const addItem = (id) => {
    setCart((prev) => {
      const copy = { ...prev, [id]: prev[id] ? prev[id] + 1 : 1 };
      localStorage.setItem("cart", JSON.stringify(copy));
      return copy;
    });
  };
  const removeItem = (id) => {
    setCart((prev) => {
      let copy = { ...prev };
      copy = { ...copy, [id]: copy[id] - 1 };
      if (copy[id] === 0) {
        delete copy[id];
      }
      localStorage.setItem("cart", JSON.stringify(copy));

      return copy;
    });
  };

  const buyNow = () => {
    setCart({});
    localStorage.setItem("cart", JSON.stringify({}));
    alert("Order Confirm")
  };

  useEffect(() => {
    const localCart = localStorage.getItem("cart");
    setCart(!!localCart ? JSON.parse(localCart) : []);
  }, []);

  const value = {
    cart,
    addItem,
    removeItem,
    buyNow,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
