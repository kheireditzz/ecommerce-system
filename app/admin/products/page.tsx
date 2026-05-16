"use client";

import { useState } from "react";
import { createProduct } from "@/lib/supabase";

export default function AdminProducts() {
  const [form, setForm] = useState({
    name: "",
    price: "",
    image_url: "",
    description: "",
    stock: "0",
    category: "",
  });
  const [loading, setLoading] = useState(false);

  const create = async () => {
    if (!form.name || !form.price) {
      alert("Nama dan harga wajib diisi.");
      return;
    }

    setLoading(true);
    const { error } = await createProduct({
      name: form.name,
      description: form.description,
      price: Number(form.price),
      image_url: form.image_url,
      stock: Number(form.stock || 0),
      category: form.category,
    });

    setLoading(false);

    if (error) {
      alert(`Gagal buat produk: ${error.message}`);
      return;
    }

    alert("Produk berhasil dibuat.");
    setForm({ name: "", price: "", image_url: "", description: "", stock: "0", category: "" });
  };

  return (
    <section className="page-wrap" style={{ gap: 10 }}>
      <h1>Admin Products</h1>
      <div className="glass card" style={{ gap: 8 }}>
        <input placeholder="Nama produk" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
        <input placeholder="Harga" type="number" value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} />
        <input placeholder="Image URL" value={form.image_url} onChange={(e) => setForm({ ...form, image_url: e.target.value })} />
        <input placeholder="Kategori" value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} />
        <input placeholder="Stok" type="number" value={form.stock} onChange={(e) => setForm({ ...form, stock: e.target.value })} />
        <textarea placeholder="Deskripsi" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} rows={4} />
        <button className="btn" onClick={create} disabled={loading}>{loading ? "Menyimpan..." : "Create Product"}</button>
      </div>
    </section>
  );
}
