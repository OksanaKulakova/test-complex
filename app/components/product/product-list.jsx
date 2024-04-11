import "./product.css";
import { getProducts } from "@/app/lib/actions";
import dynamic from "next/dynamic";

const ProductCard = dynamic(() => import("./product-card"), {
  loading: () => <p>Loading...</p>,
});

export default async function productList() {
  const data = await getProducts();

  return (
    <div className="product-list">
      {data.products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
