"use client";

import { supabase } from "@/lib/supabase";

export default function LoginPage() {
  const login = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
    });
  };

  return (
    <div style={{ padding: 20 }}>
      <button onClick={login}>Login with Google</button>
    </div>
  );
}
