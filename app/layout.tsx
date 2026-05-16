import "./globals.css";
import Navbar from "@/components/Navbar";

export default function RootLayout({ children }: any) {
  return (
    <html>
      <body>
        <div className="max-w-md mx-auto min-h-screen">
          {children}
          <Navbar />
        </div>
      </body>
    </html>
  );
}
