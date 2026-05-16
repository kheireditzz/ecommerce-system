import Link from "next/link";

export default function Navbar() {
  return (
    <div
      style={{
        position: "fixed",
        bottom: 10,
        left: 0,
        right: 0,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={{ background: "#111", padding: 10, borderRadius: 20 }}>
        <Link href="/">Home</Link> |{" "}
        <Link href="/products">Products</Link> |{" "}
        <Link href="/cart">Cart</Link> |{" "}
        <Link href="/history">History</Link> |{" "}
        <Link href="/admin/products">Admin</Link>
      </div>
    </div>
  );
}
