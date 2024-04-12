"use client";

import "./order-form.css";
import { useFormState, useFormStatus } from "react-dom";
import { useContext } from "react";
import { CartContext } from "@/app/components/cart/cart-context";
import Button from "@/app/components/button/button";
import { InputPhone } from "@/app/components/input/input-phone";
import { createOrder } from "@/app/lib/actions";

export default function OrderForm() {
  const initialState = { success: false, errors: {} };
  const [state, dispatch] = useFormState(createOrder, initialState);

  const cart = useContext(CartContext);

  return (
    <>
      <form action={dispatch} className="order-form">
        <input type="hidden" name="cart" value={JSON.stringify(cart.items)} />
        <InputPhone error={state.errors?.phone} />
        <SubmitButton />
      </form>

      {state.success && <div>Успех</div>}
    </>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" aria-disabled={pending}>
      заказать
    </Button>
  );
}
