import "./product.css";
import Image from "next/image";

const imageStyle = {
  borderRadius: "15px",
  objectFit: "cover",
};

export default async function productCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-image">
        <Image
          fill={true}
          src={product.image_url}
          // width={281}
          // height={366}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt={product.title}
          style={imageStyle}
        />
      </div>

      <div className="product-title">{product.title}</div>
      <div className="product-description">{product.description}</div>
      <div className="product-price">цена: {product.price}₽</div>
    </div>
  );
}
