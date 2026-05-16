"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function AdminProducts() {
  const [form, setForm] = useState({
    name: "",
    price: 0,
    image: "",
    description: "",
  });

  const create = async () => {
    await supabase.from("products").insert(form);
    alert("Created");
  };

  return (
    <div style={{ padding: 10 }}>
      <input
        placeholder="name"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <input
        placeholder="price"
        onChange={(e) => setForm({ ...form, price: Number(e.target.value) })}
      />
      <input
        placeholder="image"
        onChange={(e) => setForm({ ...form, image: e.target.value })}
      />

      <button onClick={create}>Create Product</button>
    </div>
  );
}
