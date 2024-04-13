"use client";

import "./cart.css";

import { useContext, useEffect } from "react";
import { CartContext } from "@/app/components/cart/cart-context";
import CartList from "./cart-list";
import OrderForm from "@/app/components/order/order-form";

export default function Cart() {
  const cart = useContext(CartContext);

  useEffect(() => {
    const savedItems = JSON.parse(window.localStorage.getItem("cart"));

    if (savedItems.length) {
      cart.setItems(savedItems);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("cart", JSON.stringify(cart.items));
  }, [cart]);

  return (
    <div className="cart">
      {cart.items.length ? (
        <>
          <CartList />
          <OrderForm />
        </>
      ) : (
        <p>Ваша корзина пуста</p>
      )}
    </div>
  );
}
