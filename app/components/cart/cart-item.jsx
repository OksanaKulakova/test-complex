import { useContext } from "react";
import { CartContext } from "./cart-context";
import Button from "@/app/components/button/button";

export default function CartItem(props) {
  const cart = useContext(CartContext);

  return (
    <div className="card-item">
      <div className="card-item-title">{props.title}</div>
      <div className="card-item-quantity">x{props.quantity}</div>
      <div className="card-item-total">{props.price * props.quantity}₽</div>

      <Button className={"button-delete"} onClick={() => cart.remove(props.id)}>
        x
      </Button>
    </div>
  );
}
