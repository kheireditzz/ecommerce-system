"use client";

import { useCart } from "@/store/cart";
import { supabase } from "@/lib/supabase";

export default function CartPage() {
  const { items, total, clear } = useCart();

  const checkout = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    const order = await supabase
      .from("orders")
      .insert({
        user_id: user?.id,
        total: total(),
      })
      .select()
      .single();

    for (const item of items) {
      await supabase.from("order_items").insert({
        order_id: order.data.id,
        product_id: item.id,
        qty: item.qty,
      });
    }

    clear();
    alert("Order success!");
  };

  return (
    <div style={{ padding: 10 }}>
      {items.map((i) => (
        <div key={i.id}>
          {i.name} x{i.qty}
        </div>
      ))}

      <h3>Total: ${total()}</h3>

      <button onClick={checkout}>Checkout</button>
    </div>
  );
}
