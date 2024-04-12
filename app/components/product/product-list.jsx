import "./product.css";
import { getProducts } from "@/app/lib/actions";
import dynamic from "next/dynamic";
import LazyLoadingList from "./lazy-loading-list";

const ProductCard = dynamic(() => import("./product-card"));

export default async function ProductList() {
  const data = await getProducts();

  return (
    <div className="product-list">
      {data.products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}

      <LazyLoadingList getData={getProducts} />
    </div>
  );
}
