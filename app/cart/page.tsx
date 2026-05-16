"use client";

import { useMemo } from "react";
import { useCart } from "@/store/cart";
import { supabase } from "@/lib/supabase";

const WA_NUMBER = "62895321154498";

export default function CartPage() {
  const { items, total, clear, remove } = useCart();

  const waMessage = useMemo(() => {
    const rows = items.map((item, idx) => `${idx + 1}. ${item.name} x${item.qty} = $${item.price * item.qty}`);
    return encodeURIComponent(
      `Halo, saya mau order produk berikut:%0A${rows.join("%0A")}%0A%0ATotal: $${total()}`
    );
  }, [items, total]);

  const checkout = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!items.length) {
      alert("Cart masih kosong.");
      return;
    }

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
    <section className="page-wrap" style={{ gap: 12 }}>
      <h1>Cart</h1>

      {items.length === 0 && <p>Belum ada produk di cart.</p>}

      {items.map((i) => (
        <div key={i.id} className="glass card" style={{ padding: 12 }}>
          <div>{i.name} x{i.qty}</div>
          <strong>${i.price * i.qty}</strong>
          <button className="btn" onClick={() => remove(i.id)}>Hapus</button>
        </div>
      ))}

      <h3>Total: ${total()}</h3>

      <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
        <button className="btn" onClick={checkout}>Checkout</button>
        <a className="btn" href={`https://wa.me/${WA_NUMBER}?text=${waMessage}`} target="_blank">
          Order via WhatsApp
        </a>
      </div>
    </section>
  );
}
