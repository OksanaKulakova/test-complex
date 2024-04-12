"use client";

import "./cart.css";

import { useContext } from "react";
import { CartContext } from "@/app/components/cart/cart-context";
import CartList from "./cart-list";
import OrderForm from "@/app/components/order/order-form";

export default function Cart() {
  const cart = useContext(CartContext);

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
