import { getProducts } from "@/app/lib/actions";
import ProductCard from "@/app/components/product/product-card";

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
