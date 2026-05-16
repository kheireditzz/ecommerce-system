'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const router = useRouter()
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    checkUser()
  }, [])

  async function checkUser() {
    const { data } = await supabase.auth.getUser()
    setUser(data?.user)
    setLoading(false)
  }

  async function logout() {
    await supabase.auth.signOut()
    setUser(null)
    router.push('/')
  }

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          🛍️ ShopHub
        </Link>

        <div className="flex gap-6 items-center">
          <Link href="/" className="hover:text-blue-600">🏠 Home</Link>
          <Link href="/products" className="hover:text-blue-600">📦 Products</Link>
          <Link href="/cart" className="hover:text-blue-600">🛒 Cart</Link>
          <Link href="/history" className="hover:text-blue-600">📜 History</Link>

          {user ? (
            <div className="flex gap-2 items-center">
              <span className="text-sm">👤 {user.email}</span>
              <button
                onClick={logout}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link href="/login" className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  )
}
