import TitleBlock from "./components/title-block";
import ReviewList from "./components/review/review-list";
import ProductList from "./components/product/product-list";

export default function Home() {
  return (
    <main>
      <TitleBlock title={"тестовое задание"} />
      <ReviewList />
      <ProductList />
    </main>
  );
}
