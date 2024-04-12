import TitleBlock from "./components/title-block";
import ReviewList from "./components/review/review-list";
import ProductList from "./components/product/product-list";
import Cart from "./components/cart/cart";

export default function Home() {
  return (
    <main>
      <TitleBlock title={"тестовое задание"} />

      <section className="review-section">
        <ReviewList />
      </section>

      <section className="cart-section">
        <Cart />
      </section>

      <ProductList />
    </main>
  );
}
