import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Cart Functions
export async function addToCart(userId: string, productId: string, quantity: number = 1) {
  const { data, error } = await supabase
    .from('cart')
    .insert([
      {
        user_id: userId,
        product_id: productId,
        quantity,
      },
    ])
    .select()

  return { data, error }
}

export async function getCart(userId: string) {
  const { data, error } = await supabase
    .from('cart')
    .select('*, product:products(*)')
    .eq('user_id', userId)

  return { data, error }
}

export async function removeFromCart(cartId: string) {
  const { error } = await supabase
    .from('cart')
    .delete()
    .eq('id', cartId)

  return { error }
}

export async function updateCartQuantity(cartId: string, quantity: number) {
  const { data, error } = await supabase
    .from('cart')
    .update({ quantity })
    .eq('id', cartId)
    .select()

  return { data, error }
}

// Order Functions
export async function createOrder(userId: string, productId: string, quantity: number, totalPrice: number) {
  const { data, error } = await supabase
    .from('orders')
    .insert([
      {
        user_id: userId,
        product_id: productId,
        quantity,
        total_price: totalPrice,
        status: 'pending',
      },
    ])
    .select()

  return { data, error }
}

export async function getOrders(userId: string) {
  const { data, error } = await supabase
    .from('orders')
    .select('*, product:products(*)')
    .eq('user_id', userId)
    .order('created_at', { ascending: false })

  return { data, error }
}

export async function updateOrderStatus(orderId: string, status: string) {
  const { data, error } = await supabase
    .from('orders')
    .update({ status })
    .eq('id', orderId)
    .select()

  return { data, error }
}

// Product Functions
export async function getProducts() {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .order('created_at', { ascending: false })

  return { data, error }
}

export async function getProduct(id: string) {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('id', id)
    .single()

  return { data, error }
}

export async function createProduct(product: any) {
  const { data, error } = await supabase
    .from('products')
    .insert([product])
    .select()

  return { data, error }
}

export async function updateProduct(id: string, product: any) {
  const { data, error } = await supabase
    .from('products')
    .update(product)
    .eq('id', id)
    .select()

  return { data, error }
}

export async function deleteProduct(id: string) {
  const { error } = await supabase
    .from('products')
    .delete()
    .eq('id', id)

  return { error }
}
