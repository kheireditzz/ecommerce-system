"use client";

import { Product } from "@/lib/types";
import { useCart } from "@/store/cart";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  const { add } = useCart();

  return (
    <article className="glass card">
      <img
        src={product.image || "https://placehold.co/600x400?text=Product"}
        alt={product.name}
        className="product-image"
      />

      <div style={{ display: "grid", gap: 8 }}>
        <h3 style={{ margin: 0 }}>{product.name}</h3>
        <p style={{ margin: 0, opacity: 0.85 }}>{product.description || "-"}</p>
        <strong>${product.price}</strong>
      </div>

      <button className="btn" onClick={() => add(product)}>
        Add to Cart
      </button>
    </article>
  );
}
