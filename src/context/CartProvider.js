import React, { createContext, useReducer } from "react";

export const CartContext = createContext();

const defaultCartState = { items: [], totalAmount: 0 };

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      //REVIEW THIS LOGIC
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.item.id
      );
      const existingCartItem = state.items[existingCartItemIndex];
      let updatedItems;

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + action.item.amount,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems = state.items.concat(action.item);
      }
      return {
        items: updatedItems,
        totalAmount: state.totalAmount + action.item.price * action.item.amount,
      };
    case "REMOVE_ITEM":
      const existingCartItemIndexR = state.items.findIndex(
        (item) => item.id === action.id
      );
      const existingCartItemR = state.items[existingCartItemIndexR];
      const updatedTotalAmount = state.totalAmount - existingCartItemR.price;
      let updatedItemsR;

      if (existingCartItemR.amount === 1) {
        updatedItemsR = state.items.filter((item) => item.id !== action.id);
      } else {
        const updatedItemR = {
          ...existingCartItemR,
          amount: existingCartItemR.amount - 1,
        };
        updatedItemsR = [...state.items];
        updatedItemsR[existingCartItemIndexR] = updatedItemR;
      }
      return { items: updatedItemsR, totalAmount: updatedTotalAmount };
    default:
      return defaultCartState;
  }
};

const CartProvider = ({ children }) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemtoCartHandler = (item) => {
    dispatchCartAction({ type: "ADD_ITEM", item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE_ITEM", id });
  };

  return (
    <CartContext.Provider
      value={{
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemtoCartHandler,
        removeItem: removeItemFromCartHandler,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
