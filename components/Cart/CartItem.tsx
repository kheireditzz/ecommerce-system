import { CartItem as CartItemType, Product } from '@/lib/types'
import { formatPrice } from '@/lib/utils'

interface CartItemProps {
  item: CartItemType
  onQuantityChange?: (id: string, quantity: number) => void
  onRemove?: (id: string) => void
}

export default function CartItem({ item, onQuantityChange, onRemove }: CartItemProps) {
  const product = item.product as Product
  const itemTotal = product?.price * item.quantity || 0

  return (
    <div className="flex gap-4 border-b py-4">
      <img
        src={product?.image_url || '/placeholder.png'}
        alt={product?.name || 'Product'}
        className="w-24 h-24 object-cover rounded"
      />

      <div className="flex-1">
        <h3 className="font-bold">{product?.name || 'Unknown Product'}</h3>
        <p className="text-gray-600 text-sm">{formatPrice(product?.price || 0)}</p>

        <div className="flex items-center gap-2 mt-2">
          <button
            onClick={() => onQuantityChange?.(item.id, Math.max(1, item.quantity - 1))}
            className="bg-gray-200 px-2 py-1 rounded hover:bg-gray-300"
          >
            ➖
          </button>
          <span className="px-3 py-1 border rounded">{item.quantity}</span>
          <button
            onClick={() => onQuantityChange?.(item.id, item.quantity + 1)}
            className="bg-gray-200 px-2 py-1 rounded hover:bg-gray-300"
          >
            ➕
          </button>
        </div>
      </div>

      <div className="text-right">
        <p className="font-bold text-lg">{formatPrice(itemTotal)}</p>
        <button
          onClick={() => onRemove?.(item.id)}
          className="text-red-600 hover:text-red-800 mt-2"
        >
          ❌ Remove
        </button>
      </div>
    </div>
  )
}
