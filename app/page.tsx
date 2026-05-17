import Link from "next/link";

export default function Home() {
  return (
    <section className="page-wrap" style={{ gap: 12 }}>
      <div className="glass card">
        <h1 style={{ margin: 0 }}>Ecommerce System</h1>
        <p style={{ margin: 0, opacity: 0.9 }}>
          Semua fitur utama sudah disiapkan: login, produk, cart, checkout, history,
          admin, dan order via WhatsApp.
        </p>
      </div>

      <div className="glass card">
        <h3 style={{ margin: 0 }}>Mulai Cepat</h3>
        <ol style={{ margin: 0, paddingLeft: 18, lineHeight: 1.6 }}>
          <li>Login dulu dari halaman Login.</li>
          <li>Pilih produk lalu Add to Cart.</li>
          <li>Checkout di Cart atau langsung Order via WhatsApp.</li>
          <li>Lihat status transaksi di History.</li>
        </ol>
      </div>

      <div className="glass card">
        <h3 style={{ margin: 0 }}>Akses Halaman</h3>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          <Link href="/login" className="btn">Login</Link>
          <Link href="/products" className="btn">Produk</Link>
          <Link href="/cart" className="btn">Cart</Link>
          <Link href="/history" className="btn">History</Link>
          <Link href="/admin/products" className="btn">Admin</Link>
        </div>
      </div>
    </section>
  );
}
