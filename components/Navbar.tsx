import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/cart", label: "Cart" },
  { href: "/history", label: "History" },
  { href: "/admin/products", label: "Admin" },
];

export default function Navbar() {
  return (
    <nav className="bottom-nav glass">
      {links.map((link) => (
        <Link key={link.href} href={link.href} className="nav-link">
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
