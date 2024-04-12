"use client";

import { useContext, useState, useEffect } from "react";
import { CartContext } from "./cart-context";
import Button from "@/app/components/button/button";
import { InputNumber } from "@/app/components/input/input-number";

export default function AddCardButton({ product }) {
  const cart = useContext(CartContext);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const item = cart.items.find((value) => value.id === product.id);

    if (item) {
      setCount(Number(item.quantity));
    } else {
      setCount(0);
    }
  }, [cart]);

  const addToCart = () => {
    cart.append(product, count + 1);
  };

  const removeFromCart = () => {
    cart.append(product, count - 1);
  };

  const handleChange = (value) => {
    cart.append(product, value);
  };

  return count ? (
    <div className="add-card-button">
      <Button onClick={removeFromCart}>-</Button>
      <InputNumber number={count} handler={(value) => handleChange(value)} />
      <Button onClick={addToCart}>+</Button>
    </div>
  ) : (
    <Button onClick={addToCart}>купить</Button>
  );
}
