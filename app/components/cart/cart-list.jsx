import CartItem from "@/app/components/cart/cart-item";
import { useContext } from "react";
import { CartContext } from "@/app/components/cart/cart-context";

export default function CartList() {
  const cart = useContext(CartContext);

  const cost = cart.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
      <h5 className="cart-list-title">Добавленные товары:</h5>
      {cart.items.length && (
        <>
          <div className="cart-list">
            {cart.items.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
          </div>
          <div className="cart-cost">Итого: {cost}₽</div>
        </>
      )}
    </>
  );
}
