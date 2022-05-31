import React, { createContext } from "react";

export const CartContext = createContext({
  items: [],
  totalAmount: 0,
  addItem: () => {},
  removeItem: () => {},
});

const CartProvider = ({ children }) => {
  const addItemtoCartHandler = () => {};

  const removeItemFromCartHandler = (id) => {};

  return (
    <CartContext.Provider
      value={{
        items: [],
        totalAmount: 0,
        addItem: addItemtoCartHandler,
        removeItem: removeItemFromCartHandler,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
