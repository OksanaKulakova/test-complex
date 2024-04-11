import Image from "next/image";
import { Suspense } from "react";

const imageStyle = {
  borderRadius: "15px",
  objectFit: "cover",
};

export default async function productCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-image">
        <Suspense fallback={<div>Loading...</div>}>
          <Image
            fill={true}
            src={product.image_url}
            sizes="(max-width: 768px) 100vw, 281px"
            alt={product.title}
            style={imageStyle}
          />
        </Suspense>
      </div>

      <div className="product-title">{product.title}</div>
      <div className="product-description">{product.description}</div>
      <div className="product-price">цена: {product.price}₽</div>
    </div>
  );
}
