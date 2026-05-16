import "./globals.css";
import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className="app-shell">{children}</main>
        <Navbar />
      </body>
    </html>
  );
}
