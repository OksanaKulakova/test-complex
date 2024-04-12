"use client";
import { createContext, useReducer } from "react";
import CartReducer from "./cart-reducer";

const CartContext = createContext();

const initState = {
  items: [],
};

const CartContextProvider = (props) => {
  const [value, dispatch] = useReducer(CartReducer, initState);

  value.append = (item, quantity = 1) => {
    dispatch({
      type: "APPEND_ITEM",
      payload: { item: item, quantity: quantity },
    });
  };

  value.remove = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: { id: id } });
  };

  return (
    <CartContext.Provider value={value}>{props.children}</CartContext.Provider>
  );
};

export { CartContext, CartContextProvider };
