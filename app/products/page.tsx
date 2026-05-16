import { supabase } from "@/lib/supabase";
import ProductCard from "@/components/ProductCard";

export default async function ProductsPage() {
  const { data } = await supabase.from("products").select("*");

  return (
    <div style={{ padding: 10 }}>
      {data?.map((p: any) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
