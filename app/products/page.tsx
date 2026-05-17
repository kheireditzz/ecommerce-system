import ProductCard from "@/components/ProductCard";
import { getProducts } from "@/lib/supabase";

export default async function ProductsPage() {
  const { data, error } = await getProducts();

  return (
    <section className="page-wrap" style={{ gap: 12 }}>
      <h1 style={{ marginBottom: 0 }}>Products</h1>
      {error && <p>Gagal memuat produk: {error.message}</p>}
      {data?.map((p: any) => (
        <ProductCard
          key={p.id}
          product={{
            id: p.id,
            name: p.name,
            description: p.description,
            price: Number(p.price),
            image: p.image_url || "",
          }}
        />
      ))}
    </section>
  );
}
