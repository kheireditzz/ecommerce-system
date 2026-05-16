import { supabase } from "@/lib/supabase";

export default async function HistoryPage() {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data } = await supabase
    .from("orders")
    .select("*")
    .eq("user_id", user?.id);

  return (
    <div style={{ padding: 10 }}>
      <h2>History</h2>

      {data?.map((o: any) => (
        <div key={o.id} style={{ border: "1px solid #333", margin: 10 }}>
          <p>ID: {o.id}</p>
          <p>Total: ${o.total}</p>
        </div>
      ))}
    </div>
  );
}
