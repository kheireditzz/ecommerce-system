"use client";

import { useCart } from "@/store/cart";
import { Product } from "@/lib/types";

export default function ProductCard({ product }: { product: Product }) {
  const add = useCart((s) => s.add);

  return (
    <div className="glass p-4">
      <img src={product.image} className="rounded-xl h-40 w-full object-cover" />

      <h3 className="mt-2 font-bold">{product.name}</h3>
      <p className="text-white/60 text-sm">{product.description}</p>

      <div className="flex justify-between mt-3">
        <span>${product.price}</span>
        <button className="btn" onClick={() => add(product)}>
          Add
        </button>
      </div>
    </div>
  );
}
