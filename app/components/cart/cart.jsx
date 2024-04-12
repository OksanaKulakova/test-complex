"use client";

import "./cart.css";

import { useContext } from "react";
import { CartContext } from "@/app/components/cart/cart-context";
import { InputPhone } from "@/app/components/input/input-phone";
import Button from "@/app/components/button/button";
import CartList from "./cart-list";

export default function Cart() {
  const cart = useContext(CartContext);

  const handleChange = (value) => {
    console.log(value);
  };

  const order = () => {
    console.log("order");
  };

  return (
    <div className="cart">
      {cart.items.length ? (
        <>
          <CartList />
          <div className="cart-order">
            <InputPhone handler={(value) => handleChange(value)} />
            <Button onClick={order}>заказать</Button>
          </div>
        </>
      ) : (
        <p>Ваша корзина пуста</p>
      )}
    </div>
  );
}
