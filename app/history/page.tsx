import { getOrders, supabase } from "@/lib/supabase";
import OrderItem from "@/components/History/OrderItem";

export default async function HistoryPage() {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return (
      <div style={{ padding: 10 }}>
        <h2>History</h2>
        <p>Silakan login untuk melihat riwayat pesanan.</p>
      </div>
    );
  }

  const { data, error } = await getOrders(user.id);

  return (
    <div style={{ padding: 10 }}>
      <h2>History</h2>
      {error && <p>Gagal memuat history: {error.message}</p>}
      {!data?.length && !error && <p>Belum ada pesanan.</p>}
      {data?.map((o: any) => (
        <OrderItem
          key={o.id}
          order={{
            id: o.id,
            created_at: o.created_at,
            status: o.status,
            quantity: o.quantity,
            total_price: Number(o.total_price),
            product: o.product
              ? {
                  id: o.product.id,
                  name: o.product.name,
                  description: o.product.description,
                  price: Number(o.product.price),
                  image: o.product.image_url || "",
                }
              : null,
          }}
        />
      ))}
    </div>
  );
}
