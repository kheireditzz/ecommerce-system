import { supabase } from "@/lib/supabase";
import ProductCard from "@/components/ProductCard";

export default async function ProductsPage() {
  const { data } = await supabase.from("products").select("*").order("created_at", { ascending: false });

  return (
    <section className="page-wrap" style={{ gap: 12 }}>
      <h1 style={{ marginBottom: 0 }}>Products</h1>
      {data?.map((p: any) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </section>
  );
}
