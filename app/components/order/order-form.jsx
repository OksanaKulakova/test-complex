"use client";

import "./order-form.css";
import { useFormState, useFormStatus } from "react-dom";
import { createPortal } from "react-dom";
import { useContext, useState, useEffect } from "react";
import { CartContext } from "@/app/components/cart/cart-context";
import Button from "@/app/components/button/button";
import { InputPhone } from "@/app/components/input/input-phone";
import { createOrder } from "@/app/lib/actions";
import PortalContent from "@/app/components/popup/popup-content";

export default function OrderForm() {
  const initialState = { success: false, errors: {} };
  const [state, dispatch] = useFormState(createOrder, initialState);

  const cart = useContext(CartContext);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (state.success) {
      setShowPopup(true);
      cart.clear();
    }
  }, [state]);

  return (
    <>
      <form action={dispatch} className="order-form">
        <input type="hidden" name="cart" value={JSON.stringify(cart.items)} />
        <InputPhone error={state.errors?.phone} />
        <SubmitButton />
      </form>

      {showPopup &&
        createPortal(
          <PortalContent
            text={"Заказ успешно создан"}
            onClose={() => setShowPopup(false)}
          />,
          document.body
        )}
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
