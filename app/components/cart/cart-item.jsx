import { useContext } from "react";
import { CartContext } from "./cart-context";

export default function CartItem(props) {
  const cart = useContext(CartContext);

  return (
    <div className="card-item">
      <div className="card-item-title">{props.title}</div>
      <div>{props.price}₽</div>
      <div>x{props.quantity}</div>
      <div>{props.price * props.quantity}₽</div>

      <button
        className="cart-item-delete"
        onClick={() => cart.remove(props.id)}
      >
        x
      </button>
    </div>
  );
}
