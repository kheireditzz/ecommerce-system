"use client";

import { useMemo, useState } from "react";
import { useCart } from "@/store/cart";
import { supabase, createOrder } from "@/lib/supabase";

const WA_NUMBER = "62895321154498";

export default function CartPage() {
  const { items, total, clear, remove } = useCart();
  const [loading, setLoading] = useState(false);

  const waMessage = useMemo(() => {
    const rows = items.map((item, idx) => `${idx + 1}. ${item.name} x${item.qty} = Rp${item.price * item.qty}`);
    return encodeURIComponent(`Halo, saya mau order produk berikut:\n${rows.join("\n")}\n\nTotal: Rp${total()}`);
  }, [items, total]);

  const checkout = async () => {
    if (!items.length) {
      alert("Cart masih kosong.");
      return;
    }

    setLoading(true);
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      setLoading(false);
      alert("Silakan login dulu.");
      return;
    }

    for (const item of items) {
      const result = await createOrder(user.id, item.id, item.qty, item.price * item.qty);
      if (result.error) {
        setLoading(false);
        alert(`Checkout gagal: ${result.error.message}`);
        return;
      }
    }

    clear();
    setLoading(false);
    alert("Order success!");
  };

  return (
    <section className="page-wrap" style={{ gap: 12 }}>
      <h1>Cart</h1>
      {items.length === 0 && <p>Belum ada produk di cart.</p>}

      {items.map((i) => (
        <div key={i.id} className="glass card" style={{ padding: 12 }}>
          <div>{i.name} x{i.qty}</div>
          <strong>Rp{i.price * i.qty}</strong>
          <button className="btn" onClick={() => remove(i.id)}>Hapus</button>
        </div>
      ))}

      <h3>Total: Rp{total()}</h3>

      <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
        <button className="btn" onClick={checkout} disabled={loading}>
          {loading ? "Memproses..." : "Checkout"}
        </button>
        <a className="btn" href={`https://wa.me/${WA_NUMBER}?text=${waMessage}`} target="_blank" rel="noreferrer">
          Order via WhatsApp
        </a>
      </div>
    </section>
  );
}
