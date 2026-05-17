"use client";

import { supabase } from "@/lib/supabase";

export default function LoginPage() {
  const login = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: typeof window !== "undefined" ? `${window.location.origin}/products` : undefined,
      },
    });

    if (error) {
      alert(`Login gagal: ${error.message}`);
    }
  };

  return (
    <section className="page-wrap" style={{ gap: 12 }}>
      <div className="glass card">
        <h1 style={{ margin: 0 }}>Login</h1>
        <p style={{ margin: 0, opacity: 0.85 }}>Masuk dengan Google untuk mulai belanja.</p>
        <button className="btn" onClick={login}>Login with Google</button>
      </div>
    </section>
  );
}
