export interface User {
  id: string
  email: string
  name?: string
  role: 'user' | 'admin'
  created_at: string
}

export interface Product {
  id: string
  name: string
  description: string
  price: number
  image_url: string
  stock: number
  category: string
  created_at: string
}

export interface CartItem {
  id: string
  user_id: string
  product_id: string
  quantity: number
  product?: Product
  created_at: string
}

export interface Order {
  id: string
  user_id: string
  product_id: string
  quantity: number
  total_price: number
  status: 'pending' | 'paid' | 'success' | 'cancelled'
  payment_method?: string
  product?: Product
  created_at: string
}
