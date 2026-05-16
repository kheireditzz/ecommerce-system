"use client";

import { useCart } from "@/store/cart";

export default function ProductCard({ product }: any) {
  const add = useCart((s) => s.add);

  return (
    <div style={{ border: "1px solid #333", margin: 10, padding: 10 }}>
      <img src={product.image} style={{ width: "100%" }} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>

      <button onClick={() => add(product)}>Add</button>
    </div>
  );
}
